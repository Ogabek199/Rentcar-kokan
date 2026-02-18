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
      <div className="animate-on-scroll animate-fade-in-up">
        <AboutSection aboutClass="aboutPage" />
      </div>
    </Helmet>
  );
};

export default About;
