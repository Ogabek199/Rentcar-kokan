import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/animations.css";
import "./styles/scroll-to-top.css";
import "./styles/loading-skeleton.css";
import "./styles/price-calculator.css";
import "./styles/image-lightbox.css";
import "./styles/search-bar.css";
import "./styles/filter-sort.css";
import "./styles/quick-view-modal.css";
import "./styles/favorite-button.css";
import "./styles/favorites-counter.css";
import "./styles/no-results.css";
import "./styles/about-me.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { setupNetworkMonitoring } from "./utils/apiErrorHandler";

// Network monitoring o'rnatish
setupNetworkMonitoring();

// PWA service worker (static /public/service-worker.js)
if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
