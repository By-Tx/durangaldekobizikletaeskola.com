
import Image from 'next/image';

import { StaticImageData } from 'next/image';
export default function TechnicianImages(props: {image1: StaticImageData, image2: StaticImageData | undefined, image3: StaticImageData}) {
    return (
        <>
            <section className="sectionTec mx-auto">
            <Image src={props.image1} alt="Runner" className="image rounded-l-lg"/>
            {props.image2 && <Image src={props.image2} alt="Runner" className="image" />}
            <Image src={props.image3} alt="Runner" className="image rounded-r-lg"/>
            
           
            </section>
        </>
    );
}
