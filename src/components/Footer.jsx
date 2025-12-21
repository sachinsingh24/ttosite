import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/tto logo.png";

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-3 mt-auto footer-modern"
      style={{
        background: "linear-gradient(180deg, #0d0d0d 0%, #111 100%)",
        color: "#e6e6e6",
        borderTop: "4px solid #be0d07",
      }}
    >
      <div className="container">
        <div className="row g-4">
          {/* Office Section */}
          <div className="col-md-5">
            <h5 className="fw-bold mb-3 footer-heading">Technology Transfer Office</h5>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <img src={logo} alt="TTO-IITH" width={"150px"} className="img-fluid" />
              </div>
              <div className="col-md-8">
                <p className="footer-text">Indian Institute of Technology Hyderabad</p>
                <p className="footer-text">Kandi, Sangareddy, Telangana – 502284</p>
                {/* <p className="footer-text">Phone: +91 837 499 3999</p> */}
                <p className="footer-text">Email: office.tto@iith.ac.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="col-md-4">
            <h5 className="fw-bold mb-3 footer-heading">Quick Links</h5>

            <ul className="list-unstyled footer-links">
              <li>
                <a href="/about">About TTO</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
              <li>
                <a href="/technology">Technology & Innovation</a>
              </li>
              <li>
                <a href="/msme">MSME Tech Connect</a>
              </li>
              <li>
                <a href="/team">Meet the Team</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div> */}
          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 footer-heading">Quick Links</h5>

            <div className="row">
              {/* Column 1 */}
              <div className="col-5">
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="/about">About TTO</a>
                  </li>
                  <li>
                    <a href="/msme">MSME Tech Connect</a>
                  </li>
                  <li>
                    <a href="/technology">Technology</a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="col-6">
                <ul className="list-unstyled footer-links">
                  <li>
                    <a href="/services">Our Services</a>
                  </li>
                  <li>
                    <a href="/team">Our Team</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-3 footer-heading">Connect With Us</h5>

            <div className="d-flex gap-4 fs-4 footer-social">
              <a href="https://www.linkedin.com/in/technology-transfer-office-iit-hyderabad-b1141239a/" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              {/* <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a> */}
              <a href="https://www.instagram.com/office.tto/" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <p className="mt-3 small footer-text">Follow us for updates on technologies, innovations, and collaborations.</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-3" style={{ borderColor: "#d8d8d8ff" }} />

        {/* Bottom Copyright */}
        <div className="text-center">
          <small className="footer-text">© {new Date().getFullYear()} TTO – IIT Hyderabad. All Rights Reserved.</small>
        </div>
      </div>

      {/* Modern Footer CSS */}
      <style>{`
        .footer-heading {
          color: #f08815;
          font-size: 20px;
        }

        .footer-text {
          color: #d6d6d6;
          margin-bottom: 6px;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #e6e6e6;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.2s ease;
        }
        .footer-links a:hover {
          color: #f08815;
          padding-left: 6px;
        }

        .footer-social a {
          color: #fff;
          transition: all 0.3s ease;
        }
        .footer-social a:hover {
          color: #f08815 !important;
          transform: translateY(-4px) scale(1.1);
          text-shadow: 0px 0px 8px rgba(255, 153, 0, 0.6);
        }
      `}</style>
    </footer>
  );
}
