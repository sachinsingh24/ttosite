import HeroParticles from "../components/HeroParticles";

export default function About() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="main_banner">
        <div className="banner_overlay"></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <h1 className="fw-bold banner-title">ABOUT TTO – IIT HYDERABAD</h1>

          <p className="banner-subtitle">Empowering innovators, accelerating technology translation, and enabling real-world impact.</p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="container py-5">
        {/* WHO WE ARE */}
        <h2 className="fw-bold mb-3 display-6">
          Who <span className="highlight">We Are</span>
        </h2>

        <p className="text-muted fs-5">The Technology Transfer Office (TTO) at IIT Hyderabad serves as the strategic interface between academia, industry, and society. Our mission is to transform research outputs into impactful technologies, products, and solutions.</p>

        <p className="text-muted fs-5">With a strong foundation in intellectual property management, industry networks, and commercialization expertise, TTO ensures that innovations reach people and markets where they can create meaningful change.</p>

        {/* WHAT DRIVES US */}
        <h2 className="fw-bold mt-5 mb-3 display-6">
          What <span className="highlight">Drives Us</span>
        </h2>

        <p className="text-muted fs-5">We believe every innovation has the power to transform lives. Our role is to recognize this potential early, protect it, nurture it, and connect it with the right partners—ultimately catalyzing real-world impact.</p>

        {/* ROLE IN ECOSYSTEM */}
        <h2 className="fw-bold mt-5 mb-4 display-6 text-center">
          Our Role in the <span className="highlight">Innovation Ecosystem</span>
        </h2>

        <div
          className="ecosystem-wrapper"
          style={{
            position: "relative",
            zIndex: 4,
          }}
        >
          <div className="row g-4 justify-content-center">
            {[
              {
                icon: "bi-lightbulb",
                text: "Support faculty and scholars in navigating innovation and intellectual property pathways",
              },
              {
                icon: "bi-people",
                text: "Facilitate strong, sustainable engagement between IIT Hyderabad and industry partners",
              },
              {
                icon: "bi-rocket",
                text: "Promote a vibrant, innovation-first culture across the IIT Hyderabad community",
              },
              {
                icon: "bi-diagram-3",
                text: "Serve as the central hub for technology licensing, partnerships, and spin-off creation",
              },
            ].map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3 d-flex" key={index}>
                <div className="card ecosystem-card p-4 text-center w-100">
                  <div className="icon-wrapper mb-3">
                    <i className={`${item.icon} fs-1`}></i>
                  </div>
                  <p className="text-muted mb-0">{item.text}</p>
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

      {/* ================= STYLES ================= */}
      <style>{`

        /* ECOSYSTEM */
        .ecosystem-wrapper {
          background: linear-gradient(135deg, #be0d07 0%, #f08815 100%);
          padding: 1.5rem;
          border-radius: 16px;
        }

        .ecosystem-card {
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .ecosystem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto;
          border-radius: 50%;
          background: #ffe6e6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b30000;
        }
      `}</style>
    </>
  );
}
