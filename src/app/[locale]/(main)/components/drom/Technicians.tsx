import Image from 'next/image';
import { FC } from 'react';

interface TechniciansProps {
    technicians: {
        image: string;
        name: string;
        style?: string | undefined;
    }[];
}




const Technicians: FC<TechniciansProps> = ({ technicians = [] }) => {
    return (
        <div className='flex w-full relative mb-11'>
            <div className="bg-customblue font-fredoka text-white font-bold text-xl p-2  [writing-mode:vertical-rl] [text-orientation:upright] hidden sm:block absolute mx-7 h-full xl:flex items-center justify-center rounded-xl">
                TEKNIKOAK
            </div>


            <div className='px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 auto-rows-auto  w-full justify-center place-items-center ml-16'>
                {technicians.map(({ image, name, style }, index) => (
                    <div className={`flex w-48 flex-col relative group ${style}`} key={index}>
                        <div>
                            <Image src={image} alt={name} width={200} height={200} className="rounded-t-xl" />
                        </div>
                        <div className="bg-customDarkBlue text-xl font-fredoka flex items-center justify-center h-14 rounded-b-xl">
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Technicians;
