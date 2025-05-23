import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import Perfil from "@/app/[locale]/components/session/dashboard/Perfil";

export default async function PerfilPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const rol = session?.user?.role || "";

    if (rol !== "coach" && rol !== "runner") {
        redirect("/es/dashboard");
    }

    // Obtener datos del usuario desde la BD
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            role: true,
        }
    });

    if (!user) {
        redirect("/es/dashboard");
    }

    let extraData = {};

    if (rol === "coach") {
        const entrenador = await prisma.entrenadores.findFirst({
            where: { user_id: user.id },
            select: {
                nombre: true,
                apellidos: true,
                dni: true,
                telefono: true,
                fecha_nacimiento: true,
            }
        });
        if (entrenador) {
            extraData = entrenador;
        }
    }

    if (rol === "runner") {
        const deportista = await prisma.deportistas.findFirst({
            where: { user_id: user.id },
            select: {
                nombre: true,
                apellidos: true,
                dni: true,
                telefono: true,
                fecha_nacimiento: true,
                numero_licencia: true,
                peso: true,
                altura: true,
                ftp: true,
                pulso: true,
            }
        });
        if (deportista) {
            extraData = {
                ...deportista,
                licencia: deportista.numero_licencia,
            };
            delete (extraData as any).numero_licencia;
        }
    }

    return (
        <Perfil user={{ ...user, ...extraData }} />
    );
}