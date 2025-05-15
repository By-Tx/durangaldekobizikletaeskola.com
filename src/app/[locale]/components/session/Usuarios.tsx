"use client";
import { useState } from "react";
import { API_URL } from "@/lib/config";

interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}

interface UsersTableProps {
    users: User[];
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

export default function UsersTable({ users }: UsersTableProps) {
    const [userList, setUserList] = useState<User[]>(users);
    const [editForm, setEditForm] = useState<User | null>(null);
    const [editId, setEditId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [closing, setClosing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("");

    const handleEditClick = (user: User) => {
        setEditForm(user);
        setEditId(user.id);
        setShowForm(true);
        setClosing(false);
    };

    const handleDeleteClick = (id: string) => {
        setDeleteId(id);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (!deleteId) return;
        await fetch(`${API_URL}/api/usersManagement`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: deleteId }),
        });
        setUserList(userList.filter(u => u.id !== deleteId));
        setShowConfirm(false);
        setDeleteId(null);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setDeleteId(null);
    };

    const handleCloseForm = () => {
        setClosing(true);
        setTimeout(() => {
            setShowForm(false);
            setClosing(false);
            setEditForm(null);
            setEditId(null);
        }, 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (!editForm) return;
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch(`${API_URL}/api/usersManagement`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editForm),
        });
        const updated = await fetch(`${API_URL}/api/usersManagement`).then(res => res.json());
        setUserList(updated);
        handleCloseForm();
    };

    const filteredUsers = userList.filter(
        (u) =>
            u.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterRole === "" || u.role === filterRole)
    );

    return (
        <div className="p-4 font-fredoka">
            {/* confirm delection */}
            {showConfirm && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 pt-10 transition-opacity duration-300 ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-blue-500 transition-all duration-300 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <h2 className="text-2xl font-extrabold mb-4 text-gray-200">¿Eliminar este usuario?</h2>
                        <p className="text-gray-300 mb-6">Esta acción no se puede deshacer.</p>
                        <div className="flex justify-center gap-6 mt-4">
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-xl font-bold shadow-lg hover:scale-105 transition"
                                onClick={confirmDelete}
                            >
                                Eliminar
                            </button>
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-xl font-bold shadow-lg hover:scale-105 transition"
                                onClick={cancelDelete}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* header */}
            <div className="grid grid-cols-1 sm:grid-cols-3 items-center mb-6">
                <div className="hidden sm:block"></div>
                <h2 className="text-3xl font-semibold text-white text-center">USUARIOS</h2>
                <div className="hidden sm:block"></div>
            </div>
            
            {/* filters */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 text-white">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-blue-600 w-full sm:w-64"
                />
                <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-blue-600 w-full sm:w-64"
                >
                    <option value="">Todos los roles</option>
                    <option value="admin">Administrador</option>
                    <option value="coach">Entrenador</option>
                    <option value="staff">Personal</option>
                    <option value="runner">Deportista</option>
                    <option value="user">Usuario</option>
                </select>
            </div>
            
            <div className="flex justify-center">
                <div className="w-full sm:w-11/12 md:w-3/4 lg:w-1/2 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-blue-400 pb-2 overflow-x-auto">
                    <table className="md:min-w-[400px] w-full border-collapse">
                        <thead className="bg-gray-700 text-blue-100 uppercase hidden sm:table-header-group">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Correo electrónico</th>
                                <th className="px-4 py-3 font-semibold">Nombre</th>
                                <th className="px-4 py-3 font-semibold">Rol</th>
                                <th className="px-4 py-3 font-semibold">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((u) => (
                                <tr
                                    key={u.id}
                                    className="hover:bg-blue-900/20 transition border-t border-blue-900/30"
                                >
                                    {/* Vista móvil: toda la info en una celda */}
                                    <td colSpan={4} className="block sm:hidden px-4 py-4">
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                <span className="font-bold text-blue-300">Correo: </span>
                                                <span>{u.email}</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-blue-300">Nombre: </span>
                                                <span>{u.name}</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-blue-300">Rol: </span>
                                                <span>{translateRole(u.role)}</span>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <button
                                                    className="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold"
                                                    style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
                                                    onClick={() => handleEditClick(u)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                                    style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
                                                    onClick={() => handleDeleteClick(u.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    {/* Vista escritorio: columnas normales */}
                                    <td className="px-4 py-2 hidden sm:table-cell">{u.email}</td>
                                    <td className="px-4 py-2 hidden sm:table-cell">{u.name}</td>
                                    <td className="px-4 py-2 text-center hidden sm:table-cell">{translateRole(u.role)}</td>
                                    <td className="px-4 py-2 hidden sm:table-cell">
                                        <div className="flex justify-center gap-2 flex-wrap">
                                            <button
                                                className="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold"
                                                style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
                                                onClick={() => handleEditClick(u)}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                                style={{ flex: "1 1 0", whiteSpace: "nowrap" }}
                                                onClick={() => handleDeleteClick(u.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filteredUsers.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="text-center text-gray-300 py-6">
                                        No se encontraron usuarios.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {showForm && editForm && (
                <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-[90%] max-w-xl relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl"
                            onClick={handleCloseForm}
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center">
                            Editar usuario
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4 text-white">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={editForm.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={editForm.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
                            />
                            <select
                                name="role"
                                value={editForm.role}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg"
                            >
                                <option value="admin">Administrador</option>
                                <option value="coach">Entrenador</option>
                                <option value="staff">Personal</option>
                                <option value="runner">Deportista</option>
                                <option value="user">Usuario</option>
                            </select>
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90"
                                >
                                    Guardar
                                </button>
                                <button
                                    type="button"
                                    onClick={handleCloseForm}
                                    className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:opacity-90"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
