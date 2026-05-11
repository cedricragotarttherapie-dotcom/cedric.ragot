// ==============================
// PARTICULIERS.tsx
// ==============================

import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Particuliers() {

  const location = useLocation();

useEffect(() => {
  if (location.hash === "#services") {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  }
}, [location.hash]);

const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Demande envoyée');

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      alert("Erreur lors de l'envoi");
    }
  };

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
        Découvrez comment les vibrations harmonieuses des bols tibétains et des diapasons thérapeutiques peuvent transformer votre bien-être.
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
        className="rounded-xl shadow-lg w-full h-[420px] object-contain bg-white"
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
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[1fr_auto] gap-16 items-center">

    {/* TEXTE */}
    <div>

      <h3 className="text-5xl font-[Cormorant_Garamond] mb-16 text-left text-gray-900">
  Déroulé d'une Séance
</h3>

      <div className="space-y-6 font-[Montserrat] mt-2">

        {/* STEP 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#947f61] text-white flex items-center justify-center font-semibold">
            1
          </div>
          <div>
            <b className="text-gray-900">Échange pour comprendre votre besoin</b>
            <p className="text-gray-600">
              Nous discutons de vos tensions et objectifs
            </p>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#947f61] text-white flex items-center justify-center font-semibold">
            2
          </div>
          <div>
            <b className="text-gray-900">Installation confortable</b>
            <p className="text-gray-600">
              Vous restez habillé.e sur un matelas
            </p>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#947f61] text-white flex items-center justify-center font-semibold">
            3
          </div>
          <div>
            <b className="text-gray-900">Bols tibétains / diapasons</b>
            <p className="text-gray-600">
              Travail vibratoire sur corps et mental
            </p>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#947f61] text-white flex items-center justify-center font-semibold">
            4
          </div>
          <div>
            <b className="text-gray-900">Temps de retour</b>
            <p className="text-gray-600">
              Intégration progressive des effets
            </p>
          </div>
        </div>

<div className="mt-16">

  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
    <p className="text-sm text-gray-900">
      (Contre-indications : Grossesse (3 premiers mois et dernier mois), pacemaker, troubles psychiatriques sévères, épilepsie, cancer en cours de traitement, enfants de moins de 7 ans.)
    </p>
  </div>

  <div className="h-6" />

</div>

      </div>

    </div>

{/* VIDEO REEL LOCALE PREMIUM */}
<div className="flex flex-col items-center gap-4 relative">

  {/* TITRE + CTA INTÉGRÉ */}
  <button className="bg-[#947f61] text-white px-6 py-3 rounded-full text-sm shadow-md hover:opacity-90 transition leading-snug max-w-xs text-center">
    ▶ Découvrez comment se déroule une séance de massage sonore
  </button>

  {/* FLÈCHE VERS LA VIDÉO */}
  <div className="flex justify-center">
    <svg
      className="w-10 h-10 text-[#947f61]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 5v14" />
      <path d="M7 14l5 5 5-5" />
    </svg>
  </div>

  {/* VIDEO (plus compacte + premium) */}
  <video
    className="rounded-xl shadow-lg w-full max-w-[340px] md:max-w-[380px] h-[520px] object-contain bg-black"
    src="/videos/reel.mp4"
    controls
    playsInline
    preload="metadata"
  />

</div>

  </div>
</section>

      {/* SERVICES CORRIGÉS AVEC STRIPE */}
<section id="services" className="py-20 bg-gray-50">
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

        <div className="flex items-center gap-4 mb-4">

  <p className="text-[#947f61] text-3xl font-semibold">
    59 €
  </p>

  <div className="relative inline-block">
  <span className="text-2xl text-gray-400 font-medium line-through decoration-red-500 decoration-2">
    85 €
  </span>
</div>

</div>

        <p className="text-gray-600 mb-6">
          1h de relaxation profonde personnalisée<br/>
          valable 1 an à compter de l'achat.<br/><br/>
          1 séance par personne unique pour découvrir la sonothérapie
          Tarif exceptionnel valable une seule fois par personne
        </p>

        <a
          href="https://calendly.com/cedricragot/sonotherapie"
          target="_blank"
          className="bg-[#947f61] text-white px-6 py-3 rounded-lg w-full block text-center mb-8"
        >
          Réserver cette séance
        </a>

        <h4 className="text-2xl font-semibold mb-2">
          Séance de massage sonore (durée 1h)
        </h4>

        <p className="text-[#947f61] text-3xl font-semibold mb-4">
          85 €
        </p>

        <p className="text-gray-600 mb-6">
          1h de relaxation profonde personnalisée<br/>
          valable 1 an à compter de l'achat.
        </p>

        <a
          href="https://calendly.com/cedricragot/sonotherapie"
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

  <p className="text-gray-600 mb-8">
    Valables 1 an à compter de l'achat.
  </p>

  <div className="space-y-10 mt-8">

    <div>
      <b className="text-[#947f61]">
        La Découverte Profonde
      </b>

      <p className="text-[#947f61] text-3xl font-semibold mt-2">
        3 massages – 239 €
      </p>

      <a
        href="https://calendly.com/cedricragot/sonotherapie"
        target="_blank"
        className="text-[#947f61] underline inline-block mt-3"
      >
        Réserver cette séance
      </a>
    </div>

    <div>
      <b className="text-[#947f61]">
        Le Relâchement Profond
      </b>

      <p className="text-[#947f61] text-3xl font-semibold mt-2">
        5 massages – 359 €
      </p>

      <a
        href="https://calendly.com/cedricragot/sonotherapie"
        target="_blank"
        className="text-[#947f61] underline inline-block mt-3"
      >
        Réserver cette séance
      </a>
    </div>

    <div>
      <b className="text-[#947f61]">
        L’Ancrage Profond
      </b>

      <p className="text-[#947f61] text-3xl font-semibold mt-2">
        8 massages – 519 €
      </p>

      <a
        href="https://calendly.com/cedricragot/sonotherapie"
        target="_blank"
        className="text-[#947f61] underline inline-block mt-3"
      >
        Réserver cette séance
      </a>
    </div>

  </div>

  <button
  onClick={() => {
    if (window.botpress?.open) {
      window.botpress.open();
    }
  }}
  className="mt-10 bg-[#947f61] text-white px-6 py-3 rounded-lg w-full hover:opacity-90 transition"
>
  En savoir plus
</button>

  <p className="mt-6 text-sm italic text-gray-500">
    Un accompagnement sur plusieurs séances optimise les résultats dans le temps.
  </p>

</div>

</div>

    {/* BAIN SONORE PRIVÉ */}
<div className="mt-10 p-8 bg-white border rounded-xl shadow-sm grid md:grid-cols-2 gap-8 items-center">

  {/* TEXTE */}
  <div id="bain-sonore-prive">

    <h4 className="text-2xl font-semibold mb-2">
      Bain Sonore Privé
    </h4>

    <p className="text-gray-600 mb-4">
      Relaxation collective personnalisée – événements, anniversaires, mariages
    </p>

    <p className="text-[#947f61] font-semibold mb-2">
      Sur devis
    </p>

    <p className="text-gray-600 mb-6">
      <span className="block">Valable 1 an à compter de l'achat</span>
    </p>

    <a
  href="#devis-form"
  className="bg-[#947f61] text-white px-6 py-3 rounded-lg inline-block hover:opacity-90 transition"
>
  Demander un devis
</a>

  </div>

  {/* IMAGE */}
  <img
    src="/images/relaxgroup.jpg"
    alt="Bain sonore collectif"
    className="rounded-xl w-full h-[280px] object-cover"
  />

    </div>

  </div>
</section>

        {/* ABOUT */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

    {/* TEXTE */}
    <div>

      <h3 className="text-5xl font-[Cormorant_Garamond] mb-6 text-left text-gray-900">
        À Propos de Cédric Ragot
      </h3>

      <div className="text-gray-700 leading-relaxed space-y-6">

        <p>
          Je suis formé en sonothérapie en présentiel et j'ai une expérience approfondie du massage sonore,
          du voyage sonore et des diapasons thérapeutiques.
        </p>

        <p>
          J'ai travaillé dans plusieurs institutions et en cabinet privé, mettant en pratique ces techniques
          pour accompagner les personnes dans leur parcours de bien-être et de relâchement profond.
        </p>

        <div>
          <p className="mb-4">
            Mon objectif est de vous aider à :
          </p>

          <ul className="space-y-2 ml-5">
            <li>1. Relâcher les tensions</li>
            <li>2. Retrouver de l'énergie</li>
            <li>3. Vous reconnecter à vous-même</li>
          </ul>
        </div>

        <p>
          Avec douceur et en respectant les besoins spécifiques de chacun.
        </p>

        <p>
          Mon objectif est de vous offrir des séances de qualité, adaptées à vos besoins spécifiques,
          dans un cadre bienveillant et professionnel.
        </p>

      </div>

    </div>

    {/* IMAGE */}
    <div>
      <img
        src="/images/massage3.jpeg"
        alt="Massage sonore"
        className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
      />
    </div>

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

{/* FORMULAIRE DEVIS */}
<section id="devis-form" className="py-20 bg-gray-50">
  <div className="max-w-2xl mx-auto px-4">

    <h3 className="text-3xl font-[Cormorant_Garamond] mb-6 text-center">
      Demande de devis bains sonores privés
    </h3>

    <form
  onSubmit={handleSubmit}
  className="space-y-4"
>

      <input
  type="text"
  name="name"
  placeholder="Nom"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full p-3 border rounded-lg"
/>

      <input
  type="email"
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange}
  required
  className="w-full p-3 border rounded-lg"
/>

      <textarea
  name="message"
  placeholder="Votre message"
  value={formData.message}
  onChange={handleChange}
  required
  className="w-full p-3 border rounded-lg h-32"
/>

      <button
        type="submit"
        className="bg-[#947f61] text-white px-6 py-3 rounded-lg w-full"
      >
        Envoyer la demande
      </button>

    </form>

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