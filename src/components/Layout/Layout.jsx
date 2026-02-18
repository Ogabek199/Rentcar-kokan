import React, { Fragment, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import RamadanPromoModal from "../UI/RamadanPromoModal";
import ScrollToTop from "../UI/ScrollToTop";
import ScrollProgress from "../UI/ScrollProgress";
import BottomNavbar from "../UI/BottomNavbar";
// import FavoritesCounter from "../UI/FavoritesCounter";
import { initScrollAnimations } from "../../utils/scrollAnimations";

const Layout = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Layout;
