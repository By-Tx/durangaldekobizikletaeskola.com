import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import RunnersClient from "@/app/[locale]/components/session/dashboard/Coaches";

export default async function Coaches() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const rol = session?.user?.role || "";

    if (rol !== "admin" && rol !== "staff") {
        redirect("/es/dashboard");
    }

    // 1. Obtén los usuarios con rol "coach"
    const users = await prisma.user.findMany({
        where: { role: "coach" },
        select: {
            id: true,
            name: true,
        },
        orderBy: { name: "asc" },
    });

    // 2. Obtén los entrenadores que coincidan con el user_id
    const entrenadoresRaw = await prisma.entrenadores.findMany({
        select: {
            id: true,
            user_id: true,
            apellidos: true,
            dni: true,
            telefono: true,
            fecha_nacimiento: true,
        },
    });

    // 3. Une los datos de usuario y entrenador
    const entrenadores = users.map((user, idx) => {
        const entrenador = entrenadoresRaw.find(e => e.user_id === user.id);
        return {
            id: entrenador?.id ?? idx,
            user_id: user.id,
            nombre: user.name || "N/A",
            apellidos: entrenador?.apellidos || "N/A",
            dni: entrenador?.dni || "N/A",
            telefono:
                entrenador?.telefono !== undefined && entrenador?.telefono !== null
                    ? String(entrenador.telefono)
                    : "N/A",
            fecha_nacimiento: entrenador?.fecha_nacimiento
                ? entrenador.fecha_nacimiento.toISOString()
                : "N/A",
        };
    });

    return (
        <RunnersClient entrenadores={entrenadores} rol={rol} />
    );
}