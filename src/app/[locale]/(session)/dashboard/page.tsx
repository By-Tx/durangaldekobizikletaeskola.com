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
            img: "/media/dashboard/usuario.svg",
            roles: ["admin", "staff"],
        },
        {
            href: "/perfil",
            text: "Mi perfil",
            img: "/media/dashboard/usuario.svg",
            roles: ["coach", "runner", "user"],
        },
        {
            href: "/deportistas",
            text: "Gestión de deportistas",
            img: "/media/dashboard/deportista.svg",
            roles: ["admin", "staff", "coach"],
        },
        {
            href: "/historial",
            text: "Historial de carreras",
            img: "/media/dashboard/historial.svg",
            roles: ["admin", "staff", "coach", "runner"],
        },
        {
            href: "/carreras",
            text: "Gestión de carreras",
            img: "/media/dashboard/carrera.svg",
            roles: ["admin", "staff", "coach"],
        },
        {
            href: "/imageCategory",
            text: "Categorías de imágenes",
            img: "/media/dashboard/categoria.svg",
            roles: ["admin", "staff", "coach"],
        },
        {
            href: "/imageCreator",
            text: "Subida de imágenes",
            img: "/media/dashboard/imagen.svg",
            roles: ["admin", "staff", "coach", "runner", "user"],
        },
        {
            href: "/noticeCreator",
            text: "Crear noticias",
            img: "/media/dashboard/noticia.svg",
            roles: ["admin", "staff"],
        }
    ];

    // Filtra los links según el rol del usuario
    const filteredLinks = links
        .filter(link => link.roles.includes(rol))
        .map(link => ({
            href: `/${locale}${link.href}`,
            text: link.text,
            img: link.img,
            roles: link.roles,
        }));

    return (
        <DashboardClient name={name} rol={rol} links={filteredLinks} />
    );
}