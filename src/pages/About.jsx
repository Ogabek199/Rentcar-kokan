import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="Biz haqimizda" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Biz xavfsiz sayohat echimlarini taqdim etishga sodiqmiz
                </h2>

                <p className="section__description">
                  Biz mijozlarimizga qulay, ishonchli va xavfsiz sayohat xizmatlarini taklif etamiz. Har bir mijozning ehtiyojlarini inobatga olgan holda, eng yuqori sifatli transport yechimlarini taqdim etishga intilamiz.
                </p>

                <p className="section__description">
                  Yo‘nalishlaringizni xavfsiz va qulay tarzda bosib o‘tishingiz uchun bizning xizmatlarimizga ishonishingiz mumkin. Tajribali haydovchilar, zamonaviy transport vositalari va yuqori darajadagi xizmat — bizning ustuvor maqsadlarimizdir.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Har qanday yordam kerakmi?</h6>
                    <a href="tel:+998913238587" style={{textDecoration: "none", color: "blue", fontSize: "20px"}}>+998 91 323 85 87</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Mutaxasislar</h6>
              <h2 className="section__title">Bizning azolarimiz</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
