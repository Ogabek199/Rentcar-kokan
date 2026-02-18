import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

const NotFound = () => {
  return (
    <Helmet title="404" description="Sahifa topilmadi." noindex canonicalPath="/404">
      <section style={{ padding: "80px 0" }} className="animate-page-enter">
        <Container className="text-center">
          <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 12 }}>Sahifa topilmadi</h1>
          <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
            Siz qidirayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
          </p>
          <Link to="/home" className="btn-outline">
            Bosh sahifaga qaytish
          </Link>
        </Container>
      </section>
    </Helmet>
  );
};

export default NotFound;
