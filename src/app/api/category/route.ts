import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
   
    const body = await req.json();
    const { album } = body;

    
    if (!album) {
      return NextResponse.json({ message: "El álbum no está definido." }, { status: 400 });
    }

    console.log("Album:", album);

    // fetch to get the data from the url
    const response = await fetch(`https://photos.txuli.com/duranguesa/gallery/${album}`);

    if (!response.ok) {
      throw new Error(`Error al obtener datos del álbum: ${response.status}`);
    }


    const data = await response.text();
    console.log("Response Data:", data);


    const regex = /<a href="([^"]+)"/g;
    const matches = [...data.matchAll(regex)];

   
    const results = matches.map(match => match[1]);
    console.log("Results:", results);

    
    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    
    console.error("Error:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
