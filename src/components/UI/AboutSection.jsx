import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

const features = [
  {
    icon: "ri-time-line",
    title: "24/7 Qo'llab-quvvatlash",
    text: "Jamoamiz har doim sizga yordam berishga tayyor - istalgan vaqtda, istalgan joyda.",
  },
  {
    icon: "ri-price-tag-3-line",
    title: "Eng yaxshi narxlar",
    text: "Eng raqobatbardosh narxlarda premium va qulay tajriba kafolati.",
  },
  {
    icon: "ri-checkbox-circle-line",
    title: "Toza mashinalar",
    text: "Har bir avtomobil ijaraga berilishidan oldin puxta dezinfeksiya qilinadi va yuviladi.",
  },
  {
    icon: "ri-flashlight-line",
    title: "Tez bron qilish",
    text: "Orzuingizdagi mashinani 60 soniyadan kamroq vaqtda onlayn bron qiling.",
  },
];

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section about__section--new"
      style={aboutClass === "aboutPage" ? { marginTop: 0 } : { marginTop: "20px" }}
    >
      <Container>
        <div className="about__section-head text-center">
          <h2 className="about__section-title">Har bir yolda mukammallik</h2>
          <p className="about__section-sub">NIMA UCHUN BIZNI TANLAYDI</p>
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
