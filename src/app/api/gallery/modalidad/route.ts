import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { year } = body;

    if (!year) {
      return NextResponse.json({ message: "El año no está definido." }, { status: 400 });
    }

    console.log("Year:", year);

    const response = await fetch(`https://photos.txuli.com/duranguesa/gallery/${year}`);

    if (!response.ok) {
      throw new Error(`Error al obtener datos del año: ${response.status}`);
    }

    const data = await response.text();
    const regex = /<a href="([^"]+)"/g;
    const matches = [...data.matchAll(regex)];

    const results = matches
      .map(match => match[1])
      .filter(name => name !== "../");

    console.log("Modalidades encontradas:", results);

    return NextResponse.json(results, { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
  }
}
