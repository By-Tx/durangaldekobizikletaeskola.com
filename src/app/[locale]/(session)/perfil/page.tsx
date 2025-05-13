import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import Perfil from "@/app/[locale]/components/session/Perfil";

export default async function PerfilPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
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