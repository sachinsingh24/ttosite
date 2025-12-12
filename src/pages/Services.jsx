import React from 'react';
import Hero from '../components/Hero';

export default function Services() {
  return (
    <>
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

      <section className="container py-5">
        <h2 className="fw-bold mb-4 text-center">OFFERINGS</h2>

        <div className="row g-4">
          {/* IP Support */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3"
                alt="IP Support"
              />
              <h5 className="fw-bold">Intellectual Property (IP) Support</h5>
              <ul>
                <li>Patent drafting & filing</li>
                <li>Prior art searches</li>
                <li>Trademark & copyright filing</li>
                <li>IP portfolio management</li>
                <li>IP policy advisory</li>
              </ul>
            </div>
          </div>

          {/* Tech Scouting */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3"
                alt="Technology Scouting"
              />
              <h5 className="fw-bold">Technology Scouting & Evaluation</h5>
              <ul>
                <li>Identifying innovations from research labs</li>
                <li>Technical feasibility studies</li>
                <li>Market assessment & competitive analysis</li>
                <li>TRL (Technology Readiness Level) evaluation</li>
              </ul>
            </div>
          </div>

          {/* Industry Partnerships */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3"
                alt="Industry Partnerships"
              />
              <h5 className="fw-bold">Industry Partnerships</h5>
              <ul>
                <li>Technology showcasing</li>
                <li>Corporate engagement</li>
                <li>Industry outreach programs</li>
                <li>Joint development & sponsored research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-4 mt-3">
          {/* Licensing */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3"
                alt="Licensing"
              />
              <h5 className="fw-bold">Licensing & Commercialization</h5>
              <ul>
                <li>Licensing strategy development</li>
                <li>Negotiation support</li>
                <li>Royalty & revenue-sharing framework</li>
                <li>Technology marketing briefs</li>
                <li>Contract drafting (NDAs, MoUs, Agreements)</li>
              </ul>
            </div>
          </div>

          {/* Startups */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
                className="card-img-top mb-3"
                alt="Startup Support"
              />
              <h5 className="fw-bold">Startup & Spin-off Support</h5>
              <ul>
                <li>Spin-off formation guidance</li>
                <li>IP licensing to startups</li>
                <li>Support for grant proposals (BIRAC, DST, MSME, iDEX)</li>
                <li>Mentorship & incubation support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary px-4">Learn More</button>
        </div>
      </section>
    </>
  );
}