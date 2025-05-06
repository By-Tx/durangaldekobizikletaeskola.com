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

  if (!API_URL) {
    throw new Error("API URL no definida en las variables de entorno");
  }

  const response = await fetch(`${API_URL}/api/mainNotices`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ path: "mainNotices", loc: locale }),
  });

  if (!response.ok) {
    throw new Error("Error fetching notices");
  }

  return response.json();
}

export default async function Home() {
  const locale = await getLocale();
  const notices = await fetchNotices(locale);

  const API_URL =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
      : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  // load translations from de api
  let messages: Record<string, unknown> = {};

  try {
    const res = await fetch(`${API_URL}/api/translations?lang=${locale}`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(` Error cargando traducciones (${locale}):`, errorText);
      throw new Error("No se pudieron cargar las traducciones");
    }

    messages = await res.json();
  } catch (e) {
    console.error(" Error al cargar mensajes JSON:", e);
  }

  //create translator
  const t = createTranslator({ locale, messages, namespace: 'homePage' });
  const tNotices = createTranslator({ locale, messages, namespace: 'noticeComponent' });

  // translate the notices
  const translatedNotices = notices.data.map((item) => ({
    ...item,
    title: tNotices(item.titleKey) ?? item.titleKey,
    category: tNotices(item.categoryKey) ?? item.categoryKey,
    alt: tNotices(item.altKey) ?? item.altKey,
  }));

  const images = [
    {
      url: 'https://photos.txuli.com/duranguesa/Durangaldeko_3escale.webp',
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
      url: 'https://photos.txuli.com/duranguesa/fotomtb.jpg',
      title: t("title3"),
      subtitle: t("subtitle3"),
      higlightSubtitle: undefined
    },
    {
      url: 'https://photos.txuli.com/duranguesa/portada1escaled.webp',
      title: t("title4"),
      subtitle: t("subtitle4"),
      higlightSubtitle: undefined
    },
  ];

  const images2 = images.map(img => ({
    ...img,
    height: 300
  }));

  return (
    <div>
      <Slideshow images={images} title="Durangaldeko Bizikleta Eskola" />
      <Line />
      <SubTitle subTitle={t("componentSubtitle")} />
      <News items={translatedNotices} />
      <ButtonNotice />
      <Line />

      {images2.map((section, idx) => (
        <div key={idx} className="w-full relative" style={{ height: `${section.height}px` }}>
          <div
            style={{ backgroundImage: `url(${section.url})` }}
            className="absolute inset-0 bg-cover bg-center filter brightness-50"
          />
          <div
            className="absolute inset-0 z-5"
            style={{ background: "linear-gradient(to right, black 10%, transparent 70%)" }}
          />
          <div className="absolute z-10 inset-0 flex items-center font-fredoka">
            <div className="flex w-full p-4 justify-start ml-4">
              <div className="w-full lg:w-1/4">
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
                <p className="mt-2 text-xl text-white">{section.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Line />
    </div>
  );
}
