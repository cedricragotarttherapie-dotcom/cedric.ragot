import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Cédric Ragot</h1>

          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#947f61] transition">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-[#947f61] transition">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61] transition">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#947f61] transition">FAQ</Link>

            <a href="https://www.instagram.com/cedric_ragot" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#947f61] transition">
              <Instagram size={20} />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#947f61]/10 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trouvez la Paix Intérieure
              </h2>

              <p className="text-xl text-gray-700 mb-8">
                Découvrez les bienfaits transformateurs de la sonothérapie et du massage sonore aux bols tibétains
              </p>

              <div className="flex gap-4">
                <Link to="/particuliers" className="bg-[#947f61] text-white px-8 py-3 rounded-lg hover:opacity-90 transition flex items-center gap-2">
                  En savoir plus <ChevronRight size={16} />
                </Link>

                <Link to="/faq" className="border-2 border-[#947f61] text-[#947f61] px-8 py-3 rounded-lg hover:bg-[#947f61]/10 transition">
                  Questions fréquentes
                </Link>
              </div>
            </div>

            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/hero.jpg"
                alt="Massage sonore"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </section>

        {/* A PROPOS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6">À Propos</h3>

            <p className="text-gray-700 mb-4">
              Je suis Cédric Ragot, praticien en sonothérapie basé à Saint-Germain-en-Laye.
            </p>

            <p className="text-gray-700">
              Les bols tibétains permettent une relaxation profonde et une régulation émotionnelle naturelle.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="text-4xl font-bold mb-12">Services</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {["Individuel", "Groupe", "Entreprise"].map((t, i) => (
                <div key={i} className="p-8 border rounded-xl shadow-soft">
                  <h4 className="text-xl font-bold mb-3">{t}</h4>
                  <p className="text-gray-600">Relaxation profonde</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVIS */}
        <section className="py-20 bg-gray-50 text-center">
          <h3 className="text-3xl font-bold mb-10">Avis Clients</h3>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
            {["Incroyable", "Très pro", "Apaisant"].map((t, i) => (
              <div key={i} className="p-6 border rounded-xl shadow-soft">
                ⭐⭐⭐⭐⭐
                <p className="mt-3">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CALENDLY */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">
              Réserver une séance
            </h3>

            <iframe
              src="https://calendly.com/cedricragot/sonotherapie"
              width="100%"
              height="700"
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-3 gap-8 mb-8">

            <div>
              <h5 className="text-white font-bold mb-4">Navigation</h5>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4">Contact</h5>
              <p className="flex items-center gap-2">
                <Mail size={16} /> Voir formulaire de contact page FAQ
              </p>
              <p className="flex items-center gap-2 mt-2">
                <MapPin size={16} /> Saint-Germain-en-Laye
              </p>
            </div>

            <div>
              <h5 className="text-white font-bold mb-4">Suivez-nous</h5>
              <a href="https://www.instagram.com/cedric_ragot" target="_blank" className="flex items-center gap-2">
                <Instagram size={20} /> Instagram
              </a>
            </div>

          </div>

          <p className="text-center">© 2024 Cédric Ragot</p>
        </div>
      </footer>

      {/* BOUTON RESALIB FIX */}
      <a
        href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#947f61] text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90"
      >
        Réserver
      </a>

    </div>
  );
}