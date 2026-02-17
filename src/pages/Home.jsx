import React from "react";
import Hero from "../components/Hero";
import hero1 from "../assets/Home_First_Banner.jpg";
import hero2 from "../assets/TTO-IITH.jpg";
import hero3 from "../assets/3.jpg";

export default function Home({ onLoad }) {

  return (
    <>
      {/* HERO SECTION */}
      <Hero
        slides={[
          {
            title: "TTO – IIT HYDERABAD",
            subtitle: "The Technology Transfer Office of IIT Hyderabad catalyzes the transformation of cutting-edge research into real-world impact. We bridge academia, industry, and startups to accelerate the journey from idea to innovation to implementation.",
            imageUrl: hero1,
          },
          {
            title: "Empowering Innovation",
            subtitle: "Structured support for IP protection, evaluation, licensing, and commercialization.",
            imageUrl: hero2,
          },
          {
            title: "Building Industry Partnerships",
            subtitle: "Unlocking opportunities for technology adoption, joint R&D, and deep-tech entrepreneurship.",
            imageUrl: hero3,
          },
        ]}
        size={"100dvh"}
        onReady={onLoad}
      />

      {/* MAIN SECTION */}
      <section className="container py-5">
        {/* Vision */}
        <h2 className="fw-bold mb-3 display-6">
          Our <span className="highlight">Vision</span>
        </h2>
        <p className="text-muted">
          To build a globally recognised technology-commercialization ecosystem with IIT Hyderabad at its center—where research, innovation, and industry converge to generate transformative societal impact.
        </p>

        {/* Mission */}
        <h2 className="fw-bold mt-5 mb-3 display-6">
          Our <span className="highlight">Mission</span>
        </h2>
        <p className="text-muted">We empower the IIT Hyderabad community to protect, translate, and commercialize their research by:</p>

        <ul className="modern-list">
          <li className="text-muted">Strengthening intellectual property culture</li>
          <li className="text-muted">Building strategic industry partnerships</li>
          <li className="text-muted">Supporting licensing and technology transfer</li>
          <li className="text-muted">Enabling spin-offs and deep-tech startups</li>
          <li className="text-muted">Creating sustainable impact at local, national, and global levels</li>
        </ul>

        {/* WHAT WE DO */}
        <h2 className="fw-bold mt-5 mb-2 display-6 text-start">
          What <span className="highlight">We Do</span>
        </h2>
        <p className="text-start text-muted mb-5">Scaling innovation through strategic support and industrial collaboration.</p>

        <div className="row g-4 justify-content-center">
          {[
            {
              title: "IP Protection",
              desc: "End-to-end support for patent filing, trademark registration, copyright management, and ensuring strong intellectual property rights.",
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            },
            {
              title: "Technology Scouting & Evaluation",
              desc: "Identifying high-potential innovations and assessing technical, commercial, and market readiness.",
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            },
            {
              title: "Industry Partnering",
              desc: "Facilitating collaborations, sponsored research, and technology co-development with industry partners.",
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            },
            {
              title: "Licensing & Commercialization",
              desc: "Helping innovators bring their technologies to market through licensing and commercialization support.",
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><path d="M10 9l-1 0H8" /></svg>
            },
            {
              title: "Startup & Spin-off Support",
              desc: "Supporting innovators in launching deep-tech startups — incubation, IP strategy, investor readiness and more.",
              icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg>
            },
          ].map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card h-100 p-4 shadow-sm value-card">
                <div className="value-icon mb-3">
                  {item.icon}
                </div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">Learn More</button>
        </div>
      </section>

      {/* MODERN UI STYLES */}
      <style>{`
        .service-card {
          border-radius: 16px;
          transition: 0.3s ease;
          background: #fff;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }


        .modern-list li {
          margin-bottom: 10px;
        }

        .value-card {
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05) !important;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
          border-color: rgba(190, 13, 7, 0.2) !important;
        }

        .value-icon {
          width: 54px;
          height: 54px;
          background: rgba(240, 136, 21, 0.08);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f08815;
          transition: all 0.3s ease;
        }

        .value-card:hover .value-icon {
          background: linear-gradient(135deg, #be0d07, #f08815);
          color: #fff;
        }
      `}</style>
    </>
  );
}
