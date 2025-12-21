import React from "react";

export default function Contact() {
  return (
    <>
      <section className="container py-5" style={{ marginTop: "60px" }}>
        <h2 className="fw-bold mb-4 text-center display-6">
          Get in <span style={{ color: "#be0d07" }}>Touch</span>
        </h2>

        <p className="text-center text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
          We’re here to support researchers, innovators, startups, and industry partners. Reach out to the Technology Transfer Office of IIT Hyderabad for collaboration, IP support, or technology licensing.
        </p>

        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Contact Form */}
          <div className="col-lg-5 col-md-6 d-flex">
            <div
              className="p-4 shadow-lg flex-grow-1"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 className="fw-bold mb-4">Send Us a Message</h4>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted!");
                }}
                style={{ flexGrow: 1 }}
              >
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Contact Person Name</label>
                  <input type="text" className="form-control modern-input" required />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Email ID</label>
                  <input type="email" className="form-control modern-input" required />
                </div>

                {/* Number */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Contact Number</label>
                  <input type="tel" className="form-control modern-input" required />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea className="form-control modern-input" rows="2" required></textarea>
                </div>

                {/* Button */}
                <button type="submit" className="w-100 fw-bold modern-btn mt-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-5 col-md-6 d-flex">
            <div
              className="p-4 shadow-lg rounded-4 flex-grow-1"
              style={{
                background: "#fff",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 className="fw-bold mb-3">Contact Information</h4>

              <div style={{ flexGrow: 1 }}>
                {/* Address */}
                <div className="mb-4 d-flex">
                  <i className="bi bi-geo-alt-fill fs-4 me-3" style={{ color: "#be0d07" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Office Address</h6>
                    <p className="text-muted m-0">
                      Indian Institute of Technology Hyderabad <br />
                      ITH Rd, near NH-65,
                      <br /> Sangareddy,
                      <br />
                      Kandi, Telangana 502285
                      <br />
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4 d-flex">
                  <i className="bi bi-envelope-fill fs-4 me-3" style={{ color: "#be0d07" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="text-muted m-0">fic.tto@iith.ac.in</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-4 d-flex">
                  <i className="bi bi-telephone-fill fs-4 me-3" style={{ color: "#be0d07" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="text-muted m-0">+91 837 499 3999</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-4 d-flex">
                  <i className="bi bi-clock-fill fs-4 me-3" style={{ color: "#be0d07" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Working Hours</h6>
                    <p className="text-muted m-0">Mon – Fri: 9:00 AM – 5:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h6 className="fw-bold mb-2">Connect With Us</h6>
                <div className="d-flex gap-3 fs-4">
                  <a href="#" aria-label="Instagram" style={{ color: "#be0d07" }}>
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="https://www.instagram.com/office.tto/" style={{ color: "#be0d07" }} aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/technology-transfer-office-iit-hyderabad-b1141239a/" style={{ color: "#be0d07" }} aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="shadow-lg rounded-4 overflow-hidden">
              <h4 className="fw-bold p-3 m-0 bg-light border-bottom">Our Location</h4>
              <div className="ratio ratio-16x9">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.397374933727!2d78.12168137400574!3d17.595160198373078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefccb5ad6d07%3A0x55e75401234abcd!2sIIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" loading="lazy" allowFullScreen style={{ border: 0 }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CSS */}
      <style>{`
        .modern-input {
          height: 50px;
          border-radius: 12px !important;
          border: 1px solid #ddd;
          padding: 12px;
          font-size: 15px;
          transition: all 0.2s ease-in-out;
        }

        textarea.modern-input {
          height: auto;
        }

        .modern-input:focus {
          border-color: #be0d07 !important;
          box-shadow: 0 0 0 4px rgba(179, 0, 0, 0.15) !important;
        }

        .modern-btn {
          background: linear-gradient(90deg, #be0d07, #f08815);
          padding: 14px;
          border: none;
          border-radius: 30px;
          color: #fff;
          font-size: 18px;
          transition: 0.3s ease;
        }

        .modern-btn:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
