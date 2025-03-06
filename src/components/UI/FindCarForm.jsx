import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const navigate = useNavigate(); // Sahifa o‘zgartirish uchun
  const [formData, setFormData] = useState({
    manzildan: "",
    manzilgacha: "",
    date: "",
    time: "",
    carType: "Malibu",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Barcha maydonlar to‘ldirilganligini tekshiramiz
    if (!formData.manzildan || !formData.manzilgacha || !formData.date || !formData.time || !formData.carType) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    navigate("/cars"); // To‘g‘ri to‘ldirilsa, sahifani o‘zgartiramiz
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input
            type="text"
            name="manzildan"
            placeholder="Manzildan"
            value={formData.manzildan}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="manzilgacha"
            placeholder="Manzilgacha"
            value={formData.manzilgacha}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select name="carType" value={formData.carType} onChange={handleChange}>
            <option value="Malibu">Malibu</option>
            <option value="Jentra">Jentra</option>
            <option value="Equinox">Equinox</option>
            <option value="Tahoe">Tahoe</option>
            <option value="Onix">Onix</option>
            <option value="Captiva">Captiva</option>
            <option value="Toyota">Toyota</option>
            <option value="Mers">Mers</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">Avtomobil toping</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
