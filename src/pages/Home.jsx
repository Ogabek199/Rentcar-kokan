import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";
import AboutSection from "../components/UI/AboutSection";
import carData from "../assets/data/carData";
import blogData from "../assets/data/blogData";
import CarItem from "../components/UI/CarItem";
import Testimonial from "../components/UI/Testimonial";
import "../styles/home-blog.css";

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

      <section className="section--cars animate-on-scroll animate-fade-in-up">
        <Container>
          <div className="section-head section-head--center animate-on-scroll animate-fade-in-down">
            <h2 className="section-head__title">Ommabop takliflar</h2>
            <p className="section-head__sub">SHAHARDA ENG YAXSHI TANLOV</p>
            <span className="section-head__line" />
          </div>
          <Row>
            {carData.slice(0, 6).map((item, index) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
          <div className="text-center mt-5 animate-on-scroll animate-fade-in">
            <Link to="/cars" className="btn-outline">
              Barcha avtomobillar ({carData.length}+)
            </Link>
          </div>
        </Container>
      </section>

      <section className="section--blog animate-on-scroll animate-fade-in-up">
        <Container>
          <div className="section-head section-head--center animate-on-scroll animate-fade-in-down">
            <h2 className="section-head__title">So'nggi maqolalar</h2>
            <p className="section-head__sub">FOYDALI MASLAHATLAR VA YANGILIKLAR</p>
            <span className="section-head__line" />
          </div>
          <Row>
            {blogData.slice(0, 3).map((item) => (
              <Col key={item.id} lg="4" md="6" className="mb-4">
                <Link to={`/blogs/${item.title}`} className="home-blog-card">
                  <div className="home-blog-card__img-wrap">
                    <img src={item.imgUrl} alt="" className="home-blog-card__img" />
                  </div>
                  <div className="home-blog-card__body">
                    <h3 className="home-blog-card__title">{item.title}</h3>
                    <p className="home-blog-card__excerpt">
                      {item.description.length > 90 ? item.description.slice(0, 90) + "…" : item.description}
                    </p>
                    <span className="home-blog-card__link">Ko'proq o'qish <i className="ri-arrow-right-line" /></span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4 animate-on-scroll animate-fade-in">
            <Link to="/blogs" className="btn-outline">Barcha maqolalar</Link>
          </div>
        </Container>
      </section>

      <section className="animate-on-scroll animate-fade-in-up">
        <Container>
          <div className="section-head animate-on-scroll animate-fade-in-down">
            <h2 className="section-head__title">Mijozlarimiz fikrlari</h2>
            <p className="section-head__sub">HAQIQI HIKOYALAR</p>
            <span className="section-head__line" />
          </div>
          <div className="animate-on-scroll animate-scale-in">
            <Testimonial />
          </div>
        </Container>
      </section>

      <section className="section--cta animate-on-scroll animate-fade-in-up">
        <Container>
          <div className="cta-box animate-on-scroll animate-scale-in">
            <h2 className="cta-box__title">Premium safaringizni boshlashga tayyormisiz?</h2>
            <p className="cta-box__text">
              Ziyo Rent Carga ishonadigan 5000+ dan ortiq mamnun mijozlar qo‘shildi. Premium mashinangiz bir necha bosish naridas.
            </p>
            <div className="cta-box__buttons">
              <Link to="/cars" className="cta-box__btn cta-box__btn--primary">
                Hozir bron qiling
              </Link>
              <a href="tel:+998937120057" className="cta-box__btn cta-box__btn--outline text-white bg-transparent">
                <i className="ri-phone-line text-white"></i>
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
