import React from "react";
import { Sparkles, Heart, Award } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Tentang <span className="text-pink-600">Moynailart</span>
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Kami menghadirkan pengalaman nail art premium dengan sentuhan modern, desain kreatif, dan kualitas terbaik. Setiap detail dibuat untuk mengekspresikan keindahan dan kepribadian Anda.
      </p>

      <div className="space-y-6">
        {/* Point 1 */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-md">
            <Award className="text-white" size={26} />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Profesional</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Nail artist bersertifikat dengan pengalaman lebih dari 3 tahun.</p>
          </div>
        </div>

        {/* Point 2 */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-md">
            <Sparkles className="text-white" size={26} />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Produk Premium</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Menggunakan produk berkualitas tinggi agar hasil lebih tahan lama dan aman untuk kuku Anda.</p>
          </div>
        </div>

        {/* Point 3 */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-md">
            <Heart className="text-white" size={26} />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Desain Eksklusif</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Setiap desain dibuat sesuai kepribadian Anda untuk tampilan unik dan elegan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
