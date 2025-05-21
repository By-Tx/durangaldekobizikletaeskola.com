import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { album, modalidad, race } = body;

    if (!album || !modalidad || !race) {
      return NextResponse.json({ message: "Faltan datos: álbum, modalidad o carrera." }, { status: 400 });
    }

    const url = `https://photos.txuli.com/duranguesa/gallery/${album}/${modalidad}/${race}`;
    console.log("Fetch URL:", url);

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error al obtener datos del álbum: ${response.status}`);
    }

    const data = await response.text();
    const regex = /<a href="([^"]+)"/g;
    const matches = [...data.matchAll(regex)];

    const results = matches.map(match => match[1]).filter(name => name !== "../");

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error en fotos:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
