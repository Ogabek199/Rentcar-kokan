import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const AboutMe = () => {
  const skills = [
    { icon: "ri-reactjs-line", name: "React.js", color: "#61DAFB" },
    { icon: "ri-javascript-line", name: "JavaScript", color: "#F7DF1E" },
    { icon: "ri-html5-line", name: "HTML5", color: "#E34F26" },
    { icon: "ri-css3-line", name: "CSS3", color: "#1572B6" },
    { icon: "ri-bootstrap-line", name: "Bootstrap", color: "#7952B3" },
    { icon: "ri-git-branch-line", name: "Git", color: "#F05032" },
  ];

  const services = [
    {
      icon: "ri-code-s-slash-line",
      title: "Veb-sayt yaratish",
      description: "Zamonaviy, responsive va SEO optimallashtirilgan veb-saytlar",
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobile-first dizayn",
      description: "Barcha qurilmalarda mukammal ishlaydigan dizaynlar",
    },
    {
      icon: "ri-speed-up-line",
      title: "Performance optimizatsiya",
      description: "Tez yuklanadigan va samarali veb-saytlar",
    },
    {
      icon: "ri-shopping-cart-line",
      title: "E-commerce",
      description: "Onlayn do'konlar va to'lov tizimlari integratsiyasi",
    },
  ];

  return (
    <Helmet
      title="Men haqimda"
      description="Frontend developer Og'abek Otaxonov. Veb-sayt yaratish, React.js, JavaScript va zamonaviy web texnologiyalar. Vebsayt qilish kerak bo'lsa murojaat qiling."
      canonicalPath="/about-me"
    >
      <CommonSection title="Men haqimda" />
      
      <section className="py-16" style={{ background: "var(--color-bg-light)" }}>
        <Container>
          <Row className="mb-12">
            <Col lg="4" md="5" className="mb-6 md:mb-0">
              <div className="bg-white rounded-2xl p-8 text-center" style={{ boxShadow: "var(--shadow)" }}>
                <div className="w-36 h-36 rounded-full mx-auto mb-5 flex items-center justify-center text-5xl text-white" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}>
                  <i className="ri-user-line"></i>
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-dark)" }}>
                  Og'abek Otaxonov
                </h2>
                <p className="font-semibold mb-5" style={{ color: "var(--color-primary)" }}>
                  Frontend Developer
                </p>
                <div className="border-t pt-5 mt-5" style={{ borderColor: "#eee" }}>
                  <a 
                    href="mailto:otaxonovogabek633@gmail.com" 
                    className="flex items-center justify-center gap-2 mb-3 no-underline transition-colors hover:opacity-80"
                    style={{ color: "var(--color-text)" }}
                  >
                    <i className="ri-mail-line text-lg"></i>
                    <span className="text-sm">otaxonovogabek633@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+998901502657" 
                    className="flex items-center justify-center gap-2 no-underline transition-colors hover:opacity-80"
                    style={{ color: "var(--color-text)" }}
                  >
                    <i className="ri-phone-line text-lg"></i>
                    <span className="text-sm">+998 90 150 26 57</span>
                  </a>
                </div>
              </div>
            </Col>
            
            <Col lg="8" md="7">
              <div className="bg-white rounded-2xl p-10" style={{ boxShadow: "var(--shadow)" }}>
                <h3 className="text-3xl font-bold mb-5" style={{ color: "var(--color-dark)" }}>
                  Salom! 👋
                </h3>
                <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--color-text)" }}>
                  Men Og'abek Otaxonov - professional frontend developer. Men zamonaviy web texnologiyalar 
                  yordamida chiroyli, funksional va tez ishlaydigan veb-saytlar yarataman.
                </p>
                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text)" }}>
                  <strong style={{ color: "var(--color-dark)" }}>Vebsayt qilish kerak bo'lsa</strong>, men bilan bog'laning! Men sizga yordam berishga tayyorman. 
                  Bizning jamoa bilan birgalikda sizning biznesingiz uchun eng yaxshi veb-saytni yaratamiz.
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-5" style={{ color: "var(--color-dark)" }}>
                    Mening ko'nikmalarim
                  </h4>
                  <Row>
                    {skills.map((skill, index) => (
                      <Col key={index} sm="6" md="4" className="mb-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:shadow-md transition-shadow" style={{ background: "var(--color-bg-light)" }}>
                          <i className={`${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                          <span className="font-semibold" style={{ color: "var(--color-text)" }}>{skill.name}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-12">
            <Col>
              <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--color-dark)" }}>
                Men qanday yordam bera olaman?
              </h3>
              <Row>
                {services.map((service, index) => (
                  <Col key={index} lg="3" md="6" className="mb-6">
                    <div className="bg-white rounded-2xl p-8 h-full text-center hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "var(--shadow)" }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = "var(--shadow-lg)"}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = "var(--shadow)"}
                    >
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 text-3xl text-white" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}>
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="text-xl font-bold mb-3" style={{ color: "var(--color-dark)" }}>
                        {service.title}
                      </h4>
                      <p className="text-sm leading-relaxed m-0" style={{ color: "var(--color-text-muted)" }}>
                        {service.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row className="mt-12">
            <Col>
              <div className="rounded-2xl p-10 text-center text-white" style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)" }}>
                <h3 className="text-3xl font-bold mb-4">
                  Vebsayt qilish kerak bo'lsa?
                </h3>
                <p className="text-lg mb-8 opacity-95">
                  Men bilan bog'laning va bizning jamoa sizga yordam beradi. 
                  Bepul konsultatsiya va narxlar bo'yicha maslahat.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 bg-white rounded-lg no-underline font-semibold hover:scale-105 transition-transform shadow-lg"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <i className="ri-message-3-line"></i>
                    Kontakt forma
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AboutMe;
