import React from "react";

export default function AboutImage() {
  return (
    <div className="relative">
      <img src="assets/testimoni/testi12.jpg" alt="Nail Art Showcase" className="rounded-3xl shadow-2xl object-cover w-full h-[450px] md:h-[550px]" />
      {/* Decorative element */}
      <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4 rounded-2xl shadow-xl">
        <p className="text-lg font-bold">✨ Aesthetic Nails</p>
        <span className="text-sm opacity-90">Desain Eksklusif</span>
      </div>
    </div>
  );
}
