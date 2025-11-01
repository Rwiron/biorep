import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="/" className="flex items-center space-x-2 md:space-x-3">
            <img src="/bioreplogo.png" alt="Biorep Labs Logo" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            <span className="text-lg md:text-xl font-semibold text-gray-900 tracking-tight">Biorep Labs</span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#about" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              About
            </a>
            <a href="#services" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#research" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Research
            </a>
            <a href="#contact" className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Contact
            </a>
            <button className="ml-4 px-6 py-2.5 bg-[#4e74d0] text-white text-sm font-semibold rounded-full hover:bg-[#3d5fb8] transition-all hover:shadow-lg hover:shadow-[#4e74d0]/30">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              About
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Services
            </a>
            <a href="#research" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Research
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              Contact
            </a>
            <button onClick={() => setIsMenuOpen(false)} className="w-full mt-2 px-6 py-2.5 bg-[#4e74d0] text-white text-sm font-semibold rounded-full hover:bg-[#3d5fb8] transition-all">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
