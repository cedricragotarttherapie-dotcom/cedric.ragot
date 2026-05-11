import { Link } from "react-router-dom";

export default function Reservation() {
  return (
    <div className="min-h-screen bg-[#f8f6f3] flex items-center justify-center px-4">

      <div className="bg-white p-10 rounded-2xl shadow-sm max-w-xl text-center">

        <h1 className="text-5xl font-[Cormorant_Garamond] text-gray-900 mb-6">
          Paiement validé
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Votre paiement a bien été confirmé.
          <br /><br />
          Vous pouvez maintenant réserver votre créneau directement dans l’agenda.
        </p>

        <a
          href="https://calendly.com/cedricragot/sonotherapie"
          target="_blank"
          className="inline-block bg-[#947f61] text-white px-8 py-4 rounded-xl hover:opacity-90 transition"
        >
          Réserver mon créneau
        </a>

        <div className="mt-6">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Retour à l’accueil
          </Link>
        </div>

      </div>

    </div>
  );
}