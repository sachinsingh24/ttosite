import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  /* ---------------- VALIDATION ---------------- */
  const validate = (data) => {
    const errs = {};

    if (!data.from_name.trim()) errs.from_name = "Name is required";
    if (!data.from_email.trim()) {
      errs.from_email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.from_email)) {
      errs.from_email = "Invalid email address";
    }

    if (!data.contact_number.trim()) {
      errs.contact_number = "Contact number is required";
    } else if (!/^\d{10}$/.test(data.contact_number)) {
      errs.contact_number = "Enter a valid 10-digit number";
    }

    if (!data.message.trim()) errs.message = "Message is required";

    return errs;
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      time: formRef.current.time.value,
      from_name: formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      contact_number: formRef.current.contact_number.value,
      message: formRef.current.message.value,
    };

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
      () => {
        setStatus("success");
        formRef.current.reset();
      },
      () => {
        setStatus("error");
      }
    );
  };

  return (
    <section className="container py-5" style={{ marginTop: "60px" }}>
      <h2 className="fw-bold mb-4 text-center display-6">
        Get in <span className="highlight">Touch</span>
      </h2>
      <p className="text-center text-muted mb-5 fs-5" style={{ maxWidth: "75%", margin: "0 auto" }}>
        We’re here to support researchers, innovators, startups, and industry partners. Reach out to the Technology Transfer Office of IIT Hyderabad for collaboration, IP support, or technology licensing.
      </p>

      <div className="row g-4 justify-content-center">
        <div className="col-lg-5 col-md-6">
          <div
            className="p-4 shadow-lg"
            style={{
              background: "rgba(255,255,255,0.9)",
              borderRadius: "20px",
            }}
          >
            {/* ---------------- SUCCESS / ERROR SCREENS ---------------- */}
            {status === "success" && (
              <div className="text-center">
                <h3 className="fw-bold text-success">🎉 Thank You!</h3>
                <p className="mt-3">Your message has been sent successfully. Our team will get back to you shortly.</p>
              </div>
            )}

            {status === "error" && (
              <div className="text-center">
                <h3 className="fw-bold text-danger">❌ Oops!</h3>
                <p className="mt-3">Something went wrong while sending your message. Please try again later.</p>
              </div>
            )}

            {/* ---------------- FORM (ONLY IF NOT SUCCESS) ---------------- */}
            {status !== "success" && status !== "error" && (
              <>
                <h4 className="fw-bold mb-4">Send Us a Message</h4>

                <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="hidden" name="time" value={new Date().toLocaleString()} />

                  {/* Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Contact Person Name</label>
                    <input type="text" name="from_name" className="form-control modern-input" />
                    {errors.from_name && <small className="text-danger">{errors.from_name}</small>}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email ID</label>
                    <input type="email" name="from_email" className="form-control modern-input" />
                    {errors.from_email && <small className="text-danger">{errors.from_email}</small>}
                  </div>

                  {/* Contact Number */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Contact Number</label>
                    <input type="tel" name="contact_number" className="form-control modern-input" />
                    {errors.contact_number && <small className="text-danger">{errors.contact_number}</small>}
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea name="message" rows="2" className="form-control modern-input"></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>

                  <button type="submit" className="w-100 fw-bold modern-btn" disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Submit"}
                  </button>
                </form>
              </>
            )}
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
                <i className="bi bi-geo-alt-fill fs-4 me-3 highlight"></i>
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
                <i className="bi bi-envelope-fill fs-4 me-3 highlight"></i>
                <div>
                  <h6 className="fw-bold mb-1">Email</h6>
                  <p className="text-muted m-0">office.tto@iith.ac.in</p>
                </div>
              </div>

              {/* Phone */}
              {/* <div className="mb-4 d-flex">
                  <i className="bi bi-telephone-fill fs-4 me-3" style={{ color: "#be0d07" }}></i>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="text-muted m-0">+91 837 499 3999</p>
                  </div>
                </div> */}

              {/* Hours */}
              <div className="mb-4 d-flex">
                <i className="bi bi-clock-fill fs-4 me-3 highlight"></i>
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
                {/* <a href="#" aria-label="Facebook" style={{ color: "#be0d07" }}>
                    <i className="bi bi-facebook"></i>
                  </a> */}

                <a href="https://www.instagram.com/office.tto/" className="highlight" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/technology-transfer-office-iit-hyderabad-b1141239a/" className="highlight" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-6">
          <div className="shadow-lg rounded-4 overflow-hidden">
            <h4 className="fw-bold p-3 m-0 border-bottom">Our Location</h4>
            <div className="ratio ratio-16x9">
              <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.397374933727!2d78.12168137400574!3d17.595160198373078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefccb5ad6d07%3A0x55e75401234abcd!2sIIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" loading="lazy" allowFullScreen style={{ border: 0 }}></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
