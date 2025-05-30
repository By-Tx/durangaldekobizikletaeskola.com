"use client";
import { useState } from "react";
import { useError } from "@/context/ErrorContext";
import Table from "@/app/[locale]/components/session/ui/Table";

type Deportista = {
    numero_licencia: string;
    nombre: string;
    apellidos: string;
    dni: string;
    telefono: string;
    fecha_nacimiento: string;
    peso: number;
    altura: number;
    ftp: number;
    pulso: number;
};

interface RunnerClientProps {
    deportistas: Deportista[];
    rol: string;
}

export default function RunnersClient({ deportistas, rol }: RunnerClientProps) {
    const [data, setData] = useState(deportistas);
    const [searchTerm, setSearchTerm] = useState("");
    const [form, setForm] = useState<Partial<Deportista>>({});
    const [editId, setEditId] = useState<string | null>(null);
    const [showAddList, setShowAddList] = useState(false);
    const [availableRunners, setAvailableRunners] = useState<Deportista[]>([]);
    const [selectedRunners, setSelectedRunners] = useState<string[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [closing, setClosing] = useState(false);
    const [loadingRunners, setLoadingRunners] = useState(false);
    const [closingAddList, setClosingAddList] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const { setError } = useError();
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter(deportista =>
        deportista.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deportista.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deportista.numero_licencia.toLowerCase().includes(searchTerm.toLowerCase()) ||
        deportista.dni.toLowerCase().includes(searchTerm.toLowerCase())
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

    // Abrir el modal y cargar deportistas disponibles
    const handleAdd = async () => {
        setShowAddList(true);
        setLoadingRunners(true);
        const res = await fetch("/api/runner?available=true");
        const runners = await res.json();
        setAvailableRunners(runners);
        setSelectedRunners([]);
        setLoadingRunners(false);
    };

    // Seleccionar/des-seleccionar deportistas
    const toggleSelectRunner = (numero_licencia: string) => {
        setSelectedRunners(prev =>
            prev.includes(numero_licencia)
                ? prev.filter(nl => nl !== numero_licencia)
                : [...prev, numero_licencia]
        );
    };

    // Asignar deportistas seleccionados al entrenador
    const handleAssignRunners = async () => {
        await fetch("/api/runner", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ assignRunners: selectedRunners }),
        });
        setShowAddList(false);
        // Refresca la lista principal
        const updated = await fetch("/api/runner").then(res => res.json());
        setData(updated);
    };

    // Para cerrar el modal con animación:
    const handleCloseAddList = () => {
        setClosingAddList(true);
        setTimeout(() => {
            setShowAddList(false);
            setClosingAddList(false);
        }, 300);
    };

    // Mostrar formulario para editar
    const handleEdit = (deportista: Deportista) => {
        setForm({
            ...deportista,
            telefono: formatTelefono(deportista.telefono)
        });
        setEditId(deportista.numero_licencia);
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



    // Agregar o editar deportista
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let newForm = { ...form };

        newForm.fecha_nacimiento = new Date(newForm.fecha_nacimiento as string).toISOString();

        if (newForm.telefono) {
            newForm.telefono = newForm.telefono.replace(/\s+/g, "");
        }

        if (newForm.pulso) {
            const pulso = newForm.pulso as unknown;
            if (typeof pulso === "string" && !isNaN(Number(pulso))) {
                newForm.pulso = parseInt(pulso as string, 10);
            } else if (typeof pulso === "number") {
                newForm.pulso = pulso;
            } else {
                newForm.pulso = 0;
            }
        }

        let response;
        if (editId) {
            response = await fetch("/api/runner", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...newForm, numero_licencia: editId }),
            });
        } else {
            response = await fetch("/api/runner", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newForm),
            });
        }

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
        const updated = await fetch("/api/runner").then(res => res.json());
        setData(updated);
    };

    // Eliminar deportista
    const handleDelete = (id: string) => {
        setDeleteId(id);
        setShowConfirm(true);
    };

    const confirmDelete = async () => {
        if (deleteId !== null) {
            await fetch("/api/runner", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ numero_licencia: deleteId }),
            });
            setData(data.filter(d => d.numero_licencia !== deleteId));
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
                        <h2 className="text-2xl font-extrabold mb-4 text-gray-200 drop-shadow">¿Estás seguro/a de que deseas eliminar este deportista?</h2>
                        <p className="text-gray-300 mb-6">Se eliminarán todos sus datos y sus estadísticas. Esta acción no se puede deshacer.</p>
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


            {/* Mostrar información de los deportistas */}
            {/* Título y botón responsive */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold text-white drop-shadow text-center mb-4">
                    {rol === "coach" ? "MIS DEPORTISTAS" : "DEPORTISTAS"}
                </h2>
                {rol === "coach" && (
                    <div className="flex justify-center md:justify-end mb-4">
                        <button
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                transition-all duration-200 ease-in-out
                                hover:shadow-xl hover:opacity-90
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            onClick={handleAdd}
                        >
                            Añadir deportista
                        </button>
                    </div>
                )}
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-4/5">
                    {filteredData.length === 0 ? (
                        <div className="text-center text-gray-400 text-lg">
                            No existe ningún deportista
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
                                    { name: "Número de licencia", key: "numero_licencia" },
                                    { name: "Nombre", key: "nombre" },
                                    { name: "Apellidos", key: "apellidos" },
                                    { name: "DNI", key: "dni" },
                                    { name: "Teléfono", key: "telefono" },
                                    { name: "Fecha de nacimiento", key: "fecha_nacimiento" },
                                    { name: "Peso", key: "peso" },
                                    { name: "Altura", key: "altura" },
                                    { name: "FTP", key: "ftp" },
                                    { name: "Pulso", key: "pulso" },
                                ]}
                                data={filteredData}
                                colWidths={[200, 150, 150, 125, 150, 225, 150, 100, 100, 100]}
                                onHistorial={() => { }}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                formatFecha={formatFecha}
                            />
                        </>
                    )}
                </div>
            </div>

            {/* Modal de selección de deportistas */}
            {showAddList && (
                <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity duration-300 ${closingAddList ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-full max-w-xl relative border-2 border-blue-700 transition-all duration-300 ${closingAddList ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl"
                            onClick={handleCloseAddList}
                            aria-label="Cerrar"
                        >✕</button>
                        <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center">Selecciona deportistas para añadir</h3>
                        <div className="max-h-80 overflow-y-auto">
                            {loadingRunners ? (
                                <div className="text-blue-200 text-center py-4">Cargando deportistas...</div>
                            ) : availableRunners.length === 0 ? (
                                <div className="text-blue-200 text-center py-4">No hay deportistas disponibles</div>
                            ) : (
                                availableRunners.map(runner => (
                                    <label key={runner.numero_licencia} className="flex items-center gap-3 py-2 px-2 hover:bg-blue-900/20 rounded cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedRunners.includes(runner.numero_licencia)}
                                            onChange={() => toggleSelectRunner(runner.numero_licencia)}
                                        />
                                        <span>{runner.nombre} {runner.apellidos}</span>
                                    </label>
                                ))
                            )}
                        </div>
                        <div className="flex gap-4 mt-6 justify-end">
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg"
                                onClick={handleAssignRunners}
                                disabled={selectedRunners.length === 0 || loadingRunners}
                            >
                                Añadir seleccionados
                            </button>
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg"
                                onClick={handleCloseAddList}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                        <h3 className="text-2xl font-extrabold mb-6 text-blue-400 text-center drop-shadow">{
                            editId ? "Editar deportista" : "Añadir deportista"
                        }</h3>
                        <form onSubmit={handleSubmit} className="space-y-4 text-white">
                            <input
                                type="text"
                                name="numero_licencia"
                                placeholder="Número de licencia"
                                value={form.numero_licencia || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
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
                            <input
                                type="number"
                                name="peso"
                                placeholder="Peso (kg)"
                                value={form.peso || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="number"
                                name="altura"
                                placeholder="Altura (cm)"
                                value={form.altura || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="number"
                                name="ftp"
                                placeholder="FTP (W)"
                                value={form.ftp || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="number"
                                name="pulso"
                                placeholder="Pulso (ppm)"
                                value={form.pulso || ""}
                                onChange={handleChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
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