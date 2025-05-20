
import News from "@/app/[locale]/components/mainPage/noticeComponents/notices";
import Title from "@/app/[locale]/components/mainPage/Titles/Title";
import Section from "@/app/[locale]/components/main/Section";
import { API_URL } from "@/lib/config";

import { getLocale } from "next-intl/server";
import { createTranslator } from "next-intl";


interface Notice {
    slug: string;
    image: string;
    alt: string;
    date: string;
    title: string;
    category: string;
    titleKey: string;
    categoryKey: string;
    altKey: string;
}

// Function that makes a request to the news endpoint, passing it the current language
async function fetchNotices(locale: string): Promise<Notice[]> {
    const API_URL =
        process.env.NODE_ENV === "development"
            ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
            : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

    if (!API_URL) {
        throw new Error("API URL no definida en las variables de entorno");
    }

    // We make a POST to the endpoint with the language
    const response = await fetch(`${API_URL}/api/notices/mainNotices`, {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: "allNotices", loc: locale }),
    });

    if (!response.ok) {
        throw new Error("Error al obtener noticias");
    }


    const { data } = await response.json();
    return data;
}


async function fetchMessages(locale: string) {


    const res = await fetch(`${API_URL}/api/translations?lang=${locale}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("No se pudieron cargar las traducciones");
    }

    return res.json();
}


export default async function Page() {
    const locale = await getLocale();

    const [messages, data] = await Promise.all([
        fetchMessages(locale),
        fetchNotices(locale),
    ]);

    const tNotices = createTranslator({
        locale,
        messages,
        namespace: "noticeComponent",
    });

    function safeTranslate(t: (key: string) => string, key: string): string {
        try {
            return t(key);
        } catch {
            return key;
        }
    }

    const translatedNotices = data.map((notice) => {
        let dateString = new Date(notice.date).toLocaleDateString(locale, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        if (locale === "eus") {
            dateString = dateString.replace(/\//g, "-");
        }

        return {
            ...notice,
            title: safeTranslate(tNotices, notice.titleKey),
            category: safeTranslate(tNotices, notice.categoryKey),
            alt: safeTranslate(tNotices, notice.altKey),
            date: dateString,
        };
    });

    const translator = createTranslator({
        locale,
        messages,
        namespace: "noticePage",
    });

    return (
        <div>
            <Title title={translator("title")} />
            <Section>
                <News items={translatedNotices} />
            </Section>
        </div>
    );
}

