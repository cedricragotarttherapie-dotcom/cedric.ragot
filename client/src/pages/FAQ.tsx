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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Message envoyé");
    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    { q: "Qu'est-ce que la sonothérapie ?", a: "La sonothérapie est une thérapie par les vibrations sonores favorisant relaxation et équilibre émotionnel." },
    { q: "Comment fonctionne le massage sonore ?", a: "Les bols tibétains créent des vibrations profondes agissant sur le système nerveux." },
    { q: "Tarifs ?", a: "Séance découverte 59€. Cartes disponibles ensuite." },
    { q: "Comment réserver ?", a: "Via le formulaire ou le lien de réservation." },
  ];

  return (
    <div className="min-h-screen flex flex-col font-[Montserrat]">

      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-[Cormorant_Garamond] font-semibold">
            Cédric Ragot
          </h1>

          <nav className="flex gap-6 text-sm">
            <Link to="/">Accueil</Link>
            <Link to="/particuliers">Particuliers</Link>
            <Link to="/entreprises">Entreprises</Link>
            <Link to="/faq" className="font-semibold">FAQ</Link>
          </nav>

        </div>
      </header>

      <main className="flex-1">

        {/* HERO */}
        <section className="bg-[#947f61]/10 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-[Cormorant_Garamond] font-semibold">
              Questions fréquentes
            </h2>
          </div>
        </section>

        {/* FAQ ACCORDÉON */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">

            {faqs.map((item, i) => (
              <div key={i} className="border-b py-4">

                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="font-semibold">{item.q}</h3>
                  <ChevronDown
                    className={`transition ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>

                {openIndex === i && (
                  <p className="mt-3 text-gray-600">
                    {item.a}
                  </p>
                )}

              </div>
            ))}

          </div>
        </section>

        {/* FORMULAIRE CONTACT */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-xl mx-auto px-4">

            <h3 className="text-3xl font-[Cormorant_Garamond] font-semibold mb-6 text-center">
              Contact
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                placeholder="Nom"
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full border p-2"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
                className="w-full border p-2 h-32"
                required
              />

              <button className="w-full bg-[#947f61] text-white py-2 rounded">
                Envoyer
              </button>

            </form>

          </div>
        </section>

      </main>

      {/* FOOTER IDENTIQUE HOME */}
      <footer className="bg-gray-900 text-gray-300 py-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-4">

          <div>
            <b className="text-white">Zone d'intervention :</b>
            <p className="mt-2">
              Saint-Germain-en-Laye, Le Pecq, Le Vésinet, Chatou, L'Étang-la-Ville.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">

            <p className="text-white font-semibold">Suivez-moi</p>

            <div className="flex gap-4 items-center">

              <a href="https://www.instagram.com/cedric_ragot">
                <Instagram />
              </a>

              <a href="https://www.resalib.fr/praticien/47572-ragot-cedric-sonotherapeute-saint-germain-en-laye">
                <img src="/images/logo resalib.jpg" className="w-6 h-6" />
              </a>

            </div>

          </div>

        </div>

        <div className="text-center mt-6 text-sm border-t border-gray-700 pt-6">
          © 2026 Cédric Ragot - Sonothérapie. Tous droits réservés.
        </div>

      </footer>

    </div>
  );
}
