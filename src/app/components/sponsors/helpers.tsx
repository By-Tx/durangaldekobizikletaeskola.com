import Image from 'next/image';

const Helpers = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-blue-500 mb-2 m-6 h-32 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            <a href={props.Link} className='h-full flex items-center justify-center'>
                <Image
                    src={props.img ?? ''}
                    alt="Logo patrocinador"
                    className="h-full w-auto rounded-lg transition duration-300 transform hover:scale-105 p-2 object-contain"
                    width={300}  // Ajusta el ancho según necesites
                    height={150} // Ajusta el alto según necesites
                />
            </a>
        </div>
    );
}

export default Helpers;
