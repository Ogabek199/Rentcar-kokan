import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    ism: "",
    familiya: "",
    email: "",
    telefon: "",
    manzildan: "",
    manzilgacha: "",
    odamSoni: "1 odam",
    yukSoni: "1ta yuk",
    sana: "",
    vaqt: "",
    izoh: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const token = "8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I";
    const chatId = "-1002689421547";

    const message = `
    🟢 Yangi buyurtma:
  👤 Ism: ${formData.ism}
  👤 Familiya: ${formData.familiya}
  📧 Email: ${formData.email}
  📱 Telefon: ${formData.telefon}
  📍 Manzildan: ${formData.manzildan}
  📍 Manzilgacha: ${formData.manzilgacha}
  🧍‍♂️ Odam soni: ${formData.odamSoni}
  📦 Yuk soni: ${formData.yukSoni}
  📅 Sana: ${formData.sana}
  ⏰ Vaqt: ${formData.vaqt}
  💬 Izoh: ${formData.izoh}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!res.ok) {
        throw new Error("Telegramga yuborishda xatolik yuz berdi.");
      }

      toast.success("✅ Buyurtma Telegramga yuborildi!");

      setFormData({
        ism: "",
        familiya: "",
        email: "",
        telefon: "",
        manzildan: "",
        manzilgacha: "",
        odamSoni: "1 odam",
        yukSoni: "1ta yuk",
        sana: "",
        vaqt: "",
        izoh: "",
      });
    } catch (err) {
      toast.error("❌ Xabar yuborishda muammo bo‘ldi.");
      console.error(err);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="ism" value={formData.ism} onChange={changeHandler} placeholder="Ism" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="familiya" value={formData.familiya} onChange={changeHandler} placeholder="Familiya" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Elektron pochta" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" name="telefon" value={formData.telefon} onChange={changeHandler} placeholder="Telefon raqami" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" name="manzildan" value={formData.manzildan} onChange={changeHandler} placeholder="Manzildan" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" name="manzilgacha" value={formData.manzilgacha} onChange={changeHandler} placeholder="Manzilgacha" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="odamSoni" value={formData.odamSoni} onChange={changeHandler}>
          <option value="1 odam">1 odam</option>
          <option value="2 odam">2 odam</option>
          <option value="3 odam">3 odam</option>
          <option value="4 odam">4 odam</option>
          <option value="5+ odam">5+ odam</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="yukSoni" value={formData.yukSoni} onChange={changeHandler}>
          <option value="1ta yuk">1ta yuk</option>
          <option value="2ta yuk">2ta yuk</option>
          <option value="3ta yuk">3ta yuk</option>
          <option value="4ta yuk">4ta yuk</option>
          <option value="5+ta yuk">5+ta yuk</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" name="sana" value={formData.sana} onChange={changeHandler} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="time" name="vaqt" value={formData.vaqt} onChange={changeHandler} className="time__picker" />
      </FormGroup>
      <FormGroup>
        <textarea rows={5} name="izoh" value={formData.izoh} onChange={changeHandler} className="textarea" placeholder="Izoh qoldirish..."></textarea>
      </FormGroup>
      <button type="submit" className="bg-blue-700 text-white py-1 px-4">Jo'natish</button>
    </Form>
  );
};

export default BookingForm;
