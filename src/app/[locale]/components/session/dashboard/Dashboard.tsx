"use client";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface DashboardClientProps {
    name: string;
    rol: string;
    links: { href: string; text: string; img: string; roles: string[] }[];
}

function translateRole(role: string): string {
    switch (role) {
        case "admin":
            return "Administrador";
        case "staff":
            return "Personal";
        case "coach":
            return "Entrenador";
        case "instructor":
            return "Monitor";
        case "runner":
            return "Deportista";
        case "user":
            return "Usuario";
        default:
            return "Desconocido";
    }
}

export default function DashboardClient({ name, rol, links }: DashboardClientProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

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

    // Filtra los links según el rol del usuario
    const filteredLinks = links.filter(link => link.roles.includes(rol));

    return (
        <div className="p-4 font-fredoka">
            <h1 className="text-4xl font-extrabold text-blue-300 drop-shadow-md ml-4 mb-4 sm:mb-2 uppercase tracking-wide text-center">
                PANEL DE CONTROL
            </h1>
            <div className="mb-6 sm:mb-0">
                <h2 className="text-lg sm:text-3xl font-extrabold text-white drop-shadow-md ml-4">
                    ¡Bienvenido/a, {name}!
                </h2>
                <h2 className="text-base sm:text-xl font-semibold text-gray-300 ml-4">
                    Nivel de permisos: <span className="text-blue-400">{translateRole(rol)}</span>
                </h2>
            </div>
            <div className="space-y-6 flex flex-col items-center">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8 justify-items-center w-full max-w-4xl uppercase">
                    {filteredLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="
                                flex flex-col items-center justify-center
                                bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800
                                transition-all duration-200 ease-in-out hover:opacity-90
                                border border-gray-300 rounded-xl
                                w-full max-w-xs aspect-square
                                md:aspect-auto md:max-w-sm md:flex-row md:items-center md:px-6 md:py-4 md:justify-start
                                px-4 py-6
                                shadow-md hover:shadow-lg
                            "
                        >
                            <Image
                                src={link.img}
                                alt={rol === "user" ? "Carreras" : link.text}
                                width={64}
                                height={64}
                                className="w-16 h-16 mb-2 md:mb-0 md:mr-6"
                            />
                            <span className="text-base font-bold text-center md:text-left md:text-lg">
                                {rol === "user" ? "Carreras" : link.text}
                            </span>
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="
                            flex flex-col items-center justify-center
                            bg-gradient-to-r from-red-100 to-red-200 text-red-800
                            transition-all duration-300 ease-in-out hover:saturate-150
                            border border-red-300 rounded-xl
                            w-full max-w-xs aspect-square
                            md:aspect-auto md:max-w-sm md:flex-row md:items-center md:px-6 md:py-4 md:justify-start
                            px-4 py-6
                            shadow-md hover:shadow-lg
                            uppercase
                        "
                        disabled={isPending}
                    >
                        <Image
                            src="/media/dashboard/logout.svg"
                            alt="Cerrar sesión"
                            width={64}
                            height={64}
                            className="w-16 h-16 mb-2 md:mb-0 md:mr-6"
                        />
                        <span className="text-base font-bold text-center md:text-left md:text-lg">Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </div>
    );
}