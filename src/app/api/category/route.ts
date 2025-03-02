import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { album } = body;
        console.log("Album:", album);
       const response = await  fetch("https://photos.txuli.com/duranguesa/gallery/" + album )
       const data = await response.text();
        console.log("Response Data:");
        console.log("Response Data:", data); 

        const regex = /<a href="([^"]+)"/g;  
        const matches = [...data.matchAll(regex)];
        console.log("Matches:", matches);

        const results = matches.map(match => match[1]);
        console.log("Results:", results);
        return NextResponse.json(results, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Hubo un error en el servidor" }, { status: 500 });
    }
}
