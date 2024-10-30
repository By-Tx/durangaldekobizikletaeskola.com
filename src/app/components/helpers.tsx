import Image from 'next/image';
const helpers = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 mb-2 m-6 h-20 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            <a href={props.Link} className='h-20 flex items-center justify-center'>
                <Image
                    src={props.img ?? ''}
                    alt="Logo patrocinador"
                    className="h-auto w-20 rounded-lg transition duration-300 transform hover:scale-105 p-2"
                    width={170}  // Ancho de la imagen
                    height={74} // Alto de la imagen (puedes ajustar según el ratio)
                />
            </a>
        </div>
    );
}

export default helpers;