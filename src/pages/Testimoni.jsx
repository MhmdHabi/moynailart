import React from "react";
import { images } from "../constants/testimoniData";

export default function TestimoniPage() {
  return (
    <section className="bg-white py-20 mt-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Judul SEO-friendly */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Semua <span className="text-pink-600">Testimoni Pelanggan</span>
        </h1>

        {/* Deskripsi Pendukung */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">Temukan lebih banyak pengalaman nyata dari pelanggan yang telah mempercayakan layanan kami. Setiap gambar adalah bukti kepuasan dan hasil terbaik yang selalu kami berikan.</p>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer border border-pink-200 bg-white hover:bg-pink-100/40 transition-all duration-500">
              <img src={img.src} alt={img.alt} loading="lazy" width="400" height="600" className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-semibold text-lg drop-shadow">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
