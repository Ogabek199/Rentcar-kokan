import React from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import AboutSection from "../components/UI/AboutSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";

const Home = () => {
  return (
    <Helmet
      title="Bosh sahifa"
      description="Kokandda premium avtomobil ijarasi: arzon narxlar, qulay xizmat va ishonchli avtopark. Tez bron qiling va mashinani uyigacha yetkazib berishdan bahramand bo‘ling."
      canonicalPath="/"
    >
      <section className="p-0 hero__slider-section hero__slider-section--new">
        <HeroSlider />
      </section>

      <AboutSection />

      <section className="section--cars">
        <Container>
          <div className="section-head section-head--center">
            <h2 className="section-head__title">Ommabop takliflar</h2>
            <p className="section-head__sub">SHAHARDA ENG YAXSHI TANLOV</p>
            <span className="section-head__line" />
          </div>
          <Row>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/cars" className="btn-outline">
              Barcha avtomobillar ({carData.length}+)
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="section-head">
            <h2 className="section-head__title">Mijozlarimiz fikrlari</h2>
            <p className="section-head__sub">HAQIQI HIKOYALAR</p>
            <span className="section-head__line" />
          </div>
          <Testimonial />
        </Container>
      </section>

      <section className="section--cta">
        <Container>
          <div className="cta-box">
            <h2 className="cta-box__title">Premium safaringizni boshlashga tayyormisiz?</h2>
            <p className="cta-box__text">
              Ziyo Rent Carga ishonadigan 5000+ dan ortiq mamnun mijozlar qo‘shildi. Premium mashinangiz bir necha bosish naridas.
            </p>
            <div className="cta-box__buttons">
              <Link to="/cars" className="cta-box__btn cta-box__btn--primary">
                Hozir bron qiling
              </Link>
              <a href="tel:+998937120057" className="cta-box__btn cta-box__btn--outline">
                <i className="ri-phone-line"></i>
                +998 93 712 00 57
              </a>
            </div>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
