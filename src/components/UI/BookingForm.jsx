import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
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

  const submitHandler = async (event) => {
    event.preventDefault();

    // ✅ Majburiy maydonlarni tekshiramiz
    if (
      isEmpty(formData.ism) ||
      isEmpty(formData.familiya) ||
      isEmpty(formData.email) ||
      isEmpty(formData.telefon) ||
      isEmpty(formData.sana)
    ) {
      toast.error("❗ Iltimos, barcha majburiy maydonlarni to‘ldiring.");
      return;
    }

    const token = "8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I";
    const chatId = "-1002689421547";

    const message = `
🟢 Yangi buyurtma:
👤 Ism: ${formData.ism}
👤 Familiya: ${formData.familiya}
📧 Email: ${formData.email}
📱 Telefon: ${formData.telefon}
📅 Sana: ${formData.sana}
💬 Izoh: ${formData.izoh || "Yo'q"}
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
      <Form onSubmit={submitHandler}>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            type="text"
            name="ism"
            value={formData.ism}
            onChange={changeHandler}
            placeholder="Ism"
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            type="text"
            name="familiya"
            value={formData.familiya}
            onChange={changeHandler}
            placeholder="Familiya"
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input
            style={{ marginLeft: "-4px" }}
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={changeHandler}
            placeholder="Telefon raqamingiz"
            required
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input
            style={{ marginLeft: "20px" }}
            type="date"
            name="sana"
            value={formData.sana}
            onChange={changeHandler}
            required
          />
        </FormGroup>
        <FormGroup>
          <textarea
            rows={5}
            name="izoh"
            value={formData.izoh}
            onChange={changeHandler}
            className="textarea"
            placeholder="Izoh qoldirish..."
          ></textarea>
        </FormGroup>
        <button type="submit" className="bg-blue-700 text-white py-1 px-4">
          Jo'natish
        </button>
      </Form>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default BookingForm;
