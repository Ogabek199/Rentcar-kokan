import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import RamadanPromoModal from "../UI/RamadanPromoModal";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <RamadanPromoModal />
      <div>
        <Routers />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
