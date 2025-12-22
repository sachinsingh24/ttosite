import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero({ slides = [] }) {
  return (
    <header className="hero-wrapper">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        data-bs-wrap="true"
        data-bs-pause="hover"
      >
        {/* INDICATORS */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* SLIDES */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
              >
                {/* OVERLAY */}
                <div className="hero-overlay"></div>

                {/* CONTENT */}
                <div className="hero-content text-center hero-text-anim">
                  <h1 className="hero-title">
                    {slide.title}
                  </h1>

                  <p className="hero-subtitle">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* STYLES */}
      <style>{`
        .hero-wrapper {
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
          background: rgba(0, 0, 0, 0.45);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          color: #fff;
        }

        .hero-title {
          color: #f08815;
          font-weight: 700;
          font-size: clamp(1.8rem, 5vw, 3rem);
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          max-width: 90%;
          margin: 0.75rem auto 0;
        }

        /* MOBILE TWEAKS */
        @media (max-width: 576px) {
          .hero-slide {
            min-height: 70vh;
          }
        }
      `}</style>
    </header>
  );
}
