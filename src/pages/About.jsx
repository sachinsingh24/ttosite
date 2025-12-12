import React from 'react';
import Hero from '../components/Hero';

export default function About() {
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
        <h2 className="mb-3 fw-bold">Who We Are</h2>
        <p>
          The Technology Transfer Office (TTO) at IIT Hyderabad acts as the bridge between academia and
          industry. We help transform research outcomes into products, services, and solutions that
          benefit society. Combining scientific expertise, IP management, industry networks, and
          commercialization strategies, the TTO ensures that innovations emerging from IIT Hyderabad
          reach markets and communities where they can create meaningful change.
        </p>

        <h2 className="mt-5 mb-3 fw-bold">What Drives Us</h2>
        <p>
          We believe that every innovation has the potential to create value. Our role is to identify
          that potential, protect it, nurture it, and connect it with the right partners for maximum
          impact.
        </p>

        <h2 className="mt-5 mb-4 fw-bold">Our Role in the Ecosystem</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-lightbulb fs-1 mb-3"></i>
              <p>
                Support faculty and research scholars in navigating the innovation & IP landscape
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-people fs-1 mb-3"></i>
              <p>
                Facilitate stronger engagement between IIT Hyderabad and industry
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-rocket fs-1 mb-3"></i>
              <p>
                Promote an innovation-first culture across campus
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-diagram-3 fs-1 mb-3"></i>
              <p>
                Act as the central hub for technology licensing and spin-off creation
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary px-4">Learn More</button>
        </div>
      </section>
    </>
  );
}