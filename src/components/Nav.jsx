"use client";
import React, { useState, useEffect } from "react";
import AYShopLogo from "../assets/images/AYSHOP_logo.png";
import Header from "./Header";
import { TopNav } from "../assets/sous-components/TopNav";
import { Menu } from "../assets/sous-components/Menu";
import MobileMenu from "../assets/sous-components/MobileMenu";

export default function Nav() {
  const [menu] = useState([
    { id: 3, link: "About us", path: "about" },
    { id: 4, link: "Promotion", path: "promotion" },
    { id: 5, link: "Contact us", path: "contact" },
  ]);

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full z-40 transition-shadow duration-300 ${
        isScrolled ? "shadow-md bg-white" : "shadow-none"
      }`}
    >
      <Header handleShowMenu={handleShowMenu} />
      <TopNav />
      <Menu menu={menu} showMenu={showMenu} />
      <MobileMenu handleShowMenu={handleShowMenu} showMenu={showMenu} menu={menu} />
    </div>
  );
}
