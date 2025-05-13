"use client";
import { useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
    role: string | null;
}

interface PerfilProps {
    user: User;
}

export default function Perfil({ user }: PerfilProps) {
    const [form, setForm] = useState(user);
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

    return (
        <div className="max-w-xl mx-auto mt-10 bg-gray-900/90 p-8 rounded-2xl shadow-2xl border border-blue-700">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-200 drop-shadow">Mi perfil</h2>
            {success && <div className="text-green-400 mb-4 text-center font-semibold">{success}</div>}
            {error && <div className="text-red-400 mb-4 text-center font-semibold">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-semibold mb-1 text-blue-200">Nombre de usuario</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                        required
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1 text-blue-200">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                    />
                </div>
                <div>
                    <label className="block font-semibold mb-1 text-blue-200">Rol</label>
                    <select
                        name="role"
                        value={form.role || ""}
                        onChange={handleChange}
                        disabled={!editMode}
                        className={`w-full rounded-lg px-4 py-2 bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow ${editMode ? "hover:border-blue-400" : "opacity-80 cursor-not-allowed"}`}
                    >
                        <option value="admin">Administrador</option>
                        <option value="staff">Personal</option>
                        <option value="coach">Entrenador</option>
                        <option value="runner">Deportista</option>
                        <option value="user">Usuario</option>
                    </select>
                </div>
                {editMode && (
                    <div className="flex gap-4 justify-end mt-8">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-bold shadow transition disabled:opacity-60"
                            disabled={loading}
                        >
                            {loading ? "Guardando..." : "Guardar"}
                        </button>
                        <button
                            type="button"
                            className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-bold shadow transition"
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
                        className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow transition"
                        onClick={() => setEditMode(true)}
                    >
                        Editar perfil
                    </button>
                </div>
            )}
        </div>
    );
}