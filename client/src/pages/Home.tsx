import { Link } from 'react-router-dom';
import { MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* TITRE (moins italique, plus clean premium) */}
          <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
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
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                Trouvez la Paix Intérieure
              </h2>

              <p className="text-lg text-gray-700 mb-6">
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

            {/* IMAGE légèrement réduite */}
            <img
              src="/images/hero.jpg"
              className="rounded-xl shadow-lg max-h-[420px] object-cover"
            />

          </div>
        </section>

        {/* KPI BANNER */}
        <section className="py-10 bg-[#947f61] text-white text-center">
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

        {/* À PROPOS (image + texte rééquilibré) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

            <img
              src="/images/profil.jpg"
              className="rounded-xl shadow-lg max-h-[380px] object-cover"
            />

            <div>
              <h3 className="text-3xl font-semibold mb-4">À Propos</h3>

              <p className="text-gray-700 mb-4">
                Je suis Cédric Ragot, praticien en sonothérapie basé à Saint-Germain-en-Laye. Depuis plusieurs années, j'accompagne les personnes en quête de détente profonde et de régulation émotionnelle.
              </p>

              <p className="text-gray-700">
                Ma pratique repose sur l'utilisation des bols tibétains et des diapasons thérapeutiques, deux outils puissants pour relâcher les tensions et retrouver un équilibre physique et mental.
              </p>
            </div>

          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-20 bg-white">
          <h3 className="text-3xl text-center font-semibold mb-12">Pourquoi Choisir Cédric ?</h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">

            <div className="p-6 border rounded-xl">
              <b>Professionnel Certifié</b>
              <p>Formation en sonothérapie et expérience approfondie.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Approche Personnalisée</b>
              <p>Séances adaptées à vos besoins.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Résultats Concrets</b>
              <p>Relaxation et régulation émotionnelle rapide.</p>
            </div>

            <div className="p-6 border rounded-xl">
              <b>Flexibilité de Paiement</b>
              <p>Cartes et paiement sécurisé Stripe.</p>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50">
          <h3 className="text-3xl text-center font-semibold mb-12">Nos Services</h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Séance Découverte</h4>
              <p>59 € - 1h de relaxation profonde</p>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Cartes de Massages</h4>
              <p>À partir de 195 €</p>
              <Link to="/particuliers" className="text-[#947f61]">Voir tarifs</Link>
            </div>

            <div className="p-6 border rounded-xl">
              <h4 className="font-semibold mb-2">Entreprises</h4>
              <Link to="/entreprises" className="text-[#947f61]">Sur devis</Link>
            </div>

          </div>
        </section>

        {/* AVIS CLIENTS (remplacés) */}
        <section className="py-20 bg-white">
          <h3 className="text-3xl text-center font-semibold mb-10">Avis Clients</h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

            {[
              "Après avoir testé une séance de massage sonore avec Cédric, j'ai été agréablement surprise...",
              "Je suis absolument ravie de ma séance de massage sonore...",
              "Une expérience transformatrice. Les vibrations m'ont permis de relâcher...",
              "Cédric est un véritable professionnel. Son écoute est exceptionnelle..."
            ].map((t, i) => (
              <div key={i} className="p-6 border rounded-xl">
                ⭐⭐⭐⭐⭐
                <p className="mt-3 text-sm">{t}</p>
              </div>
            ))}

          </div>
        </section>

        {/* CTA CALENDLY + BANNER */}
        <section className="py-20 bg-[#947f61] text-white text-center">

          <h3 className="text-3xl font-semibold mb-4">
            Découvrez comment la sonothérapie peut transformer votre bien-être
          </h3>

          <div className="flex justify-center gap-4 mb-8">
            <Link to="/particuliers" className="bg-white text-[#947f61] px-6 py-3 rounded">
              En savoir plus
            </Link>

            <a
              href="https://calendly.com/cedricragot/sonotherapie"
              target="_blank"
              className="border px-6 py-3 rounded"
            >
              Réserver maintenant
            </a>
          </div>

        </section>

        {/* FOOTER COMPLET */}
        <footer className="bg-gray-900 text-gray-300 py-10">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

            <div>
              <b>Zone d'intervention</b>
              <p>Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville</p>
            </div>

            <div className="flex gap-4 items-center justify-end">

              <a href="https://www.instagram.com/cedric_ragot">
                <Instagram />
              </a>

              <a href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye">
                <img src="/images/logo resalib.jpg" className="w-6 h-6" />
              </a>

            </div>

          </div>

          <div className="text-center mt-6 text-sm">
            © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
          </div>

        </footer>

      </main>
    </div>
  );
}