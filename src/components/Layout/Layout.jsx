import React, { Fragment, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import PromoModal from "../UI/PromoModal";
import ScrollToTop from "../UI/ScrollToTop";
import ScrollProgress from "../UI/ScrollProgress";
import BottomNavbar from "../UI/BottomNavbar";
import FloatingOrbits from "../UI/FloatingOrbits";
// import FavoritesCounter from "../UI/FavoritesCounter";
import { initScrollAnimations } from "../../utils/scrollAnimations";
import { logError } from "../../utils/errorLogger";

const Layout = () => {
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Birinchi marta yuklanganda animatsiyalarni ishga tushirish
    try {
      initScrollAnimations();
    } catch (err) {
      logError({
        errorType: "Animation Initialization Error",
        message: err.message,
        stack: err.stack,
        page: "Layout Component",
        additionalInfo: { component: "initScrollAnimations" },
      });
    }
  }, []);

  // Route o'zgarganda faqat yangi elementlarni kuzatish
  useEffect(() => {
    // Oldingi timeout'ni tozalash
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Kichik kechikish bilan yangi elementlarni kuzatish (DOM yangilanishi uchun)
    timeoutRef.current = setTimeout(() => {
      try {
        // Faqat yangi elementlarni topish va animatsiya qo'shish
        const newElements = document.querySelectorAll(".animate-on-scroll:not(.animated)");
        if (newElements.length > 0) {
          initScrollAnimations();
        }
      } catch (err) {
        logError({
          errorType: "Route Change Animation Error",
          message: err.message,
          stack: err.stack,
          page: location.pathname,
          additionalInfo: { route: location.pathname },
        });
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
        <PromoModal />
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
