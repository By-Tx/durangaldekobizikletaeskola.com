import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log("Request:", req);
  try {
    const body = await req.json();
    let url = `https://photos.txuli.com/duranguesa/${body.dir}`;
    
    if (body.year) {
      if (body.mode) {
        if (body.category) {
          if (body.race) {
            url = `https://photos.txuli.com/duranguesa/${body.dir}/${body.year}/${body.mode}/${body.category}/${body.race}`;
          } else {
            url = `https://photos.txuli.com/duranguesa/${body.dir}/${body.year}/${body.mode}/${body.category}`;
          }
        } else {
          url = `https://photos.txuli.com/duranguesa/${body.dir}/${body.year}/${body.mode}`;
        }
      } else {
        url = `https://photos.txuli.com/duranguesa/${body.dir}/${body.year}`;
      }
    }

    console.log("Body:", body);
    console.log("URL:", url);

    const response = await fetch(url, { method: "GET" });
    const data = await response.text();
    console.log("Response Data:", data);

    // Match only <a href=".../"> and exclude ../
    const regex = /<a href="([^"]+\/)"/g;
    const matches = [...data.matchAll(regex)];

    const results = matches
      .map(match => match[1])
      .filter((item: string) => !item.includes("../"));

    console.log("Filtered Directories:", results);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Hubo un error", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
