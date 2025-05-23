"use client";
import { useState } from "react";

interface User {
    id: string;
    role: string | null;
    nombre?: string;
    apellidos?: string;
    dni?: string;
    telefono?: string;
    fecha_nacimiento?: string;
    licencia?: string;
    peso?: string;
    altura?: string;
    ftp?: string;
    pulso?: string;
}

interface PerfilProps {
    user: User;
}

export default function Perfil({ user }: PerfilProps) {
    const [form, setForm] = useState<User>(user);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");
        try {
            const res = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Error al guardar los cambios");
            setSuccess("Perfil actualizado correctamente");
            setEditMode(false);
        } catch (err) {
            setError("No se pudo actualizar el perfil");
        } finally {
            setLoading(false);
        }
    };

    // Campos por rol
    const isRunner = form.role === "runner";
    const isCoach = form.role === "coach";

    function toInputDateValue(fecha: string | Date | undefined): string {
        if (!fecha) return "";

        let fechaStr = fecha;
        if (typeof fecha !== "string") {
            fechaStr = (fecha as Date).toISOString();
        }

        const [datePart] = (fechaStr as string).split("T");
        if (!datePart) return "";

        const [year, month, day] = datePart.split("-");

        return `${year}-${month}-${day}`;
    }

    return (
        <div className="w-[95%] md:w-full max-w-xl mx-auto mt-10 bg-gray-900/90 p-8 rounded-2xl shadow-2xl border border-blue-700 font-fredoka">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-200 drop-shadow uppercase">Mi perfil</h2>
            {success && <div className="text-green-400 mb-4 text-center font-semibold">{success}</div>}
            {error && <div className="text-red-400 mb-4 text-center font-semibold">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Campos comunes para runner y coach */}
                {(isRunner || isCoach) && (
                    <>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Apellidos</label>
                            <input
                                type="text"
                                name="apellidos"
                                value={form.apellidos || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">DNI</label>
                            <input
                                type="text"
                                name="dni"
                                value={form.dni || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Teléfono</label>
                            <input
                                type="text"
                                name="telefono"
                                value={form.telefono || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Fecha de nacimiento</label>
                            <input
                                type="date"
                                name="fecha_nacimiento"
                                value={toInputDateValue(form.fecha_nacimiento) || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                    </>
                )}

                {/* Campos solo para runner */}
                {isRunner && (
                    <>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Licencia</label>
                            <input
                                type="text"
                                name="licencia"
                                value={form.licencia || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Peso (kg)</label>
                            <input
                                type="number"
                                name="peso"
                                value={form.peso || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                                min={0}
                                step="any"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Altura (m)</label>
                            <input
                                type="number"
                                name="altura"
                                value={form.altura || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                                min={0}
                                step="any"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">FTP</label>
                            <input
                                type="number"
                                name="ftp"
                                value={form.ftp || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                                min={0}
                                step="any"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1 text-blue-200">Pulso</label>
                            <input
                                type="number"
                                name="pulso"
                                value={form.pulso || ""}
                                onChange={handleChange}
                                disabled={!editMode}
                                className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                                min={0}
                                step="any"
                            />
                        </div>
                    </>
                )}
                {editMode && (
                    <div className="flex gap-4 justify-end mt-8">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition disabled:opacity-60 uppercase"
                            disabled={loading}
                        >
                            {loading ? "Guardando..." : "Guardar"}
                        </button>
                        <button
                            type="button"
                            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow transition uppercase"
                            onClick={() => {
                                setForm(user);
                                setEditMode(false);
                            }}
                            disabled={loading}
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </form>
            {!editMode && (
                <div className="flex justify-end mt-8">
                    <button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow transition uppercase"
                        onClick={() => setEditMode(true)}
                    >
                        Editar perfil
                    </button>
                </div>
            )}
        </div>
    );
}