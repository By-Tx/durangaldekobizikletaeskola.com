"use client";
import { useRef, useLayoutEffect, useEffect, useState } from "react";

type Carrera = {
    id: number;
    nombre: string;
    fecha: string;
    lugar: string;
    categoria: string;
    modalidad: string;
    descripcion: string;
};

export default function RaceClient() {
    const [carreras, setCarreras] = useState<Carrera[]>([]);
    const [form, setForm] = useState<Partial<Carrera>>({});
    const [editId, setEditId] = useState<number | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [closing, setClosing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const firstRowRefs = useRef<(HTMLTableCellElement | null)[]>([]);
    const [colWidths, setColWidths] = useState<number[]>([]);

    useLayoutEffect(() => {
        if (firstRowRefs.current.length) {
            setColWidths(firstRowRefs.current.map(td => td?.offsetWidth || 0));
        }
    }, [carreras]);

    // Obtener carreras
    useEffect(() => {
        fetch("/api/races")
            .then(res => res.json())
            .then(data => {
                setCarreras(data);
            });
    }, []);

    // Manejar cambios en el formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Mostrar formulario para añadir
    const handleAdd = () => {
        setForm({});
        setEditId(null);
        setShowForm(true);
    };

    // Mostrar formulario para editar
    const handleEdit = (carrera: Carrera) => {
        setForm(carrera);
        setEditId(carrera.id);
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

    // Agregar o editar carrera
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let newForm = { ...form };

        newForm.fecha = new Date(newForm.fecha as string).toISOString();

        if (editId) {
            await fetch("/api/races", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...newForm, id: editId }),
            });
        } else {
            const maxId = carreras.length > 0
                ? Math.max(...carreras.map(c => Number(c.id) || 0))
                : 0;
            newForm.id = maxId + 1;

            await fetch("/api/races", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newForm),
            });
        }
        setForm({});
        setEditId(null);
        setShowForm(false);
        const updated = await fetch("/api/races").then(res => res.json());
        setCarreras(updated);
    };

    // Eliminar carrera
    const handleDelete = (id: number) => {
        setDeleteId(id);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (deleteId !== null) {
            await fetch("/api/races", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: deleteId }),
            });
            setCarreras(carreras.filter(c => c.id !== deleteId));
            setShowConfirm(false);
            setDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setDeleteId(null);
    };

    // Función para formatear la fecha
    function formatFecha(fecha: string) {
        if (!fecha) return "";
        const date = new Date(fecha);
        if (isNaN(date.getTime())) return fecha;
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${day}/${month}/${year} - ${hours}:${minutes}`;
    }

    function toInputDateTimeValue(fecha: string | undefined) {
        if (!fecha) return "";
        const date = new Date(fecha);
        if (isNaN(date.getTime())) return "";
        // Ajusta a la zona local si quieres, aquí se usa UTC para evitar desfases
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    return (
        <div className="p-4">
            {/* Popup de confirmación */}
            {showConfirm && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 pt-10 transition-opacity duration-300 ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-blue-500 transition-all duration-300 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <h2 className="text-2xl font-extrabold mb-4 text-gray-200 drop-shadow">¿Estás seguro/a de que deseas eliminar esta carrera?</h2>
                        <p className="text-gray-300 mb-6">Esta acción no se puede deshacer.</p>
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
            <div className="grid grid-cols-3 items-center mb-10">
                <div></div>
                <h2 className="text-3xl font-bold text-white drop-shadow text-center">CARRERAS</h2>
                <div className="flex justify-end mr-5">
                    <button
                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                            transition-all duration-200 ease-in-out
                            hover:shadow-xl hover:opacity-90
                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        onClick={handleAdd}
                    >
                        Añadir carrera
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-4/5 rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-blue-400 pb-2 overflow-hidden">
                    <div>
                        <table className="min-w-full border-collapse" style={{ tableLayout: "auto" }}>
                            <colgroup>
                                {colWidths.map((w, i) => (
                                    <col key={i} style={{ width: w ? `${w}px` : undefined }} />
                                ))}
                            </colgroup>
                            <thead className="bg-gray-700 text-blue-100">
                                <tr>
                                    <th className="px-4 py-3 rounded-tl-2xl">Nombre</th>
                                    <th className="px-4 py-3">Fecha</th>
                                    <th className="px-4 py-3">Lugar</th>
                                    <th className="px-4 py-3">Categoría</th>
                                    <th className="px-4 py-3">Modalidad</th>
                                    <th className="px-4 py-3">Descripción</th>
                                    <th className="px-4 py-3">Acciones</th>
                                    <th className="w-3 rounded-tr-2xl"></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="max-h-[70vh] overflow-y-scroll">
                        <table className="min-w-full border-collapse" style={{ tableLayout: "auto" }}>
                            <tbody>
                                {carreras.map((c, rowIdx) => (
                                    <tr
                                        key={c.id}
                                        className="hover:bg-blue-900/20 transition cursor-pointer border-t border-blue-900/30"
                                    >
                                        <td
                                            className="px-4 py-2"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[0] = el; }}
                                        >
                                            {c.nombre}
                                        </td>
                                        <td
                                            className="px-4 py-2 text-center"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[1] = el; }}
                                        >
                                            {formatFecha(c.fecha)}
                                        </td>
                                        <td
                                            className="px-4 py-2 text-center"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[2] = el; }}
                                        >
                                            {c.lugar}
                                        </td>
                                        <td
                                            className="px-4 py-2 text-center"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[3] = el; }}
                                        >
                                            {c.categoria}
                                        </td>
                                        <td
                                            className="px-4 py-2 text-center"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[4] = el; }}
                                        >
                                            {c.modalidad.replace("_", "-")}
                                        </td>
                                        <td
                                            className="px-4 py-2"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[5] = el; }}
                                        >
                                            {c.descripcion}
                                        </td>
                                        <td
                                            className="px-4 py-2"
                                            ref={el => { if (rowIdx === 0) firstRowRefs.current[6] = el; }}
                                        >
                                            <div className="flex justify-center gap-2 items-center">
                                                <button
                                                    className="px-2 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold"
                                                    onClick={() => handleEdit(c)}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                                    onClick={() => handleDelete(c.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Formulario flotante con animación */}
            {showForm && (
                <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-xl relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-200 ease-in-out"
                            onClick={handleCloseForm}
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center drop-shadow">{
                            editId ? "Editar carrera" : "Añadir carrera"
                        }</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 text-white">
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
                                type="datetime-local"
                                name="fecha"
                                placeholder="Fecha"
                                value={toInputDateTimeValue(form.fecha)}
                                onChange={handleChange}
                                required
                                className={`w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700 ${!form.fecha ? "text-gray-400" : "text-white"
                                    }`}
                            />
                            <input
                                name="lugar"
                                placeholder="Lugar"
                                value={form.lugar || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <select
                                name="categoria"
                                value={form.categoria || ""}
                                onChange={handleChange}
                                required
                                className={`w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700 ${!form.categoria ? "text-gray-400" : "text-white"
                                    }`}
                            >
                                <option value="" disabled hidden className="text-gray-400">Selecciona la categoría</option>
                                <option value="Cadetes">Cadetes</option>
                                <option value="Juveniles">Juveniles</option>
                            </select>
                            <select
                                name="modalidad"
                                value={form.modalidad || ""}
                                onChange={handleChange}
                                required
                                className={`w-full border border-blue-700 bg-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700 ${!form.modalidad ? "text-gray-400" : "text-white"
                                    }`}
                            >
                                <option value="" disabled hidden className="text-gray-400">Selecciona la modalidad</option>
                                <option value="Carretera">Carretera</option>
                                <option value="Mountain-Bike">Mountain-Bike</option>
                                <option value="Ciclocross">Ciclocross</option>
                                <option value="Pista">Pista</option>
                            </select>
                            <textarea
                                name="descripcion"
                                placeholder="Descripción"
                                value={form.descripcion || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none shadow-lg hover:border-blue-400 hover:bg-gray-700"
                                rows={3}
                            />
                            <div className="flex gap-4 mt-6 justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                               transition-all duration-200 ease-in-out
                                               hover:shadow-xl hover:opacity-90
                                               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                >
                                    {editId ? "Guardar cambios" : "Añadir"}
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