// ==============================
// ENTREPRISES.tsx
// ==============================

import { Link } from 'react-router-dom';
import { Briefcase, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Entreprises() {

  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert("Erreur lors de l'envoi");
        return;
      }

      alert('Demande envoyée avec succès');

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });

      setOpenForm(false);

    } catch {
      alert('Erreur réseau');
    }
  };

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

            <Link
              to="/entreprises"
              className="text-[#947f61] transition font-semibold"
            >
              Entreprises
            </Link>

            <Link to="/faq" className="text-gray-700 hover:text-[#947f61] transition">
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
              Sonothérapie pour Entreprises
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed">
              Offrez à vos équipes un espace de détente, de récupération et de régulation du stress.
            </p>

          </div>

        </section>

        {/* Services */}
        <section className="py-20 bg-white">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-12 font-[Cormorant_Garamond] font-semibold text-gray-900">
              Services Entreprises
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              {[
                { title: 'Séances de Détente', desc: 'Pause bien-être pour vos collaborateurs' },
                { title: 'Formations', desc: 'Ateliers de gestion du stress' },
                { title: 'Événements', desc: "Animation de vos événements d'entreprise" },
                { title: 'Coaching', desc: 'Accompagnement personnalisé' },
              ].map((service, i) => (

                <div
                  key={i}
                  className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition"
                >

                  <Briefcase className="text-[#947f61] mb-4" size={32} />

                  <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>

                </div>

              ))}

            </div>

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
