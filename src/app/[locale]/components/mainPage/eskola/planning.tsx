import { FC } from 'react';
import Image from "next/legacy/image";

interface PlanningProps {
   
    planning: 
    { 
        url: string;
       
        title: string;
       
        text: string ;
         }[];
}

const Planning: FC<PlanningProps> = ({ planning = [] }) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6  mb-20">
           
            {planning.map(({ url, title, text }, index) => (
                <div
                    
                    key={index}
                    className="relative flex flex-col items-center w-80 md:w-96  mx-auto"
                >
                    <Image src={url} alt={title} width={500} height={500} className="w-full h-60 object-cover  rounded-t-xl" />
                    <h3 className="text-2xl  w-full text-left font-fredoka font-semibold text-white bg-customDarkBlue p-2 rounded-b-xl">{title}</h3>
                    <p className="mt-3 ml-2 text-justify font-fredoka text-2xl">{text}</p>

                </div>
            ))}
        </section>
    );
}
export default Planning;