import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy load sahifalar - faqat kerak bo'lganda yuklanadi
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const CarListing = lazy(() => import("../pages/CarListing"));
const CarDetails = lazy(() => import("../pages/CarDetails"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Contact = lazy(() => import("../pages/Contact"));
const Prices = lazy(() => import("../pages/Prices"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const AboutMe = lazy(() => import("../pages/AboutMe"));

// Loading komponenti
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '50vh' 
  }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Yuklanmoqda...</span>
    </div>
  </div>
);

const Routers = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
