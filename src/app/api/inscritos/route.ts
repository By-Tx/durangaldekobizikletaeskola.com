import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const carrera_id = Number(searchParams.get("carrera_id"));
    if (!carrera_id) return NextResponse.json([], { status: 200 });

    const inscritos = await prisma.listado_escuelas.findMany({
        where: { carrera_id },
        select: { dorsal: true, nombre_apellido: true, confirmado: true },
        orderBy: { dorsal: "asc" },
    });
    return NextResponse.json(inscritos);
}

export async function PUT(req: NextRequest) {
    const { carrera_id, dorsal, confirmado } = await req.json();
    await prisma.listado_escuelas.update({
        where: { carrera_id_dorsal: { carrera_id, dorsal } },
        data: { confirmado },
    });
    return NextResponse.json({ ok: true });
}