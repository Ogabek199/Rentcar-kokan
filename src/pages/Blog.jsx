import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet
      title="Bloglar"
      description="Ziyo Rent Car bloglari: avtomobil ijarasi bo‘yicha foydali maslahatlar, yangiliklar va yo‘l bo‘yidagi tavsiyalar. Eng so‘nggi maqolalarni o‘qing."
      canonicalPath="/blogs"
    >
      <CommonSection title="Bloglar" />
      <section className="animate-on-scroll animate-fade-in-up">
        <Container>
          <Row className="animate-on-scroll animate-stagger">
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
