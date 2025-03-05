import Image from "next/image";
import { Link } from '@/i18n/routing';
interface GalleryProps {
  album: {
    image: string;
    link: string;
    title: string;
  }[];
}

const Card: React.FC<GalleryProps> = ({ album }) => {
  return (
    
    <>
     
    {album.map((item, index) => (
        <Link href={item.link} key={index} className="h-74">
          <div className="h-60 w-80 mb-32 rounded-lg  ">
            <Image src={item.image} alt="Image" width={391} height={240} className="h-60 w-97 rounded-t-lg" />
            <div className=" bg-customDarkBlue text-white h-14 items-center flex justify-center rounded-b-lg">
              <p className="font-fredoka text-2xl font-semibold">{item.title}</p>
            </div>
          </div>
        </Link>
      ))}
      
   
    </>
  );
}
export default Card;