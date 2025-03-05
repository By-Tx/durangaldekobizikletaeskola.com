import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Obtener el cuerpo de la solicitud
    const body = await req.json();
    const { album } = body;

    // Verificar si se proporciona el album
    if (!album) {
      return NextResponse.json({ message: "El álbum no está definido." }, { status: 400 });
    }

    console.log("Album:", album);

    // Realizar la solicitud fetch para obtener la galería
    const response = await fetch(`https://photos.txuli.com/duranguesa/gallery/${album}`);

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error(`Error al obtener datos del álbum: ${response.status}`);
    }

    // Obtener el texto de la respuesta
    const data = await response.text();
    console.log("Response Data:", data);

    // Expresión regular para extraer las URLs de los enlaces
    const regex = /<a href="([^"]+)"/g;
    const matches = [...data.matchAll(regex)];

    // Mapear los resultados para extraer solo las URLs
    const results = matches.map(match => match[1]);
    console.log("Results:", results);

    // Retornar los resultados como respuesta JSON
    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    // Manejo de errores, mostrando el mensaje y el error
    console.error("Error:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
