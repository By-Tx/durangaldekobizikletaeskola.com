import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function PUT(req: NextRequest) {
    const session = await auth.api.getSession({ headers: req.headers });
    if (!session) {
        return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const data = await req.json();

    const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: {
            name: data.name,
            email: data.email,
            role: data.role,
        }
    });

    return NextResponse.json(updatedUser);
}