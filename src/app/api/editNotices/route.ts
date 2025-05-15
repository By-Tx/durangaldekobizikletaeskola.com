import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();
    let slug = body.slug+"Page";
    
   
    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const locales = ["eus", "es"];

    const messages = await Promise.all(
      locales.map(async (locale) => {
        const filePath = path.join(process.cwd(), "messages", `${locale}.json`);
        const fileContents = await fs.promises.readFile(filePath, "utf-8");
        return JSON.parse(fileContents);
      })
    );

    const [eusMessages, esMessages] = messages;
    
    const eusData = eusMessages[slug];
    const esData = esMessages[slug];
    
    
    if (!eusData && !esData) {
      return NextResponse.json({ error: "Crónica no encontrada" }, { status: 404 });
    }

    return NextResponse.json({
      eus: eusData || null,
      es: esData || null,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
