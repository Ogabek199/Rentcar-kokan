import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: "",
    email: "",
    fikr: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    const token = '8070117237:AAHVkDVQLv1Zg8M_57mwk7sXwQlIDpQIk7I';
    const chatId = '-1002689421547';

    const message = `
    🟢 Yangi xabar:
    👤 Ism: ${formData.ism}
    📧 Email: ${formData.email}
    💬 Izoh: ${formData.fikr}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!res.ok) {
        throw new Error("Telegramga yuborishda xatolik yuz berdi.");
      }

      toast.success("✅ Xabaringiz Telegramga yuborildi!");
      setFormData({
        ism: "",
        email: "",
        fikr: "",
      });
    } catch (err) {
      toast.error("❌ Xabar yuborishda muammo bo‘ldi.");
      console.error(err);
    }
  };



  return (
    <Helmet title="Contact">
      <CommonSection title="Aloqa" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Aloqa qiling</h6>

              <Form onSubmit={submitHandler}>
                <FormGroup className="contact__form">
                  <Input
                    name="ism"
                    value={formData.ism}
                    onChange={changeHandler}
                    placeholder="Sizning ismingiz"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder="Elektron pochtangiz"
                    type="email"
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    name="fikr"
                    value={formData.fikr}
                    onChange={changeHandler}
                    rows="5"
                    placeholder="Fikr qoldirish..."
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Xabar yuborish
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Bog'lanish uchun ma'lumot</h6>
                <p className="section__description mb-0">
                  turkiston 12-uy, Qo'qon sh
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <a href="tel:+998913238587" style={{ textDecoration: "none" }} className="section__description mb-0">+998 91 323 85 87</a>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    otaxonovogabek633@gmail.com
                  </p>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer position="top-right" autoClose={3000} />
      </section>
    </Helmet >
  );
};

export default Contact;
