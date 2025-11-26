import React, { Fragment, useEffect, useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";

const Layout = () => {
  const [showSaleModal, setShowSaleModal] = useState(true);

  useEffect(() => {
    if (showSaleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showSaleModal]);

  return (
    <Fragment>
      {showSaleModal && (
        <div className="sale-modal__backdrop">
          <div className="sale-modal" role="dialog" aria-modal="true">
            <span className="sale-modal__badge">Eksklyuziv taklif</span>
            <h2 className="sale-modal__title">RentCar Kokand sayti sotuvda</h2>
            <p className="sale-modal__body">
              Tayyor kontent, dizayn va trafik bilan birga to'liq platforma.
              Sotib olish yoki batafsil ma'lumot uchun biz bilan bog'laning.
            </p>

            <div className="sale-modal__contact">
              <p>Telefon orqali bog'laning</p>
              <a className="sale-modal__phone" href="tel:+998901502657">
                +998 90 150 26 57
              </a>
            </div>

            <div className="sale-modal__actions">
              <a className="btn sale-modal__cta" href="tel:+998901502657">
                Hozir qo'ng'iroq qilish
              </a>
              <button
                className="sale-modal__ghost"
                onClick={() => setShowSaleModal(false)}
              >
                Keyinroq eslat
              </button>
            </div>
          </div>
        </div>
      )}
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
