import React from 'react'

const steps = [
  {
    n: '1',
    title: 'Valoración inicial',
    text: 'Conversamos sobre tu historia, hábitos y metas. Definimos un plan personalizado.'
  },
  {
    n: '2',
    title: 'Sesión de hipnosis',
    text: 'Inducción segura y guiada para instalar la “manga gástrica virtual” y nuevas asociaciones.'
  },
  {
    n: '3',
    title: 'Acompañamiento',
    text: 'Seguimiento semanal, audios de refuerzo y herramientas de autocontrol.'
  }
]

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 bg-emerald-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">¿Cómo funciona?</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="bg-white rounded-xl p-6 shadow border border-emerald-100">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                {s.n}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-emerald-700">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
