import React from 'react'

const testimonials = [
  {
    name: 'Carolina, Bogotá',
    text: 'Desde la segunda sesión disminuyó mi ansiedad. He bajado 6 kilos y me siento con más energía.'
  },
  {
    name: 'Mauricio, Medellín',
    text: 'Me ayudó a dejar el picoteo nocturno. Ahora tengo control y no sufro con las dietas.'
  },
  {
    name: 'Luisa, Cali',
    text: 'Pensé que la hipnosis era rara, pero fue muy profesional y efectivo. Mi ropa me queda mejor.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center">Testimonios</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow border border-emerald-100">
              <p className="text-gray-700">“{t.text}”</p>
              <p className="mt-4 font-semibold text-emerald-700">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
