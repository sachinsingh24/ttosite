import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // ✅ REQUIRED
import HeroParticles from "../components/HeroParticles";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Hero({ slides = [], onReady }) {
  const carouselRef = React.useRef(null);
  const carouselInstance = React.useRef(null);
  const [firstImageReady, setFirstImageReady] = React.useState(false);

  /* -------------------------------------------------
     1️⃣ PRELOAD FIRST SLIDE (LCP SAFE)
  ------------------------------------------------- */
  React.useEffect(() => {
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
     2️⃣ INIT BOOTSTRAP CAROUSEL (SAFE)
  ------------------------------------------------- */
  React.useEffect(() => {
    if (!carouselRef.current || carouselInstance.current) return;

    // const { Carousel } = require("bootstrap");

    carouselInstance.current = new Carousel(carouselRef.current, {
      interval: 4000,
      ride: "carousel",
      pause: false,
      wrap: true,
      touch: true,
      keyboard: false,
    });

    return () => {
      carouselInstance.current?.dispose();
      carouselInstance.current = null;
    };
  }, []);

  /* -------------------------------------------------
     3️⃣ RENDER
  ------------------------------------------------- */
  return (
    <header className="hero-wrapper">
      {/* PARTICLES */}
      <div className="particles">
        <HeroParticles />
      </div>

      {/* CAROUSEL */}
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

                <div className="text-center hero-text-anim banner-content">
                  <h1 className="fw-bold banner-title">{slide.title}</h1>
                  <p className="banner-subtitle">{slide.subtitle}</p>
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
          margin-top: 72px; /* ✅ navbar preserved */
          height: calc(100vh - 72px);
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: radial-gradient(circle at center, #151515 0%, #070707 75%);
        }
        .carousel {
          height: 100%;
        }

        .carousel-inner,
        .carousel-item,
        .hero-slide {
          height: 100%;
        }

        .hero-slide {
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
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
      `}</style>
    </header>
  );
}
