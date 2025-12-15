import React from "react";
import Hero from "../components/Hero";

export default function Services() {
  return (
    <>
      <Hero
        slides={[
          {
            title: "SERVICES BY TTO – IIT HYDERABAD",
            subtitle:
              "Enabling innovators to protect, translate, and commercialize research for real-world impact.",
            imageUrl:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Accelerating Technology Translation",
            subtitle:
              "From IP protection to industry partnerships—TTO supports the full innovation lifecycle.",
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Enabling Market-Ready Innovations",
            subtitle:
              "Guiding researchers and startups toward successful commercialization pathways.",
            imageUrl:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">OUR OFFERINGS</h2>

        <div className="row g-4">
          {/* IP Support */}
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm p-3"
              style={{ background: "#eea55d", color: "#fff" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3 service-card-img"
                alt="IP Support"
              />
              <h5 className="fw-bold">Intellectual Property (IP) Support</h5>
              <ul>
                <li>Patent drafting & filing</li>
                <li>Prior art & patentability searches</li>
                <li>Trademark & copyright filing</li>
                <li>Comprehensive IP portfolio management</li>
                <li>Institutional IP policy guidance</li>
              </ul>
            </div>
          </div>

          {/* Tech Scouting */}
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm p-3"
              style={{ background: "#eea55d", color: "#fff" }}
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3 service-card-img"
                alt="Technology Scouting"
              />
              <h5 className="fw-bold">Technology Scouting & Evaluation</h5>
              <ul>
                <li>Identifying promising innovations within research labs</li>
                <li>Technical & commercial feasibility assessment</li>
                <li>Market & competitive landscape analysis</li>
                <li>Technology Readiness Level (TRL) evaluation</li>
              </ul>
            </div>
          </div>

          {/* Industry Partnerships */}
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm p-3"
              style={{ background: "#eea55d", color: "#fff" }}
            >
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3 service-card-img"
                alt="Industry Partnerships"
              />
              <h5 className="fw-bold">Industry Partnerships</h5>
              <ul>
                <li>Technology showcasing for industry adoption</li>
                <li>Corporate collaborations & engagement programs</li>
                <li>Industry outreach & networking initiatives</li>
                <li>Joint development projects & sponsored research</li>
              </ul>
            </div>
          </div>

          {/* Licensing */}
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm p-3"
              style={{ background: "#eea55d", color: "#fff" }}
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3 service-card-img"
                alt="Licensing"
              />
              <h5 className="fw-bold">Licensing & Commercialization</h5>
              <ul>
                <li>Development of licensing strategies</li>
                <li>Negotiation & agreement structuring support</li>
                <li>Royalty frameworks & revenue-sharing models</li>
                <li>Creation of technology marketing briefs</li>
                <li>Contract drafting (NDAs, MoUs, licensing agreements)</li>
              </ul>
            </div>
          </div>

          {/* Startup Support */}
          <div className="col-md-4">
            <div
              className="card h-100 shadow-sm p-3"
              style={{ background: "#eea55d", color: "#fff" }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3 service-card-img"
                alt="Startup Support"
              />
              <h5 className="fw-bold">Startup & Spin-off Support</h5>
              <ul>
                <li>Guidance for spin-off creation</li>
                <li>IP licensing tailored for startups</li>
                <li>Support with grant applications (BIRAC, DST, iDEX, etc.)</li>
                <li>Mentorship, incubation access & commercialization pathways</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">LEARN MORE</button>
        </div>
      </section>
    </>
  );
}
