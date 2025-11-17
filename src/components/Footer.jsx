import React from 'react'

const Footer = () => {
  return (
    <footer className="py-10 border-t border-emerald-100 bg-white/70">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Manga Gástrica Virtual · Todos los derechos reservados</p>
        <div className="flex gap-4">
          <a href="#inicio" className="hover:text-emerald-700">Inicio</a>
          <a href="#beneficios" className="hover:text-emerald-700">Beneficios</a>
          <a href="#faq" className="hover:text-emerald-700">FAQ</a>
          <a href="https://wa.me/573001112233" target="_blank" rel="noreferrer" className="hover:text-emerald-700">WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
