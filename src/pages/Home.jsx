import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        slides={[
          {
            title: "TTO – IIT HYDERABAD",
            subtitle:
              "The Technology Transfer Office of IIT Hyderabad catalyzes the transformation of cutting-edge research into real-world impact. We bridge academia, industry, and startups to accelerate the journey from idea to innovation to implementation.",
            imageUrl:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Empowering Innovation",
            subtitle:
              "Structured support for IP protection, evaluation, licensing, and commercialization.",
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Building Industry Partnerships",
            subtitle:
              "Unlocking opportunities for technology adoption, joint R&D, and deep-tech entrepreneurship.",
            imageUrl:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      {/* MAIN SECTION */}
      <section className="container py-5">

        {/* Vision */}
        <h2 className="fw-bold mb-3 display-6">
          Our <span style={{ color: "#b30000" }}>Vision</span>
        </h2>
        <p className="text-muted" style={{ fontSize: "18px" }}>
          To build a globally recognised technology-commercialization ecosystem with IIT Hyderabad at its center—where
          research, innovation, and industry converge to generate transformative societal impact.
        </p>

        {/* Mission */}
        <h2 className="fw-bold mt-5 mb-3 display-6">
          Our <span style={{ color: "#b30000" }}>Mission</span>
        </h2>
        <p className="text-muted" style={{ fontSize: "18px" }}>
          We empower the IIT Hyderabad community to protect, translate, and commercialize their research by:
        </p>

        <ul className="modern-list">
          <li>Strengthening intellectual property culture</li>
          <li>Building strategic industry partnerships</li>
          <li>Supporting licensing and technology transfer</li>
          <li>Enabling spin-offs and deep-tech startups</li>
          <li>Creating sustainable impact at local, national, and global levels</li>
        </ul>

        {/* WHAT WE DO */}
        <h2 className="fw-bold mt-5 mb-4 display-6 text-center">
          What <span style={{ color: "#b30000" }}>We Do</span>
        </h2>

        <div
          className="p-4 rounded-4 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #eea55d 0%, #b30000 100%)",
          }}
        >
          <div className="row g-4">

            {[
              {
                title: "IP Protection",
                desc: "End-to-end support for patent filing, trademark registration, copyright management, and ensuring strong intellectual property rights.",
              },
              {
                title: "Technology Scouting & Evaluation",
                desc: "Identifying high-potential innovations and assessing technical, commercial, and market readiness.",
              },
              {
                title: "Industry Partnering",
                desc: "Facilitating collaborations, sponsored research, and technology co-development with industry partners.",
              },
              {
                title: "Licensing & Commercialization",
                desc: "Helping innovators bring their technologies to market through licensing and commercialization support.",
              },
              {
                title: "Startup & Spin-off Support",
                desc: "Supporting innovators in launching deep-tech startups — incubation, IP strategy, investor readiness and more.",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 p-4 shadow service-card">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mt-2">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">
            Learn More
          </button>
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
          font-size: 17px;
        }
      `}</style>
    </>
  );
}
