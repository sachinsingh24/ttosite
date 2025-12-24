import React from "react";
import pagelogo from "../assets/msme_banner.png";
import HeroParticles from "../components/HeroParticles";

export default function MSME() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="main_banner">
        <div className="banner_overlay"></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <img src={pagelogo} alt="MSME Tech Connect" className="img-fluid mb-2" style={{ maxWidth: "130px" }} />

          <h1 className="fw-bold banner-title">MSME TECH CONNECT 2026</h1>

          <p className="banner-subtitle">Create • Connect • Commercialise — a national platform bridging technology creators and industry adopters.</p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="container py-5">
        {/* ABOUT EVENT */}
        <h2 className="fw-bold display-6 mb-3">
          About the <span className="highlight">Event</span>
        </h2>

        <p className="text-muted fs-5">MSME Tech Connect 2026 brings technology creators and industry adopters onto a single platform to enable collaboration, co-creation, and market-ready innovation. The event is designed to help promising technologies move from labs and startups into real-world industrial applications.</p>

        {/* WHO SHOULD PARTICIPATE */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Who Should <span className="highlight">Participate</span>
        </h2>

        <div className="row g-4 justify-content-center">
          {["Micro, Small & Medium Enterprises (MSMEs)", "Technology Startups & Entrepreneurs", "R&D Labs & Research Institutions", "Academia & Innovators", "Large Industries & Corporates", "Investors, Incubators & Accelerators", "Policymakers & Ecosystem Enablers"].map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card h-100 p-4 shadow-sm service-card text-center">
                <p className="text-muted fs-5 mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EVENT FORMAT */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Event <span className="highlight">Format</span>
        </h2>

        <ul className="modern-list fs-5">
          <li className="text-muted">Technology Exhibition & Demonstrations</li>
          <li className="text-muted">Curated Industry–Technology Matchmaking</li>
          <li className="text-muted">Networking & Collaboration Sessions</li>
          <li className="text-muted">Expert Talks & Panel Discussions</li>
          <li className="text-muted">Investor & Industry Pitch Sessions</li>
          <li className="text-muted">Technology Transfer & Licensing Clinics</li>
        </ul>

        {/* EXHIBIT */}
        <h2 className="fw-bold display-6 mt-5 mb-3">
          Exhibit Your <span className="highlight">Technology</span>
        </h2>

        <p className="text-muted fs-5">Showcase your ready-to-deploy, pilot-stage, or emerging technologies to a focused audience of industry leaders and decision-makers. Demonstrate solutions, validate market demand, and explore real deployment opportunities.</p>

        {/* WHY PARTICIPATE */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Why <span className="highlight">Participate</span>
        </h2>

        <div className="why-box p-4 rounded-4 shadow-sm">
          <div className="row g-4 justify-content-center">
            {["Find buyers, licensees, and adopters for your technology", "Explore technology transfer and licensing opportunities", "Connect with top MSMEs, large corporates, and industry leaders", "Gain visibility among investors, incubators, and policymakers", "Build partnerships for pilots, scaling, and commercialization"].map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 p-4 shadow service-card text-center">
                  <p className="mb-0 text-muted fs-5">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO WILL VISIT */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Who Will <span className="highlight">Visit</span>
        </h2>

        <ul className="modern-list fs-5">
          <li className="text-muted">Leading MSMEs and manufacturing units</li>
          <li className="text-muted">Large corporates & industry majors</li>
          <li className="text-muted">Technology buyers and solution seekers</li>
          <li className="text-muted">Investors, VCs & funding agencies</li>
          <li className="text-muted">Government bodies & innovation agencies</li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="modern-btn px-5 py-2 fw-bold">Register Interest</button>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`

        /* HERO */
        .msme-hero {
          position: relative;
          min-height: 50vh;
          margin-top: 72px;
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .msme-overlay {
          position: absolute;
          inset: 0;
        }

        .msme-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }


        .msme-subtitle {
          color: #fff;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          max-width: 90%;
          margin: 0 auto;
        }

        /* CARDS */
        .service-card {
          border-radius: 16px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* LIST */
        .modern-list li {
          margin-bottom: 10px;
        }

        /* WHY BOX */
        .why-box {
          background: linear-gradient(135deg, #be0d07 0%, #f08815 100%);
        }

        /* BUTTON */
        .modern-btn {
          background: linear-gradient(90deg, #f08815, #be0d07);
          color: #fff;
          border: none;
          border-radius: 30px;
        }

        .modern-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
