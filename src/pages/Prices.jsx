import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import "../styles/prices.css";
import { applyCarDiscount } from "../utils/carPromo";
import { slugify } from "../utils/slugify";
import { useTranslation } from "../i18n/LanguageContext";

const formatCurrency = (value) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);

const Prices = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const section = document.querySelector(".prices-page");
    if (section) section.querySelectorAll(".animate-on-scroll").forEach((el) => el.classList.add("animated"));
  }, []);

  return (
    <Helmet
      title={t("pricesPage.title")}
      description="Kokandda avtomobil ijarasi narxlari: barcha modellarning kunlik tariflari, shaffof narxlar va qulay shartlar. Avtomobilni tanlab, batafsil ko‘ring."
      canonicalPath="/prices"
    >
      <CommonSection title={t("pricesPage.title")} />
      <section className="prices-page animate-page-enter">
        <Container>
          <div className="section-head section-head--center mb-5 animate-on-scroll animate-fade-in-down">
            <h2 className="section-head__title">{t("pricesPage.heading")}</h2>
            <p className="section-head__sub">{t("pricesPage.subheading")}</p>
            <span className="section-head__line" />
          </div>
          <Row className="animate-on-scroll animate-stagger">
            {carData.map((item) => {
              const { discounted, original } = applyCarDiscount(item.price);
              const carSlug = item.slug || slugify(item.carName);
              return (
                <Col key={item.id} lg="4" md="6" className="mb-4">
                <Link to={`/cars/${carSlug}`} className="price-card">
                  <div className="price-card__img-wrap">
                    <img src={item.imgUrl} alt={item.carName} className="price-card__img" loading="lazy" />
                    <span className="price-card__badge">
                      <span className="price-card__badge-new">{formatCurrency(discounted)} {t("common.som")} {t("common.perDay")}</span>
                      <span className="price-card__badge-old">{formatCurrency(original)} {t("common.som")}</span>
                    </span>
                  </div>
                  <div className="price-card__body">
                    <h3 className="price-card__title">{item.carName}</h3>
                    <p className="price-card__meta">{item.automatic} • {item.model}</p>
                    <span className="price-card__link">
                      {t("common.details")} <i className="ri-arrow-right-line"></i>
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
