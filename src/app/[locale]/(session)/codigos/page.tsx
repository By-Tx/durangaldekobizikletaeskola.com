import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import CodigosClient from "@/app/[locale]/components/session/dashboard/Codigos";

export default async function Codigos() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    type Codigos = {
        id: number;
        code: string;
        role: string | null;
        expires_at: Date | null;
        usos: number | null;
    };

    let data: Codigos[] = [];
    const now = new Date();

    data = await prisma.activation_codes.findMany({
        where: {
            OR: [
                { expires_at: null },
                { expires_at: { gt: now } }
            ]
        },
        orderBy: { expires_at: "desc" }
    });

    const codigos = data.map((codigo) => ({
        id: codigo.id,
        code: codigo.code,
        role: codigo.role || "",
        expires_at: codigo.expires_at ? codigo.expires_at.toISOString() : "",
        usos: Number(codigo.usos) || 0,
    }));

    return <CodigosClient codigos={codigos} />;
}