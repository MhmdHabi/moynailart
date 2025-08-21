import React from "react";

export default function HeroHeading() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Tampil Cantik dengan <span className="text-transparent bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text">Nail Art</span>
        <br />
        <span className="text-pink-600">Profesional</span>
        <span className="inline-block ml-2">✨</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
        Nikmati layanan nail art modern dengan desain unik dan elegan. Kami menggunakan bahan berkualitas tinggi untuk hasil yang tahan lama.
      </p>
    </>
  );
}
