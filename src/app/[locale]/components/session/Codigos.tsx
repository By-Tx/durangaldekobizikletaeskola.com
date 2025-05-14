"use client";
import { useEffect, useState } from "react";

interface Code {
    id: number;
    code: string;
    role: string;
    expires_at: string | null;
    usos: number;
}

const roles = [
    { value: "admin", label: "Administrador" },
    { value: "staff", label: "Personal" },
    { value: "coach", label: "Entrenador" },
    { value: "runner", label: "Deportista" },
    { value: "user", label: "Usuario" },
];

export default function Codigos() {
    const [codes, setCodes] = useState<Code[]>([]);
    const [expiredCodes, setExpiredCodes] = useState<Code[]>([]);
    const [form, setForm] = useState<{ role: string; expires_at?: string }>({ role: roles[0].value });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [generatedCode, setGeneratedCode] = useState<string | null>(null);
    const [showExpired, setShowExpired] = useState(false);
    const [closingExpired, setClosingExpired] = useState(false);

    const fetchCodes = async () => {
        const res = await fetch("/api/codes");
        const data = await res.json();
        setCodes(data);
    };

    const fetchExpiredCodes = async () => {
        const res = await fetch("/api/codes?expired=true");
        const data = await res.json();
        setExpiredCodes(data);
    };

    useEffect(() => {
        fetchCodes();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: number, expired = false) => {
        setError("");
        setSuccess("");
        try {
            const res = await fetch("/api/codes", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            });
            if (!res.ok) throw new Error("Error al eliminar el código");
            setSuccess("Código eliminado correctamente");
            fetchCodes();
            if (expired) fetchExpiredCodes();
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        setGeneratedCode(null);
        try {
            const res = await fetch("/api/codes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Error al crear el código");
            setSuccess("Código creado correctamente");
            setGeneratedCode(data.code);
            setForm({ role: roles[0].value, expires_at: "" });
            fetchCodes();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-gray-900/90 p-8 rounded-2xl shadow-2xl border border-blue-700">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-200 drop-shadow">Códigos de activación</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-end md:flex-row gap-4 mb-8">
                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none"
                >
                    {roles.map(r => (
                        <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold shadow transition-all"
                    disabled={loading}
                >
                    {loading ? "Generando..." : "Generar"}
                </button>
            </form>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-gray-700 hover:bg-blue-700 text-blue-100 px-4 py-2 rounded-lg font-semibold shadow transition-all"
                    onClick={() => {
                        setClosingExpired(false);
                        setShowExpired(true);
                        fetchExpiredCodes();
                    }}
                >
                    Códigos expirados
                </button>
            </div>
            {success && <div className="text-green-400 mb-2 text-center font-semibold">{success}</div>}
            {generatedCode && (
                <div className="text-blue-300 mb-4 text-center font-mono text-xl">
                    Código generado: <span className="font-bold">{generatedCode}</span>
                </div>
            )}
            {error && <div className="text-red-400 mb-4 text-center font-semibold">{error}</div>}
            <table className="min-w-full table-auto border-collapse bg-gray-800 rounded-xl overflow-hidden">
                <thead>
                    <tr className="bg-blue-700 text-blue-100">
                        <th className="px-4 py-2">Código</th>
                        <th className="px-4 py-2">Rol</th>
                        <th className="px-4 py-2">Expira</th>
                        <th className="px-4 py-2">Usos</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {codes.map(code => (
                        <tr key={code.id} className="border-b border-blue-900">
                            <td className="px-4 py-2 text-center">{code.code}</td>
                            <td className="px-4 py-2 text-center">{roles.find(r => r.value === code.role)?.label || code.role}</td>
                            <td className="px-4 py-2 text-center">{code.expires_at ? new Date(code.expires_at).toLocaleDateString() : "-"}</td>
                            <td className="px-4 py-2 text-center">{code.usos}</td>
                            <td className="px-4 py-2 text-center">
                                <button
                                    onClick={() => handleDelete(code.id)}
                                    className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded font-semibold transition-all"
                                    disabled={loading}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showExpired && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${closingExpired ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-2xl border-2 border-blue-700 relative transition-all duration-300 ${closingExpired ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl"
                            onClick={() => {
                                setClosingExpired(true);
                                setTimeout(() => {
                                    setShowExpired(false);
                                    setClosingExpired(false);
                                }, 300);
                            }}
                            aria-label="Cerrar"
                        >✕</button>
                        <h3 className="text-2xl font-bold mb-6 text-blue-300 text-center">Códigos expirados</h3>
                        <table className="min-w-full table-auto border-collapse bg-gray-800 rounded-xl overflow-hidden mb-4">
                            <thead>
                                <tr className="bg-blue-700 text-blue-100">
                                    <th className="px-4 py-2">Código</th>
                                    <th className="px-4 py-2">Rol</th>
                                    <th className="px-4 py-2">Expiró</th>
                                    <th className="px-4 py-2">Usos</th>
                                    <th className="px-4 py-2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expiredCodes.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="text-center text-blue-300 py-6">No hay códigos expirados</td>
                                    </tr>
                                ) : expiredCodes.map(code => (
                                    <tr key={code.id} className="border-b border-blue-900">
                                        <td className="px-4 py-2 text-center">{code.code}</td>
                                        <td className="px-4 py-2 text-center">{roles.find(r => r.value === code.role)?.label || code.role}</td>
                                        <td className="px-4 py-2 text-center">{code.expires_at ? new Date(code.expires_at).toLocaleDateString() : "-"}</td>
                                        <td className="px-4 py-2 text-center">{code.usos}</td>
                                        <td className="px-4 py-2 text-center">
                                            <button
                                                onClick={() => handleDelete(code.id, true)}
                                                className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded font-semibold transition-all"
                                                disabled={loading}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}