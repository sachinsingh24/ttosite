import React from "react";
import Hero from "../components/Hero";

export default function Team() {
  return (
    <>
      {/* Hero */}
      <Hero
        slides={[
          {
            title: "Welcome to Our Website",
            subtitle: "This is slide 1",
            imageUrl:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Grow Your Business",
            subtitle: "This is slide 2",
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "We Build Digital Solutions",
            subtitle: "This is slide 3",
            imageUrl:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      {/* OUR TEAM SECTION */}
      <section className="container py-5">
        <h2 className="fw-bold mb-3">Our Team</h2>
        <p>
          A dedicated team of professionals committed to bridging science,
          innovation, and industry.
        </p>

        {/* ROLE IN ECOSYSTEM */}
        <h2 className="fw-bold mt-5 mb-4">Our Role in the Ecosystem</h2>

        <div className="row text-center p-3 bg-light shadow-sm">
          {/* Card 1 */}
          <div className="col-md-4 border-end">
            <h5 className="fw-bold">IP & Legal Manager</h5>
            <p className="mt-3">
              Manages the institute’s intellectual property portfolio, patent
              filings, and legal documentation. Ensures compliance with national
              and international IP standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 border-end">
            <h5 className="fw-bold">Business Development & Industry Liaison</h5>
            <p className="mt-3">
              Builds strategic relationships with industry, evaluates
              commercialization pathways, and leads licensing discussions and
              negotiations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <h5 className="fw-bold">Technology & Innovation Manager</h5>
            <p className="mt-3">
              Engages with researchers, identifies promising technologies,
              evaluates technical and market potential, and supports their
              translation into viable solutions.
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
          <h2 className="text-white fw-bold mb-4">TEAM PHOTOS</h2>

          <div className="row text-center g-4">
            {[1, 2, 3, 4].map((index) => (
              <div className="col-md-3" key={index}>
                <div className="card p-2">
                  <img
                    src="https://via.placeholder.com/300x220.png?text=Photo"
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
