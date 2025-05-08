import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import DashboardClient from "@/app/[locale]/components/session/Dashboard";

export default async function Dashboard() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/");
    }

    const name = session?.user?.name || "";
    const rol = session?.user?.role || "";
    const hdrs = await headers();
    const locale = hdrs.get("x-next-intl-locale") || "es";

    const links = [
        {
            href: "/usuarios",
            text: "Gestión de usuarios",
            img: "/media/dashboard/usuario.svg"
        },
        {
            href: "/deportistas",
            text: "Gestión de deportistas",
            img: "/media/dashboard/deportista.svg"
        },
        {
            href: "/historial",
            text: "Historial de carreras",
            img: "/media/dashboard/historial.svg"
        },
        {
            href: "/carreras",
            text: "Gestión de carreras",
            img: "/media/dashboard/carrera.svg"
        },
        {
            href: "/imageCategory",
            text: "Categorías de imágenes",
            img: "/media/dashboard/categoria.svg"
        },
        {
            href: "/imageCreator",
            text: "Subida de imágenes",
            img: "/media/dashboard/imagen.svg"
        },
        {
            href: "/noticeCreator",
            text: "Crear noticias",
            img: "/media/dashboard/noticia.svg"
        }
    ];

    const localizedLinks = links.map(link => ({
        ...link,
        href: `/${locale}${link.href}`
    }));

    return (
        <DashboardClient name={name} rol={rol} links={localizedLinks} />
    );
}