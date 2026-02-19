import React, { Fragment, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import RamadanPromoModal from "../UI/RamadanPromoModal";
import ScrollToTop from "../UI/ScrollToTop";
import ScrollProgress from "../UI/ScrollProgress";
import BottomNavbar from "../UI/BottomNavbar";
import FloatingOrbits from "../UI/FloatingOrbits";
// import FavoritesCounter from "../UI/FavoritesCounter";
import { initScrollAnimations } from "../../utils/scrollAnimations";

const Layout = () => {
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Birinchi marta yuklanganda animatsiyalarni ishga tushirish
    initScrollAnimations();
  }, []);

  // Route o'zgarganda faqat yangi elementlarni kuzatish
  useEffect(() => {
    // Oldingi timeout'ni tozalash
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Kichik kechikish bilan yangi elementlarni kuzatish (DOM yangilanishi uchun)
    timeoutRef.current = setTimeout(() => {
      // Faqat yangi elementlarni topish va animatsiya qo'shish
      const newElements = document.querySelectorAll(".animate-on-scroll:not(.animated)");
      if (newElements.length > 0) {
        initScrollAnimations();
      }
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [location.pathname]);

  return (
    <Fragment>
      <FloatingOrbits />
      <div className="layout__wrap">
        <ScrollProgress />
        <Header />
        <RamadanPromoModal />
        <div className="layout__content">
          <Routers />
        </div>
        <Footer />
        <ScrollToTop />
        <BottomNavbar />
        {/* <FavoritesCounter /> */}
      </div>
    </Fragment>
  );
};

export default Layout;
