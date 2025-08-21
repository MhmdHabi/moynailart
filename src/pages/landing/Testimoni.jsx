import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants/testimoniData";

export default function Testimoni() {
  // Ambil hanya 5 gambar pertama
  const limitedImages = images.slice(0, 5);

  return (
    <section id="testimoni" className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Judul SEO-friendly */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri Testimoni Pelanggan</h2>

        {/* Deskripsi Pendukung */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Lihat berbagai pengalaman nyata dari pelanggan kami yang puas dengan layanan dan hasil terbaik. Setiap gambar merepresentasikan kepercayaan mereka terhadap kualitas dan profesionalisme kami.
        </p>

        {/* Grid Gallery */}
        <div className="space-y-6 mb-10">
          {/* Baris 1: 3 gambar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {limitedImages.slice(0, 3).map((img, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer">
                <img src={img.src} alt={img.alt} loading="lazy" width="400" height="600" className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg drop-shadow">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Baris 2: 2 gambar di tengah */}
          <div className="flex justify-center gap-6">
            {limitedImages.slice(3, 5).map((img, idx) => (
              <div key={idx + 3} className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer w-full sm:w-1/2 md:w-1/3">
                <img src={img.src} alt={img.alt} loading="lazy" width="400" height="600" className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-semibold text-lg drop-shadow">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Lihat Lebih Banyak */}
        <Link to="/testimoni" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-md">
          Tampilkan Lebih Banyak
        </Link>
      </div>
    </section>
  );
}
