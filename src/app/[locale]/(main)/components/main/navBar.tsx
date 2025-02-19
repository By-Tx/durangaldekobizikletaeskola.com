"use client";
import { useTranslations } from "next-intl";
import {Link} from '@/i18n/routing';
import React, { useState, useEffect } from "react";
import Image from "next/image";

import imageLogo from "@/app/media/DURANGOALDEKO.png";
import logoMenu from "@/app/media/menu/logoMenu.svg";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("menuComponent");
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r bg-customblue shadow-md z-20 font-fredoka">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
          <Image src={imageLogo} alt="Logo" className="h-16 w-auto cursor-pointer" />
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            className="focus:outline-none z-30"
            aria-label="Toggle menu"
          >
            <Image src={logoMenu} alt="Menu" className="h-8 w-8 cursor-pointer" />
          </button>
        )}

        {/* Desktop Links */}
        {!isMobile && (
          <div className="flex items-center space-x-6">
            <Link href="/eskola" className="text-white hover:text-blue-200 transition duration-150">
              {t("eskola")}
            </Link>
            <Link href="/cafedromedario" className="text-white hover:text-blue-200 transition duration-150">
              CAFÉ DROMEDARIO-FLOTAMET 
            </Link>
            {/* <Link href="/galeria" className="text-white hover:text-blue-200 transition duration-150">
               GALERIA
            </Link> */}
            <Link href="/form" className="text-white hover:text-blue-200 transition duration-150">
              {t("form")} 
            </Link>
            {/* <Link href="/clothes" className="text-white hover:text-blue-200 transition duration-150">
              ARROPA
            </Link> */}
            <Link href="/contacto" className="text-white hover:text-blue-200 transition duration-150">
              {t("contact")}
            </Link>
          </div>
        )}

        {/* Language Switch and Login */}
       {!isMobile && ( 
        <div className="flex items-center space-x-4">
          {/* <Link
            href="/login"
            className="bg-customDarkBlue text-white px-4 py-2 rounded-lg "
          >
            HASI SAIOA
          </Link> */}
          <div className="hidden md:flex items-center space-x-2">
            
            <div>EUS</div>
            <div>/</div>
            <div>ES</div>
            
          </div>
          
        </div>)}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/70 flex flex-col items-center justify-center space-y-6 text-white z-20">
          <Link
            href="/"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            {t("home")}
          </Link>
          <Link
            href="/eskola"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            {t("eskola")}
          </Link>
          <Link
            href="/cafedromedario"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            CAFÉ DROMEDARIO-FLOTAMET 
          </Link>
          {/* <Link
            href="/galeria"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            ARGAZKI GALERIA
          </Link> */}
          <Link
            href="/form"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            {t("form")}
          </Link>
          <Link
            href="/contacto"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            {t("contact")}
          </Link>
          {/* <Link
            href="/login"
            className="text-xl bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-150"
            onClick={toggleMenu}
          >
            HASI SAIOA
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
