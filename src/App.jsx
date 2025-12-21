import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import MSME from "./pages/msme";


export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/msme" element={<MSME />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
