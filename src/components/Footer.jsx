import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-10">
        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">EcomShop</h2>
            <p className="text-sm">
              Découvrez les meilleures offres sur nos produits technologiques. Achetez en toute confiance avec un service client dédié.
            </p>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Catégories</h3>
            <ul className="space-y-2">
              <li><a href="/laptops" className="hover:text-white">Ordinateurs portables</a></li>
              <li><a href="/smartphones" className="hover:text-white">Smartphones</a></li>
              <li><a href="/accessories" className="hover:text-white">Accessoires</a></li>
              <li><a href="/gaming" className="hover:text-white">Gaming</a></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white">À propos</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/terms" className="hover:text-white">Conditions générales</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Abonnez-vous</h3>
            <p className="text-sm mb-4">
              Recevez nos dernières offres et promotions directement dans votre boîte mail.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Entrez votre email"
                className="w-full px-4 py-2 rounded bg-slate-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-slate-700 text-gray-300 rounded hover:bg-slate-600 hover:text-white transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bas de page */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 EcomShop. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Réseaux sociaux avec React Icons */}
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
