import React, { useEffect, useState } from 'react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Menu() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchItems = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/api/items`)
      if (!res.ok) throw new Error('Failed to load menu')
      const data = await res.json()
      setItems(data.items || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const seed = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/seed`, { method: 'POST' })
      if (res.ok) {
        await fetchItems()
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Today’s Menu</h2>
          <p className="text-slate-600 mt-2">Browse our best-sellers and seasonal specials.</p>
        </div>
        <button onClick={seed} className="text-sm font-semibold text-rose-700 hover:text-rose-800">
          Seed demo items
        </button>
      </div>

      {loading && <p className="text-slate-600">Loading...</p>}
      {error && <p className="text-rose-700">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
            {item.image_url && (
              <div className="h-44 bg-slate-100 overflow-hidden">
                <img src={item.image_url + '&crop=entropy'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.category}</p>
                </div>
                <span className="text-rose-700 font-semibold">${Number(item.price).toFixed(2)}</span>
              </div>
              {item.description && (
                <p className="mt-2 text-sm text-slate-700 line-clamp-3">{item.description}</p>
              )}
              <button className="mt-4 w-full rounded-lg bg-rose-600 text-white font-semibold py-2 hover:bg-rose-700 transition disabled:opacity-50" disabled={!item.is_available}>
                {item.is_available ? 'Add to order' : 'Sold out'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
