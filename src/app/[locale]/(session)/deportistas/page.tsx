import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import RunnersClient from "@/app/[locale]/components/session/Runners";

export default async function Runners() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    // Consulta para obtener los deportistas
    const data = await prisma.deportistas.findMany({
        select: {
            numero_licencia: true,
            nombre: true,
            apellidos: true,
            dni: true,
            telefono: true,
            fecha_nacimiento: true,
            peso: true,
            altura: true,
            ftp: true,
            pulso: true,
        },
        orderBy: {
            nombre: "asc",
        },
    });

    // Transformar los datos para evitar valores null
    const deportistas = data.map((deportista) => ({
        numero_licencia: deportista.numero_licencia,
        nombre: deportista.nombre || "",
        apellidos: deportista.apellidos || "",
        dni: deportista.dni || "",
        telefono: deportista.telefono !== undefined && deportista.telefono !== null ? String(deportista.telefono) : "",
        fecha_nacimiento: deportista.fecha_nacimiento ? deportista.fecha_nacimiento.toISOString() : "",
        peso: Number(deportista.peso) || 0,
        altura: Number(deportista.altura) || 0,
        ftp: Number(deportista.ftp) || 0,
        pulso: deportista.pulso || 0,
    }));

    return (
        <RunnersClient deportistas={deportistas} />
    );
}