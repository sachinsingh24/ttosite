import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Hero Carousel with:
// ✔ Dots indicators
// ✔ Auto-slide
// ✔ Next/Prev controls
export default function Hero({ slides = [] }) {
  return (
    <header>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"  // auto-slide every 4 seconds
      >
        {/* Dots Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div
                style={{
                  height: '100vh',
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Dark Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0, 0, 0, 0.45)'
                  }}
                ></div>

                <div className="text-center" style={{ position: 'relative', zIndex: 2 }}>
                  <h1 className="display-4 fw-bold">{slide.title}</h1>
                  <p className="lead">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}
