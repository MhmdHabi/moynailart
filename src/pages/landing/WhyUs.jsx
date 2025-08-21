import React from "react";
import { features } from "../../constants/whyUsData";

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Kenapa Memilih Kami?</h2>

        {/* Deskripsi */}
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Kami hadir untuk memberikan pengalaman terbaik dalam perawatan kuku. Dengan tim profesional dan layanan berkualitas, kamu akan mendapatkan hasil yang memuaskan.</p>

        {/* Grid Features */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}>
              <img src={item.img} alt={item.title} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-700 flex-grow">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
