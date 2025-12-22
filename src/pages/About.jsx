import React from "react";
import Hero from "../components/Hero";
// import hero1 from "../assets/1.jpg";
// import hero2 from "../assets/TTO-IITH.jpg";
// import hero3 from "../assets/3.jpg";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      {/* <Hero
        slides={[
          {
            title: "ABOUT TTO – IIT HYDERABAD",
            subtitle: "Empowering innovators, accelerating technology translation, and enabling real-world impact.",
            // imageUrl: hero1,
          },
          // {
          //   title: "Driving Innovation Forward",
          //   subtitle: "Connecting research excellence with industry needs to unlock new opportunities.",
          //   imageUrl: hero2,
          // },
          // {
          //   title: "From Lab to Market",
          //   subtitle: "Turning ideas and discoveries into technologies that shape the future.",
          //   imageUrl: hero3,
          // },
        ]}
        size={"70dvh"}
      /> */}
      <div
        style={{
          height: "50dvh",
          // backgroundImage: `url(${hero1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#be0d07",
          }}
        ></div>

        <div className="text-center hero-text-anim" style={{ position: "absolute", zIndex: 2, }}>
          <h1 className="display-4 fw-bold" style={{ color: "#f08815" }}>
            ABOUT TTO – IIT HYDERABAD
          </h1>
          <p className="lead" style={{ width: "75%", margin: "0 auto" }}>
            Empowering innovators, accelerating technology translation, and enabling real-world impact.
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <section className="container py-5">
        {/* WHO WE ARE */}
        <h2 className="fw-bold mb-3 display-6">
          Who <span style={{ color: "#be0d07" }}>We Are</span>
        </h2>
        <p className="text-muted fs-5">The Technology Transfer Office (TTO) at IIT Hyderabad serves as the strategic interface between academia, industry, and society. Our mission is to transform research outputs into impactful technologies, products, and solutions.</p>
        <p className="text-muted fs-5">With a strong foundation in intellectual property management, industry networks, and commercialization expertise, TTO ensures that innovations reach people and markets where they can create meaningful change.</p>

        {/* WHAT DRIVES US */}
        <h2 className="fw-bold mt-5 mb-3 display-6">
          What <span style={{ color: "#be0d07" }}>Drives Us</span>
        </h2>
        <p className="text-muted fs-5">We believe every innovation has the power to transform lives. Our role is to recognize this potential early, protect it, nurture it, and connect it with the right partners—ultimately catalyzing real-world impact.</p>

        {/* Role in Ecosystem */}
        <h2 className="fw-bold mt-5 mb-4 display-6 text-center">
          Our Role in the <span style={{ color: "#be0d07" }}>Innovation Ecosystem</span>
        </h2>

        {/* CARD SECTION */}
        <div
          className="row g-3 pb-3 px-2 rounded-3 mt-3 justify-content-center"
          style={{
            background: "linear-gradient(135deg, #be0d07 0%, #f08815 100%)",
          }}
        >
          {[
            {
              icon: "bi-lightbulb",
              text: "Support faculty and scholars in navigating innovation and intellectual property pathways",
            },
            {
              icon: "bi-people",
              text: "Facilitate strong, sustainable engagement between IIT Hyderabad and industry partners",
            },
            {
              icon: "bi-rocket",
              text: "Promote a vibrant, innovation-first culture across the IIT Hyderabad community",
            },
            {
              icon: "bi-diagram-3",
              text: "Serve as the central hub for technology licensing, partnerships, and spin-off creation",
            },
          ].map((item, index) => (
            <div className="col-md-3 d-flex" key={index}>
              <div
                className="card shadow-sm text-center p-4 d-flex flex-column ecosystem-card"
                style={{
                  borderRadius: "12px",
                  minHeight: "260px",
                }}
              >
                {/* ICON WRAPPER */}
                <div
                  className="d-flex justify-content-center align-items-center mb-3"
                  style={{
                    height: "100px",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: "#ffe6e6",
                    }}
                  >
                    <i className={`${item.icon} fs-1`} style={{ color: "#b30000" }}></i>
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-muted mt-2" style={{ fontSize: "15px", flexGrow: 1 }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-5">
          <button className="modern-btn px-4 py-2 fw-bold">Learn More</button>
        </div>
      </section>

      {/* Modern About Page Styles */}
      <style>{`
        .ecosystem-card {
          border-radius: 18px;
          transition: 0.25s ease;
          background: #fff;
        }
        .ecosystem-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

      `}</style>
    </>
  );
}
