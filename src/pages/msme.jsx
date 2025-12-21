import React from "react";
import Hero from "../components/Hero";
import hero1 from "../assets/1.jpg";
// import hero2 from "../assets/TTO-IITH.jpg";
// import hero3 from "../assets/3.jpg";
import pagelogo from "../assets/msme_banner.png";

export default function msme() {
  return (
    <>
      {/* HERO SECTION */}
      {/* <Hero
        slides={[
          {
            title: "MSME TECH CONNECT 2026",
            subtitle: "Create • Connect • Commercialise — a national platform bridging technology creators and industry adopters.",
            imageUrl: hero1,
            img: pagelogo,
          },
          // {
          //   title: "Where Innovation Meets Industry",
          //   subtitle: "Enabling collaboration, co-creation, and market-ready innovation for MSMEs and technology providers.",
          //   imageUrl: hero2,
          // },
          // {
          //   title: "From Technology to Impact",
          //   subtitle: "Accelerating the journey from labs and startups to real-world industrial deployment.",
          //   imageUrl: hero3,
          // },
        ]}
      /> */}
              <div
                style={{
                  height: "100dvh",
                  backgroundImage: `url(${hero1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.45)",
                  }}
                ></div>

                <div className="text-center hero-text-anim" style={{ position: "relative", zIndex: 2 }}>
                 <img src={pagelogo} alt="msme" className="img-fluid"/>
                  <h1 className="display-4 fw-bold">MSME TECH CONNECT 2026</h1>
                  <p className="lead" style={{ width: "75%", margin: "0 auto" }}>
                    Create • Connect • Commercialise — a national platform bridging technology creators and industry adopters.
                  </p>
                </div>
              </div>
      {/* MAIN CONTENT */}
      <section className="container py-5">
        {/* ABOUT EVENT */}
        <h2 className="fw-bold display-6 mb-3">
          About the <span style={{ color: "#be0d07" }}>Event</span>
        </h2>
        <p className="text-muted fs-5">MSME Tech Connect 2026 brings technology creators and industry adopters onto a single platform to enable collaboration, co-creation, and market-ready innovation. The event is designed to help promising technologies move from labs and startups into real-world industrial applications.</p>

        {/* BENEFICIARIES */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Who Should <span style={{ color: "#be0d07" }}>Participate</span>
        </h2>

        <div className="row g-4 justify-content-center">
          {["Micro, Small & Medium Enterprises (MSMEs)", "Technology Startups & Entrepreneurs", "R&D Labs & Research Institutions", "Academia & Innovators", "Large Industries & Corporates", "Investors, Incubators & Accelerators", "Policymakers & Ecosystem Enablers"].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 p-4 shadow-sm service-card">
                <p className="fw-semibold mb-0">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* EVENT FORMAT */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Event <span style={{ color: "#be0d07" }}>Format</span>
        </h2>

        <ul className="modern-list fs-5">
          <li>Technology Exhibition & Demonstrations</li>
          <li>Curated Industry–Technology Matchmaking</li>
          <li>Networking & Collaboration Sessions</li>
          <li>Expert Talks & Panel Discussions</li>
          <li>Investor & Industry Pitch Sessions</li>
          <li>Technology Transfer & Licensing Clinics</li>
        </ul>

        {/* EXHIBIT */}
        <h2 className="fw-bold display-6 mt-5 mb-3">
          Exhibit Your <span style={{ color: "#be0d07" }}>Technology</span>
        </h2>
        <p className="text-muted fs-5">Showcase your ready-to-deploy, pilot-stage, or emerging technologies to a focused audience of industry leaders and decision-makers. Demonstrate solutions, validate market demand, and explore real deployment opportunities.</p>

        {/* WHY PARTICIPATE */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Why <span style={{ color: "#be0d07" }}>Participate</span>
        </h2>

        <div
          className="p-4 rounded-4 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #be0d07 0%, #f08815 100%)",
          }}
        >
          <div className="row g-4 justify-content-center">
            {["Find buyers, licensees, and adopters for your technology", "Explore technology transfer and licensing opportunities", "Connect with top MSMEs, large corporates, and industry leaders", "Gain visibility among investors, incubators, and policymakers", "Build partnerships for pilots, scaling, and commercialization"].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 p-4 shadow service-card">
                  <p className="mb-0 fw-semibold">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO WILL VISIT */}
        <h2 className="fw-bold display-6 mt-5 mb-4">
          Who Will <span style={{ color: "#be0d07" }}>Visit</span>
        </h2>

        <ul className="modern-list fs-5">
          <li>Leading MSMEs and manufacturing units</li>
          <li>Large corporates & industry majors</li>
          <li>Technology buyers and solution seekers</li>
          <li>Investors, VCs & funding agencies</li>
          <li>Government bodies & innovation agencies</li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="modern-btn px-5 py-2 fw-bold">Register Interest</button>
        </div>
      </section>

      {/* PAGE STYLES */}
      <style>{`
        .service-card {
          border-radius: 16px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .modern-list li {
          margin-bottom: 10px;
        }

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
