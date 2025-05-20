"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import icon from "@/app/media/logo-wh.png";
import iconHover from "@/app/media/logo.png";
import Image from 'next/image';
import { useTransition } from "react";
import { dashboardLinks } from "@/app/[locale]/components/session/DashboardLinks";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";

const NavBarS = ({ rol }: { rol: string }) => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [menuOpen, setMenuOpen] = useState(false);
    const [logoHover, setLogoHover] = useState(false);
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (pathname === '/es/dashboard') return <div style={{ height: 40 }} />;

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

    return (
        <nav className="bg-customDarkBlueSession/65 rounded-b-2xl mx-auto  mb-4 px-2 sm:px-4 w-full">
            <div className="flex h-14 items-center justify-between relative text-white font-fredoka uppercase px-2 py-2 rounded-lg text-xl md:text-base">
                <Link
                    href="/"
                    className="flex items-center relative w-[30px] h-[30px]"
                    onMouseEnter={() => setLogoHover(true)}
                    onMouseLeave={() => setLogoHover(false)}
                >
                    <Image
                        src={icon}
                        height={30}
                        width={30}
                        alt="Página principal"
                        className={`absolute top-0 left-0 transition-opacity duration-300 ${logoHover ? "opacity-0" : "opacity-100"}`}
                        style={{ pointerEvents: "none" }}
                    />
                    <Image
                        src={iconHover}
                        height={30}
                        width={30}
                        alt="Página principal hover"
                        className={`absolute top-0 left-0 transition-opacity duration-300 ${logoHover ? "opacity-100" : "opacity-0"}`}
                        style={{ pointerEvents: "none" }}
                    />
                </Link>
                {/* Botón hamburguesa */}
                <button
                    className={`xl:hidden flex flex-col justify-center items-center z-50 ${menuOpen ? "fixed top-9 right-6" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>
                {/* Enlaces */}
                <div className={`flex-1 justify-center items-center xl:flex gap-4 ${menuOpen ? "flex flex-col fixed inset-0 left-0 w-full bg-customDarkBlueSession/95 z-40 py-3 px-2 space-y-1" : "hidden xl:flex"}`}>
                    {rol && (
                        <Link
                            href="/dashboard"
                            className="hover:text-blue-300 transition text-center tracking-wide px-2 py-2 flex items-center gap-2 group"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Image
                                src={"/media/dashboard/panel.svg"}
                                alt={"Panel"}
                                width={30}
                                height={30}
                                className="xl:inline-block hidden invert group-hover:opacity-0 transition-opacity duration-200"
                            />
                            <Image
                                src={"/media/dashboard/panel.svg"}
                                alt={"Panel"}
                                width={30}
                                height={30}
                                className="xl:inline-block hidden filter-blue-300 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                style={{ pointerEvents: "none" }}
                            />
                            PANEL
                        </Link>
                    )}
                    {filteredLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-blue-300 transition text-center tracking-wide px-2 py-2 flex items-center gap-2 group"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.img && (
                                <>
                                    <Image
                                        src={link.img}
                                        alt={link.text}
                                        width={22}
                                        height={22}
                                        className="xl:inline-block hidden invert group-hover:opacity-0 transition-opacity duration-200"
                                    />
                                    <Image
                                        src={link.img}
                                        alt={link.text}
                                        width={22}
                                        height={22}
                                        className="xl:inline-block hidden filter-blue-300 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        style={{ pointerEvents: "none" }}
                                    />
                                </>
                            )}
                            {(link.short || link.text).toUpperCase()}
                        </Link>
                    ))}
                    {/* Botón cerrar sesión en menú móvil */}
                    {menuOpen && rol && (
                        <button
                            onClick={handleLogout}
                            className="bg-customBlue! hover:text-red-300 transition text-center w-full mt-2 tracking-wide px-4 py-2 rounded-lg"
                            disabled={isPending}
                        >
                            CERRAR SESIÓN
                        </button>
                    )}
                </div>
                {/* Botón cerrar sesión en escritorio */}
                {rol && (
                    <div className="hidden xl:block mr-2">
                        <button
                            onClick={handleLogout}
                            className="bg-customBlue hover:text-red-300 transition text-center tracking-wide"
                            disabled={isPending}
                        >
                            CERRAR SESIÓN
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBarS;
