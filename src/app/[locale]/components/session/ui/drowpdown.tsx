'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const options = [
    { label: 'Editar Noticias', value: 'EditNotices' },
    { label: 'Crear Noticia', value: 'CreateNotices' },
];

export default function ToggleClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const selected = searchParams.get('option');

    const trackRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);

    // Calcula el desplazamiento dinámico
    useEffect(() => {
        if (trackRef.current) {
            const trackWidth = trackRef.current.offsetWidth;
            const knobWidth = 32;
            const padding = 4;
            setOffset(trackWidth - knobWidth - padding * 2);
        }
    }, []);

    useEffect(() => {
        if (!selected) {
            const params = new URLSearchParams(searchParams);
            params.set('option', 'EditNotices');
            router.replace(`?${params.toString()}`);
        }
    }, [selected, router, searchParams]);

    const selectedIdx = options.findIndex(opt => opt.value === selected) ?? 0;
    const handleClick = (idx: number) => {
        if (options[idx].value !== selected) {
            const params = new URLSearchParams(searchParams);
            params.set('option', options[idx].value);
            router.push(`?${params.toString()}`);
        }
    };

    const handleToggle = () => {
        const nextIdx = selectedIdx === 0 ? 1 : 0;
        handleClick(nextIdx);
    };

    return (
        <div className="flex justify-start items-center gap-6 select-none">
            <button
                className={`font-semibold px-3 text-base md:text-lg uppercase transition-colors duration-200 
                ${selected === options[0].value ? "text-blue-400" : "text-gray-300 hover:text-blue-300"}`}
                onClick={() => handleClick(0)}
            >
                {options[0].label}
            </button>
            <div
                ref={trackRef}
                className="relative w-20 h-10 bg-gray-800 border-2 border-blue-900 rounded-full flex items-center shadow-lg cursor-pointer transition-colors duration-300"
                onClick={handleToggle}
                aria-label="Cambiar modo"
                tabIndex={0}
                role="switch"
                aria-checked={selectedIdx === 1}
            >
                <div
                    className="absolute left-0.5 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full shadow-xl transition-transform duration-300"
                    style={{
                        transform: `translateX(${selectedIdx === 0 ? 0 : offset}px) translateY(-50%)`,
                    }}
                />
            </div>
            <button
                className={`font-semibold px-3 text-base md:text-lg uppercase transition-colors duration-200 
                ${selected === options[1].value ? "text-blue-400" : "text-gray-300 hover:text-blue-300"}`}
                onClick={() => handleClick(1)}
            >
                {options[1].label}
            </button>
        </div>
    );
}