import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const { carrera_id, nombre_apellido, dorsal } = await req.json();

        if (!carrera_id || isNaN(Number(carrera_id))) {
            return NextResponse.json({ error: "No se han podido enviar los datos de la carrera." }, { status: 400 });
        }

        const inscripcion = await prisma.listado_escuelas.create({
            data: {
                dorsal: Number(dorsal),
                nombre_apellido,
                confirmado: 1,
                events: {
                    connect: { id: Number(carrera_id) }
                }
            },
        });

        return NextResponse.json({ ok: true, inscripcion });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "El deportista ya está inscrito en la carrera." }, { status: 500 });
    }
}