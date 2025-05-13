import { NextRequest, NextResponse } from "next/server";
import { mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { folder } = body;

    if (!folder || typeof folder !== "string") {
      return NextResponse.json({ error: "folder must be a non-empty string" }, { status: 400 });
    }


    await mkdir(folder, { recursive: true });

    return NextResponse.json({ message: `Folder '${folder}' created successfully.` }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating folder:", error);
    return NextResponse.json({ error: "Failed to create folder", details: error.message }, { status: 500 });
  }
}
