import { getLocale } from 'next-intl/server';
import { createTranslator } from 'next-intl';
import { API_URL } from '@/lib/config';
import Slideshow from "../components/mainPage/eskola/slide";
import News from "../components/mainPage/noticeComponents/notices";
import SubTitle from "../components/mainPage/Titles/SubTitle";
import Line from "@/app/[locale]/components/main/line0m";
import ButtonNotice from '../components/mainPage/noticeComponents/Button';
import { date } from 'better-auth';
import { dmmfToRuntimeDataModel } from '@prisma/client/runtime/library';

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
  dateKey: string;
}

async function fetchNotices(locale: string) {
  
  if (!API_URL) throw new Error("API URL no definida");

  const res = await fetch(`${API_URL}/api/notices/mainNotices`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ path: "mainNotices", loc: locale }),
  });

  if (!res.ok) throw new Error("Error fetching notices");

  return res.json();
}

function safeTranslate(t: (key: string) => string, key: string): string {
  try {
    return t(key);
  } catch {
    return key;
  }
}

export default async function Home() {
  const locale = await getLocale();
  const { data } = await fetchNotices(locale);

  const API_URL = process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
    : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

  const res = await fetch(`${API_URL}/api/translations?lang=${locale}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Error al cargar traducciones");

  const messages = await res.json();

  const t = createTranslator({ locale, messages, namespace: "homePage" });
  const tNotices = createTranslator({ locale, messages, namespace: "noticeComponent" });

  const translatedNotices = data.map((item: Notice) => ({
    ...item,
    title: safeTranslate(tNotices, item.titleKey),
    category: safeTranslate(tNotices, item.categoryKey),
    alt: safeTranslate(tNotices, item.altKey),
    date: new Date(item.date).toLocaleDateString(locale),
  }));

  const images = [
    { url: "https://photos.txuli.com/duranguesa/media/foto11.webp",},
    { url: "https://photos.txuli.com/duranguesa/media/foto3.webp",},
    { url: "https://photos.txuli.com/duranguesa/media/foto9_alt.webp", },
    { url: "https://photos.txuli.com/duranguesa/media/foto7.webp",},
    { url: "https://photos.txuli.com/duranguesa/media/foto13.webp",},

  ];

  const aboutusImages = [
    { url: 'https://photos.txuli.com/duranguesa/media/foto3.webp', title: t("title"), subtitle: t("subtitle") },
    { url: 'https://photos.txuli.com/duranguesa/media/foto16.webp', title: t("title2"), subtitle: t("subtitle2") },
    { url: 'https://photos.txuli.com/duranguesa/media/foto14.webp', title: t("title3"), subtitle: t("subtitle3") },
    { url: 'https://photos.txuli.com/duranguesa/media/foto15.webp', title: t("title4"), subtitle: t("subtitle4") },
  ];

  return (
    <div>
      <Slideshow images={images} title='DURANGALDEKO BIZIKLETA ESKOLA' />
      <Line />
      <SubTitle subTitle={t("componentSubtitle")} />
      <News items={translatedNotices} />
      <ButtonNotice />
      <Line />
      {aboutusImages.map((section, idx) => (
        <div key={idx} className="w-full relative" style={{ height: "400px" }}>
          <div className="absolute inset-0 bg-cover bg-center filter brightness-50" style={{ backgroundImage: `url(${section.url})` }}></div>
          <div className="absolute inset-0 z-5" style={{ background: "linear-gradient(to right, black 10%, transparent 70%)" }}></div>
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