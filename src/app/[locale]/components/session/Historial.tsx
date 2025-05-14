'use client';
import React, { useState } from "react";
import info from "@/app/media/info.svg";
import Image from "next/image";

interface Carrera {
    fecha: string;
    lugar: string;
    categoria: string;
    modalidad: string;
    tiempo: string;
    posicion: number;
    valoracion_deportista?: string;
    valoracion_entrenador?: string;
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

    return (
        <div className="max-w-6xl mx-auto mt-8 p-6 bg-white/45 shadow-lg rounded-lg text-gray-800">
            <h1 className="text-2xl font-bold mb-6 text-center">
                {rol === "runner"
                    ? "HISTORIAL DE CARRERAS"
                    : `HISTORIAL DE CARRERAS DE ${nombre} ${apellidos}`}
            </h1>
            <div className="flex items-center gap-2 mb-2">
                <Image
                    src={info}
                    height={25}
                    width={25}
                    alt="Información"
                    style={{
                        filter: "brightness(0.5) saturate(1.2)"
                    }}
                />
                <p className="m-0 text-customDarkBlueSession italic">Haz click en una carrera para ver o agregar comentarios.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow overflow-hidden">
                    <thead className="bg-gray-50">
                        <tr className="bg-customDarkBlueSession">
                            {["Fecha", "Lugar", "Categoría", "Modalidad", "Tiempo", "Posición"].map((col) => (
                                <th
                                    key={col}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                                >
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 cursor-pointer">
                        {localHistorial.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center py-4 text-gray-500">
                                    No hay carreras en el historial.
                                </td>
                            </tr>
                        ) : (
                            localHistorial.map((carrera, idx) => (
                                <tr
                                    key={idx}
                                    onClick={() => setSelectedIdx(idx)}
                                    className={selectedIdx === idx ? "bg-blue-100" : ""}
                                    style={{ transition: "background 0.2s" }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.fecha}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.lugar}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.categoria}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.modalidad}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.tiempo}h</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{carrera.posicion}º</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Valoraciones solo de la carrera seleccionada */}
            {selectedIdx !== null && localHistorial[selectedIdx] && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Valoraciones</h2>
                    <div className="mb-6">
                        <div className="font-semibold mb-1">
                            {localHistorial[selectedIdx].fecha} - {localHistorial[selectedIdx].lugar}
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
                                <div className="font-bold mb-1">
                                    {rol === "runner"
                                        ? "Tu comentario:"
                                        : "Comentario del deportista:"}
                                </div>
                                <div className="bg-gray-100 p-3 rounded mb-2">
                                    {localHistorial[selectedIdx].valoracion_deportista}
                                </div>
                                {/* Si el rol es coach, mostrar textarea para responder si no hay respuesta aún */}
                                {rol === "coach" && (!localHistorial[selectedIdx].valoracion_entrenador || localHistorial[selectedIdx].valoracion_entrenador === '' || localHistorial[selectedIdx].valoracion_entrenador === 'null') ? (
                                    <div className="mb-4">
                                        <div className="font-bold mb-1">Responder al deportista:</div>
                                        <textarea
                                            className="w-full p-2 border rounded mb-2"
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
                                        <div className="font-bold mb-1">Tu respuesta:</div>
                                        <div className="bg-green-100 p-3 rounded">
                                            {localHistorial[selectedIdx].valoracion_entrenador}
                                        </div>
                                    </>
                                )}
                            </>
                        ) : rol === "runner" ? (
                            <div className="mb-4">
                                <div className="font-bold mb-1">Escribe tu comentario:</div>
                                <textarea
                                    className="w-full p-2 border rounded mb-2"
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
                                <div className="font-bold mb-1">Respuesta del entrenador:</div>
                                <div className="bg-green-100 p-3 rounded">
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
    );
}