import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroParticles from "../components/HeroParticles";

export default function Hero({ slides = [] }) {
  return (
    <header className="hero-wrapper">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000" data-bs-wrap="true" data-bs-pause="hover">
        {/* INDICATORS */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button key={index} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`} />
          ))}
        </div>
        <div className="particles">
          <HeroParticles />
        </div>

        {/* SLIDES */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              >
                {/* OVERLAY */}
                <div className="hero-overlay"></div>

                {/* CONTENT */}
                <div className="text-center hero-text-anim banner-content">
                  <h1 className="fw-bold banner-title">{slide.title}</h1>

                  <p className="banner-subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* STYLES */}
      <style>{`
        .hero-wrapper {
          position:relative;

          margin-top: 72px; /* navbar offset */
        }

        .hero-slide {
          position: relative;
          min-height: calc(100vh - 72px);
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </header>
  );
}
