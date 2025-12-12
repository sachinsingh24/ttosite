import React from "react";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <Hero
        slides={[
          {
            title: "Contact Us",
            subtitle: "We’re here to help you",
            imageUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Reach Out Anytime",
            subtitle: "Let’s work together",
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">Get in Touch</h2>

        <div className="row g-4 justify-content-center">
          {/* Modern Contact Form */}
          <div className="col-md-6">
            <div className="p-4 shadow-sm rounded-4" style={{ background: "#fff", borderRadius: "20px" }}>
              <h4 className="fw-bold mb-4">Contact Form</h4>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitted!");
                }}
              >
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Contact Person Name</label>
                  <input type="text" className="form-control" style={{ height: "50px", borderRadius: "10px" }} required />
                </div>

                {/* Email ID */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Email ID</label>
                  <input type="email" className="form-control" style={{ height: "50px", borderRadius: "10px" }} required />
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Contact Number</label>
                  <input type="tel" className="form-control" style={{ height: "50px", borderRadius: "10px" }} required />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-100 fw-bold"
                  style={{
                    background: "linear-gradient(90deg,#ff8c00,#ff6a00)",
                    padding: "14px",
                    border: "none",
                    borderRadius: "30px",
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Modern Map Card */}
          <div className="col-md-6">
            <div className="card shadow-sm rounded-4 overflow-hidden border-0">
              <h4 className="fw-bold p-3 m-0">Our Location</h4>
              <div className="ratio ratio-4x3">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.397374933727!2d78.12168137400574!3d17.595160198373078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefccb5ad6d07%3A0x55e75401234abcd!2sIIT%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" loading="lazy" allowFullScreen style={{ border: 0 }}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
