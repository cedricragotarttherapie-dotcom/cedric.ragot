import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Particuliers() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Cédric Ragot</h1>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-blue-600 transition font-bold">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-blue-600 transition">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Séances pour Particuliers</h2>
            <p className="text-xl text-gray-700">Découvrez nos offres personnalisées de sonothérapie et massage sonore</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nos Tarifs</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: 'Découverte', price: '59€', desc: 'Séance unique' },
                { name: 'Carte 3', price: '195€', desc: '3 massages' },
                { name: 'Carte 5', price: '295€', desc: '5 massages' },
                { name: 'Carte 8', price: '440€', desc: '8 massages' },
              ].map((plan, i) => (
                <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <p className="text-gray-700 mb-6">{plan.desc}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">
                    Réserver
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Avis Clients</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Marie', text: 'Une expérience transformatrice!' },
                { name: 'Jean', text: 'Relaxation profonde garantie' },
                { name: 'Sophie', text: 'Je recommande vivement!' },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Heart key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Cédric Ragot - Sonothérapie. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
