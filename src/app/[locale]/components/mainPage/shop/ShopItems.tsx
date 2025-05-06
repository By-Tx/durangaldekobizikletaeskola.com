import Image from "next/legacy/image";
import { FC } from 'react';

// Tipado de las props del componente ShopItems
interface ShopProps {
    item: {
        image: string;
        image2: string;
        name: string;
        add: string;
    }[];
    title: string;
    onAdd?: (product: { name: string; image: string }) => void;
}

const ShopItems: FC<ShopProps> = ({ item = [], title, onAdd }) => {
    return (
        <div className='flex w-full relative mb-16'>
            <div className="bg-customblue font-fredoka text-white font-bold text-xl p-2  [writing-mode:vertical-rl] [text-orientation:upright] hidden sm:block absolute mx-7 h-83 xl:flex items-center justify-center rounded-xl">
                <h3 className='uppercase'>{title}</h3>
            </div>
            <div className='px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-11 auto-rows-auto  w-full justify-center place-items-center xl:ml-24 2xl:ml-16'>
                {item.map(({ image, name, image2, add }, index) => (
                    <div className="w-[200px] h-[300px] group relative" key={index}>
                        <div className="w-full h-full bg-white rounded-t-xl flex items-center justify-center">
                            <div
                                className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-black bg-opacity-50 py-1 z-20 sm:hidden"
                                onClick={() => onAdd && onAdd({ name, image })}
                            >
                                <span className="text-white text-2xl font-bold font-fredoka tracking-wider cursor-pointer uppercase">{add}</span>
                            </div>
                            <div className="flip-card-inner w-full h-full relative">
                                {/* default image */}
                                <div className={`flip-card-front w-full h-full overflow-hidden absolute inset-0 transition-transform duration-500 sm:group-hover:rotate-y-180`} style={{ backfaceVisibility: 'hidden' }}>
                                    <Image
                                        src={image}
                                        alt="Imagen principal"
                                        width={200}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* hover image */}
                                <div className={`flip-card-back w-full h-full overflow-hidden absolute inset-0 transition-transform duration-500 sm:group-hover:rotate-y-0 sm:rotate-y-180`} style={{ backfaceVisibility: 'hidden' }}>
                                    <Image
                                        src={image2}
                                        alt="Imagen secundaria"
                                        width={200}
                                        height={300}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute bottom-0 left-0 w-full items-center justify-center bg-black bg-opacity-50 py-1 z-10 hidden sm:flex opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={() => onAdd && onAdd({ name, image })}
                                    >
                                        <span className="text-white text-2xl font-bold font-fredoka tracking-wider cursor-pointer uppercase">{add}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="font-fredoka uppercase text-center bg-customDarkBlue text-2xl font-semibold rounded-b-xl">{name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ShopItems;