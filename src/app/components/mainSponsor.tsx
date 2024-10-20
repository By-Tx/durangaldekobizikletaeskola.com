import Image from 'next/image';
const MainSponsor = (props: { Link: string | undefined; img: string | undefined; } ) => {
    return (
        <div className=" border-inherit border-2  bg-blue-700 ">
            <a href={props.Link}>
                <Image 
                src={props.img ?? ''} 
                alt="Logo patrocinador" 
                className="mx-auto h-56" 
                width={300}  // Ancho de la imagen
                height={224} // Alto de la imagen (puedes ajustar según el ratio)
            /></a>
            
        </div>
    );
}
export default MainSponsor;