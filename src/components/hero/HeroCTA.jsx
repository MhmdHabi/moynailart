import React from "react";
import { Sparkles, Star } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      {/* Booking tetap ke halaman booking */}
      <a
        href="https://wa.link/0poqqz"
        target="_blank"
        className="group inline-flex items-center cursor-pointer justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
        Booking Sekarang
      </a>

      {/* Scroll ke section testimoni */}
      <ScrollLink
        to="testimoni"
        smooth={true}
        duration={800}
        offset={-60}
        className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-pink-200 text-pink-600 font-semibold hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
      >
        Lihat Portfolio
        <Star size={18} />
      </ScrollLink>
    </div>
  );
}
