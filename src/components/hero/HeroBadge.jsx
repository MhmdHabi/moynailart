import React from "react";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-pink-100">
      <Sparkles className="text-pink-500" size={16} />
      <span className="text-sm font-medium text-gray-700">Nail Art Profesional #1</span>
    </div>
  );
}
