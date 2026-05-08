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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

  const payload = {
    ...formData,
    company: formData.company || null
  };

    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Demande envoyée");
      setFormData({ name: '', email: '', company: '', message: '' });
      setOpenForm(false);
    } else {
      alert("Erreur envoi");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat]">

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between px-4 py-4">
          <h1 className="font-[Cormorant_Garamond] text-2xl font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link to="/">Accueil</Link>
            <Link to="/particuliers">Particuliers</Link>
            <Link to="/entreprises" className="text-[#947f61]">Entreprises</Link>
            <Link to="/faq">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="py-16 bg-[#947f61]/10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-[Cormorant_Garamond] text-4xl mb-2">
              Entreprises
            </h2>
            <p>Bien-être en entreprise</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

            {[
              "Séances bien-être",
              "Ateliers stress",
              "Événements",
              "Coaching"
            ].map((t, i) => (
              <div key={i} className="p-6 border rounded-xl">
                <Briefcase />
                <p className="mt-3">{t}</p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#947f61] text-white text-center">
          <h3 className="text-3xl font-[Cormorant_Garamond] mb-6">
            Demande de devis
          </h3>

          <button
            onClick={() => setOpenForm(true)}
            className="bg-white text-[#947f61] px-6 py-3 rounded"
          >
            Ouvrir formulaire
          </button>
        </section>

      </main>

      {/* FORM MODAL */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <form onSubmit={handleSubmit} className="bg-white p-8 w-full max-w-lg">

            <input name="name" placeholder="Nom" onChange={handleChange} className="w-full border p-2 mb-2" />
            <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-2" />
            <input name="company" placeholder="Entreprise" onChange={handleChange} className="w-full border p-2 mb-2" />
            <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-2 mb-2" />

            <button className="w-full bg-[#947f61] text-white py-2">
              Envoyer
            </button>

          </form>

        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#947f61] text-white py-10">

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

        <div className="text-center mt-8 text-sm border-t border-white/30 pt-6">
          © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
        </div>

      </footer>

    </div>
  );
}