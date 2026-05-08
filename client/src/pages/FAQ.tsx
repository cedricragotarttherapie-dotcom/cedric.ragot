import { Link } from "react-router-dom"; 
import { useState } from "react";
import { ChevronDown, Instagram } from "lucide-react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Message envoyé");
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    { q: "Qu'est-ce que la Sonothérapie ?", a: "Thérapie par le son, c'est grace aux fréquences des instruments que le soin ou la relaxation peut se faire" },
    { q: "Pourquoi Massage sonore ?", a: "C'est un massage qui ne se fait que par les vibrations et fréquences émises par les instruments de relaxation comme par exemple les Bols tibétains ou les diapasons thérapeutiques" },
    { q: "Quels sont les Tarifs des prestations ?", a: "À partir de 59€ pour une séance individuelle de découverte, 55€ le massage pour un pack de 8 massages et une vingtaine d'euros par personne pour des séances en groupe" },

    { q: "Comment se déroule un massage sonore ?", a: "La séance commence par un temps d’échange, puis vous êtes allongé confortablement. Les bols tibétains sont ensuite joués autour et sur le corps pour induire une relaxation profonde. Nous terminons sur une temps d'echanges" },

    { q: "Quels sont les bienfaits des séances ?", a: "Réduction du stress, amélioration du sommeil, relâchement des tensions physiques et émotionnelles." },

    { q: "Pour qui ?", a: "Toute personne en recherche de détente et de rééquilibrage." },

    { q: "Quelle différence avec un autre thérapeute ?", a: "La sonothérapie agit par vibration directe sur le système nerveux. Il favorise la relaxation, la détente, le lâcher-prise, la récupération et la concentration" },
  
    { q: "Est-ce que tout le monde peut faire une séance ?",
    a: "Oui, sauf contre-indications spécifiques (exemple enfants de moins de 7 ans, pacemaker ou cancer). Les bols tibétains sont accessibles à tous. En cas de grossesse, problèmes cardiaques ou implants métalliques, merci de me consulter avant la séance."
  },

  {
    q: "Combien de séances sont nécessaires ?",
    a: "Une seule séance peut déjà apporter un effet. Pour un travail profond et durable, plusieurs séances sont recommandées."
  },

  {
    q: "Est-ce que je dois croire en quelque chose ?",
    a: "Non. Les effets passent par les vibrations et le système nerveux, indépendamment des croyances."
  },

  {
    q: "Que dois-je apporter pour ma séance ?",
    a: "Vêtements confortables uniquement pour les massages individuels, couverture fine ou plaid, petit coussin et tapis de yoga pour les séances collectives."
  },

  {
    q: "Combien de temps durent les effets ?",
    a: "De quelques heures à plusieurs jours selon les personnes et la régularité."
  },

  {
    q: "Puis-je combiner avec un traitement médical ?",
    a: "Oui. La sonothérapie est complémentaire mais ne remplace pas un suivi médical."
  },

  {
    q: "Quelles sont les contre-indications ?",
    a: "Grossesse, troubles psychotiques, pacemaker, cancer, opérations avec implants métalliques, enfants de moins de 7 ans."
  },

  {
    q: "Faut-il préparer l'espace de détente en cas d'intervention à domicile ou en entreprise ?",
    a: "Oui : espace calme, tapis ou table de massage, coussins et couvertures."
  }
];

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat]">

      {/* HEADER */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between px-4 py-4">
          <h1 className="font-[Cormorant_Garamond] text-2xl font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link to="/">Accueil</Link>
            <Link to="/particuliers">Particuliers</Link>
            <Link to="/entreprises">Entreprises</Link>
            <Link to="/faq" className="text-[#947f61]">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">

      {/* HERO FAQ */}
<section className="bg-gradient-to-br from-[#947f61]/10 to-white py-20">
  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-5xl md:text-6xl font-[Cormorant_Garamond] font-semibold text-gray-900 mb-4">
      Questions Fréquentes
    </h2>

    <p className="text-xl text-gray-700">
      Trouvez les réponses à vos questions sur la sonothérapie et mes services
    </p>

  </div>
</section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 font-[Montserrat]">

            {faqs.map((f, i) => (
  <div
    key={i}
    className="mb-4 border border-gray-200 rounded-2xl overflow-hidden"
  >

    <button
      onClick={() => setOpenIndex(openIndex === i ? null : i)}
      className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-gray-900 hover:bg-gray-50 transition font-[Montserrat]"
    >
      {f.q}

      <ChevronDown
  size={18}
  className={`text-[#947f61] transition-transform duration-300 ${
    openIndex === i ? "rotate-180" : ""
  }`}
/>
    </button>

    {openIndex === i && (
      <div className="px-6 pb-5 text-gray-600 leading-relaxed text-base font-[Montserrat]">
        {f.a}
      </div>
    )}

  </div>
))}

          </div>
        </section>

        {/* CONTACT */}
<section className="py-20 bg-white">

  <div className="max-w-4xl mx-auto px-4">

    <h3 className="text-5xl font-[Cormorant_Garamond] font-semibold text-center text-gray-900 mb-4">
      Formulaire de Contact
    </h3>

    <p className="text-center text-xl text-gray-700 mb-10 font-[Montserrat]">
      Posez-moi vos questions, je vous répondrai rapidement
    </p>

    <form
  onSubmit={handleSubmit}
  className="bg-white p-10 rounded-3xl shadow-lg space-y-5"
>

  <input
    name="name"
    placeholder="Nom"
    onChange={handleChange}
    className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#947f61]"
  />

  <input
    name="email"
    placeholder="Email"
    onChange={handleChange}
    className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-[#947f61]"
  />

  <textarea
    name="message"
    placeholder="Message"
    onChange={handleChange}
    className="w-full border border-gray-200 p-4 rounded-xl h-32 focus:outline-none focus:border-[#947f61]"
  />

  <button
    type="submit"
    className="w-full bg-[#947f61] text-white py-4 rounded-xl hover:opacity-90 transition"
  >
    Envoyer
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