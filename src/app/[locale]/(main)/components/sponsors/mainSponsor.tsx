import Image from 'next/image';

const SecondSponsor = (props: { Link: string | undefined; img: string | undefined;  Link2: string | undefined; img2: string | undefined; }) => {
    return (
        <>
            <div className="w-10/12 mx-auto sm:grid lg:grid grid-cols-2 sm:gap-x-32 lg:mb-0">
                {/* Primer patrocinador, alineado a la derecha */}
                <div className="bg-customDarkBlue mb-6 w-full max-w-sm h-40 rounded-lg shadow-lg flex items-center justify-center justify-self-end">
                    <a
                        href={props.Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex items-center justify-center p-4"
                    >
                        <Image
                            src={props.img ?? ''}
                            alt="Logo patrocinador"
                            className="object-contain transition-transform duration-300 transform hover:scale-105"
                            width={270} // Tamaño base de la imagen
                            height={74} // Tamaño base de la imagen
                        />
                    </a>
                </div>

                {/* Segundo patrocinador */}
                <div className="bg-customDarkBlue  w-full max-w-sm h-40 rounded-lg shadow-lg flex items-center justify-center">
                    <a
                        href={props.Link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex items-center justify-center p-4"
                    >
                        <Image
                            src={props.img2 ?? ''}
                            alt="Logo patrocinador"
                            className="object-contain transition-transform duration-300 transform hover:scale-105"
                            width={270} // Tamaño base de la imagen
                            height={74} // Tamaño base de la imagen
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SecondSponsor;
