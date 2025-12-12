import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fixed-top">

      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">MyLogo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/team">Team</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}