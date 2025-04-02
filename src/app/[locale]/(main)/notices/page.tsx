import {getLocale, getTranslations} from 'next-intl/server';
import News from "@/app/[locale]/components/mainPage/noticeComponents/notices";
import Title from "@/app/[locale]/components/mainPage/Titles/Title";
import  Section  from "@/app/[locale]/components/main/Section";

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
      cache: "no-store", 
      body: JSON.stringify({ path: "allNotices", loc:locale }),
    });
  
    if (!response.ok) {
      throw new Error("Error fetching notices");
    }
  
    return response.json();
   
  }
export default async function Page() {
    const locale = await getLocale(); 
    const response = await fetchNotices(locale);
    const t = await getTranslations("noticePage");
    return (
        <div>
            <Title title={t("title")} />
            <Section>
            <News items={response.data} />
            </Section>
        </div>
    )
}