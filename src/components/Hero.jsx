import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Freshly Baked, Every Morning
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Artisanal breads, flaky pastries, and sweet treats made with simple ingredients and a lot of love.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#menu" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">
              Explore the Menu
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 font-semibold hover:bg-white/60 backdrop-blur">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
