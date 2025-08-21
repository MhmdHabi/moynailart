import React from "react";
import HeroImageFile from "/assets/hero.jpg";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center md:justify-end mt-8 md:mt-0">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-3xl transform rotate-6 scale-105"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-300/20 to-rose-300/20 rounded-3xl transform -rotate-3 scale-110"></div>

      {/* Main image container */}
      <div className="relative right-0 lg:right-14 z-10 bg-white px-3 sm:px-4 rounded-3xl shadow-2xl">
        <img src={HeroImageFile} alt="Tangan dengan Nail Art" loading="lazy" className="w-full max-w-[250px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[400px] rounded-2xl object-cover" />

        {/* Floating elements */}
        <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Premium Quality</span>
          </div>
        </div>

        <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-3 sm:p-4 rounded-2xl shadow-lg">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold">100%</div>
            <div className="text-[10px] sm:text-xs opacity-90">Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}
