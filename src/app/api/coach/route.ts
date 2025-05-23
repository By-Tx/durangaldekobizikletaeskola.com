import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Obtener todos los entrenadores (GET)
export async function GET() {
    // 1. Obtén todos los usuarios con rol "coach"
    const users = await prisma.user.findMany({
        where: { role: "coach" },
        select: {
            id: true,
            name: true,
        },
        orderBy: { name: "asc" }
    });

    // 2. Obtén todas las filas de entrenadores
    const entrenadoresRaw = await prisma.entrenadores.findMany({
        select: {
            id: true,
            user_id: true,
            apellidos: true,
            dni: true,
            telefono: true,
            fecha_nacimiento: true,
        }
    });

    // 3. Une los datos
    const entrenadores = users.map(user => {
        const entrenador = entrenadoresRaw.find(e => e.user_id === user.id);
        return {
            id: entrenador?.id ?? undefined,
            user_id: user.id,
            nombre: user.name ?? "N/A",
            apellidos: entrenador?.apellidos ?? "N/A",
            dni: entrenador?.dni ?? "N/A",
            telefono:
                entrenador?.telefono !== null && entrenador?.telefono !== undefined
                    ? String(entrenador.telefono)
                    : "N/A",
            fecha_nacimiento: entrenador?.fecha_nacimiento
                ? entrenador.fecha_nacimiento.toISOString()
                : "N/A",
        };
    });

    return NextResponse.json(entrenadores);
}

// Editar entrenador (PUT)
export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { user_id, id, nombre, apellidos, dni, telefono, fecha_nacimiento } = data;

    // Busca el entrenador
    let entrenador = await prisma.entrenadores.findFirst({ where: { user_id } });

    if (!entrenador) {
        // Si no existe, crea el entrenador

        const maxIdObj = await prisma.entrenadores.aggregate({ _max: { id: true } });
        const nextId = (maxIdObj._max.id ?? 0) + 1;

        await prisma.entrenadores.create({
            data: {
                id: nextId,
                user_id: data.user_id,
                nombre,
                apellidos,
                dni,
                telefono: telefono ? Number(telefono) : null,
                fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null,
            }
        });
    } else {
        // Si existe, actualiza los datos
        await prisma.entrenadores.update({
            where: { id },
            data: {
                nombre,
                apellidos,
                dni,
                telefono: telefono ? Number(telefono) : null,
                fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null,
            }
        });
    }

    // Actualiza el nombre en la tabla user
    await prisma.user.update({
        where: { id: data.user_id },
        data: { name: nombre }
    });

    return NextResponse.json({ ok: true });
}

// Eliminar entrenador (DELETE)
export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    // Busca el entrenador para obtener el user_id
    const entrenador = await prisma.entrenadores.findFirst({ where: { id } });
    if (!entrenador) {
        return NextResponse.json({ error: "Entrenador no encontrado" }, { status: 404 });
    }

    // Quita la relación en deportistas
    await prisma.deportistas.updateMany({
        where: { entrenador_id: entrenador.id },
        data: { entrenador_id: null }
    });

    // Elimina el entrenador
    await prisma.entrenadores.delete({ where: { id: entrenador.id } });

    if (entrenador.user_id) {
        // Elimina las cuentas asociadas al usuario
        await prisma.account.deleteMany({
            where: { userId: entrenador.user_id }
        });

        // Elimina el usuario
        await prisma.user.delete({
            where: { id: entrenador.user_id }
        });
    }

    return NextResponse.json({ ok: true });
}