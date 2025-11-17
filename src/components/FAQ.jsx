import React from 'react'

const faqs = [
  {
    q: '¿Es segura la hipnosis?',
    a: 'Sí. Es un proceso clínico, consciente y respetuoso. Tú mantienes el control en todo momento.'
  },
  {
    q: '¿Cuántas sesiones necesito?',
    a: 'La mayoría nota cambios desde la primera o segunda sesión. Recomendamos un proceso de 4 a 8 semanas.'
  },
  {
    q: '¿Funciona si vivo en otra ciudad?',
    a: 'Sí. Atendemos online para todo Colombia y, según agenda, también presencial.'
  },
  {
    q: '¿Voy a sentir hambre?',
    a: 'El objetivo es reducir la ansiedad y aumentar la saciedad, favoreciendo decisiones más saludables.'
  }
]

const FAQ = () => {
  return (
    <section id="faq" className="py-16 bg-emerald-50/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">Preguntas frecuentes</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white rounded-xl p-6 shadow border border-emerald-100">
              <summary className="cursor-pointer font-semibold text-emerald-700">{f.q}</summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
