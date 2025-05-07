import { getLocale } from 'next-intl/server';
import { createTranslator } from 'next-intl';

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
  titleKey: string;
  categoryKey: string;
  altKey: string;
}

interface NoticeResponse {
  data: Notice[];
}

async function fetchNotices(locale: string): Promise<NoticeResponse> {
  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  if (!API_URL) throw new Error("API URL no definida");

  const response = await fetch(`${API_URL}/api/mainNotices`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ path: "mainNotices", loc: locale }),
  });

  if (!response.ok) throw new Error("Error fetching notices");

  return response.json();
}

function safeTranslate(
  t: ReturnType<typeof createTranslator>,
  key: string
): string {
  try {
    return t(key);
  } catch {
    return key; // fallback: devuelve la key como texto visible
  }
}

export default async function Home() {
  const locale = await getLocale();
  const notices = await fetchNotices(locale);

  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  let messages: Record<string, unknown> = {};

  try {
    const res = await fetch(`${API_URL}/api/translations?lang=${locale}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(` Error al cargar traducciones (${locale}):`, errorText);
      throw new Error("No se pudieron cargar las traducciones");
    }

    messages = await res.json();
  } catch (e) {
    console.error("Error al parsear mensajes JSON:", e);
  }

  const t = createTranslator({ locale, messages, namespace: "homePage" });
  const tNotices = createTranslator({
    locale,
    messages,
    namespace: "noticeComponent",
  });

  const translatedNotices = notices.data.map((item) => ({
    ...item,
    title: safeTranslate(tNotices, item.titleKey),
    category: safeTranslate(tNotices, item.categoryKey),
    alt: safeTranslate(tNotices, item.altKey),
  }));

  const images = [
    {
      url: "https://photos.txuli.com/duranguesa/Duranguesa_3escale.webp",
      title: t("title"),
      subtitle: t("subtitle"),
      higlightSubtitle: undefined,
    },
    {
      url: "https://photos.txuli.com/duranguesa/foto3.jpg",
      title: t("title2"),
      subtitle: t("subtitle2"),
      higlightSubtitle: undefined,
    },
    {
      url: "https://photos.txuli.com/duranguesa/fotomtb.jpg",
      title: t("title3"),
      subtitle: t("subtitle3"),
      higlightSubtitle: undefined,
    },
    {
      url: "https://photos.txuli.com/duranguesa/portada1escaled.webp",
      title: t("title4"),
      subtitle: t("subtitle4"),
      higlightSubtitle: undefined,
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
     <News items={translatedNotices} />

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
