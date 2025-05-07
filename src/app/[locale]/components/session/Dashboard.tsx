"use client";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface DashboardClientProps {
    name: string;
    rol: string;
    links: { href: string; text: string; img: string }[];
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

    return (
        <>
            <h2>Welcome, {name}</h2>
            <h2>Your role is {rol}</h2>
            <div className="space-y-6 flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 justify-items-center w-1/2">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-300 rounded-lg px-4 py-3 shadow-sm w-full max-w-xs"
                        >
                            <Image src={link.img} alt={link.text} width={64} height={64} className="w-12 h-12 mr-6" />
                            <span className="text-xl font-semibold">{link.text}</span>
                        </Link>
                    ))}
                    <button
                        onClick={handleLogout}
                        className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors border border-gray-300 rounded-lg px-4 py-3 shadow-sm w-full max-w-xs"
                        disabled={isPending}
                    >
                        <Image src="/media/dashboard/logout.svg" alt="Cerrar sesión" width={64} height={64} className="w-12 h-12 mr-6" />
                        <span className="text-xl font-semibold">Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </>
    );
}