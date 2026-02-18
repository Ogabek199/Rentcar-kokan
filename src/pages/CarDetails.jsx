import React, { useEffect } from "react";
import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams, Link } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import "../styles/car-details.css";
import { applyRamadanDiscount } from "../utils/ramadanPromo";

const formatCurrency = (value) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);

const INCLUDED = [
  "Cheksiz kilometr",
  "Aeroportga yetkazib berish va olish",
  "Bluetooth va USB",
  "GPS navigatsiya",
  "24/7 yo'l yordami",
  "Bolalar o'rindig'i (so'rov bo'yicha)",
  "Charm interyer",
  "Yetkazib berishda tozalangan",
];

const MOCK_REVIEWS = [
  { name: "Abror Tulyaganov", date: "12 oktyabr, 2023", stars: 5, text: "Kokandda eng qulay ijara. Mashina ajoyib holatda, xizmat tez.", avatar: "https://ui-avatars.com/api/?name=Abror&background=E5A00D&color=fff" },
  { name: "Dilnoza Rahimova", date: "5 oktyabr, 2023", stars: 5, text: "Ishonchli va samimiy. Yana ham foydalanaman.", avatar: "https://ui-avatars.com/api/?name=Dilnoza&background=E5A00D&color=fff" },
];

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!singleCarItem) {
    return (
      <Helmet title="Topilmadi" description="So‘ralgan avtomobil topilmadi." noindex canonicalPath="/cars">
        <Container className="py-5 text-center">
          <p>Bunday avtomobil topilmadi.</p>
          <Link to="/cars">Avtomobillar ro'yxatiga qaytish</Link>
        </Container>
      </Helmet>
    );
  }

  const similarCars = carData.filter((c) => c.id !== singleCarItem.id).slice(0, 3);
  const { discounted: discountedPrice, original: originalPrice } = applyRamadanDiscount(singleCarItem.price);

  return (
    <Helmet
      title={singleCarItem.carName}
      description={`${singleCarItem.carName} avtomobilini Kokandda ijaraga oling. Chegirmali kunlik narx: ${formatCurrency(discountedPrice)} so‘m. Qulay shartlar, 24/7 xizmat va tez bron qilish.`}
      canonicalPath={`/cars/${encodeURIComponent(singleCarItem.carName)}`}
      image={singleCarItem.imgUrl}
      type="product"
    >
      <section className="car-details-page">
        <Container>
          <Row>
            <Col lg="8">
              <div className="car-details__main">
                <p className="car-details__badge">Yangi avlod</p>
                <div className="car-details__rating-row">
                  <span className="car-details__stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </span>
                  <span className="car-details__reviews-count">({singleCarItem.rating} ta sharh)</span>
                </div>
                <h1 className="car-details__title">{singleCarItem.carName}</h1>
                <p className="car-details__location">
                  <i className="ri-map-pin-line"></i>
                  Qo'qon markazida mavjud
                </p>

                <div className="car-details__hero-img-wrap">
                  <span className="car-details__price-label">BOSHLANG'ICH NARX</span>
                  <span className="car-details__price-value">
                    {formatCurrency(discountedPrice)} so'm / kun
                    <span className="car-details__price-old">{formatCurrency(originalPrice)} so'm</span>
                  </span>
                  <img src={singleCarItem.imgUrl} alt={singleCarItem.carName} className="car-details__hero-img" />
                  <span className="car-details__tag">Premium tanlov</span>
                </div>

                <div className="car-details__specs">
                  <h3 className="car-details__heading">
                    <i className="ri-key-2-line"></i>
                    Asosiy xususiyatlar
                  </h3>
                  <div className="car-details__specs-grid">
                    <div className="car-details__spec-card">
                      <i className="ri-flashlight-line"></i>
                      <span className="car-details__spec-value">—</span>
                      <span className="car-details__spec-label">HP</span>
                    </div>
                    <div className="car-details__spec-card">
                      <i className="ri-fuel-line"></i>
                      <span className="car-details__spec-value">Benzin</span>
                      <span className="car-details__spec-label">Yoqilg'i</span>
                    </div>
                    <div className="car-details__spec-card">
                      <i className="ri-settings-3-line"></i>
                      <span className="car-details__spec-value">{singleCarItem.automatic}</span>
                      <span className="car-details__spec-label">Uzatma</span>
                    </div>
                    <div className="car-details__spec-card">
                      <i className="ri-user-line"></i>
                      <span className="car-details__spec-value">4</span>
                      <span className="car-details__spec-label">Kattalar</span>
                    </div>
                  </div>
                </div>

                <div className="car-details__block">
                  <h3 className="car-details__heading">Ushbu avtomobil haqida</h3>
                  <p className="car-details__description">{singleCarItem.description}</p>
                </div>

                <div className="car-details__block">
                  <h3 className="car-details__heading">Nimalar kiradi</h3>
                  <ul className="car-details__included">
                    {INCLUDED.map((item, i) => (
                      <li key={i}><i className="ri-check-line"></i>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="car-details__block">
                  <div className="car-details__reviews-head">
                    <h3 className="car-details__heading mb-0">Foydalanuvchi sharhlari</h3>
                    <button type="button" className="car-details__write-review">Sharh yozish</button>
                  </div>
                  {MOCK_REVIEWS.map((r, i) => (
                    <div key={i} className="car-details__review-card">
                      <div className="car-details__review-header">
                        <img src={r.avatar} alt="" className="car-details__review-avatar" />
                        <div>
                          <strong>{r.name}</strong>
                          <span className="car-details__review-date">{r.date}</span>
                        </div>
                        <span className="car-details__stars car-details__stars--sm">
                          {Array(r.stars).fill(0).map((_, j) => (
                            <i key={j} className="ri-star-fill"></i>
                          ))}
                        </span>
                      </div>
                      <p className="car-details__review-text">"{r.text}"</p>
                    </div>
                  ))}
                  <Link to="/contact" className="car-details__view-all">Barcha sharhlar ({singleCarItem.rating})</Link>
                </div>

                {similarCars.length > 0 && (
                  <div className="car-details__block">
                    <h3 className="car-details__heading">O'xshash avtomobillar</h3>
                    <p className="car-details__similar-sub">Avtoparkimizdan yana premium variantlar.</p>
                    <Row>
                      {similarCars.map((car) => (
                        <Col key={car.id} md="4" className="mb-3">
                          <Link to={`/cars/${car.carName}`} className="car-details__similar-card">
                            <img src={car.imgUrl} alt={car.carName} />
                            <div className="car-details__similar-info">
                              <span className="car-details__similar-name">{car.carName}</span>
                              {(() => {
                                const { discounted, original } = applyRamadanDiscount(car.price);
                                return (
                                  <span className="car-details__similar-price">
                                    {formatCurrency(discounted)} so'm / kun{" "}
                                    <span className="car-details__similar-price-old">
                                      {formatCurrency(original)} so'm
                                    </span>
                                  </span>
                                );
                              })()}
                            </div>
                            <i className="ri-arrow-right-line"></i>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </div>
            </Col>

            <Col lg="4" className="mt-4">
              <div className="car-details__sidebar">
                <div className="reserve-card">
                  <h3 className="reserve-card__title">Mashinani band qilish</h3>
                  <p className="reserve-card__price">
                    {formatCurrency(discountedPrice)} <span>/ kun</span>
                    <span className="reserve-card__price-old">{formatCurrency(originalPrice)} so'm</span>
                  </p>
                  <BookingForm formId="booking-form" hideSubmitButton carName={singleCarItem.carName} />
                  <button type="submit" form="booking-form" className="reserve-card__submit">
                    Bron qilish →
                  </button>
                  <p className="reserve-card__disclaimer">Hozircha to'lov qilinmaydi. Avval mavjudlik tekshiriladi.</p>
                  <div className="reserve-card__trust">
                    <span><i className="ri-shield-check-line"></i> Xavfsiz</span>
                    <span><i className="ri-time-line"></i> Tez tasdiq</span>
                  </div>
                </div>

                <div className="need-help-card">
                  <h3 className="need-help-card__title">Yordam kerakmi?</h3>
                  <p className="need-help-card__text">Konsiyerj jamoamiz 24/7 maxsus so'rovlaringiz uchun xizmatda.</p>
                  <a href="tel:+998937120057" className="need-help-card__btn">
                    <i className="ri-phone-line"></i>
                    Qo'llab-quvvatlash bilan bog'lanish
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
