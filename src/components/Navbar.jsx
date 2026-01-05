import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

import { Home, About, Services, Team, Technology, Contact, MSME } from "../App";

export default function Navbar({ onNavigate }) {
  const location = useLocation();
  const isEventActive = location.pathname.startsWith("/events");

  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    const bsCollapse = window.bootstrap.Collapse?.getInstance(navbar);
    if (bsCollapse) bsCollapse.hide();
  };
  // 🔥 Trigger loader ONLY if route changes
  const handleNavClick = (to) => {
    if (location.pathname !== to && onNavigate) {
      onNavigate();
    }
    closeMenu();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top modern-navbar">
      <div className="container">
        <Link className="navbar-brand nav-logo" to="/" onClick={() => handleNavClick("/")} onMouseEnter={() => Home.preload()}>
          <img src="/tto-logo.png" alt="TTO-IITH" width="85" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active-nav px-3" : "nav-link px-3")} onMouseEnter={() => Home.preload()} onClick={() => handleNavClick("/")}>
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active-nav px-3" : "nav-link px-3")} onMouseEnter={() => About.preload()} onClick={() => handleNavClick("/about")}>
                About
              </NavLink>
            </li>

            {/* Events */}
            <li className="nav-item dropdown">
              <span className={`nav-link px-3 dropdown-toggle event-link ${isEventActive ? "event-active" : ""}`} data-bs-toggle="dropdown">
                Events
              </span>

              <ul className="dropdown-menu modern-dropdown">
                <li>
                  <NavLink to="/events/msme-tech-connect" className={({ isActive }) => (isActive ? "dropdown-item dropdown-active" : "dropdown-item")} onMouseEnter={() => MSME.preload()} onClick={() => handleNavClick("/events/msme-tech-connect")}>
                    MSME Tech Connect
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Other links */}
            {[
              { to: "/technology", label: "Technologies", preload: Technology },
              { to: "/services", label: "Services", preload: Services },
              { to: "/team", label: "Team", preload: Team },
              { to: "/contact", label: "Contact", preload: Contact },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <NavLink to={item.to} className={({ isActive }) => (isActive ? "nav-link active-nav px-3" : "nav-link px-3")} onMouseEnter={() => item.preload.preload()} onClick={() => handleNavClick(item.to)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .nav-link {
          color: #333 !important;
          font-size: 17px;
          font-weight: 500;
          position: relative;
          padding: 8px 16px;
        }

        .nav-link:hover {
          color: #f08815 !important;
        }

        /* Underline (desktop) */
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          left: 50%;
          bottom: 0;
          background: #f08815;
          transform: translateX(-50%);
          transition: 0.3s;
        }

        .nav-link:hover::after,
        .active-nav::after {
          width: 70%;
        }

        /* EVENTS underline handled separately */
        .event-link {
          cursor:pointer;
        }  
        .event-link::after {
          display: none;
        }

        .event-link::before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          left: 50%;
          bottom: 0;
          background: #f08815;
          transform: translateX(-50%);
          transition: 0.3s;
        }

        .event-link:hover::before,
        .event-active::before {
          width: 70%;
        }
        .active-nav {
        color:#f08815
        }  

        /* ===== MODERN DROPDOWN ===== */
        .modern-dropdown {
          border: none;
          border-radius: 7px;
          padding:0;
          min-width: 220px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          border-top: 3px solid #f08815;
          left:10px !important;
          top:50px !important;
        }

        .modern-dropdown .dropdown-item {
          padding: 10px;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s ease;
          margin-bottom:5px;
        }

        .modern-dropdown .dropdown-item:hover {
          background: #a6727014;
          color: #f08815;
        }

        .dropdown-active {
          background: #a6727014;
          color: #f08815;
          font-weight: 600;
        }

        /* Caret spacing */
        .dropdown-toggle::after {
          margin-left: 6px;
        }

        .navbar-nav .active-nav,
        .navbar-nav .event-active {
            color: #f08815 !important;
         }

        /* ================= MOBILE ================= */
        @media (max-width: 991px) {

          /* Disable underline on mobile */
          .navbar .nav-link::after,
          .event-link::before {
            display: none !important;
          }

          .navbar-nav .nav-link,
          .navbar-nav .dropdown-toggle {
            padding: 14px 18px;
          }

          /* Mobile active indicator */
          .navbar-nav .active-nav,
          .navbar-nav .event-active {
            border-left: 4px solid #f08815;
            background: rgba(190, 13, 7, 0.06);
          }

          /* Dropdown becomes flat list */
          .modern-dropdown {
            box-shadow: none;
            border-radius: 0;
            padding: 0;
            margin-top: 0;
            width: 100%;
          }

          .modern-dropdown .dropdown-item {
            padding-left: 36px;
          }

          .dropdown-toggle::after {
            position: absolute;
            right: 18px;
          }
        }
      `}</style>
    </nav>
  );
}
