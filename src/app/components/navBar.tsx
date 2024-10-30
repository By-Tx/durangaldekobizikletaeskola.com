import React from 'react';
import imageLogo from '../media/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
    return (
        <>
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
        </>
    );
};

export default NavBar;
