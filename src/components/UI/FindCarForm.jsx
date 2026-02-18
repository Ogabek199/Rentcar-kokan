import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupDate: "",
    returnDate: "",
    carType: "Malibu",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(
      Object.entries(formData).filter(([, v]) => v !== "")
    ).toString();
    navigate(`/cars${query ? `?${query}` : ""}`);
  };

  return (
    <Form className="find-car-form find-car-form--new" onSubmit={handleSubmit}>
      <div className="find-car-form__grid">
        <FormGroup className="find-car-form__group">
          <label className="find-car-form__label">OLISH SANASI</label>
          <div className="find-car-form__input-wrap">
            <i className="ri-calendar-line text-black"></i>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
            />
          </div>
        </FormGroup>
        <FormGroup className="find-car-form__group">
          <label className="find-car-form__label">QAYTARISH SANASI</label>
          <div className="find-car-form__input-wrap">
            <i className="ri-calendar-line text-black"></i>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>
        </FormGroup>
        <FormGroup className="find-car-form__group">
          <label className="find-car-form__label">MASHINA TURI</label>
          <div className="find-car-form__input-wrap find-car-form__input-wrap--select">
            <i className="ri-car-line text-black"></i>
            <select name="carType" value={formData.carType} onChange={handleChange}>
              <option value="Malibu">Malibu</option>
              <option value="Jentra">Jentra</option>
              <option value="Equinox">Equinox</option>
              <option value="Tahoe">Tahoe</option>
              <option value="Onix">Onix</option>
              <option value="Captiva">Captiva</option>
            </select>
          </div>
        </FormGroup>
        <FormGroup className="find-car-form__group find-car-form__group--btn">
          <button type="submit" className="find-car-form__submit">
            <i className="ri-search-line"></i>
            Avtoparkni qidirish
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
