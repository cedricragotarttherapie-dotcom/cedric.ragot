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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    alert('Demande envoyée');
    setOpenForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat]">

      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-[Cormorant_Garamond] font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link to="/">Accueil</Link>
            <Link to="/particuliers">Particuliers</Link>
            <Link to="/entreprises" className="font-semibold">Entreprises</Link>
            <Link to="/faq">FAQ</Link>
          </nav>

        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-[#947f61]/10 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-[Cormorant_Garamond] font-semibold">
              Sonothérapie en entreprise
            </h2>
            <p className="text-gray-700 mt-2">
              Bien-être, réduction du stress et performance collective
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">

            {[
              ['Séances détente', 'Pause sonore pour vos équipes'],
              ['Gestion stress', 'Ateliers de régulation émotionnelle'],
              ['Événements', 'Animation bien-être entreprise'],
              ['Coaching', 'Accompagnement individuel'],
            ].map((s, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <Briefcase className="text-[#947f61]" />
                <h3 className="font-semibold mt-2">{s[0]}</h3>
                <p className="text-gray-600">{s[1]}</p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#947f61] text-white py-16 text-center">

          <h3 className="text-3xl font-[Cormorant_Garamond] mb-4">
            Demande de devis entreprise
          </h3>

          <button
            onClick={() => setOpenForm(true)}
            className="bg-white text-[#947f61] px-6 py-3 rounded"
          >
            Ouvrir le formulaire
          </button>

        </section>

      </main>

      {/* FORMULAIRE */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">

          <form
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-lg p-6 rounded-xl"
          >

            <input name="name" placeholder="Nom" onChange={handleChange} className="w-full border p-2 mb-2" />
            <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-2" />
            <input name="company" placeholder="Entreprise" onChange={handleChange} className="w-full border p-2 mb-2" />
            <textarea name="message" placeholder="Besoin" onChange={handleChange} className="w-full border p-2 mb-2 h-32" />

            <button className="w-full bg-[#947f61] text-white py-2 rounded">
              Envoyer
            </button>

          </form>

        </div>
      )}

      {/* FOOTER IDENTIQUE HOME */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

          <div>
            <b className="text-white">Zone d'intervention :</b>
            <p className="mt-2">
              Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">

            <p className="text-white font-semibold">Suivez-moi</p>

            <div className="flex gap-4 items-center">

              <a href="https://www.instagram.com/cedric_ragot">
                <Instagram />
              </a>

              <a href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye">
                <img src="/images/logo resalib.jpg" className="w-6 h-6" />
              </a>

            </div>

          </div>

        </div>

        <div className="text-center mt-6 text-sm border-t border-gray-700 pt-6">
          © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
        </div>

      </footer>

    </div>
  );
}