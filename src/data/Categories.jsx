// src/data/categoriesData.js
import { FaHeadphones, FaGamepad, FaDesktop, FaLaptop } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
const Categories = [
  {
    name: "Accessoires",
    icon: <FaHeadphones className="inline mr-2" />,
    href: "/store/accessoires",
  },
  {
    name: "PC Portable",
    icon: <FaLaptop className="inline mr-2" />,
    href: "/store/pc-portable",
  },
  {
    name: "Téléphone",
    icon: <SlScreenSmartphone className="inline mr-2" size={22} />,
    href: "/store/telephone",
  },
  {
    name: "Jeu Vidéo",
    icon: <FaGamepad className="inline mr-2" />,
    href: "/store/jeu-video",
  },
  {
    name: "PC Gamer",
    icon: <FaDesktop className="inline mr-2" />,
    href: "/store/pc-gamer",
  },
];

export default Categories;
