import { NextRequest, NextResponse } from 'next/server';
import { mkdir } from 'fs/promises';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { folder } = body;

    if (!folder || typeof folder !== "string") {
      return new NextResponse("Error: Nombre de Album invalido", {
        status: 400,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    await mkdir(folder, { recursive: true });

    return new NextResponse(`Album '${folder}' creado correctamente.`, {
      status: 201,
      headers: { 'Content-Type': 'text/plain' },
    });
  } catch (error: any) {
    console.error("Error al crear la carpeta:", error);
    return new NextResponse("Error: No se pudo crear el album.", {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
