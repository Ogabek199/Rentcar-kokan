import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import { useTranslation } from "../../i18n/LanguageContext";

const AboutSection = ({ aboutClass }) => {
  const { t } = useTranslation();
  const features = [
    { icon: "ri-time-line", title: t("aboutSection.f1t"), text: t("aboutSection.f1d") },
    { icon: "ri-price-tag-3-line", title: t("aboutSection.f2t"), text: t("aboutSection.f2d") },
    { icon: "ri-checkbox-circle-line", title: t("aboutSection.f3t"), text: t("aboutSection.f3d") },
    { icon: "ri-flashlight-line", title: t("aboutSection.f4t"), text: t("aboutSection.f4d") },
  ];

  return (
    <section
      className="about__section about__section--new"
      style={aboutClass === "aboutPage" ? { marginTop: 0 } : { marginTop: "20px" }}
    >
      <Container>
        <div className="about__section-head text-center">
          <h2 className="about__section-title">{t("aboutSection.title")}</h2>
          <p className="about__section-sub">{t("aboutSection.subtitle")}</p>
          <span className="about__section-line" />
        </div>
        <Row className="about__section-cards">
          {features.map((item, index) => (
            <Col key={index} lg="3" md="6" sm="6" className="mb-4">
              <div className="about__card">
                <div className="about__card-icon">
                  <i className={item.icon}></i>
                </div>
                <h3 className="about__card-title">{item.title}</h3>
                <p className="about__card-text">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
