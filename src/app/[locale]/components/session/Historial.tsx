interface Carrera {
    fecha: string;
    tiempo: string;
    posicion: string;
    categoria: string;
    modalidad: string;
    lugar: string;
    valoracion_deportista?: string;
    valoracion_director?: string;
}

interface HistoryProps {
    historial: Carrera[];
}

export default function ClientHistory({ historial }: HistoryProps) {

    const tieneValoracion = historial.some(
        c => c.valoracion_deportista || c.valoracion_director
    );

    return (
        <>
            <div className="max-w-6xl mx-auto mt-8 p-6 bg-white/45 shadow-lg rounded-lg text-black">
                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">HISTORIAL DE CARRERAS DE </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiempo</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modalidad</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lugar</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {!historial || historial.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="text-center py-4 text-gray-500">No hay carreras en el historial.</td>
                                </tr>
                            ) : (
                                historial.map((carrera, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.fecha}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.tiempo}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.posicion}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.categoria}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.modalidad}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{carrera.lugar}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Valoraciones al final */}
                {tieneValoracion && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Valoraciones</h2>
                        {historial.map((carrera, idx) => (
                            (carrera.valoracion_deportista || carrera.valoracion_director) && (
                                <div key={idx} className="mb-6">
                                    <div className="font-semibold mb-1">
                                        {carrera.fecha} - {carrera.lugar}
                                    </div>
                                    {carrera.valoracion_deportista && (
                                        <>
                                            <div className="font-bold mb-1">Comentario del corredor:</div>
                                            <div className="bg-gray-100 p-3 rounded mb-2">{carrera.valoracion_deportista}</div>
                                        </>
                                    )}
                                    {carrera.valoracion_director && (
                                        <>
                                            <div className="font-bold mb-1">Respuesta del entrenador:</div>
                                            <div className="bg-green-100 p-3 rounded">{carrera.valoracion_director}</div>
                                        </>
                                    )}
                                </div>
                            )
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
