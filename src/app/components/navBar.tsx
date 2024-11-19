"use client";
import React, { useEffect, useState } from 'react';
import imageLogo from '../media/logo.png';
import logoMEnu from '../media/menu/logoMenu.svg';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {

    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuFunction = () => {
        setMenuOpen(!menuOpen);
    }
    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);


        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    if (windowWidth !== null && windowWidth < 1200) {
        return (
            <nav>
                <div
                    className={`${menuOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'} fixed cursor-pointer transition-all duration-500 ease-in-out bg-black/55 w-full h-full`}
                >
                    <div className='mt-14 w-full grid '>
                        <Link href='/' className='text-white block p-2 '>HASIERA</Link>
                        <Link href='/eskola' className='text-white block p-2 '>ESKOLA</Link>
                        <Link href='/cafedromedario' className='text-white block p-2 '>CAFÉ DROMEDARIO-FLOTAMET TALDEA</Link>
                        <Link href='/galeria' className='text-white block p-2 '>ARGAZKI GALERIA</Link>
                        <Link href='/form' className='text-white block p-2 '>IZENA EMAN TALDEAN</Link>
                        <Link href='/contacto' className='text-white block p-2 '>KONTAKTUA</Link>
                    </div>
                </div>
                <div className="fixed z-30">
                    <Image
                        src={logoMEnu}
                        alt="Logo"
                        className="mx-auto hover:cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        onClick={menuFunction}
                    />
                    
                </div>
                <div >
                    <Link href='/'><Image src={imageLogo} alt="Logo" className='mx-auto h-16 w-auto ' /></Link>
                   
                </div>


            </nav>


        );
    } else {
        return (
            <nav className='flex justify-between items-center w-full bg-gradient-to-r from-blue-400 to-blue-500 px-6 py-4 fixed top-0 z-20 shadow-md'>
                {/* Logo y Menú de navegación */}
                <div className='flex items-center'>
                    <Link href='/'><Image src={imageLogo} alt="Logo" className='h-24' /></Link>
                    <div className='flex items-center space-x-8 ml-8'>
                        <Link href='/eskola' className='mr-4 mt-4 h-8 w-50 text-white hover:bg-blue-600 rounded-lg px-3 py-1 transition duration-150'>ESKOLA</Link>
                        <Link href='/cafedromedario' className='mr-4 mt-4 h-8 w-50 text-white hover:bg-blue-600 rounded-lg px-3 py-1 transition duration-150'>CAFÉ DROMEDARIO-FLOTAMET TALDEA</Link>
                        <Link href='/galeria' className='mr-4 mt-4 h-8 w-50 text-white hover:bg-blue-600 rounded-lg px-3 py-1 transition duration-150'>ARGAZKI GALERIA</Link>
                        <Link href='/form' className='mr-4 mt-4 h-8 w-50 text-white hover:bg-blue-600 rounded-lg px-3 py-1 transition duration-150'>IZENA EMAN TALDEAN</Link>
                        <Link href='/contacto' className='mr-4 mt-4 h-8 w-50 text-white hover:bg-blue-600 rounded-lg px-3 py-1 transition duration-150'>KONTAKTUA</Link>
                    </div>
                </div>
                {/* Sección derecha: Botón y Selector de idioma */}
                <div className='flex items-center'>
                    <div className='mt-4 h-8 w-24 rounded-lg bg-blue-600 flex text-center items-center justify-center text-white cursor-pointer transition duration-150 hover:bg-blue-700'>HASI SAIOA</div>
                    <div className='flex mt-4 pl-10 text-white font-semibold'>
                        <span className='cursor-pointer hover:text-blue-200 transition duration-150'>eus</span>
                        <span className='pl-1 cursor-pointer hover:text-blue-200 transition duration-150'>cast</span>
                    </div>
                </div>
            </nav>
        );
    }
};

export default NavBar;
