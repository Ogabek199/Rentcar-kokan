import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Biz haqimizda</h4>
              <h2 className="section__title">Avtomobil ijarasi xizmatiga xush kelibsiz</h2>
              <p className="section__description">
                Bizning kompaniyamiz sizga qulay va ishonchli avtomobil ijarasi xizmatini taklif etadi. Sizga sifatli va zamonaviy avtomobillarni taqdim etish orqali yo'lingizni yanada oson va yoqimli qilamiz. Biz har bir mijozimiz uchun qulay shart-sharoitlar yaratishga intilamiz va eng yaxshi xizmat ko'rsatishga harakat qilamiz.
              </p>

              <div className="about__section-item d-flex align-items-center gap-3">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Turli toifadagi avtomobillar keng tanlovi.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Hamyonbop narxlar va moslashuvchan to'lov tizimi.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Tez va qulay bron qilish imkoniyati.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Yuqori sifatli mijozlarga xizmat ko'rsatish.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://chevrolet.uz/assets/images/malibu-xl/colors/new/G59.png" alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
