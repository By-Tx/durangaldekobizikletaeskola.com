"use client";
import logos from "@/app/media/linkLogo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import instagram from "@/app/media/RSS/instagram.svg";
import facebook from "@/app/media/RSS/facebook.svg";
import twitter from "@/app/media/RSS/twitter.svg";
export default function Footer() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
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
    if (windowWidth !== null && windowWidth < 1250) {
        return (
            <footer className="bg-blue-500 ">
                <div className="grid grid-cols-4 w-full">

                    <div className="col-span-2 flex items-center mt-2 ">

                        <div className=" flex space-x-2 ml-1 ">
                            <a href="https://www.facebook.com/profile.php?id=100014739280844" target="_blank" rel="noopener noreferrer"><Image src={facebook} width={20} height={20} alt="Instagram logo" /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={twitter} width={20} height={20} alt="Instagram logo" /></a>
                        </div>


                    </div>

                    <div className="col-span-2 flex justify-end  mt-2 ">
                        <div className="pl-1">Designed by</div>
                        <a href="https://github.com/txuli" className="flex items-center pl-1 bg-blue-400 rounded-lg w-fit justify-center px-2 mx-2 group">
                            <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all grayscale invert " />
                            <span className="pl-1">Txuli</span>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center mt-2 pl-4">
                ©2024, Durangaldeko Bizikleta Eskola
                </div>
            </footer>
        );
    } else {
        return (
            <>
                <div className="grid grid-cols-3 bg-gradient-to-r from-blue-400 to-blue-500 h-9">
                    <div className="flex items-center">
                        <div className="mr-3">©2024 </div>
                        <div className=" flex space-x-2">
                            <a href="https://www.instagram.com/durangaldeko_bzkeskola/" target="_blank" rel="noopener noreferrer"><Image src={instagram} width={30} height={30} alt="Instagram logo" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100014739280844" target="_blank" rel="noopener noreferrer"><Image src={facebook} width={30} height={30} alt="Facebook logo" /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={twitter} width={30} height={30} alt="Twitter-X logo" /></a>
                        </div>
                    </div>

                    <div className="flex items-center col-start-3">
                        <div className="flex items-center ">
                            <div className="pl-1">Designed by</div>
                            <a href="https://github.com/txuli" className="flex items-center pl-1 bg-blue-400 rounded-lg w-fit justify-center px-2 mx-2 group">
                                <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all " />
                                <span className="pl-1">Txuli</span>
                            </a>
                            <span className="pl-1">for Durangaldeko Bizikleta Eskola </span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
