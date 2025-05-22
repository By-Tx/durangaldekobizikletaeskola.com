"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useError } from "@/context/ErrorContext";

export default function LogInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setError } = useError();

    const login = async () => {
        await authClient.signIn.email({
            email,
            password,
            callbackURL: "/es/dashboard",
            fetchOptions: {
                onSuccess() {
                    window.location.href = '/es/dashboard';
                },
                onError() {
                    setError("Correo electrónico o contraseña incorrectos");
                },
            },
        });
    }

    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-gray-900/90 border border-blue-700">
                <h1 className="text-3xl font-bold text-center text-blue-200 mb-8 drop-shadow">Inicio de sesión</h1>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); login(); }}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-blue-200 font-semibold mb-1"
                        >
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full p-3 rounded-lg bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow"
                            placeholder="Introduce tu correo electrónico"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-blue-200 font-semibold mb-1"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full p-3 rounded-lg bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow"
                            placeholder="Introduce tu contraseña"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="ml-2">¿No tienes cuenta?&nbsp;</span>
                        <a href="/es/sign-up" className="text-blue-500 hover:underline">
                            Regístrate
                        </a>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow transition"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}