import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "../constants/navItems";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // fungsi scroll ke atas (langsung tanpa delay)
  const handleNavClick = () => {
    window.scrollTo(0, 0); // langsung ke atas tanpa smooth
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.8 }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 font-serif"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation for Moynailart">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-pink-600" aria-label="Moynailart Home">
            <img src="/assets/nav.png" alt="Moynailart Logo" className="w-8 h-8 object-contain" />
            Moynailart
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg text-gray-700 mx-auto tracking-wide">
            {navItems.map((item) => (
              <li key={item.path} className="relative group">
                <Link to={item.path} onClick={handleNavClick} className={`transition-colors duration-300 ${location.pathname === item.path ? "text-pink-600" : "hover:text-pink-600"}`} aria-label={`Go to ${item.label} page`}>
                  {item.label}
                </Link>
                <span className={`absolute left-0 -bottom-1 w-full h-[2px] bg-pink-600 origin-top transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${location.pathname === item.path ? "scale-y-100" : ""}`} />
              </li>
            ))}
          </ul>

          {/* Booking Button */}
          <div className="hidden md:block">
            <Link
              to="https://wa.link/0poqqz"
              target="_blank"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-3 w-full px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-md"
            >
              <FaWhatsapp size={20} />
              Booking
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl text-gray-700" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} className="fixed top-0 right-0 h-screen w-52 bg-white z-50 flex flex-col shadow-lg">
              <button className="absolute top-4 right-4 text-2xl text-gray-700" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <FiX />
              </button>

              {/* Nav Items */}
              <ul className="flex flex-col mt-16 space-y-6 text-gray-700 text-lg font-semibold tracking-wide w-full px-6 bg-white">
                {navItems.map((item) => (
                  <motion.li key={item.path} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="relative w-full">
                    <Link
                      to={item.path}
                      onClick={handleNavClick}
                      className={`block w-full py-2 px-1 rounded-lg transition-colors duration-300 ${location.pathname === item.path ? "text-pink-600" : "hover:text-pink-600"}`}
                      aria-label={`Go to ${item.label} page`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Booking Button di bawah */}
              <div className="mt-5 px-6 pb-8 w-full bg-white">
                <Link
                  to="https://wa.link/0poqqz"
                  target="_blank"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-4 w-full px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors duration-300 shadow-md"
                >
                  <FaWhatsapp size={20} />
                  Booking
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
