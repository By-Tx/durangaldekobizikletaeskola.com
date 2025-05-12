import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function replacerBigInt(_: string, value: any) {
    return typeof value === "bigint" ? value.toString() : value;
}

// Obtener todos los deportistas (GET)
export async function GET() {
    const deportistas = await prisma.deportistas.findMany({
        orderBy: { nombre: "asc" }
    });
    return new NextResponse(
        JSON.stringify(deportistas, replacerBigInt),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}

// Crear un deportista (POST)
export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const deportista = await prisma.deportistas.create({ data });

        // Serializa BigInt a string antes de responder
        return new NextResponse(
            JSON.stringify(deportista, replacerBigInt),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error: any) {
        if (error.code === "P2002") {
            return NextResponse.json(
                { error: "ERROR. Ya existe un deportista con ese número de licencia o DNI." },
                { status: 400 }
            );
        }
        console.error("Error al crear el deportista:", error);
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
    }
}

// Editar un deportista (PUT)
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { numero_licencia, ...rest } = data;
    const deportista = await prisma.deportistas.update({
        where: { numero_licencia },
        data: rest,
    });

    // Serializa BigInt a string antes de responder
    return new NextResponse(
        JSON.stringify(deportista, replacerBigInt),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}

// Eliminar un deportista (DELETE)
export async function DELETE(req: NextRequest) {
    const { numero_licencia } = await req.json();
    await prisma.deportistas.delete({ where: { numero_licencia } });
    return NextResponse.json({ ok: true });
}