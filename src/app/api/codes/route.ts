import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Función para generar un código aleatorio
function generateCode(length = 8) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// GET: Solo códigos no expirados
export async function GET(req: Request) {
    const url = new URL(req.url!);
    const expired = url.searchParams.get("expired");
    const now = new Date();

    let codes;
    if (expired === "true") {
        codes = await prisma.activation_codes.findMany({
            where: {
                expires_at: { lt: now }
            },
            orderBy: { expires_at: "desc" }
        });
    } else {
        codes = await prisma.activation_codes.findMany({
            where: {
                OR: [
                    { expires_at: null },
                    { expires_at: { gt: now } }
                ]
            },
            orderBy: { expires_at: "desc" }
        });
    }
    return NextResponse.json(codes);
}

// POST: Generar código aleatorio
export async function POST(req: Request) {
    const { role } = await req.json();

    if (!role) {
        return NextResponse.json({ error: "Falta el rol" }, { status: 400 });
    }

    let expirationDate: Date;
    expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    let code = "";
    let exists = true;
    do {
        code = generateCode();
        exists = await prisma.activation_codes.findFirst({ where: { code } }) !== null;
    } while (exists);

    const newCode = await prisma.activation_codes.create({
        data: {
            code,
            role,
            expires_at: expirationDate,
            usos: 0,
        }
    });

    return NextResponse.json(newCode);
}

// DELETE: Eliminar código
export async function DELETE(req: Request) {
    const { id } = await req.json();
    if (!id) {
        return NextResponse.json({ error: "Falta el id" }, { status: 400 });
    }
    await prisma.activation_codes.delete({ where: { id } });
    return NextResponse.json({ ok: true });
}