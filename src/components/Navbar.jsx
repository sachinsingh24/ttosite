import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import logo from "../assets/tto logo.png";

export default function Navbar() {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = window.bootstrap.Collapse?.getInstance(navbar);
    if (bsCollapse) bsCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top modern-navbar">
      <div className="container">
        {/* BRAND LOGO */}
        <Link className="navbar-brand fw-bold nav-logo" to="/">
          <img src={logo} alt="TTO-IITH" width={"85px"} className="img-fluid" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {[
              { to: "/", label: "Home", exact: true },
              { to: "/about", label: "About" },
              { to: "/msme", label: "MSME Tech Connect" },
              { to: "/technology", label: "Technologies" },
              { to: "/services", label: "Services" },
              { to: "/team", label: "Team" },
              { to: "/contact", label: "Contact" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink className={({ isActive }) => (isActive ? "nav-link active-nav px-3" : "nav-link px-3")} to={item.to} end={item.exact} onClick={closeMenu}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navbar Styles */}
      <style>{`
        /* Logo Styling */
        .nav-logo {
          font-size: 22px;
          letter-spacing: 1px;
          color: #be0d07 !important;
        }

        /* Base Nav Links */
        .navbar .nav-link {
          color: #333 !important;
          font-size: 17px;
          font-weight: 500;
          position: relative;
          padding: 8px 16px;
          transition: color 0.25s ease;
        }

        /* Hover Effect */
        .navbar .nav-link:hover {
          color: #be0d07 !important;
        }

        /* Underline Hover Animation */
        .navbar .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          left: 50%;
          bottom: 0;
          background-color: #be0d07;
          transition: 0.3s;
          transform: translateX(-50%);
        }

        .navbar .nav-link:hover::after {
          width: 70%;
        }

        /* ACTIVE LINK */
        .active-nav {
          color: #be0d07 !important;
          font-weight: 600;
        }

        .active-nav::after {
          width: 70% !important;
        }

        /* Navbar Shadow when scrolling (optional enhancement) */
        .modern-navbar {
          transition: box-shadow 0.3s ease-in-out;
        }

        .modern-navbar.scrolled {
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>

      {/* Scroll Shadow Script */}
      <script>{`
        window.addEventListener('scroll', function () {
          const nav = document.querySelector('.modern-navbar');
          if (window.scrollY > 10) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
        });
      `}</script>
    </nav>
  );
}
