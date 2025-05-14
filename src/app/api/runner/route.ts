import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

function replacerBigInt(_: string, value: any) {
    return typeof value === "bigint" ? value.toString() : value;
}

// Obtener todos los deportistas (GET)
export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const available = url.searchParams.get("available");

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const userId = session?.user?.id;
    const rol = session?.user?.role;

    let deportistas;
    if (available === "true") {
        deportistas = await prisma.deportistas.findMany({
            where: { entrenador_id: null },
            orderBy: { nombre: "asc" }
        });
    } else {
        if (rol === "coach") {
            const entrenador = await prisma.entrenadores.findFirst({
                where: { user_id: userId },
                select: { id: true }
            });

            deportistas = await prisma.deportistas.findMany({
                where: { entrenador_id: entrenador?.id },
                orderBy: { nombre: "asc" }
            });
        } else {
            deportistas = await prisma.deportistas.findMany({
                orderBy: { nombre: "asc" }
            });
        }
    }

    return new NextResponse(
        JSON.stringify(deportistas, replacerBigInt),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}

// Editar o asignar deportistas (PUT)
export async function PUT(req: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const userId = session?.user?.id;

    const data = await req.json();

    if (data.assignRunners && Array.isArray(data.assignRunners)) {
        const entrenador = await prisma.entrenadores.findFirst({
            where: { user_id: userId },
            select: { id: true }
        });

        if (!entrenador) {
            return new NextResponse(
                JSON.stringify({ error: "Entrenador no encontrado" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        await prisma.deportistas.updateMany({
            where: { numero_licencia: { in: data.assignRunners } },
            data: { entrenador_id: entrenador.id }
        });
        return new NextResponse(
            JSON.stringify({ ok: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    }

    // Edición individual
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