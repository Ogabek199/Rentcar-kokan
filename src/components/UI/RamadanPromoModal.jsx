import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/ramadan-promo-modal.css";
import { RAMADAN_PROMO } from "../../utils/ramadanPromo";

const RamadanPromoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(RAMADAN_PROMO.storageKey) === "1";
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("promo-modal--open");
    return () => document.body.classList.remove("promo-modal--open");
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(RAMADAN_PROMO.storageKey, "1");
    } catch {
      // ignore
    }
  }, []);

  const onBackdropMouseDown = useCallback(
    (e) => {
      if (e.target === e.currentTarget) close();
    },
    [close]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") close();
    },
    [close]
  );

  if (!open) return null;

  return (
    <div
      className="promo-modal__backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={RAMADAN_PROMO.title}
      onMouseDown={onBackdropMouseDown}
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <div className="promo-modal__card">
        <button
          type="button"
          className="promo-modal__close"
          onClick={close}
          aria-label="Yopish"
        >
          <i className="ri-close-line" />
        </button>

        <div className="promo-modal__badge">
          <i className="ri-gift-line" />
          <span>{RAMADAN_PROMO.discountPercent}% chegirma</span>
        </div>

        <h2 className="promo-modal__title">{RAMADAN_PROMO.title}</h2>
        <p className="promo-modal__desc">{RAMADAN_PROMO.description}</p>

        <div className="promo-modal__actions">
          <Link to="/prices" className="promo-modal__btn promo-modal__btn--primary" onClick={close}>
            Narxlarni ko‘rish
          </Link>
          <button type="button" className="promo-modal__btn promo-modal__btn--ghost" onClick={close}>
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RamadanPromoModal;

