import React, { Fragment, useEffect } from "react";
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

  useEffect(() => {
    initScrollAnimations();
  }, []);

  // Avtopark va Narxlar sahifalariga o'tganda yangi elementlar ko'rinsin (SPA da observer qayta ishlashi uchun)
  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        initScrollAnimations();
      });
    });
    return () => cancelAnimationFrame(timer);
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
