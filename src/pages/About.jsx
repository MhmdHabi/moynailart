import React from "react";
import AboutImage from "../components/about/AboutImage";
import AboutContent from "../components/about/AboutContent";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto py-10 px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar kiri */}
        <AboutImage />

        {/* Konten kanan */}
        <AboutContent />
      </div>
    </section>
  );
}
