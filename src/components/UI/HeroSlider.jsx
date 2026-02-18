import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import FindCarForm from "./FindCarForm";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (
    <section className="hero hero--new">
      <div className="hero__bg" />
      <Container className="hero__container">
        <div className="hero__content">
          <span className="hero__badge">2024-yildan beri</span>
          <h1 className="hero__title">
            Premium avtomobil ijarasi
            <span className="hero__title-accent"> Kokandda</span>
          </h1>
          <p className="hero__tagline">
            Arzon. Ishonchli. Qulay. O‘zbekistondagi eng yaxshi avtopark bilan uyigacha yetkazib berishdan bahramand bo‘ling.
          </p>
          <div className="hero__buttons">
            <Link to="/cars" className="hero__btn hero__btn--primary">
              Avtoparkni ko‘ring
            </Link>
            <a href="tel:+998937120057" className="hero__btn hero__btn--secondary">
              <i className="ri-play-circle-line"></i>
              Qo‘ng‘iroq qilish
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
