import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HistorialContent from "@/app/[locale]/components/session/Historial";
import prisma from "@/lib/prisma";

// Define el tipo Carrera para tipar correctamente
interface Carrera {
    fecha: string;
    tiempo: string;
    posicion: string;
    categoria: string;
    modalidad: string;
    lugar: string;
    evento_id: number;
    valoracion_deportista?: string;
    valoracion_director?: string;
}

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const jugadorId = session.user.id;

    // Llama al procedimiento almacenado con el id del jugador
    const historial = await prisma.$queryRaw`
        CALL historialCarreras(${jugadorId})
    `;
    const carreras: Carrera[] = Array.isArray(historial) ? (historial[0] as Carrera[]) : [];

    // Obtén las valoraciones para cada carrera del deportista
    const valoraciones = await prisma.events_resultado.findMany({
        where: { deportista_id: jugadorId },
        select: {
            evento_id: true,
            valoracion_deportista: true,
            valoracion_director: true,
        }
    });

    // Une las carreras con sus valoraciones
    const carrerasConValoracion = carreras.map((carrera: Carrera) => {
        const valoracion = valoraciones.find(v => v.evento_id === carrera.evento_id);
        return {
            ...carrera,
            valoracion_deportista: valoracion?.valoracion_deportista || "",
            valoracion_director: valoracion?.valoracion_director || "",
        };
    });

    return (
        <HistorialContent historial={carrerasConValoracion} />
    );
}