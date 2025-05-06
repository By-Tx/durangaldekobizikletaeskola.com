import { NextRequest, NextResponse } from 'next/server';
import { getTranslations } from 'next-intl/server';
import fs from 'fs/promises';
import path from 'path';

export const runtime = 'nodejs';

// Tipo de una noticia
interface NewsItem {
  href: string;
  imageSrc: string;
  altKey: string;
  date: string;
  titleKey: string;
  categoryKey: string;
  alt?: string;
  title?: string;
  category?: string;
}


const newsFilePath = path.join(process.cwd(), 'public/notices.json');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { path, loc }: { path: string; loc: string } = body;

    if (!loc) {
      return NextResponse.json({ message: 'El locale no está definido' }, { status: 400 });
    }


    const t = await getTranslations({ locale: loc, namespace: 'noticeComponent' });

    
    const raw = await fs.readFile(newsFilePath, 'utf-8');
    const newsItems: NewsItem[] = JSON.parse(raw);

    
    const translatedNews = newsItems.map((news) => ({
      ...news,
      title: safeTranslate(news.titleKey, t),
      category: safeTranslate(news.categoryKey, t),
      alt: safeTranslate(news.altKey, t),
    }));

    
    const result = path === 'mainNotices' ? translatedNews.slice(-3).reverse() : translatedNews.reverse();

    return NextResponse.json({ message: 'Noticias obtenidas', data: result }, { status: 200 });

  } catch (error) {
    console.error(' Error en el endpoint /api/mainNotices:', error);
    return NextResponse.json({ message: 'Error al obtener noticias' }, { status: 500 });
  }
}


function safeTranslate(key: string, t: (k: string) => string): string {
  try {
    return t(key);
  } catch {
    return key;
  }
}
