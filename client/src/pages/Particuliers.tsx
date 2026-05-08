// ==============================
// PARTICULIERS.tsx
// ==============================

import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Particuliers() {
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
            <Link to="/particuliers" className="text-[#947f61] font-semibold">Particuliers</Link>
            <Link to="/entreprises" className="text-gray-700 hover:text-[#947f61]">Entreprises</Link>
            <Link to="/faq" className="text-gray-700 hover:text-[#947f61]">FAQ</Link>
          </nav>

        </div>
      </header>

      <main className="flex-1">

        {/* HERO MODIFIÉ AVEC IMAGE */}
<section className="bg-gradient-to-br from-[#947f61]/10 to-white py-20">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

    {/* TEXTE */}
    <div>

      <h2 className="text-5xl md:text-6xl font-[Cormorant_Garamond] font-semibold mb-4 text-gray-900">
        Séances de Massage Sonore
      </h2>

      <h3 className="text-xl text-gray-700 mb-4">
        Relâchez le stress et retrouvez un équilibre profond
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Offrez-vous un moment pour vous reconnecter à votre corps et apaiser votre mental.
        Découvrez comment les vibrations harmonieuses des bols tibétains peuvent transformer votre bien-être.
      </p>

      <a
        href="https://calendly.com/cedricragot/sonotherapie"
        target="_blank"
        className="inline-block bg-[#947f61] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        Réserver une séance
      </a>

    </div>

    {/* IMAGE */}
    <div>
      <img
        src="/images/massage1.jpg"
        alt="Massage sonore"
        className="rounded-xl shadow-lg w-full max-h-[420px] object-cover"
      />
    </div>

  </div>
</section>

        {/* POUR QUI */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl font-[Cormorant_Garamond] mb-6 text-center">
              Pour Qui ?
            </h3>

            <p className="text-center text-gray-700 mb-10">
              Ces séances sont faites pour vous si vous ressentez :
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Du stress ou de l'anxiété",
                "Un mental surchargé",
                "Un sommeil perturbé",
                "Des tensions physiques",
                "Des difficultés à lâcher prise",
                "Un besoin de récupération"
              ].map((item, i) => (
                <div key={i} className="border p-4 rounded-xl">
                  <span className="text-[#947f61] font-bold">✔</span> {item}
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* BIENFAITS */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center font-[Cormorant_Garamond] mb-6">
              Les Bienfaits
            </h3>

            <p className="text-center mb-10 text-gray-700">
              Le massage sonore permet :
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Détente profonde du système nerveux",
                "Relâchement des tensions physiques",
                "Amélioration du sommeil",
                "Apaisement émotionnel"
              ].map((item, i) => (
                <div key={i} className="p-6 border rounded-xl bg-white">
                  {item}
                </div>
              ))}

            </div>

            <p className="text-center mt-10 italic text-gray-600">
              Chaque séance agit différemment selon votre état. Les bienfaits s'accumulent avec la régularité.
            </p>

          </div>
        </section>

        {/* DEROULE */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center font-[Cormorant_Garamond] mb-10">
              Déroulé d'une Séance
            </h3>

            <div className="space-y-6">

              {[
                ["1", "Échange pour comprendre votre besoin", "Nous discutons de vos tensions et objectifs"],
                ["2", "Installation confortable", "Vous restez habillé.e sur un matelas"],
                ["3", "Bols tibétains / diapasons", "Travail vibratoire sur corps et mental"],
                ["4", "Temps de retour", "Intégration progressive des effets"]
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-[#947f61] text-white w-10 h-10 flex items-center justify-center rounded-full">
                    {step[0]}
                  </div>
                  <div>
                    <b>{step[1]}</b>
                    <p className="text-gray-600">{step[2]}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center font-[Cormorant_Garamond] mb-10">
              Les Services
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="p-6 bg-white border rounded-xl">
                <b>Formule Découverte</b>
                <p>59€ - 1h</p>
                <button className="mt-4 bg-[#947f61] text-white px-4 py-2 rounded">
                  Réserver
                </button>
              </div>

              <div className="p-6 bg-white border rounded-xl">
                <b>Cartes de massages</b>
                <p>195€ / 295€ / 440€</p>
              </div>

              <div className="p-6 bg-white border rounded-xl">
                <b>Bain sonore privé</b>
                <p>Sur devis</p>
              </div>

            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl font-[Cormorant_Garamond] mb-6 text-center">
              À Propos de Cédric Ragot
            </h3>

            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
              Praticien en sonothérapie, j’accompagne les personnes vers un relâchement profond,
              une récupération émotionnelle et un mieux-être global grâce aux vibrations sonores.
            </p>

          </div>
        </section>

        {/* CTA + CALENDLY */}
        <section className="py-20 bg-[#947f61] text-white text-center">

          <h3 className="text-4xl font-[Cormorant_Garamond] mb-6">
            Prêt.e à commencer ?
          </h3>

          <a
            href="https://calendly.com/cedricragot/sonotherapie"
            target="_blank"
            className="bg-white text-[#947f61] px-6 py-3 rounded"
          >
            Réserver une séance
          </a>

        </section>

        {/* CALENDLY EMBED */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">

            <h3 className="text-4xl text-center font-[Cormorant_Garamond] mb-6">
              Calendrier de réservation
            </h3>

            <iframe
              src="https://calendly.com/cedricragot/sonotherapie"
              className="w-full h-[700px] border rounded-xl"
            />

          </div>
        </section>

      </main>

      {/* FOOTER (IDENTIQUE HOME) */}
      <footer className="bg-[#947f61] text-white py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

          <div>
            <b>Zone d'intervention :</b>
            <p className="mt-2">
              Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville
            </p>
          </div>

          <div className="flex justify-end gap-4 items-center">

            <a href="https://instagram.com/cedric_ragot" target="_blank">
              <Instagram />
            </a>

            <a href="https://www.resalib.fr" target="_blank">
              <img src="/images/logo resalib.jpg" className="w-6 h-6" />
            </a>

          </div>

        </div>

        <div className="text-center mt-6 border-t border-white/30 pt-4">
          © 2026 Cédric Ragot
        </div>

      </footer>

    </div>
  );
}