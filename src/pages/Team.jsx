import React from "react";
import Hero from "../components/Hero";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <Hero
        slides={[
          {
            title: "TEAM – TTO IIT HYDERABAD",
            subtitle:
              "Driving innovation, enabling technology translation, and shaping impactful outcomes.",
            imageUrl:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "People Behind the Innovation Ecosystem",
            subtitle:
              "A multidisciplinary team empowering researchers, startups, and industry partners.",
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Translating Ideas Into Impact",
            subtitle:
              "Committed professionals enabling smooth IP, licensing, and commercialization processes.",
            imageUrl:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      {/* OUR TEAM SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold mb-3">Our Team</h2>
        <p>
          The TTO team at IIT Hyderabad brings together expertise in intellectual
          property, business development, legal strategy, and technology
          commercialization—working collectively to bridge science, innovation,
          and industry.
        </p>

        {/* ROLE IN ECOSYSTEM */}
        <h2 className="fw-bold mt-5 mb-4">Our Role in the Innovation Ecosystem</h2>

        <div className="row text-center p-3 bg-light shadow-sm rounded">
          {/* Card 1 */}
          <div className="col-md-4 border-end">
            <h5 className="fw-bold">IP & Legal Manager</h5>
            <p className="mt-3">
              Oversees the institute’s intellectual property portfolio, patent
              filings, and legal frameworks. Ensures compliance with IP policies
              and manages agreements, filings, and IP-related advisories.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 border-end">
            <h5 className="fw-bold">Business Development & Industry Liaison</h5>
            <p className="mt-3">
              Builds and nurtures industry relationships, identifies
              commercialization pathways, facilitates technology showcasing, and
              supports licensing negotiations with corporate partners.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Technology & Innovation Manager</h5>
            <p className="mt-3">
              Engages with research teams to scout emerging technologies,
              evaluates their technical and commercial potential, and guides them
              toward market-ready solutions and startup opportunities.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">LEARN MORE</button>
        </div>
      </section>

      {/* TEAM PHOTOS SECTION */}
      <section className="py-5" style={{ background: "#b30000" }}>
        <div className="container">
          <h2 className="text-white fw-bold mb-4">MEET THE TEAM</h2>

          <div className="row text-center g-4">
            {[1, 2, 3, 4].map((index) => (
              <div className="col-md-3" key={index}>
                <div className="card p-2 shadow-sm">
                  <img
                    src={`https://picsum.photos/300/220?random=${index}`}
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h6 className="fw-bold text-uppercase">Name</h6>
                    <p className="text-muted m-0">Designation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
