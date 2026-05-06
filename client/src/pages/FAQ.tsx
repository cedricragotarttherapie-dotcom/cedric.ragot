// ==============================
// FAQ.tsx
// ==============================

import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Instagram } from "lucide-react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qu'est-ce que la sonothérapie ?",
      a: "La sonothérapie utilise les vibrations sonores pour favoriser la relaxation et l'équilibre émotionnel."
    },
    {
      q: "Comment fonctionne le massage sonore ?",
      a: "Les bols tibétains diffusent des vibrations profondes qui favorisent un relâchement physique et mental."
    },
    {
      q: "Y a-t-il des contre-indications ?",
      a: "Oui, certaines situations nécessitent un avis médical préalable."
    },
    {
      q: "Quel est le tarif ?",
      a: "Séance découverte : 59€. Cartes disponibles à partir de 195€."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat]">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">

        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-3xl tracking-wide text-gray-900 font-[Cormorant_Garamond] font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex items-center gap-8 text-sm">

            <Link to="/" className="text-gray-700 hover:text-[#947f61] transition">
              Accueil
            </Link>

            <Link to="/particuliers" className="text-gray-700 hover:text-[#947f61] transition">
              Particuliers
            </Link>

            <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61] transition">
              Entreprises
            </Link>

            <Link
              to="/faq"
              className="text-[#947f61] transition font-semibold"
            >
              FAQ
            </Link>

          </nav>

        </div>

      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#947f61]/10 to-white py-20">

          <div className="max-w-6xl mx-auto px-4">

            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight font-[Cormorant_Garamond] font-semibold">
              Questions Fréquentes
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Retrouvez les réponses aux questions les plus fréquentes.
            </p>

          </div>

        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">

          <div className="max-w-3xl mx-auto px-4">

            {faqs.map((faq, i) => (

              <div
                key={i}
                className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
              >

                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition"
                >

                  <h3 className="text-lg font-semibold text-gray-900 text-left">
                    {faq.q}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`transition ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />

                </button>

                {openIndex === i && (

                  <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-200">
                    {faq.a}
                  </div>

                )}

              </div>

            ))}

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

          <div>
            <b className="text-white">Zone d'intervention :</b>

            <p className="mt-2">
              Saint-Germain-en-Laye, Le Pecq, Le Vésinet,
              Chatou, L'Étang-la-Ville.
            </p>
          </div>

          <div className="flex flex-col items-end">

            <p className="text-white font-semibold mb-3">
              Suivez-moi
            </p>

            <div className="flex gap-4 items-center">

              <a
                href="https://www.instagram.com/cedric_ragot"
                target="_blank"
              >
                <Instagram />
              </a>

              <a
                href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye"
                target="_blank"
              >
                <img
                  src="/images/logo resalib.jpg"
                  className="w-7 h-7 object-contain"
                />
              </a>

            </div>

          </div>

        </div>

        <div className="text-center mt-8 text-sm border-t border-gray-700 pt-6">
          © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
        </div>

      </footer>

    </div>
  );
}
