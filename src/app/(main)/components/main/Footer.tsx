"use client";
import logos from "@/app/media/linkLogo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import instagram from "@/app/media/RSS/instagram.svg";
import facebook from "@/app/media/RSS/facebook.svg";
import twitter from "@/app/media/RSS/twitter.svg";
import mail from "@/app/media/footer/correo.png";
import telf from "@/app/media/footer/telf.png";
import ubi from "@/app/media/footer/marcador.png";
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
                            <a href="http://" target="_blank" rel="noopener noreferrer"><Image src={mail} width={20} height={20} alt="mail logo" /></a>
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
        //pc resolution
        return (
            <footer className="h-44">
                <div className=" h-full bg-customblue grid grid-cols-2 ">

                    <div className=" justify-center items-end h-21 text-center my-1 ">
                        <div >
                            <div className="flex justify-end items-center text-end font-fredoka text-xl  my-2 ">

                                Murueta Torre Auzunea, 5D <br />
                                48200 Durango, Bizkaia
                                <Image src={ubi} alt="Logo" width={40} height={40} className="mx-2" />
                            </div>
                            <div className="flex justify-end items-center text-end font-fredoka text-xl  my-2">

                                <div> 699 780 190</div>
                                <Image src={telf} alt="Logo" width={40} height={40} className="mx-2" />
                            </div>
                            <div className="flex justify-end items-center text-end font-fredoka text-xl  my-2">
                                <a href="mailto:durangaldekobizikletaeskola@gmail.com"
                                    rel="noopener noreferrer"
                                    className="text-white flex items-center font-fredoka text-xl">

                                    <div className="flex items-center">durangaldekobizikletaeskola@gmail.com</div>
                                    <Image src={mail} alt="Logo" width={40} height={40} className="mx-2" />
                                </a>
                            </div>

                        </div>

                    </div>
                    <div className=" w-full items-center justify-center ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2909.733754657407!2d-2.6340831241669345!3d43.173112571128875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e3291d2578213%3A0x5320edb9cf962152!2sMurueta%20Torre%20Auzunea%20Etxetaldea%2C%205D%2C%2048200%20Durango%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1739347448883!5m2!1ses!2ses"
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                    </div>

                </div>


                <div className="flex items-center justify-end  w-full  bg-customDarkBlue h-10 pr-2">
                    <div className="pl-1">Designed by</div>
                    <a href="https://github.com/txuli" className="flex items-center pl-1 bg-customDarkerBlue rounded-lg w-fit justify-center px-2 mx-2 group">
                        <Image src={logos} alt="Logo" width={20} height={20} className="group-hover:rotate-180 transition-all grayscale invert " />
                        <span className="pl-1">Txuli </span>
                    </a>
                    <span className="pl-1">for Durangaldeko Bizikleta Eskola ©2025  </span>
                </div>


            </footer>
        )
    }
}
