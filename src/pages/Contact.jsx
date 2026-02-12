import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import "../styles/contact.css";

// Konstantalar
const TELEGRAM_TOKEN = '8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I';
const TELEGRAM_CHAT_ID = '-1002689421547';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

// Form maydonlari
const INITIAL_FORM_DATA = {
  ism: "",
  telefon: "",
  fikr: "",
};

// Validation xabarlari
const VALIDATION_MESSAGES = {
  ism: "❗Iltimos, ismingizni kiriting.",
  telefon: "❗Iltimos, telefon raqamingizni kiriting.",
  fikr: "❗Iltimos, fikr bildirishingiz shart.",
};

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Telefon raqamini formatlash
  const formatPhoneNumber = useCallback((value) => {
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
      return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5);
    } else if (formatted.length <= 10) {
      return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5, 8) + " " + formatted.slice(8);
    } else {
      return "+" + formatted.slice(0, 3) + " " + formatted.slice(3, 5) + " " + formatted.slice(5, 8) + " " + formatted.slice(8, 10) + " " + formatted.slice(10, 12);
    }
  }, []);

  // Form maydonlarini yangilash
  const changeHandler = useCallback((e) => {
    const { name, value } = e.target;
    
    // Telefon raqami uchun formatlash
    if (name === "telefon") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }, [formatPhoneNumber]);

  // Formani tozalash
  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  // Formani tekshirish
  const validateForm = useCallback((data) => {
    for (const [key, message] of Object.entries(VALIDATION_MESSAGES)) {
      if (!data[key]?.trim()) {
        toast.error(message);
        return false;
      }
    }
    return true;
  }, []);

  // Telegram xabarini yaratish
  const createMessage = useCallback((data) => {
    return `
🟢 Yangi xabar:
👤 Ism: ${data.ism}
📱 Telefon: ${data.telefon}
💬 Izoh: ${data.fikr}
    `.trim();
  }, []);

  // Formani yuborish
  const submitHandler = useCallback(async (e) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const message = createMessage(formData);
      
      const response = await fetch(TELEGRAM_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.description || "Telegramga yuborishda xatolik yuz berdi."
        );
      }

      toast.success("✅ Xabaringiz Telegramga yuborildi!");
      resetForm();
    } catch (err) {
      toast.error("❌ Xabar yuborishda muammo bo'ldi.");
      console.error("Xatolik:", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, createMessage, resetForm]);

  // Contact ma'lumotlari
  const contactInfo = useMemo(
    () => ({
      address: "turkiston 12-uy, Qo'qon sh",
      phone: "+998 91 323 85 87",
      phoneLink: "tel:+998913238587",
      email: "otaxonovogabek633@gmail.com",
    }),
    []
  );

  return (
    <Helmet title="Contact">
      <CommonSection title="Aloqa" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Aloqa qiling</h6>

              <Form onSubmit={submitHandler}>
                <FormGroup className="contact__form">
                  <Input
                    name="ism"
                    value={formData.ism}
                    onChange={changeHandler}
                    placeholder="Sizning ismingiz"
                    type="text"
                    disabled={isSubmitting}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    name="telefon"
                    value={formData.telefon}
                    onChange={changeHandler}
                    placeholder="Telefon raqamingiz"
                    type="tel"
                    disabled={isSubmitting}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    name="fikr"
                    value={formData.fikr}
                    onChange={changeHandler}
                    rows="5"
                    placeholder="Fikr qoldirish..."
                    className="textarea"
                    disabled={isSubmitting}
                  ></textarea>
                </FormGroup>

                <button
                  className="contact__btn"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Yuborilmoqda..." : "Xabar yuborish"}
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Bog'lanish uchun ma'lumot</h6>
                <p className="section__description mb-0">
                  {contactInfo.address}
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <a
                    href={contactInfo.phoneLink}
                    style={{ textDecoration: "none" }}
                    className="section__description mb-0"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    {contactInfo.email}
                  </p>
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
