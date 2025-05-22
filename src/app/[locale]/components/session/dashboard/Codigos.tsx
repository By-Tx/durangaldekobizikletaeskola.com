"use client";
import { useState, useRef } from "react";
import { useError } from "@/context/ErrorContext";
import Table from "@/app/[locale]/components/session/ui/Table";

interface Codigo {
    id: number;
    code: string;
    role: string;
    expires_at: string | null;
    usos: number;
}

interface CodeClientProps {
    codigos: Codigo[];
    rol: string;
}

const roles = [
    { value: "admin", label: "Administrador" },
    { value: "staff", label: "Personal" },
    { value: "coach", label: "Entrenador" },
    { value: "instructor", label: "Monitor" },
    { value: "runner", label: "Deportista" },
    { value: "user", label: "Usuario" },
];

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

export default function Codigos({ codigos, rol }: CodeClientProps) {
    const [codes, setCodes] = useState<Codigo[]>(codigos);
    const [expiredCodes, setExpiredCodes] = useState<Codigo[]>([]);
    const [form, setForm] = useState<{ role: string; expires_at?: string }>({ role: roles[0].value });
    const [loading, setLoading] = useState(false);
    const { setError } = useError();
    const [success, setSuccess] = useState("");
    const [generatedCode, setGeneratedCode] = useState<string | null>(null);
    const [showExpired, setShowExpired] = useState(false);
    const [closingExpired, setClosingExpired] = useState(false);
    const [copied, setCopied] = useState(false);
    const [copiedLeaving, setCopiedLeaving] = useState(false);
    const copiedTimeout = useRef<NodeJS.Timeout | null>(null);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleDelete = async (id: number, expired = false) => {
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

    const visibleCodes = rol === "admin"
        ? codes
        : codes.filter(code => code.role !== "admin");

    // Función para copiar el código y mostrar mensaje
    const handleCopy = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setCopiedLeaving(false);
            if (copiedTimeout.current) clearTimeout(copiedTimeout.current);
            copiedTimeout.current = setTimeout(() => {
                setCopiedLeaving(true);
                setTimeout(() => setCopied(false), 400);
            }, 1500);
        } catch {
            setError("No se pudo copiar el código");
        }
    };

    // Función para formatear la fecha
    function formatFecha(fecha: string): string {
        if (!fecha) return "";
        const [datePart, timePart] = fecha.split("T");
        if (!datePart || !timePart) return fecha;
        const [year, month, day] = datePart.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        return `${formattedDate}`;
    }

    return (
        <div className="w-[95%] max-w-full md:max-w-2xl mx-auto mt-10 bg-gray-900/90 p-4 sm:p-8 rounded-2xl shadow-2xl border border-blue-700 font-fredoka">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-200 drop-shadow uppercase">Códigos de acti vación</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-end md:flex-row gap-4 mb-8">
                <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none w-full md:w-auto"
                >
                    {roles.map(r => (
                        <option
                            key={r.value}
                            value={r.value}
                            hidden={r.value === "admin" && rol !== "admin"}
                        >
                            {r.label}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                transition-all duration-200 ease-in-out
                                hover:shadow-xl hover:opacity-90
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 uppercase w-full md:w-auto"
                    disabled={loading}
                >
                    {loading ? "Generando..." : "Generar"}
                </button>
            </form>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-gray-700 hover:bg-blue-700 text-blue-100 px-4 py-2 rounded-lg font-semibold shadow transition-all uppercase"
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
            {copied && (
                <div className="fixed top-14 left-1/2 -translate-x-1/2 z-[200]">
                    <div
                        className={`bg-blue-700 text-white px-6 py-2 rounded-xl shadow-lg font-semibold text-lg transition-all
                        ${copiedLeaving ? "animate-fade-out animate-slide-down" : "animate-fade-in animate-slide-up"}`}
                    >
                        Código copiado
                    </div>
                </div>
            )}

            {visibleCodes.length === 0 ? (
                <div className="text-center text-gray-400 text-lg">
                    No existe ningún código de activación
                </div>
            ) : (
                <Table
                    columns={[
                        {
                            name: "Código",
                            key: "code",
                            renderCell: (row: any) => (
                                <button
                                    type="button"
                                    className="text-blue-300 font-mono underline hover:text-blue-400 transition break-all"
                                    title="Copiar código"
                                    onClick={() => handleCopy(row.code)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {row.code}
                                </button>
                            ),
                        },
                        { name: "Rol", key: "role" },
                        { name: "Expira", key: "expires_at" },
                        { name: "Usos", key: "usos" },
                    ]}
                    data={visibleCodes}
                    colWidths={[110, 130, 120, 100, 120]}
                    onCopy={(row: any) => handleCopy(row.code)}
                    onDelete={handleDelete}
                    translateRole={translateRole}
                    formatFecha={formatFecha}
                />
            )}

            {showExpired && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${closingExpired ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-8 w-[95%] max-w-full md:max-w-2xl border-2 border-blue-700 relative transition-all duration-300 ${closingExpired ? "animate-slide-down" : "animate-slide-up"}`}>
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
                        <h3 className="text-2xl font-semibold mb-6 text-blue-300 text-center uppercase">Códigos expirados</h3>
                        <div className="overflow-x-auto overflow-y-auto max-h-80 rounded-xl mb-4">
                            <table className="md:min-w-[400px] w-full table-auto border-collapse bg-gray-800 rounded-xl overflow-hidden uppercase">
                                <thead className="hidden sm:table-header-group">
                                    <tr className="bg-gray-700 text-blue-100">
                                        <th className="px-2 sm:px-4 py-2 font-semibold">Código</th>
                                        <th className="px-2 sm:px-4 py-2 font-semibold">Rol</th>
                                        <th className="px-2 sm:px-4 py-2 font-semibold">Expiró</th>
                                        <th className="px-2 sm:px-4 py-2 font-semibold">Usos</th>
                                        <th className="px-2 sm:px-4 py-2 font-semibold">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expiredCodes.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="text-center text-blue-300 py-6">No hay códigos expirados</td>
                                        </tr>
                                    ) : expiredCodes.map(code => (
                                        <tr key={code.id} className="border-b border-blue-900">
                                            {/* Vista móvil: toda la info en una celda */}
                                            <td colSpan={5} className="block sm:hidden px-4 py-4">
                                                <div className="flex flex-col gap-2">
                                                    <div>
                                                        <span className="font-bold text-blue-300">Código: </span>
                                                        <span className="break-all">{code.code}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-blue-300">Rol: </span>
                                                        <span>{roles.find(r => r.value === code.role)?.label || code.role}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-blue-300">Expiró: </span>
                                                        <span>{code.expires_at ? new Date(code.expires_at).toLocaleDateString() : "-"}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-blue-300">Usos: </span>
                                                        <span>{code.usos}</span>
                                                    </div>
                                                    <div className="flex gap-2 mt-2">
                                                        <button
                                                            onClick={() => handleDelete(code.id, true)}
                                                            className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded font-semibold transition-all"
                                                            disabled={loading}
                                                            style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            {/* Vista escritorio: columnas normales */}
                                            <td className="px-2 sm:px-4 py-2 text-center break-all hidden sm:table-cell">{code.code}</td>
                                            <td className="px-2 sm:px-4 py-2 text-center hidden sm:table-cell">{roles.find(r => r.value === code.role)?.label || code.role}</td>
                                            <td className="px-2 sm:px-4 py-2 text-center hidden sm:table-cell">{code.expires_at ? new Date(code.expires_at).toLocaleDateString() : "-"}</td>
                                            <td className="px-2 sm:px-4 py-2 text-center hidden sm:table-cell">{code.usos}</td>
                                            <td className="px-2 sm:px-4 py-2 text-center hidden sm:table-cell">
                                                <button
                                                    onClick={() => handleDelete(code.id, true)}
                                                    className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded font-semibold transition-all text-xs sm:text-sm min-w-[90px] max-w-[120px]"
                                                    disabled={loading}
                                                    style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
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
                </div>
            )}
        </div>
    );
}