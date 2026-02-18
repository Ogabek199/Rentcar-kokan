import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Bosh sahifa" },
  { path: "/cars", display: "Avtomobillar" },
  { path: "/prices", display: "Narxlar" },
  { path: "/about", display: "Biz haqimizda" },
  { path: "/about-me", display: "Dasturchi haqida" },
  { path: "/contact", display: "Bog'lanish" },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current?.classList.toggle("menu__active");

  return (
    <header className="header header--new">
      <Container>
        <div className="header__inner">
          <Link to="/home" className="header__logo">
            <i className="ri-car-line"></i>
            <span>Ziyo Rent Car</span>
          </Link>

          <nav className="header__nav" ref={menuRef}>
            <button
              type="button"
              className="header__close"
              onClick={toggleMenu}
              aria-label="Menyuni yopish"
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="header__menu">
              {navLinks.map((item) => (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "header__link header__link--active"
                      : "header__link"
                  }
                  key={item.path}
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </nav>

          <div className="header__right">
            <a href="tel:+998937120057" className="header__phone">
              <i className="ri-phone-line"></i>+998 93 712 00 57
            </a>
            <Link to="/contact" className="header__cta">
              Murojat uchun
            </Link>
          </div>

          <button
            type="button"
            className="header__toggle"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
