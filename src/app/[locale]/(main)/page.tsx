
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
   const aboutusImages = [
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto1.jpg',
       title: t("title"),
       subtitle: t("subtitle"),
       height: 300, // altura en píxeles
     },
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto2.jpg',
       title: t("title2"),
       subtitle: t("subtitle2"),
       height: 300,
     },
     {
       url: 'https://photos.txuli.com/duranguesa/mainPage/foto3.jpg',
       title: t("title3"),
       subtitle: t("subtitle3"),
       height: 300,
     },
     {
       url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp',
       title: t("title4"),
       subtitle: t("subtitle4"),
       height: 300,
     },
   ];

  return (
    <div >
      {/*El carrusel de imagenes de arriba*/}
      <Slideshow images={images} title='DURANGALDEKO BIZIKLETA ESKOLA' />
      
      <Line />

      <SubTitle subTitle={t("componentSubtitle")} />

      {/* Carga de las noticias */}
      <News items={response.data} />

      {/* Boton ver mas noticias */}
      <ButtonNotice/>
        
      <Line />
      {aboutusImages.map((section, idx) => {
        return (
          <div key={idx} className="w-full relative" style={{ height: `${section.height}px` }}>
            
            {/* Foto de fondo con 50% brightness */}
            <div style={{ backgroundImage: `url(${section.url})` }} className="absolute inset-0 bg-cover bg-center filter brightness-50"></div>

            {/* 
                Degradado negro-transparente que empieza en 10% y acaba en 70% 
                ⓘ : usa styles en vez de classname porque classname no me deja hacer degradados con porcentajes 
            */}
            <div className="absolute inset-0 z-5" style={{background: "linear-gradient(to right, black 10%, transparent 70%)",}}></div>

            <div className="absolute z-10 inset-0 flex items-center font-fredoka">
              <div className="flex w-full p-4 justify-start ml-4">
                <div className="w-full lg:w-1/4">
                  <h2 className="text-3xl font-bold text-white">{section.title}</h2>  {/* texto del titulo */}
                  <p className="mt-2 text-xl text-white">{section.subtitle}</p> {/* paragrafo */}
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
