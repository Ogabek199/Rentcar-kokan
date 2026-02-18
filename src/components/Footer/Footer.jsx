import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  { path: "/cars", display: "Avtopark" },
  { path: "/prices", display: "Narxlar" },
  { path: "/about", display: "Biz haqimizda" },
  { path: "/privacy-policy", display: "Maxfiylik siyosati" },
  { path: "/contact", display: "Bog'lanish" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer--new">
      <Container>
        <Row className="footer__row">
          <Col lg="3" md="6" sm="12" className="mb-4 mb-lg-0">
            <div className="footer__brand">
              <Link to="/home" className="footer__logo">
                <i className="ri-car-line"></i>
                <span>Ziyo Rent Car</span>
              </Link>
              <p className="footer__desc">
                Kokandda premium avtomobil ijarasi. Qulaylik, ishonchlilik va eng yaxshi narxlarda hashamatni his qiling.
              </p>
              {/* <div className="footer__social">
                <a href="https://t.me/rentcarkokand" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <i className="ri-telegram-line"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <i className="ri-instagram-line"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <i className="ri-facebook-circle-line"></i>
                </a>
              </div> */}
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <h5 className="footer__title">Tez havolalar</h5>
            <ul className="footer__links">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg="3" md="6" sm="6">
            <h5 className="footer__title">Bog'lanish</h5>
            <ul className="footer__contact">
              <li>
                <i className="ri-map-pin-line"></i>
                <span>Qo'qon shahar</span>
              </li>
              <li>
                <i className="ri-phone-line"></i>
                <a href="tel:+998937120057">+998 93 712 00 57</a>
              </li>
              <li>
                <i className="ri-mail-line"></i>
                <a href="mailto:otaxonovogabek633@gmail.com">otaxonovogabek633@gmail.com</a>
              </li>
            </ul>
          </Col>

          <Col lg="4" md="6" sm="12">
            <h5 className="footer__title">Bizning manzilimiz</h5>
            <div className="footer__map-placeholder">
              <span>Xaritada ko'rsatish</span>
              <a
                href="https://maps.google.com/?q=Kokand+Uzbekistan"
                target="_blank"
                rel="noreferrer"
                className="footer__map-link"
              >
                Google xaritada ochish
              </a>
            </div>
          </Col>
        </Row>

        <div className="footer__bottom">
          <p>
            © {year} Ziyo Rent Car. Barcha huquqlar himoyalangan. Sayt: Og'abek Otaxonov (otaxonovogabek633@gmail.com, +998 90 150 26 57)
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
