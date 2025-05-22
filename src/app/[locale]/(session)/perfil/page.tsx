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

    if (rol !== "coach" && rol !== "instructor" && rol !== "runner" && rol !== "user") {
        redirect("/es/dashboard");
    }

    // Obtener datos del usuario desde la BD
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        }
    });

    if (!user) {
        redirect("/es/dashboard");
    }

    return (
        <Perfil user={user} />
    );
}