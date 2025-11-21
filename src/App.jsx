import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 via-white to-white text-slate-800">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-lg bg-rose-600 inline-block" />
            <span className="font-extrabold tracking-tight text-xl">Sunrise Bakery</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#menu" className="hover:text-rose-700">Menu</a>
            <a href="#about" className="hover:text-rose-700">About</a>
            <a href="#contact" className="hover:text-rose-700">Contact</a>
            <a href="/test" className="px-3 py-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700">Status</a>
          </nav>
        </div>
      </header>

      <Hero />
      <Menu />
      <About />

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold">Pre-order by phone</h3>
          <p className="mt-2 text-slate-700">Call us to reserve your favorites for pickup. We’ll have them ready when you arrive.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="tel:5551234567" className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700 transition">
              Call (555) 123-4567
            </a>
            <a href="mailto:hello@sunrisebakery.com" className="inline-flex items-center justify-center rounded-lg border border-rose-200 px-5 py-3 font-semibold text-rose-700 hover:bg-white">
              Email us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
