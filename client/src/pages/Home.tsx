import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-2xl italic font-serif tracking-wide text-gray-900">
            Cédric Ragot
          </h1>

          <nav className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-[#947f61]">Accueil</Link>
            <Link to="/particuliers" className="text-gray-700 hover:text-[#947f61]">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61]">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#947f61]">FAQ</Link>

            <a href="https://www.instagram.com/cedric_ragot" target="_blank">
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
              <h2 className="text-5xl font-serif italic tracking-wide text-gray-900 mb-6">
                Trouvez la Paix Intérieure
              </h2>

              <p className="text-xl text-gray-700 mb-4">
                Découvrez les bienfaits transformateurs de la sonothérapie et du massage sonore aux bols tibétains
              </p>

              <p className="text-gray-600 mb-8">
                Vous êtes stressé.e, anxieux.se, ou simplement en quête de récupération ?
                Les vibrations harmonieuses des bols tibétains offrent une relaxation profonde et une régulation émotionnelle naturelle.
              </p>

              <div className="flex gap-4">
                <Link to="/particuliers" className="bg-[#947f61] text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  En savoir plus <ChevronRight size={16} />
                </Link>

                <Link to="/faq" className="border border-[#947f61] text-[#947f61] px-6 py-3 rounded-lg">
                  Contact
                </Link>
              </div>
            </div>

            <img src="/images/hero.jpg" className="rounded-xl shadow-lg" />

          </div>
        </section>

        {/* KPI BANNER */}
        <section className="py-12 bg-[#947f61] text-white text-center">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-2xl font-bold">11</p>
              <p>Avis clients 5 étoiles</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p>Satisfaction client</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1h</p>
              <p>Durée d'une séance</p>
            </div>
          </div>
        </section>

        {/* À PROPOS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

            <img src="/images/profil.jpg" className="rounded-xl shadow-lg" />

            <div>
              <h3 className="text-3xl italic font-serif mb-4">À Propos</h3>

              <p className="mb-4 text-gray-700">
                Je suis Cédric Ragot, praticien en sonothérapie basé à Saint-Germain-en-Laye.
              </p>

              <p className="text-gray-700">
                Les bols tibétains permettent une relaxation profonde et une régulation émotionnelle naturelle.
              </p>
            </div>

          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-20 bg-white">
          <h3 className="text-3xl text-center italic font-serif mb-12">Pourquoi Choisir Cédric ?</h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">

            <div className="p-6 border rounded-xl">
              <b>Professionnel Certifié</b>
              <p>Formation en sonothérapie et expérience avancée.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Approche Personnalisée</b>
              <p>Chaque séance adaptée à vos besoins.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Résultats Concrets</b>
              <p>Relaxation, sommeil, stress dès la 1ère séance.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Flexibilité de Paiement</b>
              <p>Carte bancaire + formules avantageuses.</p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50">
          <h3 className="text-3xl text-center italic font-serif mb-12">Nos Services</h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

            <div className="p-6 border rounded-xl">
              <h4>Découverte</h4>
              <p>59€ - 1h</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4>Cartes</h4>
              <p><Link to="/particuliers">Voir tarifs</Link></p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4>Entreprises</h4>
              <p><Link to="/entreprises">Sur devis</Link></p>
            </div>

          </div>
        </section>

        {/* AVIS */}
        <section className="py-20 text-center">
          <h3 className="text-3xl italic font-serif mb-10">Avis Clients</h3>

          <p className="text-xl">⭐⭐⭐⭐⭐</p>
          <p>Expérience unique et profondément relaxante</p>
        </section>

        {/* RESALIB + INSTAGRAM */}
        <section className="py-10 flex justify-center gap-6">

          <a href="https://www.instagram.com/cedric_ragot">
            <Instagram />
          </a>

          <a href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye">
            <img src="/images/logo resalib.jpg" className="w-6 h-6" />
          </a>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 text-center">

        <p className="mb-4">
          <Link to="/faq">Contact via formulaire FAQ</Link>
        </p>

        <p>© 2024 Cédric Ragot</p>

      </footer>

    </div>
  );
}