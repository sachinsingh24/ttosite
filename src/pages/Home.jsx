import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            title: "TTO – IIT HYDERABAD",
            subtitle: "The Technology Transfer Office of IIT Hyderabad catalyzes the transformation of cutting-edge research into real-world impact. We bridge academia, startups, and industry to accelerate the journey from idea to innovation to implementation.",
            imageUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Empowering Innovation",
            subtitle: "We provide structured support for IP protection, evaluation, licensing, and commercialization—enabling researchers and innovators to scale their technologies.",
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Building Industry Partnerships",
            subtitle: "Through strategic collaboration with industry, we unlock opportunities for technology adoption, joint R&D, and deep-tech entrepreneurship.",
            imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      <section className="container py-5">
        <h2 className="mb-4">Our Vision</h2>
        <p>To build a globally recognised technology-commercialization ecosystem with IIT Hyderabad at its center—where research, innovation, and industry converge to generate transformative societal impact.</p>

        <h2 className="mt-5 mb-3">Our Mission</h2>
        <p>We empower the IIT Hyderabad community to protect, translate, and commercialize their research by:</p>
        <ul>
          <li>Strengthening intellectual property culture</li>
          <li>Building strategic industry partnerships</li>
          <li>Supporting licensing and technology transfer</li>
          <li>Enabling spin-offs and deep-tech startups</li>
          <li>Creating sustainable impact at local, national, and global levels</li>
        </ul>
        <h2 className="mt-5 mb-4">What We Do</h2>
        <div style={{ background: "#eea55d", padding: "20px", borderRadius: "10px" }}>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold">IP Protection</h5>
                <p>End-to-end support for patent filing, trademark registration, copyright management, and safeguarding research outcomes.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold">Technology Scouting & Evaluation</h5>
                <p>Identifying high-potential innovations and assessing technical, commercial, and market readiness to fast-track deployment.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold">Industry Partnering</h5>
                <p>Facilitating collaborations, sponsored research, and technology co-development with national and global industry leaders.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold">Licensing & Commercialization</h5>
                <p>Enabling innovators to bring their technologies to market through licensing, tech transfer agreements, and commercial partnerships.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm p-3">
                <h5 className="fw-bold">Startup & Spin-off Support</h5>
                <p>Assisting innovators in launching deep-tech startups with guidance on IP strategy, incubation, market access, and investor readiness.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-outline-dark px-4">LEARN MORE</button>
        </div>
      </section>
    </>
  );
}
