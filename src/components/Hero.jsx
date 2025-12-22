import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Hero Carousel with:
// ✔ Dots indicators
// ✔ Auto-slide
// ✔ Next/Prev controls
export default function Hero({ slides = [],size }) {
  return (
    <header>
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000" // auto-slide every 4 seconds
        data-bs-wrap="true"
        data-bs-pause="hover"
      >
        {/* Dots Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button key={index} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div
                style={{
                  height: size,
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Dark Overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.45)",
                  }}
                ></div>

                <div className="text-center hero-text-anim" style={{ position: "relative", zIndex: 2 }}>
                  {slide.img ? <img src={slide.img} alt="msme" className="img-fluid"/> : ""}
                  <h1 className="display-4 fw-bold">{slide.title}</h1>
                  <p className="lead" style={{ width: "75%", margin: "0 auto" }}>
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prev Button */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}
