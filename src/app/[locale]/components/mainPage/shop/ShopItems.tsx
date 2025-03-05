import Image from "next/legacy/image";

import { FC } from 'react';
interface ShopProps {
    item: {
        image: string;
        image2: string;
        name: string;
    }[];
    title: string;
}
const ShopItems: FC<ShopProps> = ({  item = [], title }) => {
    return (

        <div className='flex w-full relative mb-11'>
            <div className="bg-customblue font-fredoka text-white font-bold text-xl p-2  [writing-mode:vertical-rl] [text-orientation:upright] hidden sm:block absolute mx-7 h-full xl:flex items-center justify-center rounded-xl">
                <h3 className='uppercase'>{title}</h3>
            </div>
            <div className='px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 auto-rows-auto  w-full justify-center place-items-center ml-16'>
                {item.map(({ image, name, image2 }, index) => (
                    <div className="w-50 group relative" key={index}>
                        {/* default image*/}
                        <Image
                            src={image}
                            alt="Imagen principal"
                            width={200}
                            height={300}
                            className="absolute opacity-100 group-hover:opacity-0 group-hover:hidden rounded-t-xl"
                        />
                        {/* hover image */}
                        <Image
                            src={image2}
                            alt="Imagen secundaria"
                            width={200}
                            height={300}
                            className="opacity-0 group-hover:opacity-100  rounded-t-xl"
                        />
                        <h4 className="font-fredoka uppercase text-center bg-customDarkBlue text-2xl font-semibold rounded-b-xl">{name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShopItems;