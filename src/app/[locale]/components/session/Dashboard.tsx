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
        <>
            <h2 className="text-3xl font-extrabold text-white drop-shadow-md ml-4">
                ¡Bienvenido/a, {name}!
            </h2>
            <h2 className="text-xl font-semibold text-gray-300 ml-4">
                Nivel de permisos: <span className="text-blue-400">{translateRole(rol)}</span>
            </h2>
            <div className="space-y-6 flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 justify-items-center w-full max-w-4xl">
                    {filteredLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 transition-all duration-200 ease-in-out hover:opacity-90 border border-gray-300 rounded-xl px-6 py-4 shadow-md hover:shadow-lg w-full max-w-sm"
                        >
                            <Image src={link.img} alt={link.text} width={64} height={64} className="w-14 h-14 mr-6" />
                            <span className="text-lg font-bold">{link.text}</span>
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="flex items-center bg-gradient-to-r from-red-100 to-red-200 text-red-800 transition-all duration-300 ease-in-out hover:saturate-150 border border-red-300 rounded-xl px-6 py-4 shadow-md hover:shadow-lg w-full max-w-sm"
                        disabled={isPending}
                    >
                        <Image src="/media/dashboard/logout.svg" alt="Cerrar sesión" width={64} height={64} className="w-14 h-14 mr-6" />
                        <span className="text-lg font-bold">Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </>
    );
}