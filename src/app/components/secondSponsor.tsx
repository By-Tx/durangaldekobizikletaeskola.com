import Image from 'next/image';
const secondsponsor = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="  bg-blue-700  mb-2 m-6 h-20">
            <a href={props.Link} className='h-20'>
                <Image
                    src={props.img ?? ''}
                    alt="Logo patrocinador"
                    className="mx-auto h-16 w-fit"
                    width={270}  // Ancho de la imagen
                    height={74} // Alto de la imagen (puedes ajustar según el ratio)
                />
            </a>

        </div>
    );
}
export default secondsponsor;