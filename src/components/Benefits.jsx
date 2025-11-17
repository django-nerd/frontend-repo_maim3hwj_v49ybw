import React from 'react'

const cards = [
  {
    title: 'Menos ansiedad',
    text: 'Reduce los atracones y el hambre emocional con herramientas mentales prácticas.',
  },
  {
    title: 'Relación sana con la comida',
    text: 'Reprograma hábitos y mejora tu autocontrol desde el subconsciente.',
  },
  {
    title: 'Resultados reales',
    text: 'Casos que reportan pérdida de peso y bienestar sostenido con seguimiento.',
  },
]

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">Beneficios</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          Un proceso respetuoso con tu cuerpo y tu mente, diseñado para el público colombiano y basado en hipnosis clínica.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="bg-white rounded-xl p-6 shadow border border-emerald-100">
              <h3 className="font-semibold text-lg text-emerald-700">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
