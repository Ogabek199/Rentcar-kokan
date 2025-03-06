import React, { useState } from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Avtomobil ijarasi <br /> xizmati
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Bizning avtomobil ijara xizmati sizga qulay va ishonchli transport vositalarini taqdim etadi. Har xil toifadagi mashinalarni qisqa yoki uzoq muddatga ijaraga olishingiz mumkin. Yangi, qulay va texnik jihatdan mukammal holatda bo'lgan avtomobillarimiz sizning ehtiyojlaringizga mos keladi.
            </p>
            <p className="footer__logo-content">Qo'shimcha ma'lumot va buyurtma uchun biz bilan bog'laning!</p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Tez havolalar</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Bosh idora</h5>
              <p className="office__info">Kokand</p>
              <p className="office__info">Telefon: +998901502657</p>

              <p className="office__info">Elektron pochta: otaxonovogabek633@gmail.com</p>

              <p className="office__info">Ish vaqti: 10:00dan - 18:00gacha</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Axborotlar</h5>
              <p className="section__description">Bizning yangiliklarimizga obuna bo'ling</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Mualliflik huquqi {year}, Sardor Rahmonov tomonidan ishlab chiqilgan. Barcha huquqlar himoyalangan.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
