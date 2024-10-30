import Image from 'next/image';

const SecondSponsor = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 mb-2 m-6 h-36 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            <a href={props.Link} target="_blank" rel="noopener noreferrer" className="h-full flex items-center justify-center">
                <Image
                    src={props.img ?? ''}
                    alt="Logo patrocinador"
                    className="h-24 rounded-lg transition duration-300 transform hover:scale-105" 
                    width={270}  // Ancho de la imagen
                    height={74} // Alto de la imagen (puedes ajustar según el ratio)
                />
            </a>
        </div>
    );
}

export default SecondSponsor;
