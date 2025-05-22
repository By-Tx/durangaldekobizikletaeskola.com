import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import HistorialContent from "@/app/[locale]/components/session/dashboard/Historial";
import prisma from "@/lib/prisma";

type CarreraRaw = {
    f0: string;
    f1: Date | string;
    f2: string;
    f3: string;
    f4: string;
    f5: Date | string;
    f6: number | string;
    f7: string | null;
    f8: string | null;
    f9: number;
    f10: number;
};

export default async function Page(props: any) {
    const searchParams = await props.searchParams;

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const rol = session?.user?.role || "";

    if (rol !== "admin" && rol !== "staff" && rol !== "coach" && rol !== "runner") {
        redirect("/es/dashboard");
    }

    let jugadorId = searchParams?.numero_licencia;

    if (!jugadorId) {
        // Consulta para obtener el numero_licencia del usuario actual
        const deportista = await prisma.deportistas.findFirst({
            where: { user_id: session.user.id },
            select: { numero_licencia: true }
        });

        if (!deportista?.numero_licencia) {
            redirect("/es/dashboard");
        }

        jugadorId = deportista.numero_licencia;
    }

    // Consulta para obtener nombre y apellidos del corredor
    const deportista = await prisma.deportistas.findUnique({
        where: { numero_licencia: jugadorId },
        select: { nombre: true, apellidos: true }
    });

    // Llama al procedimiento almacenado con el id del jugador
    const rawResults = await prisma.$queryRaw<CarreraRaw[]>`
        CALL historialCarreras(${jugadorId})
    `;

    // Normaliza los resultados (dependiendo de cómo devuelve los datos MySQL)
    const carreras: CarreraRaw[] = Array.isArray(rawResults[0]) ? rawResults[0] : rawResults;

    // Mapea los resultados a un formato más manejable
    const historialData = carreras.map((carrera) => {
        const formatDate = (date: Date | string) => {
            let d: Date;
            if (date instanceof Date && !isNaN(date.getTime())) {
                d = date;
            } else {
                d = new Date(date);
            }
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}/${month}/${year}`;
        };

        const formatTime = (date: Date | string) => {
            let d: Date;
            if (date instanceof Date && !isNaN(date.getTime())) {
                d = date;
            } else {
                d = new Date(date);
            }
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            const seconds = String(d.getSeconds()).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        };

        return {
            nombre: String(carrera.f0),
            fecha: formatDate(carrera.f1),
            lugar: String(carrera.f2),
            categoria: String(carrera.f3),
            modalidad: String(carrera.f4),
            tiempo: formatTime(carrera.f5),
            posicion: Number(carrera.f6),
            valoracion_deportista: carrera.f7 ?? "",
            valoracion_entrenador: carrera.f8 ?? "",
            estado: Number(carrera.f9),
            evento_id: carrera.f10,
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