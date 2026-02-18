import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/bottom-navbar.css";

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/home", icon: "ri-home-line", activeIcon: "ri-home-fill", label: "Bosh" },
    { path: "/cars", icon: "ri-car-line", activeIcon: "ri-car-fill", label: "Avto" },
    { path: "/prices", icon: "ri-price-tag-3-line", activeIcon: "ri-price-tag-3-fill", label: "Narxlar" },
    { path: "/about", icon: "ri-information-line", activeIcon: "ri-information-fill", label: "Biz" },
    { path: "/about-me", icon: "ri-user-smile-line", activeIcon: "ri-user-smile-fill", label: "Dasturchi" },
    { path: "/contact", icon: "ri-phone-line", activeIcon: "ri-phone-fill", label: "Bog'lanish" },
  ];

  const isActive = (path) => {
    if (path === "/home") return location.pathname === "/home" || location.pathname === "/";
    return location.pathname === path || location.pathname.startsWith(path + "/");
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
