import Hero from "../components/Hero";
import hero1 from "../assets/1.jpg";
import hero2 from "../assets/TTO-IITH.jpg";
import hero3 from "../assets/3.jpg";

export default function Home() {
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
      />

      {/* MAIN SECTION */}
      <section className="container py-5">
        {/* Vision */}
        <h2 className="fw-bold mb-3 display-6">
          Our <span className="highlight">Vision</span>
        </h2>
        <p className="text-muted fs-5" style={{ fontSize: "18px" }}>
          To build a globally recognised technology-commercialization ecosystem with IIT Hyderabad at its center—where research, innovation, and industry converge to generate transformative societal impact.
        </p>

        {/* Mission */}
        <h2 className="fw-bold mt-5 mb-3 display-6">
          Our <span className="highlight">Mission</span>
        </h2>
        <p className="text-muted fs-5">We empower the IIT Hyderabad community to protect, translate, and commercialize their research by:</p>

        <ul className="modern-list fs-5">
          <li className="text-muted">Strengthening intellectual property culture</li>
          <li className="text-muted">Building strategic industry partnerships</li>
          <li className="text-muted">Supporting licensing and technology transfer</li>
          <li className="text-muted">Enabling spin-offs and deep-tech startups</li>
          <li className="text-muted">Creating sustainable impact at local, national, and global levels</li>
        </ul>

        {/* WHAT WE DO */}
        <h2 className="fw-bold mt-5 mb-4 display-6 text-center">
          What <span className="highlight">We Do</span>
        </h2>

        <div
          className="p-4 rounded-4 shadow-sm"
          style={{
            background: "linear-gradient(135deg, #f08815 0%, #be0d07 100%)",
            position: "relative",
            zIndex: 4,
          }}
        >
          <div className="row g-4 justify-content-center">
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
          font-size: 17px;
        }
      `}</style>
    </>
  );
}
