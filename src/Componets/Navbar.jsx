import React from 'react'
import { Menu, ArrowRight } from 'lucide-react';
function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg transition-all duration-500">
      {/* === Left: Logo === */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md">
          V
        </div>
        <span className="font-semibold text-gray-100 text-lg tracking-wide">
          Vortek
        </span>
      </div>

      {/* === Middle: Navigation === */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        {["Home", "About", "Service", "Feature", "Blog"].map((link) => (
          <a
            key={link}
            href="#"
            className="relative group transition-all duration-300"
          >
            <span className="group-hover:text-white transition-all duration-300">
              {link}
            </span>
            <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>

      {/* === Right: Buttons === */}
      <div className="flex items-center gap-3">
        <button className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium border border-white/30 rounded-lg text-gray-200 hover:bg-white hover:text-black transition-all duration-300">
          Get started <ArrowRight size={16} />
        </button>
        <button className="md:hidden p-2 rounded-lg border border-white/30 text-gray-200 hover:bg-white/10 transition-all duration-300">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar