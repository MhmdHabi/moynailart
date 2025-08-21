import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/landing";
import About from "./pages/About";
import Service from "./pages/Service";
import TestimoniPage from "./pages/Testimoni";
import AlamatPage from "./pages/Alamat";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/testimoni" element={<TestimoniPage />} />
        <Route path="/alamat" element={<AlamatPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
