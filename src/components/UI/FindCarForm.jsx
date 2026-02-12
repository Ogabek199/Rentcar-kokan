import React, { useState } from "react";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/find-car-form.css";

const FindCarForm = () => {
  const navigate = useNavigate();

  const formatNumber = (value) => {
    if (!value) return "";
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const unformatNumber = (value) => {
    return value.replace(/\s/g, "");
  };

  const [formData, setFormData] = useState({
    date: "",
    carType: "Malibu",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
    transmission: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "minPrice" || name === "maxPrice") {
      const numericValue = unformatNumber(value);
      if (/^\d*$/.test(numericValue)) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date || !formData.carType) {
      alert("Iltimos, sana va mashina turini tanlang!");
      return;
    }

    const query = new URLSearchParams(
      Object.entries(formData).filter(([_, v]) => v !== "")
    ).toString();

    navigate(`/cars?${query}`);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
        <FormGroup className="form__group">
          <input
            type="date"
            name="date"
            value={formData.date}
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
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="minPrice"
            placeholder="Min narx (so'm)"
            value={formatNumber(formData.minPrice)}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            type="text"
            name="maxPrice"
            placeholder="Max narx (so'm)"
            value={formatNumber(formData.maxPrice)}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select name="fuelType" value={formData.fuelType} onChange={handleChange}>
            <option value="">Yoqilg'i turi</option>
            <option value="benzin">Benzin</option>
            <option value="gaz">Gaz</option>
            <option value="elektr">Elektr</option>
            <option value="gibrid">Gibrid</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          >
            <option value="">Uzatma turi</option>
            <option value="automatic">Avtomat</option>
            <option value="manual">Mexanika</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">
            Avtomobil toping
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
