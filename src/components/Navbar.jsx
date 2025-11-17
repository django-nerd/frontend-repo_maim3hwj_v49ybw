import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-emerald-500"></span>
          <span className="font-bold text-emerald-700">Manga Gástrica Virtual</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#beneficios" className="hover:text-emerald-600">Beneficios</a>
          <a href="#como-funciona" className="hover:text-emerald-600">¿Cómo funciona?</a>
          <a href="#testimonios" className="hover:text-emerald-600">Testimonios</a>
          <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          <a href="#agenda" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition">Agenda tu sesión</a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-emerald-50" aria-label="Abrir menú">
          <Menu className="w-6 h-6 text-emerald-700" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
