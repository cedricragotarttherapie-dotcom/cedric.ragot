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

    { q: "Comment se déroule un massage sonore ?", a: "La séance commence par un temps d’échange, puis vous êtes allongé confortablement. Les bols tibétains sont ensuite joués autour et sur le corps pour induire une relaxation profonde." },

    { q: "Quels sont les bienfaits des séances ?", a: "Réduction du stress, amélioration du sommeil, relâchement des tensions physiques et émotionnelles." },

    { q: "Pour qui ?", a: "Toute personne en recherche de détente et de rééquilibrage." },

    { q: "Quelle différence avec un autre thérapeute ?", a: "La sonothérapie agit par vibration directe sur le système nerveux." }
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

                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex justify-between w-full items-center"
                >
                  {f.q}
                  <ChevronDown size={18} />
                </button>

                {openIndex === i && (
                  <p className="mt-2 text-gray-700">{f.a}</p>
                )}

              </div>
            ))}

          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 bg-gray-50">

          <div className="max-w-3xl mx-auto px-4">

            <h3 className="text-2xl font-[Cormorant_Garamond] mb-6 text-center">
              Contactez-nous
            </h3>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">

              <input name="name" placeholder="Nom" onChange={handleChange} className="w-full border p-2 mb-2" />
              <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-2" />
              <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full border p-2 mb-2" />

              <button className="w-full bg-[#947f61] text-white py-2">
                Envoyer
              </button>

            </form>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto flex justify-between px-4">

          <div>
            <b>Zone d'intervention :</b>
            <p>Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville</p>
          </div>

          <div className="flex gap-4 items-center">

            {/* FIX INSTAGRAM */}
            <a
              href="https://instagram.com/cedric_ragot"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img src="/icons/instagram.svg" className="w-6 h-6" />
            </a>

            <a
              href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80"
            >
              <img src="/images/logo resalib.jpg" className="w-6 h-6 object-contain" />
            </a>

          </div>

        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          © 2026 Cédric Ragot
        </div>
      </footer>

    </div>
  );
}