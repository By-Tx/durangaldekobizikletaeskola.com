import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { code } = await req.json();

    const result = await prisma.activation_codes.findFirst({
        where: {
            code,
            expires_at: { gte: new Date() }
        }
    });

    if (!result) {
        return NextResponse.json({ error: "El código introducido no es válido o ya ha caducado." }, { status: 400 });
    }

    await prisma.activation_codes.update({
        where: { id: result.id },
        data: { usos: { increment: 1 } }
    });

    return NextResponse.json({ role: result.role });
}
