import Image from "next/legacy/image";

const MainSponsor = (props: { Link: string | undefined; img: string | undefined;  Link2: string | undefined; img2: string | undefined;img3: string | undefined;Link3: string; img4: string | undefined;Link4: string }) => {
    return (
        <>
            <div className="w-10/12 mx-auto grid grid-cols-2 gap-4  md:grid-cols-4">
                {/* Primer patrocinador */}
                <div className="bg-customDarkBlue mb-6 w-44 sm:w-full max-w-sm h-32 md:h-40 rounded-lg shadow-lg flex items-center justify-center mx-auto">
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
                            width={270}
                            height={94}
                        />
                    </a>
                </div>

                {/* Segundo patrocinador */}
                <div className="bg-customDarkBlue mb-6 w-44 sm:w-full max-w-sm h-32 md:h-40 rounded-lg shadow-lg flex items-center justify-center mx-auto">
                    <a
                        href={props.Link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex items-center justify-center p-4"
                    >
                        <Image
                            src={props.img2 ?? ''}
                            alt="Logo patrocinador"
                            className="object-contain transition-transform duration-300 transform hover:scale-105 py-1"
                            width={270}
                            height={94}
                        />
                    </a>
                </div>

                {/* Tercer patrocinador */}
                <div className="bg-customDarkBlue mb-6 w-44 sm:w-full max-w-sm h-32 md:h-40 rounded-lg shadow-lg flex items-center justify-center mx-auto">
                    <a
                        href={props.Link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex items-center justify-center p-4"
                    >
                        <Image
                            src={props.img3 ?? ''}
                            alt="Logo patrocinador"
                            className="object-contain transition-transform duration-300 transform hover:scale-105 py-1"
                            width={270}
                            height={94}
                        />
                    </a>
                </div>
                <div className="bg-customDarkBlue mb-6 w-44 sm:w-full max-w-sm h-32 md:h-40 rounded-lg shadow-lg flex items-center justify-center mx-auto ">
                    <a
                        href={props.Link4}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-full w-full flex items-center justify-center p-4"
                    >
                        <Image
                            src={props.img4 ?? ''}
                            alt="Logo patrocinador"
                            className="object-contain transition-transform duration-300 transform hover:scale-105 py-1"
                            width={270}
                            height={94}
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default MainSponsor;
