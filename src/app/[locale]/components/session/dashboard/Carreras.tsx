"use client";
import { useEffect, useState } from "react";
import info from "@/app/media/info.svg";
import Image from "next/image";
import Table from "@/app/[locale]/components/session/ui/Table";
import { useError } from "@/context/ErrorContext";
import back from "@/app/media/session/back.svg";
import download from "@/app/media/session/download.svg";
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import { saveAs } from 'file-saver';

type Carrera = {
    id: number;
    nombre: string;
    fecha: string;
    lugar: string;
    categoria: string;
    modalidad: string;
    descripcion: string;
    participantes: {
        participante_id: string;
        nombre: string;
        apellidos: string;
        resultado_id: number;
        tiempo: string;
        posicion: number;
    }[];
};

interface RaceClientProps {
    carreras: Carrera[];
    rol: string;
}

export default function RaceClient({ carreras, rol }: RaceClientProps) {
    const [data, setData] = useState(carreras);
    const [searchTerm, setSearchTerm] = useState("");
    const [form, setForm] = useState<Partial<Carrera>>({});
    const [editId, setEditId] = useState<number | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [closing, setClosing] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [selectedRace, setSelectedRace] = useState<Carrera | null>(null);
    const [athleteForm, setAthleteForm] = useState({ nombre: "", apellidos: "", tiempo: "", posicion: 0 });
    const [searchAthleteTerm, setSearchAthleteTerm] = useState("");
    const [filteredAthletes, setFilteredAthletes] = useState<any[]>([]);
    const [selectedAthlete, setSelectedAthlete] = useState<any | null>(null);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [signUpForm, setSignUpForm] = useState({ nombre_apellido: "", dorsal: "" });
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [inscritos, setInscritos] = useState<any[]>([]);
    const { setError } = useError();
    const scholarship = rol === "user" || rol === "instructor";
    const parent = rol === "user";
    const instructor = rol === "instructor";

    // Filtrar los datos según el término de búsqueda
    const filteredData = data.filter(carrera =>
        carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.lugar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.modalidad.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Manejar cambios en el término de búsqueda
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Manejar clic en una fila de la tabla
    const handleRowClick = async (carrera: Carrera) => {
        setSelectedRace(carrera);

        if (carrera.categoria === "Escuela") {
            const res = await fetch(`/api/inscritos?carrera_id=${carrera.id}`);
            const data = await res.json();
            setInscritos(data);
        }
    };

    // Manejar clic en el botón de inscripción
    const handleSignUp = (carrera: Carrera) => {
        setSelectedRace(carrera);
        setShowSignUpForm(true);
    };

    const handleSignUpFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    };

    // Cerrar formulario
    const handleCloseSignUpForm = () => {
        setClosing(true);
        setTimeout(() => {
            setShowSignUpForm(false);
            setClosing(false);
            setSignUpForm({ nombre_apellido: "", dorsal: "" });
        }, 300);
    };

    // Agregar o editar carrera
    const handleSubmitSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/race_signUp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...signUpForm,
                carrera_id: selectedRace?.id
            }),
        });

        if (response.ok) {
            setSuccessMessage(
                `El deportista ${signUpForm.nombre_apellido} se ha inscrito correctamente a la carrera ${selectedRace?.nombre}.`
            );
            setSignUpForm({ nombre_apellido: "", dorsal: "" });
            setShowSignUpForm(false);
        } else {
            const data = await response.json();
            setError(data.error || "Error desconocido");
        }
    };

    // Manejar cambios en el formulario de deportistas
    const handleAthleteFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "tiempo") {
            const sanitizedValue = value.replace(/[^0-9]/g, "");
            const trimmedValue = sanitizedValue.replace(/^0+/, "");
            const limitedValue = trimmedValue.slice(0, 6);
            const formattedTime = formatTimeInput(limitedValue);
            setAthleteForm({ ...athleteForm, [name]: formattedTime });
        } else {
            setAthleteForm({ ...athleteForm, [name]: value });
        }
    };

    // Guardar deportista en la carrera
    const handleAddAthlete = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedRace || !selectedAthlete) return;

        try {
            const response = await fetch(`/api/runners?search=maxId`);
            const { maxId } = await response.json();
            const newId = maxId + 1;
            const [hours, minutes, seconds] = athleteForm.tiempo.split(":").map(Number);
            const isoTimeString = `1970-01-01T${String(hours || 0).padStart(2, "0")}:${String(minutes || 0).padStart(2, "0")}:${String(seconds || 0).padStart(2, "0")}.000Z`;

            const newParticipant = {
                participante_id: selectedAthlete.numero_licencia,
                nombre: selectedAthlete.nombre,
                apellidos: selectedAthlete.apellidos,
                resultado_id: newId,
                tiempo: athleteForm.tiempo,
                posicion: Number(athleteForm.posicion),
            };

            const insertParticipant = {
                id: newId,
                tiempo: isoTimeString,
                posicion: Number(athleteForm.posicion),
                carrera_id: selectedRace.id,
                participante_id: selectedAthlete.numero_licencia,
            };

            // Realizar la solicitud POST para añadir el participante
            const postResponse = await fetch(`/api/runners`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(insertParticipant),
            });

            if (!postResponse.ok) {
                throw new Error("Error al añadir el participante a la base de datos");
            }

            // Actualizar la lista de participantes localmente
            const updatedParticipants = [...(selectedRace.participantes || []), newParticipant]
                .sort((a, b) => a.posicion - b.posicion);

            setSelectedRace({ ...selectedRace, participantes: updatedParticipants });

            // Reiniciar el formulario
            setAthleteForm({ nombre: "", apellidos: "", tiempo: "", posicion: 0 });
            setSelectedAthlete(null);
        } catch (error) {
            console.error("Error al añadir el participante:", error);
        }
    };

    // Cancelar la acción de añadir deportista
    const handleCancelAddAthlete = () => {
        setAthleteForm({ nombre: "", apellidos: "", tiempo: "", posicion: 0 });
        setSelectedAthlete(null);
        setSearchAthleteTerm("");
        setFilteredAthletes([]);
    };

    // Eliminar participante de la lista
    const handleDeleteParticipant = async (index: number) => {
        if (!selectedRace) return;

        const participantToDelete = selectedRace.participantes[index];

        try {
            // Realizar la solicitud DELETE para eliminar el participante
            const response = await fetch(`/api/runners`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: participantToDelete.resultado_id }),
            });

            if (!response.ok) {
                throw new Error("Error al eliminar el resultado de la base de datos");
            }

            // Actualizar la lista de participantes localmente
            const updatedParticipants = selectedRace.participantes?.filter((_, i) => i !== index) || [];
            setSelectedRace({ ...selectedRace, participantes: updatedParticipants });
        } catch (error) {
            console.error("Error al eliminar el resultado:", error);
        }
    };

    // Buscar deportistas en la base de datos
    useEffect(() => {
        const fetchAthletes = async () => {
            try {
                const response = await fetch(`/api/runners?search=${searchAthleteTerm.trim()}`);
                const athletes = await response.json();
                setFilteredAthletes(Array.isArray(athletes) ? athletes : []);
            } catch (error) {
                console.error("Error al buscar deportistas:", error);
                setFilteredAthletes([]);
            }
        };

        fetchAthletes();
    }, [searchAthleteTerm]);

    const handleSearchAthleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchAthleteTerm(e.target.value);
    };

    // Seleccionar deportista
    const handleSelectAthlete = (athlete: any) => {
        setSelectedAthlete(athlete);
        setAthleteForm({ ...athleteForm, nombre: athlete.nombre, apellidos: athlete.apellidos });
    };

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
            const maxId = data.length > 0
                ? Math.max(...data.map(c => Number(c.id) || 0))
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
        setData(updated);
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
            setData(data.filter(c => c.id !== deleteId));
            setShowConfirm(false);
            setDeleteId(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setDeleteId(null);
    };

    const fetchImageAsUint8Array = async (url: string): Promise<Uint8Array> => {
        const res = await fetch(url);
        const blob = await res.blob();
        return new Uint8Array(await blob.arrayBuffer());
    };

    // Descargar PDF
    const handleDownloadPDF = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([595.28, 841.89]);
        const { width, height } = page.getSize();
        pdfDoc.registerFontkit(fontkit);

        // Fuentes
        const fredokaBoldBytes = await fetch('/fonts/Fredoka-Bold.ttf').then(res => res.arrayBuffer());
        const fredokaBoldFont = await pdfDoc.embedFont(fredokaBoldBytes);
        const fredokaBytes = await fetch('/fonts/Fredoka-Regular.ttf').then(res => res.arrayBuffer());
        const fredokaFont = await pdfDoc.embedFont(fredokaBytes);
        const varelaBytes = await fetch('/fonts/VarelaRound-Regular.otf').then(res => res.arrayBuffer());
        const varelaFont = await pdfDoc.embedFont(varelaBytes);

        // Header
        const headerHeight = 100;
        page.drawRectangle({
            x: 0,
            y: height - headerHeight,
            width,
            height: headerHeight,
            color: rgb(57 / 255, 132 / 255, 200 / 255),
        });

        // Cargar imagen
        const imageBytes = await fetchImageAsUint8Array('/media/big_logo_wh.png');
        const logoImage = await pdfDoc.embedPng(imageBytes);
        const logoWidth = 80;
        const logoHeight = 80;
        const logoX = 40;
        const logoY = height - logoHeight - 10;

        page.drawImage(logoImage, {
            x: logoX,
            y: logoY,
            width: logoWidth,
            height: logoHeight,
        });

        // Título
        const title = (selectedRace?.nombre || '').toUpperCase();
        const fontSizeTitle = 20;
        const titleWidth = fredokaBoldFont.widthOfTextAtSize(title, fontSizeTitle);
        page.drawText(title, {
            x: width / 2 - titleWidth / 2,
            y: height - 60,
            size: fontSizeTitle,
            font: fredokaBoldFont,
            color: rgb(1, 1, 1),
        });

        // Subtítulo
        const subtitle = 'DEPORTISTAS INSCRITOS';
        const fontSizeSubtitle = 14;
        const subtitleWidth = fredokaFont.widthOfTextAtSize(subtitle, fontSizeSubtitle);
        page.drawText(subtitle, {
            x: width / 2 - subtitleWidth / 2,
            y: height - 140,
            size: fontSizeSubtitle,
            font: fredokaFont,
            color: rgb(0, 0, 0),
        });

        // Tabla
        const startY = height - 190;
        const rowHeight = 24;
        const colWidths = [85, 220];
        const tableWidth = colWidths[0] + colWidths[1];
        const tableX = (width - tableWidth) / 2;

        const headers = ['Dorsal', 'Nombre y Apellido'];
        const rows = inscritos
            .filter((row) => row.confirmado === 1)
            .map((row) => [row.dorsal.toString(), row.nombre_apellido]);

        const headerBg = rgb(57 / 255, 132 / 255, 200 / 255);
        const headerColor = rgb(1, 1, 1);
        const rowText = rgb(30 / 255, 41 / 255, 59 / 255);
        const altRowBg = rgb(241 / 255, 245 / 255, 249 / 255);
        const borderColor = rgb(203 / 255, 213 / 255, 225 / 255);

        let y = startY;

        // Cabecera
        page.drawRectangle({
            x: tableX,
            y: y,
            width: tableWidth,
            height: rowHeight,
            color: headerBg,
            borderColor: borderColor,
            borderWidth: 0.8,
        });

        // Headers
        headers.forEach((text, i) => {
            page.drawText(text, {
                x: tableX + 10 + colWidths.slice(0, i).reduce((a, b) => a + b, 0),
                y: y + 7,
                size: 12,
                font: varelaFont,
                color: headerColor,
            });
        });

        y -= rowHeight;

        // Filas
        rows.forEach((row, rowIndex) => {
            const isAlt = rowIndex % 2 === 0;
            page.drawRectangle({
                x: tableX,
                y: y,
                width: tableWidth,
                height: rowHeight,
                color: isAlt ? altRowBg : undefined,
                borderColor: borderColor,
                borderWidth: 0.5,
            });

            row.forEach((cell, colIndex) => {
                page.drawText(cell, {
                    x: tableX + 10 + colWidths.slice(0, colIndex).reduce((a, b) => a + b, 0),
                    y: y + 7,
                    size: 11,
                    font: varelaFont,
                    color: rowText,
                });
            });

            y -= rowHeight;
        });

        const pdfBytes = await pdfDoc.save();
        const formattedFecha = selectedRace?.fecha ? formatFecha(selectedRace.fecha).split(" - ")[0] : '';
        const formattedNombre = (selectedRace?.nombre || 'carrera').replace(/\s+/g, "_");
        saveAs(
            new Blob([pdfBytes]),
            `INSCRIPCIONES_${formattedNombre}_${formattedFecha}.pdf`
        );
    };

    // Función para formatear la fecha
    function formatFecha(fecha: string): string {
        if (!fecha) return "";
        const [datePart, timePart] = fecha.split("T");
        if (!datePart || !timePart) return fecha;
        const [hours, minutes] = timePart.split(":");
        const [year, month, day] = datePart.split("-");
        const formattedDate = `${day}/${month}/${year}`;

        return `${formattedDate} - ${hours}:${minutes}`;
    }

    function formatTiempo(tiempo: string): string {
        if (!tiempo) return "00:00:00";

        if (tiempo.includes("Z")) {
            const timePart = tiempo.split("Z")[0];
            return timePart.split(".")[0];
        }

        const [hours = 0, minutes = 0, seconds = 0] = tiempo.split(":").map(Number);
        const formattedHours = String(hours || 0).padStart(2, "0");
        const formattedMinutes = String(minutes || 0).padStart(2, "0");
        const formattedSeconds = String(seconds || 0).padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function toInputDateTimeValue(fecha: string | undefined): string {
        if (!fecha) return "";

        const [datePart, timePart] = fecha.split("T");
        if (!datePart || !timePart) return "";

        const [year, month, day] = datePart.split("-");
        const [hours, minutes] = timePart.split(":");

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    const formatTimeInput = (value: string): string => {
        const reversedValue = value.split("").reverse().join("");
        const seconds = reversedValue.slice(0, 2).split("").reverse().join("");
        const minutes = reversedValue.slice(2, 4).split("").reverse().join("");
        const hours = reversedValue.slice(4, 6).split("").reverse().join("");
        const formattedHours = hours.padStart(2, "0");
        const formattedMinutes = minutes.padStart(2, "0");
        const formattedSeconds = seconds.padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div className="p-4 font-fredoka">
            {/* Popup de confirmación */}
            {showConfirm && !scholarship && (
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

            {successMessage && (
                <div className={`fixed inset-0 bg-black bg-opacity-60 flex items-start justify-center z-50 pt-10 transition-opacity duration-300`}>
                    <div className="bg-green-900 rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-green-500 transition-all duration-300 animate-slide-up">
                        <h2 className="text-2xl font-extrabold mb-4 text-green-200 drop-shadow">
                            ¡Inscripción realizada!
                        </h2>
                        <p className="text-green-100 mb-6">{successMessage}</p>
                        <div className="flex justify-center mt-4">
                            <button
                                className="px-6 py-2 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl font-bold shadow-lg hover:scale-105 hover:from-green-700 hover:to-green-500 transition-all duration-150"
                                onClick={() => setSuccessMessage(null)}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mostrar información de la carrera */}
            {(!selectedRace || parent) && (
                <>
                    {/* Título y botón responsive */}
                    <div className="mb-6">
                        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between relative">
                            <div className="flex-1 hidden md:block"></div>
                            <h2 className="text-3xl font-semibold text-white drop-shadow text-center flex-1 md:absolute md:left-1/2 md:-translate-x-1/2">
                                CARRERAS
                            </h2>
                            {!scholarship && (
                                <div className="flex justify-end mt-4 md:mt-0 flex-1">
                                    <button
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                            transition-all duration-200 ease-in-out
                                            hover:shadow-xl hover:opacity-90
                                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 uppercase"
                                        onClick={handleAdd}
                                    >
                                        Añadir carrera
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full md:w-4/5">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
                                <div className="flex items-center">
                                    <Image
                                        src={info}
                                        alt="info"
                                        className="w-8 h-8 md:w-10 md:h-10 mr-2"
                                        style={{
                                            filter: "invert(83%) sepia(0%) saturate(0%) hue-rotate(180deg) brightness(100%) contrast(90%)"
                                        }}
                                    />
                                    <p className="text-gray-300 text-base md:text-lg font-semibold italic">
                                        {instructor
                                            ? "Haz clic en una carrera para ver la lista de deportistas inscritos."
                                            : !parent
                                                ? "Haz clic en una carrera para añadir los resultados."
                                                : "Haz clic en una carrera para inscribir a un deportista."
                                        }
                                    </p>
                                </div>
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
                                    { name: "Fecha", key: "fecha" },
                                    { name: "Lugar", key: "lugar" },
                                    { name: "Categoría", key: "categoria" },
                                    { name: "Modalidad", key: "modalidad" },
                                    { name: "Descripción", key: "descripcion" },
                                ]}
                                data={filteredData}
                                colWidths={[225, 250, 150, 150, 150, 300]}
                                onRowClick={(parent) ? handleSignUp : handleRowClick}
                                onEdit={scholarship ? undefined : handleEdit}
                                onDelete={scholarship ? undefined : handleDelete}
                                formatFecha={formatFecha}
                            />
                        </div>
                    </div>
                </>
            )}

            {/* Mostrar detalles de la carrera seleccionada */}
            {selectedRace && !scholarship && selectedRace.categoria !== "Escuela" && (
                <div>
                    <button
                        className="mb-4 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg
                            transition-all duration-200 ease-in-out
                            hover:shadow-xl hover:opacity-90
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 flex items-center gap-1"
                        onClick={() => {
                            setSelectedRace(null);
                            setSearchAthleteTerm("");
                            setFilteredAthletes([]);
                        }}
                    >
                        <Image src={back} alt="Volver" className="h-5 w-5" />
                        Volver
                    </button>
                    <h3 className="text-3xl font-extrabold mb-6 text-blue-400 text-center drop-shadow uppercase">
                        {selectedRace.nombre}
                    </h3>

                    {/* Contenedor responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full md:w-[70%] mx-auto">
                        {/* Columna izquierda: Lista de participantes */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 md:mb-0">
                            <h4 className="text-xl font-bold text-gray-300 mb-4">Participantes</h4>
                            {selectedRace && selectedRace.participantes && selectedRace.participantes.length > 0 ? (
                                <ul className="space-y-2 max-h-[60vh] overflow-y-auto">
                                    {selectedRace.participantes
                                        .sort((a, b) => a.posicion - b.posicion)
                                        .map((participante, index) => (
                                            <li
                                                key={index}
                                                className="flex flex-col md:flex-row md:justify-between md:items-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg gap-2"
                                            >
                                                <div className="flex gap-2 items-center">
                                                    <span className="font-bold">{participante.posicion}.</span>
                                                    <span>{participante.nombre} {participante.apellidos}</span>
                                                </div>
                                                <div className="flex flex-col md:flex-row md:items-center gap-2">
                                                    <span className="text-sm md:mr-4">Tiempo: {formatTiempo(participante.tiempo)}</span>
                                                    <button
                                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
                                                        onClick={() => handleDeleteParticipant(index)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 text-center">No hay participantes en esta carrera.</p>
                            )}
                        </div>

                        {/* Columna derecha: Barra de búsqueda y formulario */}
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            {!selectedAthlete && (
                                <>
                                    <h4 className="text-xl font-bold text-gray-300 mb-4">Buscar deportista</h4>
                                    <input
                                        type="text"
                                        placeholder="Buscar deportista..."
                                        value={searchAthleteTerm}
                                        onChange={handleSearchAthleteChange}
                                        onFocus={async () => {
                                            if (filteredAthletes.length === 0) {
                                                try {
                                                    const response = await fetch(`/api/runners?search=`);
                                                    const athletes = await response.json();
                                                    setFilteredAthletes(athletes);
                                                } catch (error) {
                                                    console.error("Error al cargar la lista completa de deportistas:", error);
                                                }
                                            }
                                        }}
                                        className="w-full border border-blue-400 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-500"
                                    />
                                    <ul className="mt-4 space-y-2 max-h-[40vh] overflow-y-auto">
                                        {Array.isArray(filteredAthletes) &&
                                            filteredAthletes
                                                .filter(
                                                    (athlete) =>
                                                        !selectedRace?.participantes.some(
                                                            (participant) => participant.participante_id === athlete.numero_licencia
                                                        )
                                                )
                                                .map((athlete) => (
                                                    <li
                                                        key={athlete.numero_licencia}
                                                        className="flex justify-between items-center bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-600"
                                                        onClick={() => handleSelectAthlete(athlete)}
                                                    >
                                                        {athlete.nombre} {athlete.apellidos}
                                                    </li>
                                                ))}
                                    </ul>
                                </>
                            )}

                            {selectedAthlete && (
                                <form onSubmit={handleAddAthlete} className="space-y-4 mt-6 px-0 md:px-8">
                                    <h4 className="text-xl font-bold text-gray-300 mb-4 uppercase">Añadir resultado</h4>
                                    <div>
                                        <input type="hidden" name="numero_licencia" value={selectedAthlete.numero_licencia} />
                                        <label className="block text-gray-400 mb-2">Nombre y apellidos</label>
                                        <input
                                            type="text"
                                            value={`${selectedAthlete.nombre} ${selectedAthlete.apellidos}`}
                                            disabled
                                            className="w-full border border-blue-400 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Tiempo</label>
                                        <input
                                            type="text"
                                            name="tiempo"
                                            placeholder="Tiempo (hh:mm:ss)"
                                            value={athleteForm.tiempo}
                                            onChange={handleAthleteFormChange}
                                            required
                                            className="w-full border border-blue-400 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Posición</label>
                                        <input
                                            type="number"
                                            name="posicion"
                                            placeholder="Posición"
                                            value={athleteForm.posicion}
                                            onChange={handleAthleteFormChange}
                                            required
                                            min="1"
                                            className="w-full border border-blue-400 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-end gap-4">
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg
                                                       transition-all duration-200 ease-in-out
                                                       hover:shadow-xl hover:opacity-90
                                                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                        >
                                            Añadir
                                        </button>
                                        <button
                                            type="button"
                                            className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg
                                                       transition-all duration-200 ease-in-out
                                                       hover:shadow-xl hover:opacity-90
                                                       focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                            onClick={handleCancelAddAthlete}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {selectedRace?.categoria === "Escuela" && !parent && (
                <div className="mt-8">
                    <button
                        className="mb-4 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg
                            transition-all duration-200 ease-in-out
                            hover:shadow-xl hover:opacity-90
                            focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 flex items-center gap-1"
                        onClick={() => {
                            setSelectedRace(null);
                            setInscritos([]);
                        }}
                    >
                        <Image src={back} alt="Volver" className="h-5 w-5" />
                        Volver
                    </button>
                    <div className="mb-6 flex items-center">
                        <div className="flex-1" />
                        <div className="flex-1 flex justify-center">
                            <h3 className="text-3xl font-bold text-blue-400 text-center drop-shadow uppercase">
                                Deportistas inscritos
                            </h3>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <button
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-lg font-semibold shadow-lg hover:scale-105 transition-all"
                                onClick={handleDownloadPDF}
                                type="button"
                            >
                                <Image src={download} alt="Descargar" className="h-5 w-5" />
                                Descargar lista
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mx-auto">
                        {inscritos.length <= 0 ? (
                            <p className="text-gray-400 text-center">
                                No hay deportistas inscritos en esta carrera
                            </p>
                        ) : (
                            <Table
                                columns={[
                                    { name: "Dorsal", key: "dorsal" },
                                    { name: "Nombre y Apellidos", key: "nombre_apellido" },
                                    {
                                        name: "Confirmado",
                                        key: "confirmado",
                                        renderCell: (row: any) => (
                                            <input
                                                type="checkbox"
                                                checked={row.confirmado === 1}
                                                onChange={async (e) => {
                                                    const nuevoValor = e.target.checked ? 1 : 0;
                                                    await fetch("/api/inscritos", {
                                                        method: "PUT",
                                                        headers: { "Content-Type": "application/json" },
                                                        body: JSON.stringify({
                                                            carrera_id: selectedRace?.id,
                                                            dorsal: row.dorsal,
                                                            confirmado: nuevoValor,
                                                        }),
                                                    });
                                                    setInscritos((prev) =>
                                                        prev.map((i) =>
                                                            i.dorsal === row.dorsal
                                                                ? { ...i, confirmado: nuevoValor }
                                                                : i
                                                        )
                                                    );
                                                }}
                                            />
                                        ),
                                    },
                                ]}
                                data={inscritos}
                                colWidths={[150, 300, 150]}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* Formulario flotante con animación */}
            {showForm && !scholarship && (
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
            {showSignUpForm && (
                <div className={`fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity ${closing ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-3xl shadow-2xl p-8 w-[95%] md:w-full max-w-xl relative border-2 border-blue-700 ${closing ? "animate-slide-down" : "animate-slide-up"}`}>
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-200 ease-in-out"
                            onClick={handleCloseSignUpForm}
                            aria-label="Cerrar"
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-bold mb-6 text-blue-400 text-center drop-shadow uppercase">
                            Inscripción carrera
                        </h3>
                        <form onSubmit={handleSubmitSignUp} className="space-y-4 text-white">
                            <input
                                type="hidden"
                                name="carrera_id"
                                value={selectedRace?.id ?? ""}
                            />
                            <input
                                type="text"
                                name="nombre_apellido"
                                placeholder="Nombre y Apellidos"
                                value={signUpForm.nombre_apellido || ""}
                                onChange={handleSignUpFormChange}
                                required
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                            <input
                                type="text"
                                name="dorsal"
                                placeholder="Dorsal"
                                value={signUpForm.dorsal || ""}
                                maxLength={4}
                                onChange={handleSignUpFormChange}
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
                                    Inscribir
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-lg font-semibold shadow-lg
                                               transition-all duration-200 ease-in-out
                                               hover:shadow-xl hover:opacity-90
                                               focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                                    onClick={handleCloseSignUpForm}
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