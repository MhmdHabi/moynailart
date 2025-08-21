import React from "react";
import { Sparkles, Star, Heart } from "lucide-react";
import HeroBadge from "../../components/hero/HeroBadge";
import HeroHeading from "../../components/hero/HeroHeading";
import HeroCTA from "../../components/hero/HeroCTA";
import HeroImage from "../../components/hero/HeroImage";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white min-h-screen flex items-center relative overflow-hidden pt-24 ">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 text-pink-200 opacity-60">
        <Sparkles size={24} />
      </div>
      <div className="absolute top-40 right-20 text-pink-300 opacity-40">
        <Star size={20} />
      </div>
      <div className="absolute bottom-32 left-20 text-rose-200 opacity-50">
        <Heart size={18} />
      </div>
      <div className="absolute top-60 left-1/4 text-pink-200 opacity-30">
        <Sparkles size={16} />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Konten kiri */}
          <div className="text-center md:text-left space-y-6 md:space-y-10 pt-5">
            <HeroBadge />
            <HeroHeading />
            <HeroCTA />
          </div>

          {/* Gambar kanan */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
