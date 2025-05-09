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
      <div className="grid grid-cols-3 items-center mb-6">
        <div></div>
        <h2 className="text-3xl font-bold text-white text-center">USUARIOS</h2>
        <div></div>
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
          <option value="coach">coach</option>
          <option value="staff">staff</option>
          <option value="runner">runner</option>
          <option value="user">user</option>
        </select>
      </div>

     
      <div className="flex justify-center">
        <div className="w-full sm:w-4/5 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-blue-400 pb-2 overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-gray-700 text-blue-100">
              <tr>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Rol</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <tr
                  key={u.id}
                  className="hover:bg-blue-900/20 transition cursor-pointer border-t border-blue-900/30"
                >
                  <td className="px-4 py-2">{u.email}</td>
                  <td className="px-4 py-2 text-center">{u.name}</td>
                  <td className="px-4 py-2 text-center">{u.role}</td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <button
                        className="px-3 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold"
                        onClick={() => handleEditClick(u)}
                      >
                        Editar
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
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
                <option value="coach">coach</option>
                <option value="staff">staff</option>
                <option value="runner">runner</option>
                <option value="user">user</option>
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
