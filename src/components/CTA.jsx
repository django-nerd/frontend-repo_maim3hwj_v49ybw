import React from 'react'

const CTA = () => {
  return (
    <section id="agenda" className="py-16">
      <div className="max-w-3xl mx-auto px-4 text-center bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-2xl p-10 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold">Da tu primer paso hoy</h2>
        <p className="mt-3 text-emerald-50">Agenda una valoración inicial sin costo y recibe una guía para empezar a gestionar la ansiedad.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/573001112233?text=Hola%20quiero%20información%20sobre%20Manga%20Gástrica%20Virtual" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-emerald-700 font-semibold rounded-md hover:bg-emerald-50 transition">Escríbeme por WhatsApp</a>
          <a href="mailto:contacto@tuconsulta.com?subject=Quiero%20agenda%20Manga%20G%C3%A1strica%20Virtual" className="px-6 py-3 bg-emerald-800/30 text-white font-semibold rounded-md hover:bg-emerald-800/40 transition">Agendar por correo</a>
        </div>
        <p className="mt-4 text-emerald-100 text-sm">Atención confidencial. Cupos limitados por agenda.</p>
      </div>
    </section>
  )
}

export default CTA
