import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet
      title="Biz haqimizda"
      description="Ziyo Rent Car haqida: premium avtomobil ijarasi, 24/7 qo‘llab-quvvatlash, toza mashinalar va tez bron qilish. Kokand va Farg‘ona vodiysida ishonchli xizmat."
      canonicalPath="/about"
    >
      <CommonSection title="Biz haqimizda" />
      <AboutSection aboutClass="aboutPage" />
    </Helmet>
  );
};

export default About;
