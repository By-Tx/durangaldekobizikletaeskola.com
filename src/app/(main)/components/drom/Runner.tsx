import Image from 'next/image';
import { FC } from 'react';
import calendario from "@/app/media/runner/calendario.png";
import ubi from "@/app/media/footer/marcador.png";
import medalla from "@/app/media/runner/medalla.png";
import { title } from 'process';
interface RunnerProps {
    runner: {
        image: string;
        name: string;
        born: string;
        goals: string;
        
    }[];
    title: string;
}




const Runner: FC<RunnerProps> = ({ runner = [],title }) => {
    return (
        <div className='flex w-full relative mb-11'>
   
    <div className="bg-customblue font-fredoka text-white font-bold text-xl p-2 [writing-mode:vertical-rl] [text-orientation:upright] hidden sm:block absolute mx-7 xl:flex items-center justify-center rounded-xl h-86">
        <h3>{title}</h3>
    </div>

  
    <div className='px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 auto-rows-auto mb-11 w-full justify-center place-items-center ml-16'>
        {runner.map(({ image, name, born, goals }, index) => (
            <div className="flex w-48 flex-col relative group" key={index}>
                
                <div>
                    <Image src={image} alt={name} width={200} height={200} className="rounded-t-xl" />
                </div>

               
                <div className="bg-customDarkBlue text-xl font-fredoka flex items-center justify-center h-14 rounded-b-xl">
                    {name}
                </div>

                
                <div className="absolute h-72 inset-0 bg-black bg-opacity-50 font-fredoka text-white grid grid-rows-6 gap-12 justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-t-xl">
                    <p className="flex items-center row-start-2">
                        <Image src={calendario} alt="runner" width={35} height={30} className="rounded-t-xl mx-2" />
                        {born}
                    </p>

                    <p className="flex items-center row-start-4">
                        <Image src={medalla} alt="runner" width={35} height={30} className="rounded-t-xl mx-2" />
                        {goals}
                    </p>
                </div>
            </div>
        ))}
    </div>
</div>

    );
}

export default Runner;
