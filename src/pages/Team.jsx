import React from "react";
import Hero from "../components/Hero";
import hero1 from "../assets/1.jpg";
import hero2 from "../assets/TTO-IITH.jpg";
import hero3 from "../assets/3.jpg";
import member1 from "../assets/Mr Pradeep Kumar Yemula IITH TTO1.jpg"
import dummy from "../assets/dummy male.jpg"

export default function Team() {
  const team = [
    {
      img: member1,
      name: "Pradeep Kumar Yemula",
      i: "Associate Professor",
      designation: "Electrical Engineering",
    },
    {
      img: dummy,
      name: "name",
      designation: "Designation",
    },
    {
      img: dummy,
      name: "name",
      designation: "Designation",
    },
    {
      img: dummy,
      name: "name",
      designation: "Designation",
    },
  ];
  console.log(team);
  return (
    <>
      {/* Hero Section */}
      <Hero
        slides={[
          {
            title: "TEAM – TTO IIT HYDERABAD",
            subtitle: "Driving innovation, enabling technology translation, and shaping impactful outcomes.",
            imageUrl: hero1,
          },
          {
            title: "People Behind the Innovation Ecosystem",
            subtitle: "A multidisciplinary team empowering researchers, startups, and industry partners.",
            imageUrl: hero2,
          },
          {
            title: "Translating Ideas Into Impact",
            subtitle: "Committed professionals enabling smooth IP, licensing, and commercialization processes.",
            imageUrl: hero3,
          },
        ]}
      />

      {/* OUR TEAM SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold display-6 mb-3">
          Our <span style={{ color: "#be0d07" }}>Team</span>
        </h2>

        <p className="text-muted fs-5">The TTO team at IIT Hyderabad brings together expertise in intellectual property, business development, technology scouting, legal strategy, and research commercialization. Together, we work to bridge science, innovation, and industry.</p>

        {/* ROLE IN ECOSYSTEM */}
        <h2 className="fw-bold mt-5 mb-4 display-6">
          Our Role in the <span style={{ color: "#be0d07" }}>Innovation Ecosystem</span>
        </h2>

        <div className="row text-center p-3 bg-light shadow-sm rounded ecosystem-wrapper justify-content-center">
          {/* Card 1 */}
          <div className="col-md-4 p-3 border-end ecosystem-card">
            <h5 className="fw-bold">IP & Legal Manager</h5>
            <p className="mt-3 text-muted">Oversees the institute’s intellectual property portfolio, patent filings, legal frameworks, IP agreements, and ensures compliance with institutional and national IP policies.</p>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 p-3 border-end ecosystem-card">
            <h5 className="fw-bold">Business Development & Industry Liaison</h5>
            <p className="mt-3 text-muted">Builds and nurtures corporate partnerships, facilitates technology showcasing, explores commercialization pathways, and leads licensing negotiations with industry stakeholders.</p>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 p-3 ecosystem-card">
            <h5 className="fw-bold">Technology & Innovation Manager</h5>
            <p className="mt-3 text-muted">Works closely with researchers to scout innovations, evaluate their readiness, identify industry needs, and guide technologies toward commercialization or spin-off creation.</p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">Learn More</button>
        </div>
      </section>

      {/* TEAM PHOTOS SECTION */}
      <section className="py-5" style={{ background: "#be0d07" }}>
        <div className="container">
          <h2 className="text-white fw-bold mb-4 display-6">Meet the Team</h2>

          <div className="row text-center g-4">
            {team.map((item,index) => (
              <div className="col-md-3" key={index}>
                <div className="card p-2 shadow-sm team-card">
                  <img src={item.img} className="card-img-top team-img" alt="Team Member" />
                  <div className="card-body">
                    <h6 className="fw-bold text-uppercase">{item.name}</h6>
                    <i>{item.i}</i>
                    <p className="text-muted m-0 italic">{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page Styles */}
      <style>{`
        .ecosystem-wrapper {
          border-radius: 16px;
        }

        .ecosystem-card {
          transition: 0.3s ease;
        }
        .ecosystem-card:hover {
          background: #f7f7f7;
          transform: translateY(-4px);
        }

        .team-card {
          border-radius: 16px;
          transition: 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 22px rgba(0,0,0,0.15);
        }

        .team-img {
          height: 220px;
          object-fit: cover;
          border-radius: 14px;
        }

      `}</style>
    </>
  );
}
