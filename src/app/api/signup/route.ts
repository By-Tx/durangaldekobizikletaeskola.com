import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const {
            email,
            role,
            apellidos,
            dni,
            telefono,
            nacimiento,
            licencia,
            peso,
            altura,
            ftp,
            pulso,
        } = data;

        // Busca el usuario por email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
        }

        // Actualiza el rol del usuario SIEMPRE
        await prisma.user.update({
            where: { email },
            data: { role },
        });

        // Si es runner, crea el registro en deportistas
        if (role === "runner") {
            await prisma.deportistas.create({
                data: {
                    numero_licencia: licencia,
                    nombre: user.name,
                    apellidos,
                    dni,
                    telefono: telefono ? Number(telefono) : null,
                    fecha_nacimiento: nacimiento ? new Date(nacimiento) : null,
                    peso: peso ? Number(peso) : null,
                    altura: altura ? Number(altura) : null,
                    ftp: ftp ? Number(ftp) : null,
                    pulso: pulso ? Number(pulso) : null,
                    user_id: user.id,
                },
            });
        }
        // Si es coach, crea el registro en entrenadores
        else if (role === "coach") {
            const maxIdObj = await prisma.entrenadores.aggregate({
                _max: { id: true }
            });
            const nextId = (maxIdObj._max.id ?? 0) + 1;

            await prisma.entrenadores.create({
                data: {
                    id: nextId,
                    nombre: user.name,
                    apellidos,
                    dni,
                    telefono: telefono ? Number(telefono) : null,
                    fecha_nacimiento: nacimiento ? new Date(nacimiento) : null,
                    user_id: user.id,
                },
            });
        }

        return NextResponse.json({ ok: true });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: "Error guardando los datos" }, { status: 500 });
    }
}