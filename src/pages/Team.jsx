import member1 from "../assets/Mr Pradeep Kumar Yemula IITH TTO1.jpg";
import dummy from "../assets/dummy male.jpg";
import HeroParticles from "../components/HeroParticles";

export default function Team() {
  const team = [
    {
      img: member1,
      name: "Pradeep Kumar Yemula",
      role: "Associate Professor",
      designation: "Electrical Engineering",
    },
    {
      img: dummy,
      name: "Name",
      role: "Role",
      designation: "Designation",
    },
    {
      img: dummy,
      name: "Name",
      role: "Role",
      designation: "Designation",
    },
    {
      img: dummy,
      name: "Name",
      role: "Role",
      designation: "Designation",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="main_banner">
        <div className="banner_overlay"></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <h1 className="fw-bold banner-title"> TEAM – TTO IIT HYDERABAD</h1>

          <p className="banner-subtitle"> Driving innovation, enabling technology translation, and shaping impactful outcomes.</p>
        </div>
      </div>

      {/* ================= ABOUT TEAM ================= */}
      <section className="container py-5">
        <h2 className="fw-bold display-6 mb-3">
          Our <span className="highlight">Team</span>
        </h2>

        <p className="text-muted fs-5">The TTO team at IIT Hyderabad brings together expertise in intellectual property, business development, technology scouting, legal strategy, and research commercialization. Together, we bridge science, innovation, and industry.</p>

        {/* ================= ECOSYSTEM ROLE ================= */}
        <h2 className="fw-bold mt-5 mb-4 display-6">
          Our Role in the <span className="highlight">Innovation Ecosystem</span>
        </h2>

        <div className="row text-center g-4 ecosystem-wrapper">
          <div className="col-12 col-md-4">
            <div className="ecosystem-card p-4 h-100">
              <h5 className="fw-bold">IP & Legal Manager</h5>
              <p className="mt-3 text-muted">Oversees intellectual property portfolio, patent filings, legal frameworks, IP agreements, and compliance with institutional and national IP policies.</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="ecosystem-card p-4 h-100">
              <h5 className="fw-bold">Business Development & Industry Liaison</h5>
              <p className="mt-3 text-muted">Builds corporate partnerships, facilitates technology showcasing, explores commercialization pathways, and leads licensing negotiations.</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="ecosystem-card p-4 h-100">
              <h5 className="fw-bold">Technology & Innovation Manager</h5>
              <p className="mt-3 text-muted">Scouts innovations, evaluates readiness, identifies industry needs, and guides technologies toward commercialization or spin-offs.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">Learn More</button>
        </div>
      </section>

      {/* ================= TEAM MEMBERS ================= */}
      <section
        className="py-5 team-section"
        style={{
          position: "relative",
          zIndex: 4,
        }}
      >
        <div className="container">
          <h2 className="text-white fw-bold mb-4 display-6">Meet the Team</h2>

          <div className="row g-4 justify-content-center text-center">
            {team.map((member, index) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card p-3 team-card h-100">
                  <img src={member.img} alt={member.name} className="team-img mb-3" />
                  <h6 className="fw-bold text-uppercase mb-1">{member.name}</h6>
                  <small className="fst-italic">{member.role}</small>
                  <p className="text-muted mb-0">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`

        /* HERO */
        .team-hero {
          position: relative;
          min-height: 50vh;
          margin-top: 72px;
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .team-overlay {
          position: absolute;
          inset: 0;
        }

        .team-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .team-subtitle {
          color: #fff;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          max-width: 90%;
          margin: 0.75rem auto 0;
        }

        /* ECOSYSTEM */
        .ecosystem-wrapper {
          margin-top: 1rem;
        }

        .ecosystem-card {
          background: #f8f9fa;
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .ecosystem-card:hover {
          transform: translateY(-4px);
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        /* TEAM */
        .team-section {
          background: #be0d07;
        }

        .team-card {
          border-radius: 16px;
          transition: 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .team-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
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
