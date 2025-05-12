"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import icon from "@/app/media/logo-wh.png";
import Image from 'next/image';
import { useTransition } from "react";
import { dashboardLinks } from "@/app/[locale]/components/session/DashboardLinks";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";

const NavBarS = ({ rol }: { rol: string }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDashboardPage, setIsDashboardPage] = useState(false);

    // Detecta si estamos en la página /dashboard
    useEffect(() => {
        setIsDashboardPage(pathname === '/es/dashboard');
    }, [pathname]);

    const filteredLinks = dashboardLinks.filter(link => link.roles.includes(rol));

    const handleLogout = () => {
        startTransition(async () => {
            await authClient.signOut({
                fetchOptions: {
                    onSuccess: () => {
                        router.push("/");
                    },
                    onError: (ctx) => {
                        alert(ctx.error.message);
                    },
                },
            });
        });
    };

    // No renderizar el NavBarS si estamos en /dashboard
    if (isDashboardPage) return <div style={{ height: 40 }} />;

    return (
        <nav className="bg-customDarkBlueSession/65 rounded-2xl mx-auto mt-4 mb-4 px-4 w-11/12 max-w-6xl">
            <div className="flex h-14 items-center justify-between">
                <Link href="/dashboard" className="flex items-center">
                    <Image src={icon} height={30} width={30} alt="news"/>
                </Link>
                {/* Botón hamburguesa */}
                <button
                    className="md:hidden flex flex-col justify-center items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
                {/* Enlaces */}
                <div className={`flex-1 justify-center items-center md:flex gap-4 ${menuOpen ? "flex flex-col absolute top-14 left-0 w-full bg-customDarkBlueSession/95 z-50 py-4" : "hidden md:flex"}`}>
                    {filteredLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white font-fredoka font-semibold px-3 py-2 rounded-lg hover:bg-customBlue transition text-center"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.short || link.text}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:block mr-6">
                    <button onClick={handleLogout} className="bg-customBlue text-white font-fredoka font-semibold px-4 py-2 rounded-lg" disabled={isPending}>Cerrar sesión</button>
                </div>
            </div>
            {/* Botón cerrar sesión en móvil */}
            {menuOpen && (
                <div className="flex md:hidden justify-center mt-2">
                    <button onClick={handleLogout} className="bg-customBlue text-white font-fredoka font-semibold px-4 py-2 rounded-lg" disabled={isPending}>Cerrar sesión</button>
                </div>
            )}
        </nav>
    );
};

export default NavBarS;
