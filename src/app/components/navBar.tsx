import React from 'react';
import imageLogo from '../media/logo.png'
import fecebook from '../media/RSS/facebook.svg'
import instagram from '../media/RSS/instagram.svg'
import twitter from '../media/RSS/twitter.svg'
import Image from 'next/image'

import Link from 'next/link';
// @todo resposive design 
const NavBar = () => {
    return (
        <>
            <nav className='flex justify-between w-full bg-blue-300/80 px-3'>
                <div className='flex'>
                    <Image src={imageLogo} alt="" className='h-24 '/>
                    <div className='flex ml-7  '>
                        <div className='mt-4 '>
                            <Link href='/equipo'>TALDEA</Link>
                            <div className='flex space-x-1 mt-4 w-24'>
                                <a href="https://www.instagram.com/durangaldeko_bzkeskola/"><Image className='h-5' src={instagram} alt="logo of Instagram" /></a>
                                <a href="https://twitter.com/durangaldekobzk"><Image className='h-5' src={twitter} alt="logo of twitter" /></a>
                                <a href="https://www.facebook.com/share/6g87bj5kHYC8wmUk/?mibextid=LQQJ4d"><Image className='h-5' src={fecebook} alt="logo of facebook" /></a>
                            </div>
                        </div>
                        <Link href='/equipo' className='mr-4  mt-4 h-8 w-50 text-center'>CAFÉ DROMEDARIO-FLOTAMET TALDEA</Link>
                        <Link href='/cafedromedario'className='mr-4  mt-4 h-8 w-50 text-center'>ARGAZKI GALERIA</Link>
                        <Link href='/galeria'className='mr-4  mt-4 h-8 w-50 text-center'>IZENA EMAN TALDEAN</Link>
                        <Link href='/contacto'className='mr-4  mt-4 h-8 w-50 text-center'>KONTAKTUA</Link>
                    </div>
                </div>
                <div className='flex '>
                    
                    <div className='mt-4 h-8 w-24  rounded-lg bg-blue-600 flex text-center items-center justify-center text-white'>HASI SAIOA</div>
                    <div className='flex mt-4 pl-10'>
                        <div>eus</div>
                        <div className='pl-1'>cast</div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;