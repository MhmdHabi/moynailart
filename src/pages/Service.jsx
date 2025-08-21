import React from "react";
import { Home, Scissors, Palette, Sparkles } from "lucide-react";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Nail Art Premium",
      desc: "Desain kuku kreatif dengan gaya modern dan bahan berkualitas tinggi.",
      icon: <Palette size={28} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Manicure & Pedicure",
      desc: "Perawatan kuku profesional untuk menjaga kesehatan dan keindahan kuku.",
      icon: <Scissors size={28} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 3,
      title: "Home Service",
      desc: "Layanan nail art langsung ke rumah Anda dengan kenyamanan dan kualitas terbaik.",
      icon: <Home size={28} />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Layanan <span className="text-pink-600">Kami</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Kami menghadirkan berbagai layanan premium untuk memenuhi kebutuhan kecantikan dan kenyamanan Anda. Mulai dari nail art eksklusif hingga layanan home service langsung ke rumah Anda.
        </p>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-6 flex flex-col items-center text-center border border-pink-100">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}>{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
