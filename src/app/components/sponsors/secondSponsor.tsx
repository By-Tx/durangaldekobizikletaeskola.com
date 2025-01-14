import Image from 'next/image';

const SecondSponsor = (props: { Link: string | undefined; img: string | undefined; }) => {
    return (
        <div className="flex justify-center items-center bg-customDarkBlue h-24 w-56 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl ">
        <a href={props.Link} className="h-full flex items-center justify-center">
          <Image
            src={props.img ?? ''}
            alt="Logo patrocinador"
            className="h-full w-auto rounded-lg transition duration-300 transform hover:scale-105 p-2 object-contain"
            width={300}
            height={150}
          />
        </a>
      </div>
      
    );
}

export default SecondSponsor;
