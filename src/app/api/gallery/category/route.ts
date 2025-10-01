import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    let { album, modalidad } = body;

    if (!album || !modalidad) {
      return NextResponse.json({ message: "Faltan datos: álbum o modalidad." }, { status: 400 });
    }

    album = album.replace(/\/$/, '');
    console.log("Album:", album);
    modalidad = modalidad.replace(/\/$/, '');

    const url = `https://photos.txuli.com/duranguesa/gallery/${album}/${modalidad}`;
    console.log("Fetch URL:", url);

    const response = await fetch(url);

    if (response.status === 404) {
      return NextResponse.json({ message: "No se encontró la modalidad en el servidor." }, { status: 404 });
    }

    if (!response.ok) {
      throw new Error(`Error al obtener datos: ${response.status}`);
    }

    const data = await response.text();
    const regex = /<a href="([^"\.]+)\/?"/g;
    const matches = [...data.matchAll(regex)];
    const results = matches.map(match => match[1]).filter(name => name !== "../");

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    
    console.error("Error en categoría:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
