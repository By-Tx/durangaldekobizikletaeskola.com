
import {getLocale, getTranslations} from 'next-intl/server';
import Slideshow from "../components/mainPage/eskola/slide";
import News from "../components/mainPage/noticeComponents/notices";
import SubTitle from "../components/mainPage/Titles/SubTitle";
import Line from "@/app/[locale]/components/main/line0m";


import ButtonNotice from '../components/mainPage/noticeComponents/Button';

interface Notice {
  href: string;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  category: string;
}
interface NoticeResponse {
  data: Notice[];
}

async function fetchNotices(locale: string): Promise<NoticeResponse> {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  if (!API_URL) {
    throw new Error("API URL no definida en las variables de entorno");
  }

  const response = await fetch(`${API_URL}/api/mainNotices`, {
    method: "POST",
    cache: "no-store", // Evita caché para asegurar datos frescos en cada request
    body: JSON.stringify({ path: "mainNotices", loc:locale }),
  });

  if (!response.ok) {
    throw new Error("Error fetching notices");
  }

  return response.json();
 
}
export default async function Home() {
  const locale = await getLocale(); 
  
  const response = await fetchNotices(locale);
  
    const t = await getTranslations("homePage");
  const images = [
    {
      url: 'https://photos.txuli.com/duranguesa/Duranguesa_3escale.webp',
      title: t("title"),
      subtitle: t("subtitle"),
      higlightSubtitle: undefined,
    },
    {
      url: 'https://photos.txuli.com/duranguesa/foto3.jpg',
      title: t("title2"),
      subtitle: t("subtitle2"),
      higlightSubtitle: undefined
    },
    {
      url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg'
      ,
      title: t("title3"),
      subtitle: t("subtitle3"),
      higlightSubtitle: undefined
    },
    {
      url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp'
      ,
      title: t("title4"),
      subtitle: t("subtitle4"),
      higlightSubtitle: undefined
    },

  ];
   const images2 = [
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto1.jpg',
       title: t("title"),
       subtitle: t("subtitle"),
       height: 600, // altura en píxeles
     },
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto2.jpg',
       title: t("title2"),
       subtitle: t("subtitle2"),
       height: 600,
     },
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto3.jpg',
       title: t("title3"),
       subtitle: t("subtitle3"),
       height: 650,
     },
     {
       url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp',
       title: t("title4"),
       subtitle: t("subtitle4"),
       height: 650,
     },
   ];

  return (
    <div >

      <Slideshow images={images} title='Durangaldeko Bizikleta Eskola' />
      <Line />
      <SubTitle subTitle={t("componentSubtitle")} />
    
      <News items={response.data} />
      <ButtonNotice/>
        
      <Line />
      {images2.map((section, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div key={idx} className="w-full relative" style={{ height: `${section.height}px` }}>
           
            <div
              style={{ backgroundImage: `url(${section.url})` }}
              className="absolute inset-0 bg-cover bg-center filter brightness-50"
            ></div>

            
            <div
              className={`absolute inset-0 ${isEven
                ? "bg-gradient-to-r from-black to-transparent"
                : "bg-gradient-to-l from-black to-transparent"
                } bg-black opacity-50`}
            ></div>

            
            <div className="absolute z-10 inset-0 flex items-center font-fredoka">
              <div className={`flex w-full p-4 ${isEven ? "justify-start ml-4" : "justify-end mr-4"}`}>
                <div className="w-full lg:w-1/4">
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                  <p className="mt-2 text-xl text-white">{section.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Line /> 





    </div>
  );
}
