import React, { useEffect, useState } from "react";
import hero1 from "../assets/1.jpg";

function Odometer({ value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 100;
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
    <div className="col-md-4 text-center">
      <div className="card h-100 p-2 shadow-sm tech-card">
        <h1 className="fw-bold display-6 m-0" style={{ color: "#be0d07" }}>
          {count}+
        </h1>
        <p className="fs-5 fw-semibold mb-0">{label}</p>
      </div>
    </div>
  );
}

export default function Technology() {
  return (
    <>
      <div
        style={{
          height: "80dvh",
          backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.45)",
          }}
        ></div>

        {/* HERO TEXT (CENTER) */}
        <div
          className="text-center hero-text-anim"
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 15px",
          }}
        >
          <h1 className="display-4 fw-bold">Technology & Innovation Impact</h1>
          <p className="lead" style={{ maxWidth: "800px" }}>
            Driving intellectual property, innovation, and entrepreneurship from IIT Hyderabad.
          </p>
        </div>

        {/* ODOMETER – BOTTOM OF BANNER */}
        <div
          className="container"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
          }}
        >
          <div className="row g-3 justify-content-center">
            <Odometer value={610} label="Patents Filed" />
            <Odometer value={230} label="Patents Granted" />
            <Odometer value={275} label="Startups Supported" />
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .tech-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          background: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
        }

        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.15);
        }


      `}</style>
    </>
  );
}
