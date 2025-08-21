import { Link } from "react-router-dom";
import navItems from "../constants/navItems";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-rose-200 text-gray-800 py-10 font-serif">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Logo */}
        <h2 className="text-2xl font-extrabold text-pink-700">Moynailart</h2>

        {/* Navigation (flex center) */}
        <ul className="flex flex-wrap justify-center gap-6 mt-6 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-pink-600 transition-colors duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Deskripsi */}
        <p className="mt-4 text-sm text-gray-700 max-w-md mx-auto leading-relaxed">Kecantikan adalah kepercayaan diri. Kami membantu Anda bersinar setiap hari. ✨</p>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 text-2xl mt-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition-transform duration-300 transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-pink-600 transition-transform duration-300 transform hover:scale-110">
            <FaWhatsapp />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-rose-300 mt-8 pt-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Moynailart. All rights reserved.</div>
      </div>
    </footer>
  );
}
