import { Link } from 'react-router-dom';
import {
  Instagram,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X
} from 'lucide-react';

import { useState, useEffect } from 'react';

const allReviews = [
  {
    name: 'Cécile P.',
    text: "Après avoir testé une séance de massage sonore avec Cédric, j'ai été agréablement surprise par l'effet puissant des vibrations. Je recommande vivement Cédric, une personne attentionnée qui prend soin de ses clients avec bienveillance."
  },
  {
    name: 'Sandrine M.',
    text: "Je suis absolument ravie de ma séance de massage sonore au bol tibétain ! Les vibrations douces m'ont plongée dans une relaxation profonde et immédiate. Cette expérience m'a offert non seulement un sommeil réparateur, mais aussi une revitalisation énergétique."
  },
  {
    name: 'Clémence W.',
    text: "Une expérience transformatrice. Les vibrations des bols tibétains m'ont permis de relâcher des tensions que je ne savais même pas avoir. Je me sens régénérée et en paix."
  },
  {
    name: 'Ksenia K.',
    text: "Cédric est un véritable professionnel. Son écoute et sa bienveillance créent un environnement de confiance idéal pour la relaxation profonde."
  },
  {
    name: 'Philippe M.H.',
    text: "Les séances de massage sonore m'ont aidé à retrouver un sommeil de qualité et à gérer mon stress quotidien. Je recommande sans hésiter."
  },
  {
    name: 'Valeria S.',
    text: "Une véritable bulle de détente. Les vibrations harmonieuses des bols tibétains offrent une relaxation qu'on ne trouve nulle part ailleurs."
  },
  {
    name: 'Cedo H.',
    text: "Cédric m'a accompagné dans mon parcours de bien-être avec professionnalisme et douceur. Ses séances sont vraiment bénéfiques."
  },
  {
    name: 'Ariane M.',
    text: "J'ai découvert une nouvelle dimension de relaxation grâce aux bols tibétains. Cédric sait vraiment comment créer un espace de sérénité."
  },
  {
    name: 'Marina D.',
    text: "Les vibrations sonores m'ont permis de me reconnecter à mon corps et à mon essence. Une expérience profondément apaisante."
  },
  {
    name: 'Nathalie L.',
    text: "Après plusieurs séances, j'ai remarqué une amélioration significative de mon bien-être général et de ma capacité à gérer le stress."
  },
  {
    name: 'Françoise G.',
    text: "Les massages sonores de Cédric sont une véritable oasis de paix dans mon quotidien stressant. Je ne peux plus m'en passer."
  }
];

export default function Home() {

  const [showAllReviews, setShowAllReviews] = useState(false);

  // CARROUSEL
  const slides = [
  {
    images: ["/images/photo1.jpg", "/images/massage2.jpg"],
    title: "Massages sonores",
    link: "/particuliers"
  },

  {
    image: "/images/photo2v2.jpg",
    title: "Voyages sonores",
    link: "/entreprises"
  },

  {
    image: "/images/photo3v2.jpg",
    title: "Bains sonores privés",
    link: "/particuliers#bain-sonore-prive"
  },

  {
    image: "/images/photo4.jpg",
    title: "Massage aux diapasons",
    link: "/particuliers"
  }
];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {

  const handleKeyDown = (e: KeyboardEvent) => {

    if (e.key === "ArrowRight") {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }

    if (e.key === "ArrowLeft") {
      setCurrentSlide((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    }

    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => window.removeEventListener("keydown", handleKeyDown);

}, []);

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );

  }, 5000);

  return () => clearInterval(interval);

}, [slides.length]);

return (
  <div className="min-h-screen flex flex-col font-[Montserrat]">

    {/* HEADER */}
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1 className="text-3xl tracking-wide text-gray-900 font-[Cormorant_Garamond] font-semibold">
          Cédric Ragot
        </h1>

        <nav className="flex items-center gap-8 text-sm">
          <Link to="/" className="text-gray-700 hover:text-[#947f61]">Accueil</Link>
          <Link to="/particuliers" className="text-gray-700 hover:text-[#947f61]">Particuliers</Link>
          <Link to="/particuliers#services" className="text-gray-700 hover:text-[#947f61]">Tarifs pour particuliers</Link>
          <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61]">Entreprises</Link>
          <Link to="/faq" className="text-gray-700 hover:text-[#947f61]">FAQ</Link>

          <a href="https://www.instagram.com/cedric_ragot" target="_blank">
            <Instagram size={20} />
          </a>
        </nav>

      </div>
    </header>

      <main className="flex-1">

        {/* CARROUSEL */}
<section className="relative h-screen overflow-hidden bg-[#947f61] flex items-center justify-center z-10">

  <div
  className="flex h-full transition-transform duration-700 ease-in-out relative z-10"
  style={{
    transform: `translateX(-${currentSlide * 100}%)`,
    width: `${slides.length * 100}%`,
  }}
>

            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-screen flex-shrink-0 relative"
              >

                <div className="absolute inset-0 w-full h-full overflow-hidden">

  {/* IMAGE WRAPPER SAFE (anti crop + responsive propre) */}
<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 text-center z-20 pointer-events-none">

  {slide.images ? (
    <div className="flex w-full h-full">
      {slide.images.map((img, i) => (
        <img
          key={i}
          src={img}
          className="w-1/2 h-full object-cover object-center"
          alt={slide.title}
        />
      ))}
    </div>
  ) : (
    <img
      src={slide.image}
      className="w-full h-full object-cover object-center"
      alt={slide.title}
    />
  )}

  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 text-center z-20">

  <h2 className="text-white text-4xl md:text-6xl font-[Cormorant_Garamond] font-semibold leading-tight mb-6">
    {slide.title}
  </h2>

  <Link
    to={slide.link}
    className="relative z-30 bg-[#947f61] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition"
  >
    Découvrir
    <ChevronRight size={18} />
  </Link>

</div>

</div>

</div>

              </div>
            ))}

          </div>

          {/* BOUTONS */}
<div className="absolute inset-0 flex items-center justify-between px-6 z-20">

  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      )
    }
    className="bg-white/80 hover:bg-white p-3 rounded-full"
  >
    <ChevronLeft />
  </button>

  <button
    onClick={() =>
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }
    className="bg-white/80 hover:bg-white p-3 rounded-full"
  >
    <ChevronRight />
  </button>

</div>

          {/* INDICATEURS */}
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">

            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/40"
                }`}
              />
            ))}

          </div>

        </section>

        {/* MODAL IMAGE */}
        {selectedImage && (
          <div className="fixed inset-0 bg-[#947f61]/95 z-[999] flex items-center justify-center p-4">

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={34} />
            </button>

            <img
  src={selectedImage}
  className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
  alt="Agrandissement visuel"
/>

          </div>
        )}

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#947f61]/10 to-white py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight font-[Cormorant_Garamond] font-semibold">
                Trouvez la Paix Intérieure
              </h2>

              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Découvrez les bienfaits transformateurs de la sonothérapie et du massage sonore aux bols tibétains
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Vous êtes stressé.e, anxieux.se, ou simplement en quête de récupération ?
                Les vibrations harmonieuses des bols tibétains offrent une relaxation profonde et une régulation émotionnelle naturelle.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/particuliers"
                  className="bg-[#947f61] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition"
                >
                  En savoir plus <ChevronRight size={16} />
                </Link>

                <Link
                  to="/faq"
                  className="border border-[#947f61] text-[#947f61] px-6 py-3 rounded-lg hover:bg-[#947f61]/10 transition"
                >
                  Contact
                </Link>
              </div>
            </div>

            <img
              src="/images/hero.jpg"
              className="rounded-xl shadow-lg max-h-[420px] object-cover w-full"
            />

          </div>
        </section>

        {/* KPI */}
        <section className="py-10 bg-[#947f61] text-white text-center">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

            <div>
              <p className="text-3xl font-semibold">11</p>
              <p>Avis clients 5 étoiles</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p>Satisfaction client</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">1h</p>
              <p>Durée d'une séance</p>
            </div>

          </div>
        </section>

        {/* À PROPOS */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">

    <img
  src="/images/profil.jpg"
  className="rounded-xl shadow-lg h-full max-h-[500px] object-cover object-[center_15%] w-full"
/>

    <div className="flex flex-col justify-center h-full py-6 md:py-10">

      <h3 className="text-5xl md:text-6xl mb-10 font-[Cormorant_Garamond] font-semibold leading-tight">
        À Propos
      </h3>

      <div className="flex flex-col text-gray-700 leading-relaxed text-lg space-y-6">

        <p>
          Je suis Cédric Ragot, praticien en sonothérapie basé à Saint-Germain-en-Laye. Depuis plusieurs années, j'accompagne les personnes en quête de détente profonde et de régulation émotionnelle.
        </p>

        <p>
          Ma pratique repose sur l'utilisation des bols tibétains et des diapasons thérapeutiques, deux outils puissants pour relâcher les tensions et retrouver un équilibre physique et mental.
        </p>

      </div>

    </div>

  </div>
</section>

        {/* AVIS */}
        <section className="py-20 bg-white">

          <h3 className="text-5xl text-center mb-12 font-[Cormorant_Garamond] font-semibold">
            Avis Clients
          </h3>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

            {(showAllReviews ? allReviews : allReviews.slice(0, 4)).map((review, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
              >

                <div className="flex gap-1 mb-4 text-[#947f61]">
                  ★ ★ ★ ★ ★
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>

                <p className="font-semibold text-gray-900">
                  {review.name}
                </p>

              </div>
            ))}

          </div>

          {!showAllReviews && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAllReviews(true)}
                className="inline-flex items-center gap-2 text-[#947f61] hover:underline"
              >
                Dérouler pour voir plus d'avis
                <ChevronDown size={18} />
              </button>
            </div>
          )}

        </section>

{/* WHY CHOOSE - À AJOUTER JUSTE EN DESSOUS DE LA SECTION AVIS CLIENTS */}

<section className="py-20 bg-gray-50">
  <h3 className="text-5xl text-center mb-12 font-[Cormorant_Garamond] font-semibold">
    Pourquoi Choisir Cédric ?
  </h3>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">

    <div className="p-8 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <b className="text-lg text-gray-900">
        Professionnel Certifié
      </b>

      <p className="mt-3 text-gray-600 leading-relaxed">
        Formation en sonothérapie avec expérience approfondie du massage sonore et des diapasons thérapeutiques.
      </p>
    </div>

    <div className="p-8 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <b className="text-lg text-gray-900">
        Approche Personnalisée
      </b>

      <p className="mt-3 text-gray-600 leading-relaxed">
        Chaque séance adaptée à vos besoins spécifiques, avec écoute bienveillante et attention particulière.
      </p>
    </div>

    <div className="p-8 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <b className="text-lg text-gray-900">
        Résultats Concrets
      </b>

      <p className="mt-3 text-gray-600 leading-relaxed">
        Relaxation profonde, meilleur sommeil, gestion du stress et régulation émotionnelle dès la première séance.
      </p>
    </div>

    <div className="p-8 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition">
      <b className="text-lg text-gray-900">
        Flexibilité de Paiement
      </b>

      <p className="mt-3 text-gray-600 leading-relaxed">
        Paiement par carte (Stripe). Cartes valables 1 an pour plus de liberté.
      </p>
    </div>

  </div>
</section>

        {/* CTA CALENDLY MODIFIÉ */}
<section className="py-20 bg-white text-center">

  <h3 className="text-5xl font-[Cormorant_Garamond] font-semibold text-gray-900 mb-6 leading-tight">

    <span className="block">Découvrez comment la sonothérapie</span>

    <span className="block text-gray-700 text-2xl font-normal mt-2">
      peut transformer votre bien-être
    </span>

  </h3>

  <div className="flex justify-center gap-4 flex-wrap">

    <Link
      to="/particuliers"
      className="bg-[#947f61] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
    >
      En savoir plus
    </Link>

    <a
      href="https://calendly.com/cedricragot/sonotherapie"
      target="_blank"
      className="border border-[#947f61] text-[#947f61] px-6 py-3 rounded-lg hover:bg-[#947f61]/10 transition"
    >
      Réserver maintenant
    </a>

  </div>

</section>

      </main>

      {/* FOOTER */}
<footer className="bg-[#947f61] text-white py-10">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

    {/* ZONE INTERVENTION + CTA */}
    <div className="space-y-6">

      <div>
        <b className="text-white">Zone d'intervention :</b>

        <p className="mt-2 text-white/90">
          Saint-Germain-en-Laye, Le Pecq, Le Vésinet,
          Chatou, L'Étang-la-Ville.
        </p>
      </div>

      {/* CTA LIGNES */}
      <div className="space-y-4">

  <a
    href="https://calendly.com/cedricragot/sonotherapie"
    target="_blank"
    className="flex items-center gap-3 text-white/90 hover:text-white transition font-medium"
  >
    <span className="text-white">🗓️</span>
    Réserver une séance individuelle
  </a>

  <a
    href="/faq#devis-form"
    className="flex items-center gap-3 text-white/90 hover:text-white transition font-medium"
  >
    <span className="text-white">✉️</span>
    Contactez-moi
  </a>

</div>

    </div>

    {/* SOCIAL */}
    <div className="flex flex-col items-end justify-between">

      <div className="text-right">

        <p className="text-white font-semibold mb-3 text-right">
  Suivez-moi
</p>

        <div className="flex gap-6 items-center justify-end">

          <a
            href="https://www.instagram.com/cedric_ragot"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <Instagram size={26} />
          </a>

          <a
            href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <img
              src="/images/logo resalib.jpg"
              className="w-8 h-8 object-contain"
            />
          </a>

        </div>

      </div>

    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="text-center mt-10 text-sm border-t border-white/30 pt-6 text-white/90">
    © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
  </div>

</footer>

    </div>
  );
}