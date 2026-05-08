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

        {/* SERVICES CORRIGÉS AVEC STRIPE */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">

    <h3 className="text-5xl text-center font-[Cormorant_Garamond] mb-12">
      Les services
    </h3>

    <div className="grid md:grid-cols-2 gap-8">

      {/* FORMULE DÉCOUVERTE */}
      <div className="p-8 bg-white border rounded-xl shadow-sm">

        <h4 className="text-2xl font-semibold mb-2">
          Formule Découverte
        </h4>

        <p className="text-[#947f61] text-3xl font-semibold mb-4">
          59 €
        </p>

        <p className="text-gray-600 mb-6">
          1h de relaxation profonde personnalisée<br/>
          1 séance unique pour découvrir la sonothérapie
        </p>

        <a
          href="https://buy.stripe.com/eVq00jcRseYhc6Ode15gc0b"
          target="_blank"
          className="bg-[#947f61] text-white px-6 py-3 rounded-lg w-full block text-center"
        >
          Réserver cette séance
        </a>

      </div>

      {/* CARTES */}
      <div className="p-8 bg-white border rounded-xl shadow-sm">

        <h4 className="text-2xl font-semibold mb-2">
          Cartes de Massages
        </h4>

        <p className="text-gray-600 mb-4">
          Valable 1 an à compter de l'achat.
        </p>

        <div className="space-y-4">

          <div>
            <b className="text-[#947f61]">
              La Découverte Profonde
            </b>
            <p>3 massages – 195 €</p>
            <a
              href="https://buy.stripe.com/9B68wP4kWg2lc6Ogqd5gc0c"
              target="_blank"
              className="text-[#947f61] underline"
            >
              Acheter
            </a>
          </div>

          <div>
            <b className="text-[#947f61]">
              Le Relâchement Profond
            </b>
            <p>5 massages – 295 €</p>
            <a
              href="https://buy.stripe.com/00w5kDbNo03nb2Kgqd5gc0d"
              target="_blank"
              className="text-[#947f61] underline"
            >
              Acheter
            </a>
          </div>

          <div>
            <b className="text-[#947f61]">
              L’Ancrage Profond
            </b>
            <p>8 massages – 440 €</p>
            <a
              href="https://buy.stripe.com/5kQ6oHbNo6rL5Iqgqd5gc0e"
              target="_blank"
              className="text-[#947f61] underline"
            >
              Acheter
            </a>
          </div>

        </div>

        <p className="mt-6 text-sm italic text-gray-500">
          Un accompagnement sur plusieurs séances optimise les résultats dans le temps.
        </p>

      </div>

    </div>

    {/* BAIN SONORE PRIVÉ */}
    <div className="mt-10 p-8 bg-white border rounded-xl shadow-sm">

      <h4 className="text-2xl font-semibold mb-2">
        Bain Sonore Privé
      </h4>

      <p className="text-gray-600 mb-4">
        Relaxation collective personnalisée – événements, anniversaires, mariages
      </p>

      <p className="text-[#947f61] font-semibold mb-4">
        Sur devis
      </p>

      <button className="bg-[#947f61] text-white px-6 py-3 rounded-lg">
        Demander un devis
      </button>

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

Je suis formé en sonothérapie en présentiel et j'ai une expérience approfondie du massage sonore, du voyage sonore et des diapasons thérapeutiques.<br/><br/>

J'ai travaillé dans plusieurs institutions et en cabinet privé, mettant en pratique ces techniques pour accompagner les personnes dans leur parcours de bien-être et de relâchement profond.<br/><br/>

Mon objectif est de vous aider à :<br/><br/>

1. Relâcher les tensions<br/>
2. Retrouver de l'énergie<br/>
3. Vous reconnecter à vous-même<br/><br/>

Avec douceur et en respectant les besoins spécifiques de chacun.<br/><br/>

Mon objectif est de vous offrir des séances de qualité, adaptées à vos besoins spécifiques, dans un cadre bienveillant et professionnel.

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