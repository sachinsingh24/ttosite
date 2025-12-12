import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row g-4">
          {/* Office Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Office</h5>
            <p className="mb-1">IITH Rd, near NH-65, Sangareddy,</p>
            <p className="mb-1">Kandi, Telangana 502285</p>
            <p className="mb-1">Tel: +123-456-7890</p>
            <p className="mb-1">hello@reallygreatsite.com</p>
          </div>

          {/* Business Hours */}
          <div className="col-md-4">
            <h5 className="fw-bold">Business Hours</h5>
            <p className="mb-1">Monday - Friday: 9am – 6pm</p>
            <p className="mb-1">Saturday: 9am - 12pm</p>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="fw-bold">Get Social</h5>
            <p className="mb-2">
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-facebook me-2"></i> Facebook
              </a>
            </p>
            <p className="mb-2">
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-instagram me-2"></i> Instagram
              </a>
            </p>
            <p className="mb-1">
              <a href="#" className="text-light text-decoration-none">
                <i className="bi bi-linkedin me-2"></i> LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-secondary">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
