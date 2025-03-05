
import Image from "next/legacy/image";

const SecondSponsor = (props: { Link: string | undefined; img: string | undefined; style: string | undefined }) => {
  return (
      <div className={`mx-auto flex justify-center items-center bg-customDarkBlue h-20 w-28  md:h-24 md:w-full rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl ${props.style ?? ''}`}>
          <a href={props.Link} className="h-full flex items-center justify-center">
              <Image
                  src={props.img ?? ''}
                  alt="Logo patrocinador"
                  className="h-full w-auto rounded-lg transition duration-300 transform hover:scale-105 p-2 object-contain"
                  width={300}
                  height={96}
              />
          </a>
      </div>
  );
}


export default SecondSponsor;
