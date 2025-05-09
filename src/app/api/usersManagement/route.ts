import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
//function to get all users from the database
export async function GET() {
    const users = (await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            role: true,
        },
        where: {
            role: {
                not: "admin",
            },
        },
    })).map(user => ({
        ...user,
        role: user.role ?? "defaultRole", 
    }));
    return NextResponse.json(users);
}
//function to modify a user
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
//function to delete a user
export async function DELETE(req: NextRequest) {
    const res= await req.json();
    const { id } = res;
    const user = await prisma.user.delete({
        where: { id },
    });
    if (!user) {
        return NextResponse.json({ message: 'Error al eliminar el usuario' }, { status: 500 });
    }
    return NextResponse.json({ message: 'Usuario eliminado correctamente' }, { status: 200 });
}