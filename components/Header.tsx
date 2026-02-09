"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Profit3D
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">
              Ferramentas
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">
              Como funciona
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Planos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-medium hover:bg-gradient-primary-hover transition-all shadow-md hover:shadow-lg"
            >
              Começar agora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              href="#features"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Ferramentas
            </a>
            <a
              href="#how-it-works"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como funciona
            </a>
            <a
              href="#pricing"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#faq"
              className="block text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="block px-6 py-2.5 bg-gradient-primary text-white rounded-lg font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Começar agora
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
