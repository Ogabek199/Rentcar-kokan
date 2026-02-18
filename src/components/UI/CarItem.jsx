import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/car-item.css";
import { applyRamadanDiscount } from "../../utils/ramadanPromo";
import FavoriteButton from "./FavoriteButton";
import QuickViewModal from "./QuickViewModal";

const formatCurrency = (value) =>
  new Intl.NumberFormat("uz-UZ", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(value);

const CarItem = (props) => {
  const { imgUrl, carName, automatic, price, rating = 4.8 } = props.item;
  const { discounted, original } = applyRamadanDiscount(price);
  const [showQuickView, setShowQuickView] = useState(false);
  
  // Use custom col props if provided, otherwise use default
  const colProps = props.colProps || { lg: "4", md: "6", sm: "6" };

  return (
    <>
      <Col {...colProps} className="mb-4 animate-on-scroll animate-fade-in-up">
        <div className="car__item car__item--new">
          <div className="car__item-img-wrap">
            <img src={imgUrl} alt={carName} className="car__item-img" loading="lazy" />
            <div className="car__item-price-tag">
              <div className="car__item-price-row">
                <span className="car__item-price-new">
                  {formatCurrency(discounted)} so'm
                </span>
                <span className="car__item-price-per">/ kun</span>
              </div>
              <span className="car__item-price-old">{formatCurrency(original)} so'm</span>
            </div>
            <div className="car__item-actions">
              <FavoriteButton carId={props.item.id} size="medium" />
              <button
                className="car__item-quick-view"
                onClick={() => setShowQuickView(true)}
                aria-label="Tezkor ko'rish"
                title="Tezkor ko'rish"
              >
                <i className="ri-eye-line"></i>
              </button>
            </div>
          </div>
          <div className="car__item-content">
            <h4 className="car__item-title">{carName}</h4>
            <div className="car__item-features">
              <span><i className="ri-settings-3-line"></i> {automatic}</span>
              <span><i className="ri-user-line"></i> 4 o'rin</span>
              <span><i className="ri-star-fill"></i> {rating}</span>
            </div>
            <Link to={`/cars/${carName}`} className="car__item-btn">
              Ijara
            </Link>
          </div>
        </div>
      </Col>
      <QuickViewModal
        car={props.item}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </>
  );
};

export default CarItem;
