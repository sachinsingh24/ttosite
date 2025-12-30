import React, { useEffect, Suspense, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

import lazyWithPreload from "./utils/lazyWithPreload";

// Lazy pages
export const Home = lazyWithPreload(() => import("./pages/Home"));
export const About = lazyWithPreload(() => import("./pages/About"));
export const Services = lazyWithPreload(() => import("./pages/Services"));
export const Team = lazyWithPreload(() => import("./pages/Team"));
export const Technology = lazyWithPreload(() => import("./pages/Technology"));
export const MSME = lazyWithPreload(() => import("./pages/msme"));
export const Contact = lazyWithPreload(() => import("./pages/Contact"));
export const PrivacyPolicy = lazyWithPreload(() => import("./pages/PrivacyPolicy"));
export const ErrorPage = lazyWithPreload(() => import("./pages/ErrorPage"));
export const NotFound = lazyWithPreload(() => import("./pages/NotFound"));

const CACHE_KEY = "loaded_routes_cache";

export default function App() {
  const location = useLocation();

  // 🔹 In-memory cache (fast)
  const loadedRoutes = useRef(new Set());

  const [showLoader, setShowLoader] = useState(false);

  // 🔹 Restore cache from sessionStorage on first load
  useEffect(() => {
    const stored = sessionStorage.getItem(CACHE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        parsed.forEach((path) => loadedRoutes.current.add(path));
      } catch {}
    }
  }, []);

  // 🔹 Remove initial HTML loader
  useEffect(() => {
    const loader = document.getElementById("initial-loader");
    if (loader) loader.remove();
  }, []);

  // 🔹 Decide loader visibility on route change
  useEffect(() => {
    const path = location.pathname;

    if (!loadedRoutes.current.has(path)) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
    }
  }, [location.pathname]);

  // 🔹 Mark route as loaded + persist
  const markRouteLoaded = () => {
    const path = location.pathname;

    if (!loadedRoutes.current.has(path)) {
      loadedRoutes.current.add(path);
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify([...loadedRoutes.current])
      );
    }

    setShowLoader(false);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />

      <Navbar />

      {showLoader && <Loader />}

      <main className="flex-fill">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onLoad={markRouteLoaded} />} />
            <Route path="/about" element={<About onLoad={markRouteLoaded} />} />
            <Route path="/services" element={<Services onLoad={markRouteLoaded} />} />
            <Route path="/team" element={<Team onLoad={markRouteLoaded} />} />
            <Route path="/technology" element={<Technology onLoad={markRouteLoaded} />} />
            <Route path="/events/msme-tech-connect" element={<MSME onLoad={markRouteLoaded} />} />
            <Route path="/contact" element={<Contact onLoad={markRouteLoaded} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy onLoad={markRouteLoaded} />} />
            <Route path="/error" element={<ErrorPage onLoad={markRouteLoaded} />} />
            <Route path="*" element={<NotFound onLoad={markRouteLoaded} />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
