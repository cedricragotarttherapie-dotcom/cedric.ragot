import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function Entreprises() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Cédric Ragot</h1>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-amber-700 transition">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-amber-700 transition font-bold">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-amber-700 transition">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-brown-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sonothérapie pour Entreprises</h2>
            <p className="text-xl text-gray-700">Améliorez le bien-être et la productivité de vos équipes</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Services Entreprises</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Séances de Détente', desc: 'Pause bien-être pour vos collaborateurs' },
                { title: 'Formations', desc: 'Ateliers de gestion du stress' },
                { title: 'Événements', desc: 'Animation de vos événements d\'entreprise' },
                { title: 'Coaching', desc: 'Accompagnement personnalisé' },
              ].map((service, i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                  <Briefcase className="text-amber-700 mb-4" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-amber-700 text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Intéressé par nos services?</h3>
            <p className="text-lg mb-8">Contactez-nous pour une proposition personnalisée</p>
            <button className="bg-white text-amber-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition">
              Demander un devis
            </button>
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
