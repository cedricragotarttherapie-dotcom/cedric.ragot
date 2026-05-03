import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'Qu\'est-ce que la sonothérapie?', a: 'La sonothérapie est une thérapie holistique qui utilise les vibrations sonores pour favoriser la relaxation et l\'équilibre émotionnel.' },
    { q: 'Comment fonctionne le massage sonore?', a: 'Le massage sonore utilise les bols tibétains pour créer des vibrations qui détendent les muscles et apaisent l\'esprit.' },
    { q: 'Y a-t-il des contre-indications?', a: 'Oui, la sonothérapie est déconseillée pour les femmes enceintes et les personnes avec des implants métalliques.' },
    { q: 'Quel est le tarif?', a: 'Tarif découverte: 59€. Cartes: 3 massages 195€, 5 massages 295€, 8 massages 440€.' },
    { q: 'Comment réserver?', a: 'Vous pouvez réserver via le formulaire de contact ou en cliquant sur le bouton de réservation.' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Cédric Ragot</h1>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-amber-700 transition">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-amber-700 transition">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-amber-700 transition font-bold">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-amber-50 to-brown-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
            <p className="text-xl text-gray-700">Trouvez les réponses à vos questions</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4">
            {faqs.map((faq, i) => (
              <div key={i} className="mb-4 border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-gray-600 transition ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vous avez d'autres questions?</h3>
            <form className="bg-white p-8 rounded-lg shadow">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nom</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" required />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded px-4 py-2" required />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2 h-32" required></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded font-semibold hover:bg-amber-800 transition">
                Envoyer
              </button>
            </form>
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
