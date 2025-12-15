import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-3 mt-auto"
      style={{
        background: "#111", // Elegant dark tone
        color: "#e6e6e6",
        borderTop: "4px solid #b30000", // IIT-H accent
      }}
    >
      <div className="container">
        <div className="row g-4">

          {/* Office Section */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: "#eea55d" }}>
              Technology Transfer Office
            </h5>
            <p className="mb-1">Indian Institute of Technology Hyderabad</p>
            <p className="mb-1">Kandi, Sangareddy, Telangana – 502284</p>
            <p className="mb-1">Phone: +91 12345 67890</p>
            <p className="mb-1">Email: tto@iith.ac.in</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: "#eea55d" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/about">About TTO</a></li>
              <li><a href="/services">Our Services</a></li>
              <li><a href="/team">Meet the Team</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: "#eea55d" }}>
              Connect With Us
            </h5>

            <div className="d-flex gap-3 fs-4 footer-social">
              <a href="#" className="text-light">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <p className="mt-3 small" style={{color:"#fff"}}>
              Follow us for updates on innovations, technologies & collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          <small color="#fff">
            © {new Date().getFullYear()} TTO – IIT Hyderabad. All Rights Reserved.
          </small>
        </div>
      </div>

      {/* Footer Styling */}
      <style>{`
        .footer-links li {
          margin-bottom: 8px;
        }
        .footer-links a {
          color: #e6e6e6;
          text-decoration: none;
          transition: 0.2s ease;
        }
        .footer-links a:hover {
          color: #ff6a00;
          padding-left: 4px;
        }

        .footer-social a {
          transition: 0.3s ease;
        }
        .footer-social a:hover {
          color: #ff6a00 !important;
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
}
