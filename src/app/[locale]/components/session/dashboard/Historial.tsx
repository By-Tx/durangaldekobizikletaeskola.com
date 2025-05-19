'use client';
import React, { useState } from "react";
import info from "@/app/media/info.svg";
import Image from "next/image";
import Table from "@/app/[locale]/components/Table";

interface Carrera {
    nombre: string;
    fecha: string;
    lugar: string;
    categoria: string;
    modalidad: string;
    tiempo: string;
    posicion: number;
    valoracion_deportista?: string;
    valoracion_entrenador?: string;
    estado: number;
    evento_id: number;
    deportista_id: string;
}

interface HistoryProps {
    historial: Carrera[];
    nombre: string;
    apellidos: string;
    rol: string;
}

export default function ClientHistory({ historial, nombre, apellidos, rol }: HistoryProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
    const [comentario, setComentario] = useState<string>('');
    const [respuesta, setRespuesta] = useState<string>('');
    const [enviando, setEnviando] = useState<boolean>(false);
    const [enviandoRespuesta, setEnviandoRespuesta] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [successRespuesta, setSuccessRespuesta] = useState<string>('');
    const [localHistorial, setLocalHistorial] = useState(historial);

    // Envía el comentario del deportista
    const handleEnviarComentario = async () => {
        if (!comentario.trim() || selectedIdx === null) {
            setError('El comentario no puede estar vacío');
            return;
        }
        setEnviando(true);
        setError('');
        setSuccess('');
        try {
            const res = await fetch('/api/valoracion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    carrera: localHistorial[selectedIdx],
                    valoracion_deportista: comentario
                })
            });
            if (res.ok) {
                setSuccess('Tu entrenador ha recibido tu comentario, recibiras una respuesta a la mayor brevedad posible');
                setLocalHistorial(prev =>
                    prev.map((c, idx) =>
                        idx === selectedIdx
                            ? { ...c, valoracion_deportista: comentario }
                            : c
                    )
                );
                setComentario('');
            } else {
                setError('Error al enviar el comentario');
            }
        } catch {
            setError('Error al enviar el comentario');
        }
        setEnviando(false);
    };

    // Envía la respuesta del entrenador
    const handleEnviarRespuesta = async () => {
        if (!respuesta.trim() || selectedIdx === null) {
            setError('La respuesta no puede estar vacía');
            return;
        }
        setEnviandoRespuesta(true);
        setError('');
        setSuccessRespuesta('');
        try {
            const res = await fetch('/api/valoracion', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    carrera: localHistorial[selectedIdx],
                    valoracion_entrenador: respuesta
                })
            });
            if (res.ok) {
                setSuccessRespuesta('Se ha enviado la respuesta al deportista');
                setLocalHistorial(prev =>
                    prev.map((c, idx) =>
                        idx === selectedIdx
                            ? { ...c, valoracion_entrenador: respuesta }
                            : c
                    )
                );
                setRespuesta('');
            } else {
                setError('Error al enviar la respuesta');
            }
        } catch {
            setError('Error al enviar la respuesta');
        }
        setEnviandoRespuesta(false);
    };

    // Filtrar los datos según el término de búsqueda
    const filteredData = localHistorial.filter(carrera =>
        carrera.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.lugar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        carrera.modalidad.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Manejar cambios en el término de búsqueda
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="p-4 font-fredoka">
            <div className="mb-16">
                <h2 className="text-3xl font-semibold text-white drop-shadow text-center flex-1 md:absolute md:left-1/2 md:-translate-x-1/2 uppercase">
                    {rol === "runner"
                        ? "Historial de carreras"
                        : `Historial de carreras de ${nombre} ${apellidos}`}
                </h2>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-2/3">
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
                            <p className="text-gray-300 text-base md:text-lg font-semibold italic">Haz click en una carrera para ver o agregar comentarios.</p>
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
                            { name: "Tiempo", key: "tiempo" },
                            { name: "Posición", key: "posicion" },
                        ]}
                        data={filteredData}
                        colWidths={[250, 150, 150, 150, 150, 100, 100, 100]}
                        onRowClick={row => setSelectedIdx(localHistorial.indexOf(row))}
                        onState={setLocalHistorial}
                    />

                    {/* Valoraciones solo de la carrera seleccionada */}
                    {selectedIdx !== null && localHistorial[selectedIdx] && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold mb-4 uppercase">Valoraciones</h2>
                            <div className="mb-6">
                                <div className="font-semibold mb-1 italic">
                                    {localHistorial[selectedIdx].nombre} - {localHistorial[selectedIdx].fecha}
                                </div>
                                {/* Mensaje de éxito o error */}
                                {success && (
                                    <div className="text-green-500 mt-2 italic mb-2">{success}</div>
                                )}
                                {successRespuesta && (
                                    <div className="text-green-500 mt-2 italic mb-2">{successRespuesta}</div>
                                )}
                                {error && (
                                    <div className="text-orange-400 mt-2 italic mb-2">{error}</div>
                                )}
                                {/* Comentario del deportista */}
                                {(localHistorial[selectedIdx].valoracion_deportista && localHistorial[selectedIdx].valoracion_deportista !== '' && localHistorial[selectedIdx].valoracion_deportista !== 'null') ? (
                                    <>
                                        <div className="font-semibold mb-1">
                                            {rol === "runner"
                                                ? "Tu comentario:"
                                                : "Comentario del deportista:"}
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded mb-2 text-gray-700">
                                            {localHistorial[selectedIdx].valoracion_deportista}
                                        </div>
                                        {/* Si el rol es coach, mostrar textarea para responder si no hay respuesta aún */}
                                        {rol === "coach" && (!localHistorial[selectedIdx].valoracion_entrenador || localHistorial[selectedIdx].valoracion_entrenador === '' || localHistorial[selectedIdx].valoracion_entrenador === 'null') ? (
                                            <div className="mb-4">
                                                <div className="font-semibold mb-1">Responder al deportista:</div>
                                                <textarea
                                                    className="w-full p-2 border rounded mb-2 text-gray-700"
                                                    rows={3}
                                                    value={respuesta}
                                                    onChange={e => setRespuesta(e.target.value)}
                                                    disabled={enviandoRespuesta}
                                                    required
                                                />
                                                <button
                                                    className="bg-customDarkBlueSession text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200 hover:bg-blue-800"
                                                    onClick={handleEnviarRespuesta}
                                                    disabled={enviandoRespuesta || !respuesta.trim()}
                                                >
                                                    {enviandoRespuesta ? "Enviando..." : "Enviar respuesta"}
                                                </button>
                                            </div>
                                        ) : null}
                                        {/* Si ya hay respuesta del entrenador, mostrarla */}
                                        {rol === "coach" && localHistorial[selectedIdx].valoracion_entrenador && localHistorial[selectedIdx].valoracion_entrenador !== '' && localHistorial[selectedIdx].valoracion_entrenador !== 'null' && (
                                            <>
                                                <div className="font-semibold mb-1">Tu respuesta:</div>
                                                <div className="bg-green-100 p-3 rounded text-gray-700">
                                                    {localHistorial[selectedIdx].valoracion_entrenador}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : rol === "runner" ? (
                                    <div className="mb-4">
                                        <div className="font-semibold mb-1">Escribe tu comentario:</div>
                                        <textarea
                                            className="w-full p-2 border rounded mb-2 text-gray-700"
                                            rows={3}
                                            value={comentario}
                                            onChange={e => setComentario(e.target.value)}
                                            disabled={enviando}
                                            required
                                        />
                                        <button
                                            className="bg-customDarkBlueSession text-white px-4 py-2 rounded cursor-pointer transition-colors duration-200 hover:bg-blue-800"
                                            onClick={handleEnviarComentario}
                                            disabled={enviando || !comentario.trim()}
                                        >
                                            {enviando ? "Enviando..." : "Enviar"}
                                        </button>
                                    </div>
                                ) : null}
                                {/* Respuesta del entrenador solo si existe y el rol es runner */}
                                {(rol === "runner" || rol === "admin" || rol === "staff") && localHistorial[selectedIdx].valoracion_entrenador && (
                                    <>
                                        <div className="font-semibold mb-1">Respuesta del entrenador:</div>
                                        <div className="bg-green-100 p-3 rounded text-gray-700">
                                            {localHistorial[selectedIdx].valoracion_entrenador}
                                        </div>
                                    </>
                                )}
                                {/* Si no hay valoraciones y el rol es runner, ya se muestra el textfield arriba */}
                                {/* Si no hay valoraciones y el rol NO es runner */}
                                {!localHistorial[selectedIdx].valoracion_deportista &&
                                    !localHistorial[selectedIdx].valoracion_entrenador &&
                                    rol !== "runner" && (
                                        <div>No hay valoraciones para esta carrera.</div>
                                    )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}