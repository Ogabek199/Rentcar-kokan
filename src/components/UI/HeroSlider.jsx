import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import FindCarForm from "./FindCarForm";
import "../../styles/hero-slider.css";
import { useTranslation } from "../../i18n/LanguageContext";

const HeroSlider = () => {
  const { t } = useTranslation();
  return (
    <section className="hero hero--new">
      <div className="hero__bg" />
      <Container className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">{t("hero.since")}</span>
          <h1 className="hero__title">
            {t("hero.title1")}
            <span className="hero__title-accent"> {t("hero.title2")}</span>
          </h1>
          <p className="hero__tagline">{t("hero.tagline")}</p>
          <div className="hero__buttons">
            <Link to="/cars" className="hero__btn hero__btn--primary">
              {t("hero.viewFleet")}
            </Link>
            <a href="tel:+998912008550" className="hero__btn hero__btn--secondary">
              <i className="ri-play-circle-line"></i>
              {t("hero.call")}
            </a>
          </div>
        </div>
      </Container>
      <div className="hero__form-wrap">
        <Container>
          <FindCarForm />
        </Container>
      </div>
    </section>
  );
};

export default HeroSlider;
