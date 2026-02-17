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

export default function Technology({ onLoad }) {
  React.useEffect(() => {
    onLoad?.();
  }, []);

  return (
    <>
      <div className="main_banner">
        <div className="banner_overlay"></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <h1 className="fw-bold banner-title">Technology & Innovation Impact</h1>
          <p className="banner-subtitle">Driving intellectual property, innovation, and entrepreneurship from IIT Hyderabad.</p>
        </div>
      </div>

      {/* ODOMETERS */}
      <div className="container my-4">
        <div className="row g-3 justify-content-center">
          <Odometer value={710} label="Patents Filed" />
          <Odometer value={260} label="Patents Granted" />
          <Odometer value={275} label="Startups Supported" />
        </div>
      </div>

      {/* BUTTONS BELOW ODOMETERS */}
      {/* DESCRIPTION + BUTTONS BELOW ODOMETERS */}
      <div className="container mb-5 text-center">
        <p className="tech-description mx-auto mb-4">
          Faculty members, researchers, and students at <strong>IIT Hyderabad</strong> are encouraged to submit details of their technologies, patents, and innovations to support technology transfer and commercialization efforts. Industry partners and stakeholders may also express interest in available technologies or explore collaboration opportunities through the forms below.
        </p>

        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
          <a href="https://forms.gle/WYEHkrDPTB43NWpn9" target="_blank" rel="noopener noreferrer" className="modern-btn">
            Technology Submission Form
          </a>

          <a href="https://forms.gle/3MTbtw97KMQk6mqA9" target="_blank" rel="noopener noreferrer" className="modern-btn">
            Technology Interest & Partnership Form
          </a>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
.tech-description {
  max-width: 850px;
  line-height: 1.7;
  color: #444;
}

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

        .tech-btn {
          padding: 12px 22px;
          font-weight: 600;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .tech-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
      `}</style>
    </>
  );
}
