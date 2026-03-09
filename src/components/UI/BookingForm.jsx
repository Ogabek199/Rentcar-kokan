import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ formId, hideSubmitButton, carName }) => {
  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    email: "",
    telefon: "",
    sana: "",
    izoh: "",
  });

  // Telefon raqamini formatlash
  const formatPhoneNumber = (value) => {
    // Faqat raqamlarni olib tashlash
    const numbers = value.replace(/\D/g, "");

    // +998 bilan boshlanmasa, qo'shish
    let formatted = numbers;
    if (numbers.length > 0 && !numbers.startsWith("998")) {
      formatted = numbers.startsWith("9") ? "998" + numbers : numbers;
    }

    // Formatlash: +998 99 999 99 99
    if (formatted.length <= 3) {
      return formatted.length > 0 ? "+" + formatted : "";
    } else if (formatted.length <= 5) {
      return "+" + formatted.slice(0, 3) + " " + formatted.slice(3);
    } else if (formatted.length <= 8) {
      return (
        "+" +
        formatted.slice(0, 3) +
        " " +
        formatted.slice(3, 5) +
        " " +
        formatted.slice(5)
      );
    } else if (formatted.length <= 10) {
      return (
        "+" +
        formatted.slice(0, 3) +
        " " +
        formatted.slice(3, 5) +
        " " +
        formatted.slice(5, 8) +
        " " +
        formatted.slice(8)
      );
    } else {
      return (
        "+" +
        formatted.slice(0, 3) +
        " " +
        formatted.slice(3, 5) +
        " " +
        formatted.slice(5, 8) +
        " " +
        formatted.slice(8, 10) +
        " " +
        formatted.slice(10, 12)
      );
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    // Telefon raqami uchun formatlash
    if (name === "telefon") {
      const formatted = formatPhoneNumber(value);
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isEmpty = (value) => !value.trim();



  const getDeviceInfo = () => {
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
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    // ✅ Majburiy maydonlarni tekshiramiz
    if (
      isEmpty(formData.ism) ||
      isEmpty(formData.familiya) ||
      isEmpty(formData.telefon) ||
      isEmpty(formData.sana)
    ) {
      toast.error("❗ Iltimos, barcha majburiy maydonlarni to‘ldiring.");
      return;
    }

    const token = "8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I";
    const chatId = "-1002689421547";

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

    const message = `
🟢 Yangi buyurtma:
🕒 Yuborilgan vaqt: ${sentAt}
🚗 Mashina: ${carName || "Ko'rsatilmagan"}
👤 Ism: ${formData.ism}
👤 Familiya: ${formData.familiya}
📧 Email: ${formData.email}
📱 Telefon: ${formData.telefon}
📅 Sana: ${formData.sana}
💬 Izoh: ${formData.izoh || "Yo'q"}${deviceText}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        },
      );

      if (!res.ok) throw new Error("Telegramga yuborishda xatolik yuz berdi.");

      toast.success("✅ Buyurtma Telegramga yuborildi!");

      setFormData({
        ism: "",
        familiya: "",
        email: "",
        telefon: "",
        sana: "",
        izoh: "",
      });
    } catch (err) {
      toast.error("❌ Xabar yuborishda muammo bo‘ldi.");
      console.error(err);
    }
  };

  return (
    <>
      <Form
        id={formId || undefined}
        onSubmit={submitHandler}
        className="booking-form booking-form--card"
      >
        <FormGroup className="booking-form__group booking-form__group--full">
          <input
            type="text"
            name="ism"
            value={formData.ism}
            onChange={changeHandler}
            placeholder="Ism"
            required
            className="booking-form__input"
          />
        </FormGroup>
        <div className="booking-form__row">
          <FormGroup className="booking-form__group">
            <input
              type="text"
              name="familiya"
              value={formData.familiya}
              onChange={changeHandler}
              placeholder="Familiya"
              required
              className="booking-form__input"
            />
          </FormGroup>
          <FormGroup className="booking-form__group">
            <input
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={changeHandler}
              placeholder="Telefon raqamingiz"
              required
              className="booking-form__input"
            />
          </FormGroup>
        </div>
        <FormGroup className="booking-form__group booking-form__group--full booking-form__group--date">
          <span className="booking-form__icon">
            <i className="ri-calendar-line"></i>
          </span>
          <input
            type="date"
            name="sana"
            value={formData.sana}
            onChange={changeHandler}
            required
            className="booking-form__input"
          />
        </FormGroup>
        <FormGroup className="booking-form__group booking-form__group--full">
          <textarea
            rows={4}
            name="izoh"
            value={formData.izoh}
            onChange={changeHandler}
            className="booking-form__textarea"
            placeholder="Izoh qoldirish..."
          />
        </FormGroup>
        {!hideSubmitButton && (
          <button type="submit" className="booking-form__btn">
            Jo'natish
          </button>
        )}
      </Form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default BookingForm;
