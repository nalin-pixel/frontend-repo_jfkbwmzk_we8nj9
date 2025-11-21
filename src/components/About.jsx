import React from 'react'

function About() {
  return (
    <section id="about" className="bg-rose-50/50 border-t border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Story</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            We started as a small kitchen with a big passion: bringing warm bread and sweet moments to our neighborhood. Today, we still bake in small batches using seasonal ingredients and time-honored techniques.
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Slow-fermented doughs for depth of flavor</li>
            <li>• Real butter, Belgian chocolate, organic flour</li>
            <li>• Baked every morning, sold the same day</li>
          </ul>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden shadow">
          <img
            src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?q=80&w=1600&auto=format&fit=crop"
            alt="Baker shaping dough"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About
