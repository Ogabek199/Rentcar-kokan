import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import "../styles/prices.css";
import { applyRamadanDiscount, RAMADAN_PROMO } from "../utils/ramadanPromo";

const formatCurrency = (value) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);

const Prices = () => {
  return (
    <Helmet
      title="Narxlar"
      description="Kokandda avtomobil ijarasi narxlari: barcha modellarning kunlik tariflari, shaffof narxlar va qulay shartlar. Avtomobilni tanlab, batafsil ko‘ring."
      canonicalPath="/prices"
    >
      <CommonSection title="Narxlar" />
      <section className="prices-page">
        <Container>
          <div className="prices-promo">
            <div className="prices-promo__icon">
              <i className="ri-gift-line"></i>
            </div>
            <div className="prices-promo__content">
              <h2 className="prices-promo__title">{RAMADAN_PROMO.title}</h2>
              <p className="prices-promo__desc">{RAMADAN_PROMO.description}</p>
            </div>
          </div>

          <div className="section-head section-head--center mb-5">
            <h2 className="section-head__title">Kunlik ijara narxlari</h2>
            <p className="section-head__sub">BARCHA MODELLAR</p>
            <span className="section-head__line" />
          </div>
          <Row>
            {carData.map((item) => {
              const { discounted, original } = applyRamadanDiscount(item.price);
              return (
                <Col key={item.id} lg="4" md="6" className="mb-4">
                <Link to={`/cars/${item.carName}`} className="price-card">
                  <div className="price-card__img-wrap">
                    <img src={item.imgUrl} alt={item.carName} className="price-card__img" loading="lazy" />
                    <span className="price-card__badge">
                      <span className="price-card__badge-new">{formatCurrency(discounted)} so'm / kun</span>
                      <span className="price-card__badge-old">{formatCurrency(original)} so'm</span>
                    </span>
                  </div>
                  <div className="price-card__body">
                    <h3 className="price-card__title">{item.carName}</h3>
                    <p className="price-card__meta">{item.automatic} • {item.model}</p>
                    <span className="price-card__link">
                      Batafsil <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Prices;
