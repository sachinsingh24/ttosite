import React from "react";
import Hero from "../components/Hero";
import hero1 from "../assets/1.jpg";
import hero2 from "../assets/TTO-IITH.jpg";
import hero3 from "../assets/3.jpg";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        slides={[
          {
            title: "SERVICES BY TTO – IIT HYDERABAD",
            subtitle:
              "Enabling innovators to protect, translate, and commercialize research for meaningful impact.",
              imageUrl: hero1,
          },
          {
            title: "Accelerating Technology Translation",
            subtitle:
              "From IP protection to industry partnerships — supporting the full innovation lifecycle.",
            imageUrl: hero2,
          },
          {
            title: "Enabling Market-Ready Innovations",
            subtitle:
              "Guiding researchers and startups toward successful commercialization pathways.",
              imageUrl:hero3,
          },
        ]}
      />

      {/* Services Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center display-6 mb-4">
          Our <span style={{ color: "#be0d07" }}>Offerings</span>
        </h2>
        <p className="text-center text-muted mb-5 px-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
          TTO IIT Hyderabad provides end-to-end support to researchers, startups, and industry partners—ensuring smooth innovation transfer and impactful commercialization.
        </p>

        <div className="row g-4 justify-content-center">

          {/* CARD COMPONENT */}
          {[
            {
              title: "Intellectual Property (IP) Support",
              icon: "bi-shield-lock-fill",
              img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
              points: [
                "Patent drafting & filing",
                "Prior art & patentability searches",
                "Trademark & copyright filing",
                "IP portfolio management",
                "Institutional IP policy guidance",
              ],
            },
            {
              title: "Technology Scouting & Evaluation",
              icon: "bi-search",
              img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60",
              points: [
                "Identifying innovations in research labs",
                "Technical feasibility assessments",
                "Market & competitive analysis",
                "Technology Readiness Level (TRL) evaluation",
              ],
            },
            {
              title: "Industry Partnerships",
              icon: "bi-people-fill",
              img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60",
              points: [
                "Technology showcasing",
                "Corporate collaborations",
                "Industry outreach programs",
                "Joint development & sponsored research",
              ],
            },
            {
              title: "Licensing & Commercialization",
              icon: "bi-file-earmark-check-fill",
              img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60",
              points: [
                "Licensing strategy development",
                "Negotiation support",
                "Royalty & revenue-sharing models",
                "Technology marketing briefs",
                "Contract drafting & agreements",
              ],
            },
            {
              title: "Startup & Spin-off Support",
              icon: "bi-rocket-takeoff-fill",
              img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
              points: [
                "Spin-off creation guidance",
                "IP licensing for startups",
                "Grant proposal support (BIRAC, DST, MSME, iDEX)",
                "Mentorship & incubation support",
              ],
            },
          ].map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-lg border-0 service-card">
                <img
                  src={service.img}
                  className="service-card-img"
                  alt={service.title}
                />

                <div className="card-body p-4">
                  <h5 className="fw-bold d-flex align-items-center gap-2">
                    <i className={`bi ${service.icon} fs-4`} style={{ color: "#be0d07" }}></i>
                    {service.title}
                  </h5>

                  <ul className="mt-3 text-muted">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Learn More Button */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">
            Learn More
          </button>
        </div>
      </section>

      {/* Modern UI Styles */}
      <style>{`
        .service-card {
          border-radius: 18px;
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .service-card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }
      `}</style>
    </>
  );
}
