import React from "react";
import HeroParticles from "../components/HeroParticles";

function Odometer({ value, label }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 500;
    const stepTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="col-12 col-md-4">
      <div className="card h-100 p-3 shadow-sm tech-card text-center">
        <h2 className="fw-bold mb-1 tech-number highlight">{count}+</h2>
        <p className="fw-semibold mb-0">{label}</p>
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <>
      <div className="main_banner">
        <div className="banner_overlay"></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <h1 className="fw-bold banner-title"> Technology & Innovation Impact</h1>

          <p className="banner-subtitle"> Driving intellectual property, innovation, and entrepreneurship from IIT Hyderabad.</p>
        </div>
      </div>

      {/* ODOMETERS (moved OUT of absolute banner) */}
      <div className="container my-4">
        <div className="row g-3 justify-content-center">
          <Odometer value={610} label="Patents Filed" />
          <Odometer value={230} label="Patents Granted" />
          <Odometer value={275} label="Startups Supported" />
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .tech-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          background: #fff;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .tech-number {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
        }
      `}</style>
    </>
  );
}
