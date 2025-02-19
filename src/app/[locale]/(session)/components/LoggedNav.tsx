"use client"
import Image from 'next/image'
import Logout from "@/app/[locale]/(main)/components/auth/logOut";
import ImgMenu from '../media/home.svg'
import { useEffect, useState } from 'react';
export default function LoggedNav() {
    const [isInUpperZone, setIsInUpperZone] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Función para verificar si la resolución es móvil
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Consideramos móvil si el ancho es <= 768px
        };

        // Verificar al montar el componente
        handleResize();

        // Agregar y limpiar el evento de redimensionamiento
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMobile) return;

        interface MouseMoveEvent extends MouseEvent {
            clientY: number;
        }

        const handleMouseMove = (event: MouseMoveEvent) => {
            const windowHeight = window.innerHeight;
            const cursorY = event.clientY;
            const upperLimit = windowHeight * 0.3;

            if (cursorY < upperLimit) {
                setIsInUpperZone(true);
            } else {
                setIsInUpperZone(false);
            }
        };


        window.addEventListener('mousemove', handleMouseMove);


        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile]);

    return (
        <nav className="justify-center flex relative z-50">
            <div className="relative">
                <div
                    className={`bg-gray-600/10 border-2 transition-all duration-300 border-gray-700/50 rounded-2xl mt-1 ${isInUpperZone && !isMobile ? 'w-96' : 'w-12'
                        } ${isMobile ? 'w-96' : ''}`}
                >
                    <div className="flex items-center gap-x-4 px-2">
                        
                        <div className="w-11 relative z-10">
                            <a href="/dashboard">
                                <Image
                                    src={ImgMenu}
                                    alt=""
                                    className={`filter invert h-10 transition-all duration-150`}
                                />
                            </a>
                        </div>

                        
                        <div className={`absolute flex items-center gap-4 justify-end w-80`}>
                            <div
                                className={`${isInUpperZone || isMobile ? 'opacity-100 delay-350' : 'opacity-0'
                                    }`}
                            >
                                <a href="/projects" className="text-white">
                                    Carreras
                                </a>
                            </div>
                            <div
                                className={`${isInUpperZone || isMobile ? 'opacity-100 delay-350' : 'opacity-0'
                                    }`}
                            >
                                <a href="/about" className="text-white">
                                    Faltas
                                </a>
                            </div>
                            <div
                                className={`${isInUpperZone || isMobile ? 'opacity-100 delay-350' : 'opacity-0'
                                    }`}
                            >
                                <Logout />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


