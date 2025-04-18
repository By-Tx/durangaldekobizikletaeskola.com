import { NextResponse, NextRequest } from "next/server";
import { getTranslations } from "next-intl/server";
import fs from "fs/promises";
import path from "path";

const newsFilePath = path.join(process.cwd(), "public/notices.json");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, loc } = body;

    if (!loc) {
      return NextResponse.json({ message: "El locale no está definido" }, { status: 400 });
    }

    const t = await getTranslations({ locale: loc, namespace: "noticeComponent" });

    
    const newsData = await fs.readFile(newsFilePath, "utf-8");
    let newsItems = JSON.parse(newsData);

   
    interface NewsItem {
        titleKey: string;
        categoryKey: string;
        altKey: string;
        title?: string;
        category?: string;
        alt?: string;
    }

    newsItems = newsItems.map((news: NewsItem) => ({
        ...news,
        alt: t(news.altKey),
        title: t(news.titleKey),
        category: t(news.categoryKey),
    }));

    // Filtrar noticias según `path`
    const result = path === "mainNotices" ? newsItems.slice(-3).reverse() : newsItems.reverse();

    return NextResponse.json({ message: "Noticias obtenidas", data: result }, { status: 200 });

  } catch (error) {
    console.error("Error en el endpoint:", error);
    return NextResponse.json({ message: "Error al obtener noticias" }, { status: 500 });
  }
}
