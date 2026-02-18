import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";

const CarListing = () => {
  return (
    <Helmet
      title="Avtopark"
      description="Ziyo Rent Car avtoparki: turli modellardagi avtomobillar, kunlik ijara va qulay shartlar. O‘zingizga mos mashinani tanlab, tez bron qiling."
      canonicalPath="/cars"
    >
      <CommonSection title="Avtomobil ro'yxati" />

      <section className="section--cars">
        <Container>
          <Row>
            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
