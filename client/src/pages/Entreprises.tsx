import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
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

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log('✅ QUOTE RESPONSE:', result);

      if (!res.ok) {
        alert("Erreur lors de l'envoi");
        return;
      }

      alert('Demande de devis envoyée !');
      setFormData({ name: '', email: '', company: '', message: '' });
      setOpenForm(false);

    } catch (err) {
      console.error('❌ QUOTE ERROR:', err);
      alert('Erreur réseau');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Cédric Ragot</h1>
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#947f61] transition">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-[#947f61] transition">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61] transition font-bold">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#947f61] transition">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#947f61] to-brown-50 py-16">
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
                { title: 'Événements', desc: "Animation de vos événements d'entreprise" },
                { title: 'Coaching', desc: 'Accompagnement personnalisé' },
              ].map((service, i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-lg hover:shadow-lg transition">
                  <Briefcase className="text-[#947f61] mb-4" size={32} />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#947f61] text-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Intéressé par nos services?</h3>
            <p className="text-lg mb-8">Contactez-nous pour une proposition personnalisée</p>

            <button
              onClick={() => setOpenForm(true)}
              className="bg-white text-[#947f61] px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Demander un devis
            </button>
          </div>
        </section>

      </main>

      {/* MODAL FORM */}
      {openForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white w-full max-w-lg rounded-lg p-8 relative">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Demande de devis
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Entreprise"
                value={formData.company}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded"
              />

              <textarea
                name="message"
                placeholder="Votre besoin"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-2 mb-4 rounded h-32"
                required
              />

              <button
                type="submit"
                className="w-full bg-[#947f61] text-white py-3 rounded font-semibold hover:bg-[#7d6a52]"
              >
                Envoyer la demande
              </button>

            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Cédric Ragot - Sonothérapie. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}
