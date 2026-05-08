import { Link } from 'react-router-dom';
import {
  Instagram,
  ChevronRight,
  Check,
  TriangleAlert,
  X,
  AlertTriangle
} from 'lucide-react';

import { useState } from 'react';

export default function Entreprises() {

  const [openForm, setOpenForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      company: formData.company || null
    };

    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert('Demande envoyée');
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
      setOpenForm(false);
    } else {
      alert("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat] bg-white">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          <h1 className="text-3xl tracking-wide text-gray-900 font-[Cormorant_Garamond] font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex items-center gap-8 text-sm">
            <Link to="/" className="text-gray-700 hover:text-[#947f61]">
              Accueil
            </Link>

            <Link
              to="/particuliers"
              className="text-gray-700 hover:text-[#947f61]"
            >
              Particuliers
            </Link>

            <Link
              to="/entreprises"
              className="text-[#947f61]"
            >
              Entreprises
            </Link>

            <Link
              to="/faq"
              className="text-gray-700 hover:text-[#947f61]"
            >
              FAQ
            </Link>

            <a
              href="https://www.instagram.com/cedric_ragot"
              target="_blank"
            >
              <Instagram size={20} />
            </a>
          </nav>

        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-gradient-to-br from-[#947f61]/10 to-white py-24">
          <div className="max-w-6xl mx-auto px-4">

            <h2 className="text-5xl md:text-6xl text-gray-900 mb-6 leading-tight font-[Cormorant_Garamond] font-semibold">
              Bien-être en Entreprise
            </h2>

            <h3 className="text-2xl md:text-3xl text-gray-700 mb-8 font-[Cormorant_Garamond]">
              Améliorez le bien-être et la performance de vos équipes
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-10">
              Grâce au massage sonore en individuel ou à la relaxation sonore en groupe.
              Des interventions concrètes pour réduire le stress et favoriser
              l'équilibre au travail.
            </p>

            <button
              onClick={() => setOpenForm(true)}
              className="bg-[#947f61] text-white px-8 py-4 rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Demander un devis
              <ChevronRight size={18} />
            </button>

          </div>
        </section>

        {/* CONSTATS */}
        <section className="py-20 bg-white">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-6 font-[Cormorant_Garamond] font-semibold">
              Constats
            </h3>

            <p className="text-center text-gray-600 mb-12 text-lg">
              Aujourd'hui en entreprise :
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Stress élevé",
                "Fatigue mentale",
                "Perte de concentration",
                "Risque de burn-out"
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-8 bg-gray-50 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#947f61]/10 p-3 rounded-full">
                      <AlertTriangle className="text-[#947f61]" />
                    </div>

                    <p className="text-xl text-gray-800 font-medium">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            <p className="text-center italic text-gray-500 mt-10 text-lg">
              Ces facteurs impactent directement la performance et l'engagement de vos équipes.
            </p>

          </div>

        </section>

        {/* SOLUTION */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-8 font-[Cormorant_Garamond] font-semibold">
              Solution
            </h3>

            <p className="text-center text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-14">
              Le bain sonore et le massage sonore agissent directement sur le système nerveux.
              Ils permettent :
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  title: 'Récupération Rapide',
                  text: "Retrouvez l'énergie et la vitalité en quelques minutes"
                },
                {
                  title: 'Meilleure Concentration',
                  text: 'Améliorez la clarté mentale et la productivité'
                },
                {
                  title: 'Réduction du Stress',
                  text: 'Apaisez le système nerveux et les tensions'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-2xl mb-4 text-gray-900 font-[Cormorant_Garamond] font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* TYPES INTERVENTIONS */}
        <section className="py-20 bg-white">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-14 font-[Cormorant_Garamond] font-semibold">
              Types d'Interventions
            </h3>

            <div className="space-y-8">

              {[
                {
                  title: "Séances Individuelles en Entreprise",
                  text: "Massages sonores personnalisés comparables aux prestations pour les particuliers pour vos collaborateurs"
                },
                {
                  title: "Ateliers Collectifs",
                  text: "Bains sonores collectifs pour favoriser la relaxation, la concentration et le bien être en équipe"
                },
                {
                  title: "Événements Bien-être",
                  text: `Interventions spéciales pour vos événements d'entreprise
                  (séminaires et team-building, colloques et symposiums d'associations,
                  rendez vous qualité de vie au travail (QVT), journée de la santé mentale,
                  EPHAD, IME, centres fitness ou studio de yoga, les "midis bien-être",
                  ateliers "gestion de crise" ou suite à un changement, etc..).`
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-3xl mb-4 font-[Cormorant_Garamond] font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

            <p className="italic text-center text-gray-500 mt-10 text-lg">
              Formats adaptables selon vos besoins et contraintes.
            </p>

          </div>

        </section>

        {/* BAINS SONORES */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

            <div>

              <h3 className="text-5xl mb-8 font-[Cormorant_Garamond] font-semibold text-gray-900">
                Bains Sonores Collectifs
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Créez une expérience partagée de détente et de bien-être pour vos équipes.
                Les bains sonores collectifs favorisent la cohésion d'équipe tout en offrant
                une relaxation et une concentration profonde à chacun, facteurs de productivité
                et d'engagement en entreprise.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Une intervention adaptée à vos contraintes de moyens et de temps
                et selon vos objectifs de bien-être en entreprise.
              </p>

            </div>

            <img
              src="/images/photo3.jpg"
              className="rounded-2xl shadow-xl object-cover w-full max-h-[520px]"
            />

          </div>

        </section>

        {/* BENEFICES */}
        <section className="py-20 bg-white">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-14 font-[Cormorant_Garamond] font-semibold">
              Bénéfices pour l'Entreprise
            </h3>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Amélioration du bien-être des collaborateurs",
                "Réduction des tensions",
                "Meilleure dynamique d'équipe",
                "Image employeur renforcée"
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#947f61]/10 p-3 rounded-full">
                      <Check className="text-[#947f61]" />
                    </div>

                    <p className="text-lg text-gray-700">
                      {item}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ORGANISATION */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-14 font-[Cormorant_Garamond] font-semibold">
              Organisation
            </h3>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                {
                  title: 'Intervention sur Site',
                  text: 'Je me déplace directement dans vos locaux selon votre localisation'
                },
                {
                  title: 'Matériel',
                  text: 'Nous faisons un point en amont sur le matériel nécessaire. L’adaptation se fait en fonction du nombre de personnes présentes.'
                },
                {
                  title: 'Adaptation aux Contraintes',
                  text: "Les interventions s'adaptent à votre planning et vos contraintes d'entreprise."
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <h4 className="text-2xl mb-4 font-[Cormorant_Garamond] font-semibold">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CONTRE INDICATIONS */}
        <section className="py-20 bg-white">

          <div className="max-w-4xl mx-auto px-4">

            <div className="bg-[#947f61] text-white rounded-3xl p-10 shadow-xl">

              <div className="flex items-center gap-4 mb-6">

                <div className="bg-white/20 p-3 rounded-full">
                  <AlertTriangle />
                </div>

                <h3 className="text-4xl font-[Cormorant_Garamond] font-semibold">
                  Contre-indications Importantes
                </h3>

              </div>

              <p className="leading-relaxed mb-8">
                Merci de me prévenir avant toute intervention si vous avez :
              </p>

              <ul className="space-y-4 text-white/95">

                <li>• Enfants de moins de 7 ans</li>
                <li>• Femmes enceintes</li>
                <li>• Personnes atteintes de psychoses ou troubles mentaux</li>
                <li>• Opérations diverses (notamment avec des broches ou prothèses en métal)</li>
                <li>• Cancer</li>
                <li>• Port de pacemaker</li>

              </ul>

            </div>

          </div>

        </section>

        {/* ZONE */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-6xl mx-auto px-4">

            <h3 className="text-5xl text-center mb-8 font-[Cormorant_Garamond] font-semibold">
              Zone d'Intervention
            </h3>

            <p className="text-center text-gray-600 mb-14 text-lg">
              Je me déplace en transport en commun (RER/Tram) dans un rayon
              de moins de 20 minutes depuis Saint-Germain-en-Laye :
            </p>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Saint-Germain-en-Laye",
                "Le Pecq",
                "Le Vésinet",
                "Chatou",
                "L'Étang-la-Ville"
              ].map((city, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4">

                    <div className="bg-[#947f61]/10 p-3 rounded-full">
                      <Check className="text-[#947f61]" />
                    </div>

                    <p className="text-gray-700 text-lg">
                      {city}
                    </p>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">

          <div className="max-w-4xl mx-auto px-4">

            <h3 className="text-5xl mb-8 font-[Cormorant_Garamond] font-semibold leading-tight text-gray-900">
              Prêt à investir dans le bien-être de vos équipes ?
            </h3>

            <button
              onClick={() => setOpenForm(true)}
              className="bg-[#947f61] text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-medium"
            >
              Contactez-moi pour discuter de vos besoins et recevoir une proposition personnalisée.
            </button>

          </div>

        </section>

      </main>

      {/* FORMULAIRE */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl">

            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-5 right-5 text-gray-500 hover:text-black"
            >
              <X size={28} />
            </button>

            <h3 className="text-5xl mb-8 font-[Cormorant_Garamond] font-semibold text-gray-900">
              Demande de devis
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#947f61]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#947f61]"
              />

              <input
                type="text"
                name="company"
                placeholder="Entreprise ou association"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#947f61]"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-[#947f61]"
              />

              <button
                type="submit"
                className="w-full bg-[#947f61] text-white py-4 rounded-xl hover:opacity-90 transition"
              >
                Envoyer
              </button>

            </form>

          </div>

        </div>
      )}

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
          className="flex items-center gap-3 text-white font-medium hover:opacity-90 transition"
        >
          <span>🗓️</span>
          Réserver une séance
        </a>

        <a
          href="/faq#devis-form"
          className="flex items-center gap-3 text-white font-medium hover:opacity-90 transition"
        >
          <span>✉️</span>
          Contactez-moi
        </a>

      </div>

    </div>

    {/* SOCIAL */}
    <div className="flex flex-col items-end justify-between">

      <div className="text-right">

        <p className="text-white font-semibold mb-3 flex items-center justify-end gap-2">
          Suivez-moi
          <span>📲</span>
        </p>

        <div className="flex gap-5 items-center justify-end">

          <a
            href="https://www.instagram.com/cedric_ragot"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <Instagram />
          </a>

          <a
            href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <img
              src="/images/logo resalib.jpg"
              className="w-7 h-7 object-contain"
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