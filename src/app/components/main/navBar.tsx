"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import imageLogo from "@/app/media/logo.png";
import logoMenu from "@/app/media/menu/logoMenu.svg";
import euskera from "@/app/media/euskera.png";
import spanish from "@/app/media/spanish.png";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-md z-20">
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
              ESKOLA
            </Link>
            <Link href="/cafedromedario" className="text-white hover:text-blue-200 transition duration-150">
              CAFÉ DROMEDARIO-FLOTAMET TALDEA
            </Link>
            <Link href="/galeria" className="text-white hover:text-blue-200 transition duration-150">
              ARGAZKI GALERIA
            </Link>
            <Link href="/form" className="text-white hover:text-blue-200 transition duration-150">
              IZENA EMAN TALDEAN
            </Link>
            <Link href="/contacto" className="text-white hover:text-blue-200 transition duration-150">
              KONTAKTUA
            </Link>
          </div>
        )}

        {/* Language Switch and Login */}
       {!isMobile && ( 
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Image src={euskera} alt="Euskera" className="h-8 w-auto cursor-pointer" />
            <Image src={spanish} alt="Spanish" className="h-8 w-auto cursor-pointer" />
          </div>
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-150"
          >
            HASI SAIOA
          </Link>
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
            HASIERA
          </Link>
          <Link
            href="/eskola"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            ESKOLA
          </Link>
          <Link
            href="/cafedromedario"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            CAFÉ DROMEDARIO-FLOTAMET TALDEA
          </Link>
          <Link
            href="/galeria"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            ARGAZKI GALERIA
          </Link>
          <Link
            href="/form"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            IZENA EMAN TALDEAN
          </Link>
          <Link
            href="/contacto"
            className="text-xl hover:text-blue-300 transition duration-150"
            onClick={toggleMenu}
          >
            KONTAKTUA
          </Link>
          <Link
            href="/login"
            className="text-xl bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-150"
            onClick={toggleMenu}
          >
            HASI SAIOA
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
