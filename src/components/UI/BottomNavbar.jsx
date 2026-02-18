import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/bottom-navbar.css";

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    {
      path: "/home",
      icon: "ri-home-line",
      activeIcon: "ri-home-line",
      label: "Bosh sahifa",
    },
    {
      path: "/cars",
      icon: "ri-car-line",
      activeIcon: "ri-car-fill",
      label: "Avtomobillar",
    },
    {
      path: "/prices",
      icon: "ri-price-tag-3-line",
      activeIcon: "ri-price-tag-3-fill",
      label: "Narxlar",
    },
    {
      path: "/contact",
      icon: "ri-phone-line",
      activeIcon: "ri-phone-fill",
      label: "Bog'lanish",
    },
  ];

  const isActive = (path) => {
    if (path === "/home") {
      return location.pathname === "/home" || location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-navbar">
      <div className="bottom-navbar__container">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`bottom-navbar__item ${active ? "active" : ""}`}
            >
              <div className="bottom-navbar__icon-wrapper">
                <i className={active ? item.activeIcon : item.icon}></i>
              </div>
              <span className="bottom-navbar__label">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavbar;
