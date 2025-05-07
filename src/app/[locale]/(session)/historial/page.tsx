import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HistorialContent from "@/app/[locale]/components/session/Historial";
import prisma from "@/lib/prisma";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const jugadorId = 'D009';

    // Consulta para obtener nombre y apellidos del corredor
    const deportista = await prisma.deportistas.findUnique({
        where: { numero_licencia: jugadorId },
        select: { nombre: true, apellidos: true }
    });

    // Llama al procedimiento almacenado con el id del jugador
    const rawResults: any[] = await prisma.$queryRaw`
        CALL historialCarreras(${jugadorId})
    `;

    // Normaliza los resultados (dependiendo de cómo devuelve los datos MySQL)
    const carreras = Array.isArray(rawResults[0]) ? rawResults[0] : rawResults;

    // Mapea los resultados a un formato más manejable
    const historialData = carreras.map((carrera: any) => {
        const formatDate = (date: any) => {
            if (date instanceof Date && !isNaN(date.getTime())) {
                return date.toLocaleDateString('es-ES');
            }
            return String(date);
        };

        const formatTime = (date: any) => {
            if (date instanceof Date && !isNaN(date.getTime())) {
                const hours = String(date.getHours()).padStart(2, '0');
                const minutes = String(date.getMinutes()).padStart(2, '0');
                return `${hours}:${minutes}`;
            }
            const timeStr = String(date);
            return timeStr.length >= 5 ? timeStr.slice(0, 5) : timeStr;
        };

        return {
            fecha: formatDate(carrera.f0),
            lugar: String(carrera.f1),
            categoria: String(carrera.f2),
            modalidad: String(carrera.f3),
            tiempo: formatTime(carrera.f4),
            posicion: Number(carrera.f5),
            valoracion_deportista: String(carrera.f6),
            valoracion_entrenador: String(carrera.f7),
            evento_id: carrera.f8,
            deportista_id: jugadorId  
        };
    });

    return (
        <HistorialContent
            historial={historialData}
            nombre={(deportista?.nombre || "").toUpperCase()}
            apellidos={(deportista?.apellidos || "").toUpperCase()}
            rol={session.user.role || ""}
        />
    );
}