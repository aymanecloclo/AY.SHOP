"use client";
import React, { useState } from "react";

import AYShopLogo from "../assets/images/AYSHOP_logo.png";
import Header from "./Header";
import { TopNav } from "../assets/sous-components/TopNav";
import { Menu } from "../assets/sous-components/Menu";


export default function Nav() {
  const [menu] = useState([
    { id: 3, link: 'About us', path: 'about' },
    { id: 4, link: 'Promotion', path: 'promotion' },
    { id: 5, link: 'Contact us', path: 'contact' }
  ]);
 const [showMenu,setShowMenu]=useState("");
  return (
    <>
      <Header/>
      <TopNav />
      <Menu menu={menu} showMenu={showMenu}  />
   
    </>
  );
}
