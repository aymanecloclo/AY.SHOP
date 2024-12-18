"use client";
import React, { useState } from "react";
import AYShopLogo from "../assets/images/AYSHOP_logo.png";
import Header from "./Header";
import { TopNav } from "../assets/sous-components/TopNav";
import { Menu } from "../assets/sous-components/Menu";
import MobileMenu from "../assets/sous-components/MobileMenu";
export default function Nav() {
  const [menu] = useState([
    { id: 3, link: 'About us', path: 'about' },
    { id: 4, link: 'Promotion', path: 'promotion' },
    { id: 5, link: 'Contact us', path: 'contact' }
  ]);
 const [showMenu,setShowMenu]=useState(false);
   const handleShowMenu=()=>{
         setShowMenu(!showMenu);
   }
  return (
    <>
    
      <Header handleShowMenu={handleShowMenu}/>

         <TopNav />
  
         <Menu menu={menu} showMenu={showMenu}    />
         <MobileMenu handleShowMenu={handleShowMenu}  showMenu={showMenu}  menu={menu}/>
   
    </>
  );
}
