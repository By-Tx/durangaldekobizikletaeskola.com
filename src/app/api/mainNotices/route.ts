import { NextRequest, NextResponse } from 'next/server';
import { createTranslator } from 'next-intl'; // ⬅️ Usamos createTranslator en lugar de getTranslations
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
    const { path: routePath, loc }: { path: string; loc: string } = body;

    if (!loc) {
      return NextResponse.json({ message: 'El locale no está definido' }, { status: 400 });
    }

    // Cargar traducciones desde el archivo de mensajes
    const messagesPath = path.join(process.cwd(), 'messages', `${loc}.json`);
    const rawMessages = await fs.readFile(messagesPath, 'utf-8');
    const messages = JSON.parse(rawMessages);

    // Crear el traductor para noticeComponent
    const t = createTranslator({ locale: loc, messages, namespace: 'noticeComponent' });

    // Cargar las noticias
    const rawNews = await fs.readFile(newsFilePath, 'utf-8');
    const newsItems: NewsItem[] = JSON.parse(rawNews);

    // Traducir las claves de cada noticia
    const translatedNews = newsItems.map((news) => ({
      ...news,
      title: safeTranslate(news.titleKey, t),
      category: safeTranslate(news.categoryKey, t),
      alt: safeTranslate(news.altKey, t),
    }));

    
    const result = routePath === 'mainNotices' ? translatedNews.slice(-3).reverse() : translatedNews.reverse();

    return NextResponse.json({ message: 'Noticias obtenidas', data: result }, { status: 200 });

  } catch (error) {
    console.error('Error en el endpoint /api/mainNotices:', error);
    return NextResponse.json({ message: 'Error al obtener noticias' }, { status: 500 });
  }
}

// Función para traducción segura con fallback a la clave original
function safeTranslate(key: string, t: (k: string) => string): string {
  try {
    return t(key);
  } catch {
    return key;
  }
}
