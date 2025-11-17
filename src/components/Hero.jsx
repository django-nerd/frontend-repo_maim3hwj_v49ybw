import React from 'react'

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-800">
            Manga Gástrica Virtual
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Terapia de hipnosis clínica para tomar control de la ansiedad, mejorar tu relación con la comida y perder peso de forma natural y segura.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex gap-3"><span className="text-emerald-600">✓</span> Enfoque 100% no invasivo</li>
            <li className="flex gap-3"><span className="text-emerald-600">✓</span> Acompañamiento profesional</li>
            <li className="flex gap-3"><span className="text-emerald-600">✓</span> Resultados desde las primeras sesiones</li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#agenda" className="inline-flex justify-center items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition">
              Agenda tu valoración
            </a>
            <a href="#beneficios" className="inline-flex justify-center items-center px-6 py-3 bg-white text-emerald-700 font-semibold rounded-md border border-emerald-200 hover:bg-emerald-50 transition">
              Ver beneficios
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">Atención para Colombia. Sesiones online o presenciales según disponibilidad.</p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 shadow-inner" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-70" />
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-cyan-100 rounded-full blur-2xl opacity-70" />
        </div>
      </div>
    </section>
  )
}

export default Hero
