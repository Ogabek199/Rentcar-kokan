import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "../styles/contact.css";

const TELEGRAM_TOKEN = "8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I";
const TELEGRAM_CHAT_ID = "-1002689421547";
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

const INITIAL_FORM_DATA = { ism: "", telefon: "", fikr: "" };

const VALIDATION_MESSAGES = {
  ism: "❗Iltimos, ismingizni kiriting.",
  telefon: "❗Iltimos, telefon raqamingizni kiriting.",
  fikr: "❗Iltimos, fikr bildirishingiz shart.",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = useCallback((value) => {
    const numbers = value.replace(/\D/g, "");
    let formatted = numbers;
    if (numbers.length > 0 && !numbers.startsWith("998")) {
      formatted = numbers.startsWith("9") ? "998" + numbers : numbers;
    }
    if (formatted.length <= 3) return formatted.length > 0 ? "+" + formatted : "";
    if (formatted.length <= 5) return "+" + formatted.slice(0, 3) + " " + formatted.slice(3);
    if (formatted.length <= 8) return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5);
    if (formatted.length <= 10) return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5, 8) + " " + formatted.slice(8);
    return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5, 8) + " " + formatted.slice(8, 10) + " " + formatted.slice(10, 12);
  }, []);

  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "telefon") setFormData((prev) => ({ ...prev, [name]: formatPhoneNumber(value) }));
    else setFormData((prev) => ({ ...prev, [name]: value }));
  }, [formatPhoneNumber]);

  const resetForm = useCallback(() => setFormData(INITIAL_FORM_DATA), []);

  const validateForm = useCallback((data) => {
    for (const [key, message] of Object.entries(VALIDATION_MESSAGES)) {
      if (!data[key]?.trim()) {
        toast.error(message);
        return false;
      }
    }
    return true;
  }, []);

  const getLocation = useCallback(() => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.warn("Lokatsiya olishda xatolik:", error);
          resolve(null);
        },
        { timeout: 5000, enableHighAccuracy: false }
      );
    });
  }, []);

  const getDeviceInfo = useCallback(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const platform = navigator.platform || "";
    
    // Mobile aniqlash
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    // Tablet aniqlash
    const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
    
    // Browser aniqlash
    let browser = "Noma'lum";
    if (userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Edg") === -1) {
      browser = "Chrome";
    } else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
      browser = "Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
      browser = "Firefox";
    } else if (userAgent.indexOf("Edg") > -1) {
      browser = "Edge";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browser = "Opera";
    }
    
    // OS aniqlash
    let os = "Noma'lum";
    if (/Windows/i.test(userAgent)) {
      os = "Windows";
    } else if (/Mac/i.test(userAgent)) {
      os = "macOS";
    } else if (/Linux/i.test(userAgent)) {
      os = "Linux";
    } else if (/Android/i.test(userAgent)) {
      os = "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      os = "iOS";
    }
    
    let deviceType = "Desktop";
    if (isTablet) {
      deviceType = "Tablet";
    } else if (isMobile) {
      deviceType = "Mobile";
    }
    
    return {
      deviceType,
      os,
      browser,
      platform,
      userAgent: userAgent.substring(0, 100), // Faqat birinchi 100 belgi
    };
  }, []);

  const submitHandler = useCallback(async (e) => {
    e.preventDefault();
    if (!validateForm(formData)) return;
    setIsSubmitting(true);
    try {
      // Lokatsiyani olish
      const location = await getLocation();
      let locationText = "";
      
      if (location) {
        const yandexMapsLink = `https://yandex.com/maps/?pt=${location.longitude},${location.latitude}&z=16`;
        locationText = `\n📍 Lokatsiya: ${location.latitude.toFixed(6)}, ${location.longitude.toFixed(6)}\n🗺️ Xarita: ${yandexMapsLink}`;
      } else {
        locationText = "\n📍 Lokatsiya: Olinmadi (foydalanuvchi ruxsat bermadi yoki xatolik yuz berdi)";
      }

      // Device ma'lumotini olish
      const deviceInfo = getDeviceInfo();
      const deviceText = `\n📱 Qurilma: ${deviceInfo.deviceType}\n💻 OS: ${deviceInfo.os}\n🌐 Browser: ${deviceInfo.browser}`;

      const now = new Date();
      const sentAtDate = new Intl.DateTimeFormat("uz-UZ", {
        timeZone: "Asia/Tashkent",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(now);
      const sentAtTime = new Intl.DateTimeFormat("uz-UZ", {
        timeZone: "Asia/Tashkent",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      const sentAt = `${sentAtDate} ${sentAtTime}`;

      const message = `🟢 Yangi xabar:\n🕒 Yuborilgan vaqt: ${sentAt}\n👤 Ism: ${formData.ism}\n📱 Telefon: ${formData.telefon}\n💬 Izoh: ${formData.fikr}${deviceText}${locationText}`;
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.description || "Telegramga yuborishda xatolik yuz berdi.");
      }
      toast.success("✅ Xabaringiz Telegramga yuborildi!");
      resetForm();
    } catch (err) {
      toast.error("❌ Xabar yuborishda muammo bo'ldi.");
      console.error("Xatolik:", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, resetForm, getLocation, getDeviceInfo]);

  const contactInfo = useMemo(
    () => ({
      address: "Turkiston ko'chasi 12, Qo'qon sh.",
      phone: "+998 93 712 00 57",
      phoneLink: "tel:+998937120057",
      email: "otaxonovogabek633@gmail.com",
    }),
    []
  );

  return (
    <Helmet
      title="Bog'lanish"
      description="Ziyo Rent Car bilan bog‘lanish: savollar, bron qilish va hamkorlik bo‘yicha murojaat qiling. Telefon, email va onlayn forma orqali tez javob oling."
      canonicalPath="/contact"
    >
      <section className="contact-page animate-page-enter">
        <div className="contact-page__header animate-on-scroll animate-fade-in-down">
          <Container>
            <h1 className="contact-page__title">Bog'lanish</h1>
            <p className="contact-page__sub">Biz bilan bog'laning</p>
          </Container>
        </div>
        <Container className="contact-page__content">
          <Row>
            <Col lg="7" md="7">
              <div className="contact-card animate-on-scroll animate-fade-in-left">
                <h2 className="contact-card__title">Xabar yuborish</h2>
                <form onSubmit={submitHandler} className="contact-form">
                  <div className="contact-form__group">
                    <label className="contact-form__label">Ismingiz</label>
                    <input
                      type="text"
                      name="ism"
                      value={formData.ism}
                      onChange={changeHandler}
                      placeholder="Ismingizni kiriting"
                      disabled={isSubmitting}
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Telefon raqamingiz</label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={changeHandler}
                      placeholder="+998 93 712 00 57"
                      disabled={isSubmitting}
                      className="contact-form__input"
                    />
                  </div>
                  <div className="contact-form__group">
                    <label className="contact-form__label">Xabar</label>
                    <textarea
                      name="fikr"
                      value={formData.fikr}
                      onChange={changeHandler}
                      rows={5}
                      placeholder="Fikr qoldirish..."
                      disabled={isSubmitting}
                      className="contact-form__textarea"
                    />
                  </div>
                  <button type="submit" className="contact-form__btn" disabled={isSubmitting}>
                    {isSubmitting ? "Yuborilmoqda..." : "Xabar yuborish"}
                  </button>
                </form>
              </div>
            </Col>
            <Col lg="5" md="5">
              <div className="contact-info-card animate-on-scroll animate-fade-in-right">
                <h2 className="contact-info-card__title">Bog'lanish ma'lumotlari</h2>
                <ul className="contact-info-card__list">
                  <li>
                    <i className="ri-map-pin-line"></i>
                    <span>{contactInfo.address}</span>
                  </li>
                  <li>
                    <i className="ri-phone-line"></i>
                    <a href={contactInfo.phoneLink}>{contactInfo.phone}</a>
                  </li>
                  <li>
                    <i className="ri-mail-line"></i>
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                </ul>
                <div className="contact-info-card__map">
                  <span>Xaritada ko'rish</span>
                  <a href="https://maps.google.com/?q=Kokand+Uzbekistan" target="_blank" rel="noreferrer">
                    Google xaritada ochish
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </Helmet>
  );
};

export default Contact;
