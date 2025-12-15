import React from "react";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Hero
        slides={[
          {
            title: "ABOUT TTO – IIT HYDERABAD",
            subtitle:
              "Empowering innovators, accelerating technology translation, and enabling real-world impact.",
            imageUrl:
              "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "Driving Innovation Forward",
            subtitle:
              "Connecting research excellence with industry needs to unlock new opportunities.",
            imageUrl:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=60",
          },
          {
            title: "From Lab to Market",
            subtitle:
              "Turning ideas and discoveries into technologies that shape the future.",
            imageUrl:
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=60",
          },
        ]}
      />

      <section className="container py-5">
        <h2 className="mb-3 fw-bold">Who We Are</h2>
        <p>
          The Technology Transfer Office (TTO) at IIT Hyderabad serves as the
          strategic interface between academia, industry, and society. Our
          mission is to transform research outputs into impactful technologies,
          products, and solutions.
        </p>
        <p>
          By combining scientific insight, intellectual property management,
          commercialization strategy, and strong industry networks, we ensure
          that innovations emerging from IIT Hyderabad reach the people and
          markets where they can create meaningful change.
        </p>

        <h2 className="mt-5 mb-3 fw-bold">What Drives Us</h2>
        <p>
          We believe every innovation has the power to transform lives. Our role
          is to recognize this potential early, protect it, nurture it, and
          connect it with the right partners—ultimately catalyzing real-world
          impact.
        </p>

        <h2 className="mt-5 mb-4 fw-bold">Our Role in the Ecosystem</h2>

        <div className="row p-3" style={{background:"#be0d07", borderRadius:"10px"}}>
          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-lightbulb fs-1 mb-3"></i>
              <p>
                Support faculty and research scholars in navigating innovation
                and intellectual property pathways
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-people fs-1 mb-3"></i>
              <p>
                Facilitate strong, sustainable engagement between IIT Hyderabad
                and industry partners
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-rocket fs-1 mb-3"></i>
              <p>
                Promote a vibrant, innovation-first culture across the campus
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card h-100 shadow-sm p-3 text-center">
              <i className="bi bi-diagram-3 fs-1 mb-3"></i>
              <p>
                Act as the central hub for technology licensing, partnerships,
                and spin-off creation
              </p>
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
