"use client";
import Image from "next/image"
import React, { useEffect, useState } from 'react';
import img1 from "../media/runners/Duranguesa_91.jpg"
import img2 from "../media/runners/Duranguesa_98.jpg"
import img3 from "../media/runners/Duranguesa_111.jpg"

export default function RunnerImages() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const images = [img1, img3, img2, img1, img2, img3, img1, img2, img3, img1, img1, img1];
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
            <section className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={`Runner ${index + 1}`} />
                ))}
            </section>
        );
    } else {
        return (
            <>
                <section className="section mx-auto">
                    <Image src={img1} alt="Runner" className="image rounded-l-lg" />
                    <Image src={img3} alt="Runner" className="image" />
                    <Image src={img2} alt="Runner" className="image" />
                    <Image src={img1} alt="Runner" className="image" />
                    <Image src={img2} alt="Runner" className="image" />
                    <Image src={img3} alt="Runner" className="image" />
                    <Image src={img1} alt="Runner" className="image" />
                    <Image src={img2} alt="Runner" className="image" />
                    <Image src={img3} alt="Runner" className="image" />
                    <Image src={img1} alt="Runner" className="image" />
                    <Image src={img1} alt="Runner" className="image" />
                    <Image src={img1} alt="Runner" className="image rounded-r-lg" />
                </section>
            </>
        )
    }
}