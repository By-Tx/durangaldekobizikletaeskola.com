import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import RaceClient from "@/app/[locale]/components/session/dashboard/Carreras";

export default async function Race() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    // Consulta para obtener las carreras
    const data = await prisma.events.findMany({
        select: {
            id: true,
            nombre: true,
            fecha: true,
            lugar: true,
            categoria: true,
            modalidad: true,
            descripcion: true,
            events_resultado: {
                select: {
                    id: true,
                    tiempo: true,
                    posicion: true,
                    deportistas: {
                        select: {
                            numero_licencia: true,
                            nombre: true,
                            apellidos: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            fecha: "desc",
        },
    });

    // Transformar los datos para evitar valores null
    const carreras = data.map((carrera) => ({
        id: carrera.id,
        nombre: carrera.nombre || "",
        fecha: carrera.fecha ? carrera.fecha.toISOString() : "",
        lugar: carrera.lugar || "",
        categoria: carrera.categoria || "",
        modalidad: carrera.modalidad || "",
        descripcion: carrera.descripcion || "",
        participantes: carrera.events_resultado.map((resultado) => ({
            participante_id: resultado.deportistas?.numero_licencia || "",
            nombre: resultado.deportistas?.nombre || "Desconocido",
            apellidos: resultado.deportistas?.apellidos || "Desconocido",
            resultado_id: resultado.id,
            tiempo: resultado.tiempo ? resultado.tiempo.toISOString().split("T")[1] : "00:00:00",
            posicion: resultado.posicion || 0,
        })),
    }));

    return (
        <RaceClient carreras={carreras} />
    );
}