// src/data/categoriesData.js
import { FaHeadphones, FaGamepad, FaDesktop, FaLaptop } from 'react-icons/fa';
import { SlScreenSmartphone } from "react-icons/sl";
const Categories = [
  { name: 'Accessoires', icon: <FaHeadphones className="inline mr-2" />, href: '/accessoires' },
  { name: 'PC Portable', icon: <FaLaptop className="inline mr-2" />, href: '/pc-portable' },
  { name: 'Telephone', icon: <SlScreenSmartphone className="inline mr-2" size={22} />, href: '/pc-gamer' },
  { name: 'Jeu Vidéo', icon: <FaGamepad className="inline mr-2" />, href: '/FaGamepad' },
  { name: 'PC Gamer', icon: <FaDesktop className="inline mr-2" />, href: '/pc-gamer' },
 
];

export default Categories;
