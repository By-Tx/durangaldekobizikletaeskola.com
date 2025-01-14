import Image from 'next/image';

const Helpers = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="bg-customDarkBlue  h-32 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl w-52 flex items-center justify-center">
    <a
        href={props.Link}
        className="h-full w-full flex items-center justify-center"
    >
        <Image
            src={props.img ?? ''}
            alt="Logo patrocinador"
            className="h-auto w-auto rounded-lg transition duration-300 transform hover:scale-105 object-contain"
            width={300}
            height={150}
        />
    </a>
</div>

    );
}

export default Helpers;
