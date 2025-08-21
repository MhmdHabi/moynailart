import React from "react";
import { CheckCircle } from "lucide-react";
import { plans } from "../../constants/pricingData";

export default function Pricing() {
  return (
    <section className="bg-rose-100 py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
          Pilih Paket <span className="text-pink-600"> Nail Art</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Sesuaikan layanan dengan kebutuhanmu. Kami menyediakan paket mulai dari perawatan sederhana hingga tampilan elegan ✨</p>

        {/* Grid Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.id} className={`relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col ${plan.popular ? "border-2 border-pink-500 scale-105" : ""}`}>
              {/* Label Populer */}
              {plan.popular && <span className="absolute -top-3 right-6 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">Populer</span>}

              {/* Nama & Harga */}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-2xl font-extrabold text-pink-600 mt-2">Start from {plan.price}</p>
              <p className="text-gray-500 mt-2 mb-6">{plan.desc}</p>

              {/* Fitur */}
              <ul className="text-gray-700 space-y-3 mb-6 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-pink-500" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Tombol */}
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:from-pink-600 hover:to-rose-600 transition-colors duration-300">Pilih Paket</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
