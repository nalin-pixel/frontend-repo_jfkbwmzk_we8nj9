import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-white text-lg">Sunrise Bakery</h3>
          <p className="mt-2 text-slate-400">123 Baker Street • Open daily 7am – 4pm</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="mt-2 text-slate-400">(555) 123-4567</p>
          <p className="text-slate-400">hello@sunrisebakery.com</p>
        </div>
        <div className="md:text-right">
          <a href="/test" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-white font-semibold hover:bg-white/20 transition">
            Backend status
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">© {new Date().getFullYear()} Sunrise Bakery. All rights reserved.</div>
    </footer>
  )
}

export default Footer
