import { Link } from 'react-router-dom';
import { Heart, MapPin, Mail, Instagram, ChevronRight } from 'lucide-react';

export default function Home() {
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
            <Link to="/faq" className="text-gray-700 hover:text-amber-700 transition">FAQ</Link>
            <a href="https://www.instagram.com/cedric_ragot" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-700 transition">
              <Instagram size={20} />
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              
              {/* Texte */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Trouvez la Paix Intérieure
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Découvrez les bienfaits transformateurs de la sonothérapie et du massage sonore aux bols tibétains
                </p>

                <div className="flex gap-4">
                  <Link 
                    to="/particuliers" 
                    className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition font-semibold flex items-center gap-2"
                  >
                    En savoir plus <ChevronRight size={16} />
                  </Link>

                  <Link 
                    to="/faq" 
                    className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition font-semibold"
                  >
                    Questions fréquentes
                  </Link>
                </div>
              </div>

              {/* Image HERO FIX */}
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/hero.jpg"
                  alt="Massage sonore aux bols tibétains"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nos Services</h3>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Séances Individuelles', desc: 'Relaxation profonde et équilibre émotionnel' },
                { title: 'Séances en Groupe', desc: 'Expérience collective de détente' },
                { title: 'Formations Entreprises', desc: 'Bien-être au travail' },
              ].map((service, i) => (
                <div key={i} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition bg-gray-50">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                  <p className="text-gray-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-amber-700 text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Recevez nos conseils et actualités
            </h3>

            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 rounded text-gray-900"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-amber-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            <div>
              <h5 className="font-bold text-white mb-4">Navigation</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
                <li><Link to="/particuliers" className="hover:text-white transition">Particuliers</Link></li>
                <li><Link to="/entreprises" className="hover:text-white transition">Entreprises</Link></li>
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-4">Contact</h5>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> contact@cedricragot.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Saint-Germain-en-Laye
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-white mb-4">Suivez-nous</h5>
              <a 
                href="https://www.instagram.com/cedric_ragot" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Instagram size={20} /> Instagram
              </a>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p>&copy; 2024 Cédric Ragot - Sonothérapie. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}