import React, { useState } from "react";
import pagelogo from "../assets/MSME LOGO-01.png";
import ttfclogo from "../assets/ttfc logo1.jpeg";
import msmeEventPdf from "../assets/msme event.pdf";
import finalSchedulePdf from "../assets/Final Schedule -  MSME TECH CONNECT 2026.pdf";
import HeroParticles from "../components/HeroParticles";

import colMuthireddyImg from "../assets/speaker photograph/Col. Muthireddy Chandan Kumar.jpeg";
import drTPavanImg from "../assets/speaker photograph/Dr. T Pavan Kumar.jpg";
import drSuryaManiImg from "../assets/speaker photograph/Dr. Surya Mani Tripathi.jpg";
import drDaraAjayImg from "../assets/speaker photograph/Dr. Dara Ajay.png";
import drKancherlaImg from "../assets/speaker photograph/Dr. Kancherla Prasad.jpeg";
import drAmareshImg from "../assets/speaker photograph/Dr. Amaresh Panda.jpg";
import mrGulshanImg from "../assets/speaker photograph/Mr. Gulshan Bist.jpg";
import msVSwapnaImg from "../assets/speaker photograph/Ms. V. Swapna.png";
import mrVinayImg from "../assets/speaker photograph/Mr. Vinay Kumar Tiruvaipeta.jpg";
import mrSrinivasImg from "../assets/speaker photograph/Mr. Srinivas Maddipati.jpeg";
import drCharanTejaImg from "../assets/speaker photograph/Dr. Charan Teja S..jpeg";

const speakersData = [
  {
    day: "Day 1",
    date: "19th February 2026",
    speakers: [
      { name: "Col. Muthireddy Chandan Kumar", role: "Engineering Head, T-Works, Govt. of Telangana", topic: "Enabling MSME Growth through Technology Adoption and Collaboration", image: colMuthireddyImg },
      { name: "Dr. T Pavan Kumar", role: "Principal Scientist - Chemistry & IPR CSIR-IMMT", topic: "Technology Transfer – What Happens After a Patent?", image: drTPavanImg },
      { name: "Dr. Surya Mani Tripathi", role: "Global Head, Legal Services, ICRISAT", topic: "Technology Transfer Models and Practical Approaches to IP Valuation", image: drSuryaManiImg },
      { name: "Dr. Dara Ajay", role: "Head - Technology Transfer Office (TTO), IIT Madras", topic: "Technology Transfer Agreements and Licensee Identification: From Deal Structuring to Market Connect", image: drDaraAjayImg }
    ]
  },
  {
    day: "Day 2",
    date: "20th February 2026",
    speakers: [
      { name: "Dr. Kancherla Prasad", role: "Principal Scientist, CSIR-IICT", topic: "IP Valuation and Commercial Decision-Making", image: drKancherlaImg },
      { name: "Dr. Amaresh Panda", role: "KIIT-TBI Technology Transfer Office, KIIT University", topic: "Transforming Research into Revenue: A Roadmap for IP Commercialization", image: drAmareshImg },
      { name: "Mr. Gulshan Bist", role: "Asst. Director (Electronics) MSME, DFO, Hyderabad", topic: "Enhancing MSME Competitiveness through IPR: Government Policies, Schemes and Innovation Ecosystem Support", image: mrGulshanImg },
      { name: "Ms. V. Swapna", role: "NI-MSME", topic: "Institutional Support for MSMEs & MSME Innovative Scheme & Role of IPFC", image: msVSwapnaImg }
    ]
  },
  {
    day: "Day 3",
    date: "21st February 2026",
    speakers: [
      { name: "Mr. Vinay Kumar Tiruvaipeta", role: "IP Professional, EEVA", topic: "Software, AI & Digital Innovation Protection", image: mrVinayImg },
      { name: "Mr. Srinivas Maddipati", role: "IP Attorney & Technology Commercialization Strategist, EEVA", topic: "Software, AI & Digital Innovation Protection", image: mrSrinivasImg },
      { name: "Dr. Charan Teja S.", role: "Advanced Lead Engineer GE Aerospace, Bengaluru", topic: "The Future of Technology Transfer: Agentic Systems in Action", image: drCharanTejaImg }
    ]
  }
];

const SpeakerAvatar = ({ src, name }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Reset state when source changes
  React.useEffect(() => {
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className="speaker-image-container flex-shrink-0 d-flex align-items-center justify-content-center position-relative">
      {(loading || error) && (
        <div className="position-absolute d-flex align-items-center justify-content-center w-100 h-100 bg-light" style={{ borderRadius: '50%' }}>
          {error ? (
            <i className="bi bi-person-fill text-muted" style={{ fontSize: '2.5rem' }}></i>
          ) : (
            <div className="spinner-border spinner-border-sm" role="status" style={{ color: '#f08815' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      )}
      <img
        src={src}
        alt={name}
        className={`speaker-avatar ${loading || error ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={{ transition: 'opacity 0.3s ease-in-out' }}
      />
    </div>
  );
};

export default function MSME({ onLoad }) {
  const [activeDay, setActiveDay] = useState(0);

  React.useEffect(() => {
    onLoad?.();
  }, []);
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="main_banner">
        <div className="banner_overlay" style={{ backgroundColor: "#f9a33f" }}></div>
        <div className="particles">
          <HeroParticles />
        </div>

        <div className="text-center hero-text-anim banner-content">
          <img src={pagelogo} alt="MSME Tech Connect" className="img-fluid mb-2 " style={{ maxWidth: "130px" }} />

          <h1 className="fw-bold banner-title">MSME TECH CONNECT 2026</h1>

          <p className="banner-subtitle">Organised under the MSME-SCIP Programme of the MSME Innovative Scheme.</p>

          <div className="mt-2 d-flex flex-wrap justify-content-center gap-3">
            <a href={msmeEventPdf} download="MSME Tech Connect 2026.pdf" className="modern-btn px-4 py-2 text-decoration-none fw-bold d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="1" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              Download Event Brochure
            </a>
            <a href={finalSchedulePdf} download="Final Schedule - MSME TECH CONNECT 2026.pdf" className="modern-btn px-4 py-2 text-decoration-none fw-bold d-inline-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" stroke="currentColor" strokeWidth="1" className="bi bi-download" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              Download Event Schedule
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <section className="container py-5">
        {/* ABOUT EVENT */}
        <h2 className="fw-bold display-6 mb-3">
          About the <span className="highlight">Event</span>
        </h2>

        <p className="text-muted">MSME Tech Connect 2026 brings technology creators and industry adopters onto a single platform to enable collaboration, co-creation, and market-ready innovation. The event is designed to help promising technologies move from labs and startups into real-world industrial applications.</p>

        {/* DATE AND TIME */}

        <div className="text-center mt-5 p-4 rounded-4 bg-light border shadow-sm row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="text-secondary small fw-bold text-uppercase mb-3" style={{ letterSpacing: "1px" }}>Organised by</p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap mb-3">
              <img src={ttfclogo} alt="TTFC Logo" className="img-fluid" style={{ maxHeight: "70px", width: "auto" }} />
            </div>
          </div>
          <div className="col-md-6 info-partition ps-md-5 d-flex flex-column justify-content-center">
            <h4 className="fw-bold text-primary-gradient mb-2">19–21 February 2026</h4>
            <p className="mb-2 text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill me-2" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Convention Center, IIT Hyderabad, Kandi, Sangareddy
            </p>
            <p className="fw-semibold text-success mb-0">Registration is Free</p>
          </div>
        </div>
        {/* SPEAKERS SECTION */}
        <div className="mt-5">
          <h2 className="fw-bold display-6 mb-3 text-start">
            Meet Our <span className="highlight">Speakers</span>
          </h2>
          <p className="text-start text-muted mb-3">Distinguished experts sharing insights on Technology Transfer, IP, and MSME Growth.</p>

          <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
            {speakersData.map((data, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`day-tab px-4 py-2 fw-bold ${activeDay === index ? "active" : ""}`}
              >
                {data.day} <br />
                <span style={{ fontSize: "0.85rem", opacity: 0.8 }}>{data.date}</span>
              </button>
            ))}
          </div>

          <div className="row g-4 justify-content-center">
            {speakersData[activeDay].speakers.map((speaker, sIndex) => (
              <div className="col-12 col-md-6 anime-fade-in" key={`${activeDay}-${sIndex}`}>
                <div className="speaker-card p-4 h-100 shadow-sm border-0 d-flex flex-column flex-md-row-reverse gap-2 align-items-center">
                  <SpeakerAvatar src={speaker.image} name={speaker.name} />
                  <div className="d-flex flex-column gap-1 flex-grow-1 text-center text-md-start">
                    <h5 className="fw-bold mb-1 text-primary-gradient">{speaker.name}</h5>
                    <p className="text-secondary small mb-0 fw-semibold ls-1">{speaker.role}</p>

                    <div className="mt-1">
                      <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                        <span className="topic-badge">Topic</span>
                        <div className="badge-line"></div>
                      </div>
                      <p className="text-muted italic speaker-topic small mb-0">
                        "{speaker.topic}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* WHO SHOULD PARTICIPATE */}
        <div className="mt-5 pt-4">
          <h2 className="fw-bold display-6 mb-3 text-start">
            Who Should <span className="highlight">Participate</span>
          </h2>
          <p className="text-start text-muted mb-3">Bringing together the entire innovation ecosystem for meaningful impact.</p>

          <div className="participation-layout d-flex flex-wrap gap-3 justify-content-start">
            {[
              { label: "MSMEs", sub: "Micro, Small & Medium Enterprises", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20V9l4-2 4 2v11M2 20h20M10 20V5l4-2 4 2v15M18 20V9l4-2v13M10 20h8" /></svg> },
              { label: "Startups", sub: "Technology Startups & Entrepreneurs", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" /></svg> },
              { label: "R&D Labs", sub: "Research Institutions & Innovators", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12" /></svg> },
              { label: "Academia", sub: "Institutions & Academic Innovators", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg> },
              { label: "Large Industries", sub: "Corporates & Industry Leaders", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 7h18M3 11h18M3 15h18M3 19h18M5 3v18M19 3v18M9 7v1h2V7H9zM9 11v1h2v-1H9zM9 15v1h2v-1H9zM13 7v1h2V7h-2zM13 11v1h2v-1h-2zM13 15v1h2v-1h-2z" /></svg> },
              { label: "Investors", sub: "Investors, VCs & Incubators", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg> },
              { label: "Policymakers", sub: "Government Bodies & Enablers", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 21v-4a3 3 0 0 1 6 0v4M2 10l10-7 10 7" /></svg> }
            ].map((item, index) => (
              <div className="participation-node d-flex align-items-center gap-3" key={index}>
                <div className="node-icon-circle">
                  {item.icon}
                </div>
                <div className="node-text">
                  <span className="node-label fw-bold d-block">{item.label}</span>
                  <span className="node-sub text-muted small">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* EVENT FORMAT */}
        <h2 className="fw-bold display-6 mt-5 mb-3">
          Event <span className="highlight">Format</span>
        </h2>

        <ul className="modern-list">
          <li className="text-muted">Technology Exhibition & Demonstrations</li>
          <li className="text-muted">Curated Industry–Technology Matchmaking</li>
          <li className="text-muted">Networking & Collaboration Sessions</li>
          <li className="text-muted">Expert Talks & Panel Discussions</li>
          <li className="text-muted">Investor & Industry Pitch Sessions</li>
          <li className="text-muted">Technology Transfer & Licensing Clinics</li>
        </ul>



        {/* EXHIBIT */}
        <h2 className="fw-bold display-6 mt-5 mb-3">
          Exhibit Your <span className="highlight">Technology</span>
        </h2>

        <p className="text-muted">Showcase your ready-to-deploy, pilot-stage, or emerging technologies to a focused audience of industry leaders and decision-makers. Demonstrate solutions, validate market demand, and explore real deployment opportunities.</p>

        {/* WHY PARTICIPATE */}
        <div className="mt-5 ">
          <h2 className="fw-bold display-6 mb-3 text-start">
            Why <span className="highlight">Participate</span>
          </h2>
          <p className="text-start text-muted mb-3">Unlocking opportunities for growth, collaboration, and commercialization.</p>

          <div className="row g-4">
            {[
              { title: "Market Access", desc: "Find buyers, licensees, and adopters for your technology.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg> },
              { title: "Licensing Deals", desc: "Explore technology transfer and licensing opportunities.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg> },
              { title: "Strategic Networking", desc: "Connect with top MSMEs, large corporates, and industry leaders.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg> },
              { title: "Global Visibility", desc: "Gain visibility among investors, incubators, and policymakers.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg> },
              { title: "Scalability", desc: "Build partnerships for pilots, scaling, and commercialization.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg> }
            ].map((item, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="why-participate-card h-100 p-4 shadow-sm border-0">
                  <div className="why-icon-box mb-3">
                    {item.icon}
                  </div>
                  <h5 className="fw-bold mb-3 text-dark">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="fw-bold display-6 mt-5 mb-3 text-start">
          Who Will <span className="highlight">Visit</span>
        </h2>

        <ul className="modern-list">
          <li className="text-muted">Leading MSMEs and manufacturing units</li>
          <li className="text-muted">Large corporates & industry majors</li>
          <li className="text-muted">Technology buyers and solution seekers</li>
          <li className="text-muted">Investors, VCs & funding agencies</li>
          <li className="text-muted">Government bodies & innovation agencies</li>
        </ul>



        {/* CTA */}
        <div className="text-center mt-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <a href="https://forms.gle/uD7TVBivqP7ptwpP7" target="_blank" rel="noopener noreferrer" className="modern-btn px-5 pys py-2 fw-bold text-decoration-none">
            Register as Exhibitor (Licensor)
          </a>

          <a href="https://my.allevents.in/msmetechconnect" target="_blank" rel="noopener noreferrer" className="modern-btn px-5 py-2 fw-bold text-decoration-none">
            Register as Visitor (Licensee)
          </a>
        </div>


      </section>

      <style>{`

        /* HERO */
        .msme-hero {
          position: relative;
          min-height: 50vh;
          margin-top: 72px;
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .msme-overlay {
          position: absolute;
          inset: 0;
        }

        .msme-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }


        .msme-subtitle {
          color: #fff;
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          max-width: 90%;
          margin: 0 auto;
        }

        /* PARTICIPATION NODES */
        .participation-layout {
          margin-top: 1rem;
        }

        .participation-node {
          background: #fff;
          padding: 8px 24px 8px 8px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
        }

        .participation-node:hover {
          transform: translateX(10px) translateY(-2px);
          box-shadow: 10px 10px 30px rgba(0,0,0,0.05);
          border-color: #f08815;
          background: #fffaf5;
        }

        .node-icon-circle {
          width: 44px;
          height: 44px;
          background: rgba(240, 136, 21, 0.08);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f08815;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .participation-node:hover .node-icon-circle {
          background: linear-gradient(135deg, #be0d07, #f08815);
          color: #fff;
        }

        .node-label {
          color: #333;
          font-size: 1.1rem;
          line-height: 1.2;
        }

        .node-sub {
          font-size: 0.85rem;
          white-space: nowrap;
        }

        /* WHY PARTICIPATE CARDS */
        .why-participate-card {
          background: #fff;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05) !important;
          position: relative;
        }

        .why-participate-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }

        .why-icon-box {
          width: 54px;
          height: 54px;
          background: linear-gradient(135deg, rgba(190, 13, 7, 0.1), rgba(240, 136, 21, 0.1));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #be0d07;
          transition: all 0.3s ease;
        }

        .why-participate-card:hover .why-icon-box {
          background: linear-gradient(135deg, #be0d07, #f08815);
          color: #fff;
        }

        /* CARDS */
        .service-card {
          border-radius: 16px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        /* LIST */
        .modern-list li {
          margin-bottom: 10px;
        }

        /* WHY BOX */
        .why-box {
          background: linear-gradient(135deg, #be0d07 0%, #f08815 100%);
        }

        /* BUTTON */
        .modern-btn {
          background: linear-gradient(90deg, #f08815, #be0d07);
          color: #fff;
          border: none;
          border-radius: 30px;
        }

        .modern-btn:hover {
          opacity: 0.9;
        }

        /* SPEAKER TABS */
        .day-tab {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 12px;
          min-width: 140px;
          transition: all 0.3s ease;
          color: #6c757d;
        }

        .day-tab.active {
          background: linear-gradient(135deg, #be0d07 0%, #f08815 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(190, 13, 7, 0.3);
        }

        .day-tab:hover:not(.active) {
          background: #e9ecef;
          color: #343a40;
        }

        /* SPEAKER CARDS */
        .speaker-card {
          border-radius: 20px;
          background: #fff;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.05) !important;
          position: relative;
          overflow: hidden;
        }

        .speaker-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background: linear-gradient(to bottom, #be0d07, #f08815);
          opacity: 0.8;
        }

        .speaker-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          border-color: rgba(190, 13, 7, 0.2) !important;
        }

        .text-primary-gradient {
          background: linear-gradient(90deg, #be0d07, #f08815);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ls-1 {
          letter-spacing: 0.3px;
        }

        .topic-badge {
          display: inline-block;
          padding: 3px 12px;
          background: #be0d07;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          border-radius: 20px;
          letter-spacing: 1px;
        }

        .badge-line {
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(90deg, rgba(190, 13, 7, 0.2), transparent);
        }

        .speaker-topic {
          line-height: 1.6;
          color: #4a5568 !important;
          font-weight: 500;
        }

        .italic {
          font-style: italic;
        }

        .speaker-image-container {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #f08815;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .speaker-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* PARTITION */
        .info-partition {
          position: relative;
        }

        @media (min-width: 768px) {
          .info-partition::before {
            content: "";
            position: absolute;
            left: 0;
            top: 1%;
            bottom: 1%;
            width: 4px;
            background: linear-gradient(to bottom, #be0d07, #f08815);
            opacity: 0.8;
            border-radius: 50%;
          }
        }

        @media (max-width: 767px) {
          .info-partition {
            margin-top: 2rem;
            padding-top: 2rem;
            position: relative;
          }
          .info-partition::before {
            content: "";
            position: absolute;
            top: 0;
            left: 10%;
            right: 10%;
            height: 4px;
            background: linear-gradient(to right, #be0d07, #f08815);
            opacity: 0.8;
            border-radius: 50%;
          }
        }

        .anime-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
