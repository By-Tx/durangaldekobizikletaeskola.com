import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import DashboardClient from "@/app/[locale]/components/session/dashboard/Dashboard";
import { dashboardLinks } from "@/app/[locale]/components/session/DashboardLinks";

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

    // Filtra los links según el rol del usuario
    const filteredLinks = dashboardLinks
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