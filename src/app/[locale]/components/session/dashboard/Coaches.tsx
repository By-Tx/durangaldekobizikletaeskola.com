"use client";
import { useState } from "react";
import { useError } from "@/context/ErrorContext";
import Table from "@/app/[locale]/components/session/ui/Table";

type Entrenador = {
    user_id: string;
    id: number;
    nombre: string;
    apellidos: string;
    dni: string;
    telefono: string;
    fecha_nacimiento: string;
};

interface CoachClientProps {
    entrenadores: Entrenador[];
    rol: string;
}

export default function CoachesClient({ entrenadores, rol }: CoachClientProps) {
    const [data, setData] = useState(entrenadores);
    const [searchTerm, setSearchTerm] = useState("");
    const [form, setForm] = useState<Partial<Entrenador>>({});
    const [editId, setEditId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [closing, setClosing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { setError } = useError();
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter(entrenador =>
        entrenador.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entrenador.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entrenador.dni.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entrenador.telefono.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Manejar cambios en el término de búsqueda
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Manejar cambios en el formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        let { name, value } = e.target;
        if (name === "telefono") {
            value = formatTelefono(value);
        }
        setForm({ ...form, [name]: value });
    };

    // Mostrar formulario para editar
    const handleEdit = (entrenador: Entrenador) => {
        setForm({
            ...entrenador,
            telefono: formatTelefono(entrenador.telefono)
        });
        setEditId(entrenador.user_id);
        setShowForm(true);
    };

    // Cerrar formulario
    const handleCloseForm = () => {
        setClosing(true);
        setTimeout(() => {
            setShowForm(false);
            setClosing(false);
            setForm({});
            setEditId(null);
        }, 300);
    };

    // Agregar o editar entrenador
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let newForm = { ...form };

        newForm.fecha_nacimiento = new Date(newForm.fecha_nacimiento as string).toISOString();

        if (newForm.telefono) {
            newForm.telefono = newForm.telefono.replace(/\s+/g, "");
        }

        const response = await fetch("/api/coach", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...newForm, id: editId }),
        });

        const result = await response.json();
        if (!response.ok) {
            if (!response.ok) {
                setError(result.error || "Error desconocido");
                return;
            }

            return;
        }

        setForm({});
        setEditId(null);
        setShowForm(false);
        const updated = await fetch("/api/coach").then(res => res.json());
        setData(updated);
    };

    // Eliminar entrenador
    const handleDelete = (user_id: string) => {
        setDeleteId(user_id);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (deleteId !== null) {
            await fetch("/api/coach", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id: deleteId }),
            });
            const updated = await fetch("/api/coach").then(res => res.json());
            setData(updated);
            setShowConfirm(false);
            setDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setDeleteId(null);
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

    // Función para formatear el teléfono
    function formatTelefono(value: string) {
        // Elimina todo lo que no sea dígito
        const digits = value.replace(/\D/g, "");
        if (digits.length !== 9) return digits;
        // Aplica el formato XXX XX XX XX
        return `${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`;
    }

    return (

        <div className="p-4 font-fredoka">
            {/* Popup de confirmación */}
            {showConfirm && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 pt-10 transition-opacity duration-300 ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-blue-500 transition-all duration-300 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <h2 className="text-2xl font-extrabold mb-4 text-gray-200 drop-shadow">¿Estás seguro/a de que deseas eliminar este entrenador?</h2>
                        <p className="text-gray-300 mb-6">Se eliminarán todos sus datos y las/los deportistas no tendrán un entrenador/a asignado. Esta acción no se puede deshacer.</p>
                        <div className="flex justify-center gap-6 mt-4">
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-red-700 hover:to-red-500 transition-all duration-150"
                                onClick={async () => {
                                    setClosing(true);
                                    setTimeout(async () => {
                                        await confirmDelete();
                                        setClosing(false);
                                    }, 300);
                                }}
                            >
                                Eliminar
                            </button>
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-gray-400 hover:to-gray-500 transition-all duration-150"
                                onClick={() => {
                                    setClosing(true);
                                    setTimeout(() => {
                                        cancelDelete();
                                        setClosing(false);
                                    }, 300);
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}


            {/* Mostrar información de los entrenadores */}
            {/* Título y botón responsive */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-white drop-shadow text-center mb-4">ENTRENADORES</h2>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-2/3">
                    {filteredData.length === 0 ? (
                        <div className="text-center text-gray-400 text-lg">
                            No existe ningún entrenador
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col md:flex-row md:justify-end mb-4 gap-2">
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    className="w-full md:w-1/5 border border-blue-400 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-500"
                                />
                            </div>
                            <Table
                                columns={[
                                    { name: "Nombre", key: "nombre" },
                                    { name: "Apellidos", key: "apellidos" },
                                    { name: "DNI", key: "dni" },
                                    { name: "Teléfono", key: "telefono" },
                                    { name: "Fecha de nacimiento", key: "fecha_nacimiento" },
                                ]}
                                data={filteredData}
                                colWidths={[200, 200, 200, 100, 200, 175]}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                formatFecha={formatFecha}
                            />
                        </>
                    )}
                </div>
            </div>

            {/* Formulario flotante con animación */}
            {showForm && (
                <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-[95%] md:w-full max-w-xl relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-200 ease-in-out"
                            onClick={handleCloseForm}
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center drop-shadow">
                            Editar entrenador
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4 text-white">
                            <input
                                type="hidden"
                                name="id"
                                value={form.id || ""}
                            />
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre"
                                value={form.nombre || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="text"
                                name="apellidos"
                                placeholder="Apellidos"
                                value={form.apellidos || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="text"
                                name="dni"
                                placeholder="DNI"
                                value={form.dni || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="text"
                                name="telefono"
                                placeholder="Teléfono"
                                value={form.telefono || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="date"
                                name="fecha_nacimiento"
                                placeholder="Fecha de nacimiento"
                                value={form.fecha_nacimiento ? form.fecha_nacimiento.slice(0, 10) : ""}
                                onChange={handleChange}
                                required
                                className={`w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700 ${!form.fecha_nacimiento ? "text-gray-400" : "text-white"
                                    }`}
                            />
                            <div className="flex gap-4 mt-6 justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                               transition-all duration-200 ease-in-out
                                               hover:shadow-xl hover:opacity-90
                                               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                >
                                    Guardar cambios
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg
                                               transition-all duration-200 ease-in-out
                                               hover:shadow-xl hover:opacity-90
                                               focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                    onClick={handleCloseForm}
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