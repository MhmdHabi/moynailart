import React from "react";
import { Users, Star, Palette, Award } from "lucide-react";

export default function Stats() {
  const stats = [
    { id: 1, title: "Klien Puas", value: "1,200+", icon: <Users size={22} /> },
    { id: 2, title: "Desain Nail Art", value: "500+", icon: <Palette size={22} /> },
    { id: 3, title: "Rating", value: "4.9/5", icon: <Star size={22} /> },
    { id: 4, title: "Pengalaman", value: "3+ Tahun", icon: <Award size={22} /> },
  ];

  return (
    <section className="bg-rose-100 py-14">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-pink-100">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 mx-auto bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-xl mb-3">{item.icon}</div>

              {/* Value */}
              <h3 className="text-xl font-bold text-gray-900">{item.value}</h3>

              {/* Title */}
              <p className="text-sm text-pink-600 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
