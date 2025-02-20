import Image from 'next/image';

const Helpers = (props: { Link: string | undefined; img: string | undefined; style: string | undefined}) => {
    return (
        <div className=" bg-transparent shadow-none lg:bg-customDarkBlue lg:shadow-lg h-24 w-18 md:w-full  rounded-lg   flex items-center justify-center mb-3 xl:mb-0">
    <a
        href={props.Link}
        className="h-full w-full flex items-center justify-center  "
    >
        <Image
            src={props.img ?? ''}
            alt="Logo patrocinador"
            className="object-contain transition-transform duration-300 transform hover:scale-105"
            width={160}
            height={100}
        />
    </a>
</div>

    );
}

export default Helpers;
