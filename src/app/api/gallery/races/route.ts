import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { album, modalidad, race, categoria } = body;
    console.log("Album:", album);
    console.log("Modalidad:", modalidad);
    console.log("race"+ race) 
    console.log("Categoria:", categoria);
    if (!album || !modalidad || !race) {
      return NextResponse.json({ message: "Faltan datos: álbum, modalidad o carrera." }, { status: 400 });
    }

    const response = await fetch(`https://photos.txuli.com/duranguesa/gallery/${album}/${modalidad}/${race}`);


    if (!response.ok) {
      throw new Error(`Error al obtener datos del álbum: ${response.status}`);
    }

    const data = await response.text();
    const regex = /<a href="([^"\.]+)\/?"/g;
    const matches = [...data.matchAll(regex)];

    const results = matches.map(match => match[1]).filter(name => name !== "../");

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error en carrera:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
