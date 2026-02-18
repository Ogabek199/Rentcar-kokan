import React, { useState, useRef, useEffect } from "react";
import "../../styles/price-calculator.css";

const PriceCalculator = ({ basePrice = 500000, discountPercent = 0 }) => {
  const [days, setDays] = useState(1);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const dateRowRef = useRef(null);
  const [isDateFocused, setIsDateFocused] = useState(false);

  useEffect(() => {
    const handleFocus = () => setIsDateFocused(true);
    const handleBlur = () => setTimeout(() => setIsDateFocused(false), 200);
    const inputs = dateRowRef.current?.querySelectorAll('input[type="date"]');
    inputs?.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });
    return () => {
      inputs?.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  const calculateDays = () => {
    if (pickupDate && returnDate) {
      const start = new Date(pickupDate);
      const end = new Date(returnDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    }
    return days;
  };

  const totalDays = calculateDays();
  const subtotal = basePrice * totalDays;
  const discount = discountPercent > 0 ? (subtotal * discountPercent) / 100 : 0;
  const total = subtotal - discount;

  const formatCurrency = (value) =>
    new Intl.NumberFormat("uz-UZ", {
      style: "decimal",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div className="price-calculator">
      <div className="price-calculator__header">
        <h3 className="price-calculator__title">
          <i className="ri-calculator-line"></i>
          Narx kalkulyatori
        </h3>
      </div>

      <div className="price-calculator__body">
        <div className="price-calculator__row">
          <label className="price-calculator__label">Kunlar soni</label>
          <div className="price-calculator__input-group">
            <button
              type="button"
              className="price-calculator__btn"
              onClick={() => setDays(Math.max(1, days - 1))}
              disabled={pickupDate && returnDate}
            >
              <i className="ri-subtract-line"></i>
            </button>
            <input
              type="number"
              className="price-calculator__input"
              value={pickupDate && returnDate ? totalDays : days}
              onChange={(e) => {
                const val = Math.max(1, parseInt(e.target.value) || 1);
                setDays(val);
              }}
              min="1"
              disabled={pickupDate && returnDate}
            />
            <button
              type="button"
              className="price-calculator__btn"
              onClick={() => setDays(days + 1)}
              disabled={pickupDate && returnDate}
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        </div>

        <div
          className={`price-calculator__row ${isDateFocused ? "price-calculator__row--date-focused" : ""}`}
          ref={dateRowRef}
        >
          <label className="price-calculator__label">Yoki sanalarni tanlang</label>
          <div className="price-calculator__date-group">
            <div className="price-calculator__date-input">
              <i className="ri-calendar-line"></i>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  if (e.target.value && returnDate && new Date(e.target.value) > new Date(returnDate)) {
                    setReturnDate("");
                  }
                }}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <span className="price-calculator__arrow">
              <i className="ri-arrow-right-line"></i>
            </span>
            <div className="price-calculator__date-input">
              <i className="ri-calendar-line"></i>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                min={pickupDate || new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>
        </div>

        {discountPercent > 0 && (
          <div className="price-calculator__discount-badge">
            <i className="ri-gift-line"></i>
            {discountPercent}% chegirma mavjud!
          </div>
        )}

        <div className="price-calculator__summary">
          <div className="price-calculator__summary-row">
            <span>Kunlik narx:</span>
            <span>{formatCurrency(basePrice)} so'm</span>
          </div>
          <div className="price-calculator__summary-row">
            <span>Kunlar ({totalDays}):</span>
            <span>{formatCurrency(subtotal)} so'm</span>
          </div>
          {discount > 0 && (
            <div className="price-calculator__summary-row discount">
              <span>Chegirma ({discountPercent}%):</span>
              <span>-{formatCurrency(discount)} so'm</span>
            </div>
          )}
          <div className="price-calculator__summary-row total">
            <span>Jami:</span>
            <span>{formatCurrency(total)} so'm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
