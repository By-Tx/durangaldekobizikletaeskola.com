import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Function to get all users from the database
export async function GET() {
    const users = (await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
        },
        orderBy: {
            name: "asc",
        },
    })).map(user => ({
        ...user,
        role: user.role ?? "defaultRole", 
    }));
    return NextResponse.json(users);
}

// Function to modify a user
export async function PUT(req: NextRequest) {
    const res= await req.json();
    const { id, ...rest } = res;
    const user = await prisma.user.update({
        where: { id },
        data: rest,
    });
    if (!user) {
        return NextResponse.json({ message: 'Error al modificar el usuario' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Modificacion creada correctamente' }, { status: 200 });
}

// Function to delete a user
export async function DELETE(req: NextRequest) {
    const res = await req.json();
    const { id } = res;

    await prisma.account.deleteMany({
        where: { userId: id },
    });

    const entrenador = await prisma.entrenadores.findFirst({
        where: { user_id: id },
        select: { id: true },
    });

    if (entrenador) {
        await prisma.deportistas.updateMany({
            where: { entrenador_id: entrenador.id },
            data: { entrenador_id: null },
        });
    }

    const deportistas = await prisma.deportistas.findMany({
        where: { user_id: id },
        select: { numero_licencia: true },
    });

    for (const deportista of deportistas) {
        await prisma.events_resultado.deleteMany({
            where: { deportista_id: deportista.numero_licencia },
        });
    }

    await prisma.deportistas.deleteMany({
        where: { user_id: id },
    });

    await prisma.entrenadores.deleteMany({
        where: { user_id: id },
    });

    const user = await prisma.user.delete({
        where: { id },
    });

    if (!user) {
        return NextResponse.json({ message: 'Error al eliminar el usuario' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Usuario eliminado correctamente' }, { status: 200 });
}