
import Image from "next/legacy/image";
import React, { useEffect, useState } from 'react';

import { StaticImageData } from "next/legacy/image";
export default function TechnicianImages(props: { image1: StaticImageData, image2: StaticImageData | undefined, image3: StaticImageData }) {
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
    if (windowWidth !== null && windowWidth < 1200) {
        return (
            <>
                <section className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <Image src={props.image1} alt="Runner 1" className=" rounded-l-lg "
                     />
                    {props.image2 && <Image src={props.image2} alt="Runner 2" className="image" />}
                    <Image src={props.image3} alt="Runner 3" className=" rounded-r-lg" />
                </section>
            </>
        );
    } else {
        return (
            <>
                <section className="sectionTec mx-auto">
                    <Image src={props.image1} alt="Runner" className="image rounded-l-lg" />
                    {props.image2 && <Image src={props.image2} alt="Runner" className="image" />}
                    <Image src={props.image3} alt="Runner" className="image rounded-r-lg" />


                </section>
            </>
        );
    }
}
