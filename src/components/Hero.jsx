import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroParticles from "../components/HeroParticles";

export default function Hero({ slides = [], onReady }) {
  const carouselRef = useRef(null);
  const [firstImageReady, setFirstImageReady] = useState(false);

  /* -------------------------------------------------
     1️⃣ PRELOAD ONLY FIRST SLIDE (LCP-correct)
  ------------------------------------------------- */
  useEffect(() => {
    if (!slides.length) {
      onReady?.();
      return;
    }

    const img = new Image();
    img.src = slides[0].imageUrl;

    img.onload = img.onerror = () => {
      requestAnimationFrame(() => {
        setFirstImageReady(true);
        onReady?.();
      });
    };
  }, [slides, onReady]);

  /* -------------------------------------------------
     2️⃣ INITIALIZE BOOTSTRAP CAROUSEL
  ------------------------------------------------- */
  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = new Carousel(carouselRef.current, {
      interval: 5000,
      ride: "carousel",
      pause: false,
      wrap: true,
      touch: true,
      keyboard: false,
    });

    return () => carousel.dispose();
  }, []);

  /* -------------------------------------------------
     3️⃣ RENDER
  ------------------------------------------------- */
  return (
    <header className="hero-wrapper">
      {/* ================= PARTICLES (OUTSIDE CAROUSEL) ================= */}
      <div className="particles">
        <HeroParticles />
      </div>

      {/* ================= CAROUSEL ================= */}
      <div
        ref={carouselRef}
        id="heroCarousel"
        className="carousel slide carousel-fade"
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
                className={`hero-slide ${
                  firstImageReady ? "hero-visible" : "hero-hidden"
                }`}
                style={{
                  backgroundImage:
                    firstImageReady || index !== 0
                      ? `url(${slide.imageUrl})`
                      : "none",
                }}
              >
                <div className="hero-overlay" />

                <div className="hero-content text-center">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
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

      {/* ================= CSS ================= */}
      <style>{`
        .hero-wrapper {
          margin-top: 72px;
          height: calc(100vh - 72px);
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: radial-gradient(circle at center, #151515 0%, #070707 75%);
        }

        /* PARTICLES */
        .hero-wrapper .particles {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-wrapper .particles canvas {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
          display: block;
        }

        /* CAROUSEL LAYERS */
        .carousel,
        .carousel-inner,
        .carousel-item,
        .hero-slide {
          position: relative;
          z-index: 1;
          height: 100%;
        }

        .hero-slide {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          background-color: #070707;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hero-slide.hero-visible {
          opacity: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          color: #fff;
        }

        .hero-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          opacity: 0.9;
        }
      `}</style>
    </header>
  );
}
