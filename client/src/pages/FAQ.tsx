import { Link } from "react-router-dom"; 
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    { q: "Sonothérapie ?", a: "Thérapie par le son" },
    { q: "Massage sonore ?", a: "Bols tibétains" },
    { q: "Tarifs ?", a: "À partir de 59€" },

    // AJOUTS DEMANDÉS (sans toucher au reste)
    { q: "Comment se déroule un massage sonore ?", a: "La séance commence par un temps d’échange, puis vous êtes allongé confortablement. Les bols tibétains sont ensuite joués autour et sur le corps pour induire une relaxation profonde." },

    { q: "Quels sont les bienfaits des séances ?", a: "Réduction du stress, amélioration du sommeil, relâchement des tensions physiques et émotionnelles, et sensation globale d’apaisement." },

    { q: "Pour qui ?", a: "Les séances s’adressent à toute personne en recherche de détente, sauf contre-indications spécifiques (grossesse, implants métalliques sensibles, pathologies particulières)." },

    { q: "Quelle différence avec un autre thérapeute ?", a: "La sonothérapie agit directement par les vibrations sonores sur le système nerveux, là où d’autres approches sont uniquement verbales ou corporelles." }
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

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">

            {faqs.map((f, i) => (
              <div key={i} className="border p-4 mb-3 rounded">

                <button onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                  {f.q}
                  <ChevronDown />
                </button>

                {openIndex === i && <p className="mt-2">{f.a}</p>}

              </div>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 bg-gray-50">
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6">

            <input name="name" placeholder="Nom" onChange={handleChange} className="w-full border p-2 mb-2" />
            <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-2" />
            <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-2 mb-2" />

            <button className="w-full bg-[#947f61] text-white py-2">
              Envoyer
            </button>

          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto flex justify-between px-4">

          <div>
            <b>Zone d'intervention :</b>
            <p>Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville</p>
          </div>

          <div className="flex gap-4">

            <img src="/icons/instagram.svg" className="w-6 h-6" />

            <img src="/images/logo resalib.jpg" className="w-6 h-6" />

          </div>

        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          © 2026 Cédric Ragot
        </div>
      </footer>

    </div>
  );
}