import React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        slides={[
          {
            title: "TTO – IIT HYDERABAD",
            subtitle: "The Technology Transfer Office of IIT Hyderabad serves as a catalyst that transforms cutting-edge research into real-world impact. We work closely with faculty, researchers, students, startups, and industry partners to accelerate the journey from idea to innovation to implementation.",
            imageUrl: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Grow Your Business",
            subtitle: "This is slide 2",
            imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "We Build Digital Solutions",
            subtitle: "This is slide 3",
            imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      <section className="container py-5">
        <h2 className="mb-4">Our Vision</h2>
        <p>To build a globally recognised technology commercialization ecosystem with IIT Hyderabad at its center—where research, innovation, and industry converge to generate transformative societal impact.</p>

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
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">IP Protection</h5>
              <p>Highlight a specific feature of your product or service. Convince your audience why they need to check out your brand.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Technology Scouting & Evaluation</h5>
              <p>Highlight a specific feature of your product or service. Convince your audience why they need to check out your brand.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Industry Partnering</h5>
              <p>Highlight a specific feature of your product or service. Convince your audience why they need to check out your brand.</p>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Licensing & Commercialization</h5>
              <p>Highlight a specific feature of your product or service. Convince your audience why they need to check out your brand.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="fw-bold">Startup & Spin-off Support</h5>
              <p>Highlight a specific feature of your product or service. Convince your audience why they need to check out your brand.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary px-4">Learn More</button>
        </div>
      </section>
    </>
  );
}
