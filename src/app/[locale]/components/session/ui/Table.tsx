import React, { useRef } from "react";
import Image from "next/image";
import comment from "@/app/media/session/comment.svg";
import awaiting from "@/app/media/session/awaiting.svg";
import done from "@/app/media/session/done.svg";

type TableColumn = {
    name: string;
    key: string;
    renderCell?: (row: any) => React.ReactNode;
};

type TableProps = {
    columns: TableColumn[];
    data: any[];
    colWidths?: number[];
    onRowClick?: (row: any) => void;
    onEdit?: (row: any) => void;
    onDelete?: (id: any) => void;
    onHistorial?: (row: any) => void;
    onState?: (row: any) => void;
    onCopy?: (row: any) => void;
    formatFecha?: (fecha: any) => string;
    translateRole?: (role: string) => string;
};

const Table: React.FC<TableProps> = ({
    columns,
    data,
    colWidths = [],
    onRowClick,
    onEdit,
    onDelete,
    onHistorial,
    onState,
    onCopy,
    formatFecha = f => f,
    translateRole = r => r,
}) => {
    const firstRowRefs = useRef<(HTMLTableCellElement | null)[]>([]);
    const showActions = !!onEdit || !!onDelete;
    const showHistorial = !!onHistorial;
    const showState = !!onState;
    const showCopy = !!onCopy;

    return (
        <div className="rounded-2xl shadow-xl backdrop-blur-md bg-white/10 border border-blue-400 pb-2 overflow-hidden">
            <div className="overflow-x-auto">
                {/* Cabecera fija escritorio */}
                <table className="min-w-full table-auto border-collapse hidden md:table">
                    <colgroup>
                        {colWidths.map((w, i) => (
                            <col key={i} style={{ width: w ? `${w}px` : undefined }} />
                        ))}
                    </colgroup>
                    <thead className="bg-gray-700 text-blue-100 uppercase">
                        <tr>
                            {columns.map((col, i) => (
                                <th
                                    key={i}
                                    className={`px-2 md:px-4 py-3 font-semibold ${i === 0 ? "rounded-tl-2xl" : ""}`}
                                >
                                    {col.name}
                                </th>
                            ))}
                            {showActions || showHistorial || showCopy ? (
                                <>
                                    <th className="px-2 md:px-4 py-3 font-semibold">Acciones</th>
                                    <th className="w-3 rounded-tr-2xl font-semibold"></th>
                                </>
                            ) : null}
                            {showState && (
                                <>
                                    <th className="px-2 md:px-4 py-3 font-semibold">Estado</th>
                                    <th className="w-3 rounded-tr-2xl font-semibold"></th>
                                </>
                            )}
                        </tr>
                    </thead>
                </table>

                {/* Body escritorio */}
                <div className="hidden md:block max-h-[65vh] overflow-y-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <colgroup>
                            {colWidths.map((w, i) => (
                                <col key={i} style={{ width: w ? `${w}px` : undefined }} />
                            ))}
                        </colgroup>
                        <tbody>
                            {data.map((row, rowIdx) => (
                                <tr
                                    key={row.id ?? row.numero_licencia ?? row.evento_id ?? row.dorsal}
                                    className="hover:bg-blue-900/20 transition cursor-pointer border-t border-blue-900/30"
                                    onClick={() => onRowClick?.(row)}
                                >
                                    {columns.map((col, i) => (
                                        <td
                                            key={i}
                                            className="min-w-[100px] px-2 md:px-4 py-2 text-center"
                                            ref={el => {
                                                if (rowIdx === 0) firstRowRefs.current[i] = el;
                                            }}
                                        >
                                            {typeof col.renderCell === "function"
                                                ? col.renderCell(row)
                                                : col.key === "role"
                                                    ? translateRole(row[col.key])
                                                    : (col.key === "fecha" || col.key === "fecha_nacimiento" || col.key === "expires_at")
                                                        ? formatFecha(row[col.key])
                                                        : (row[col.key] !== null && row[col.key] !== undefined
                                                            ? row[col.key].toString().replace("_", "-")
                                                            : "")}
                                        </td>
                                    ))}
                                    {showActions && (
                                        <>
                                            <td className="px-2 md:px-4 py-2">
                                                <div className="flex flex-col md:flex-row justify-center gap-2 items-center">
                                                    {onHistorial && row.numero_licencia && (
                                                        <Image
                                                            src="/media/dashboard/historial.svg"
                                                            alt="Historial"
                                                            width={30}
                                                            height={30}
                                                            className="cursor-pointer invert hover:scale-110 transition-transform duration-200"
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                window.location.href = `/es/historial?numero_licencia=${row.numero_licencia}`;
                                                            }}
                                                        />
                                                    )}
                                                    {onCopy && row.id && (
                                                        <Image
                                                            src="/media/dashboard/copiar.svg"
                                                            alt="Copiar"
                                                            width={30}
                                                            height={30}
                                                            className="cursor-pointer hover:scale-110 transition-transform duration-200"
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                onCopy(row);
                                                            }}
                                                        />
                                                    )}
                                                    {onEdit && (
                                                        <button
                                                            className="px-2 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold w-full md:w-auto"
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                onEdit(row);
                                                            }}
                                                        >
                                                            Editar
                                                        </button>
                                                    )}
                                                    {onDelete && (
                                                        <button
                                                            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold w-full md:w-auto"
                                                            onClick={e => {
                                                                e.stopPropagation();
                                                                onDelete(row.id ?? row.numero_licencia ?? row.evento_id);
                                                            }}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="w-3"></td>
                                        </>
                                    )}
                                    {showState && (
                                        <>
                                            {row.estado === 3 ? (
                                                <td className="px-2 md:px-4 py-2 text-center">
                                                    <div className="flex justify-center">
                                                        <Image
                                                            src={done}
                                                            alt="Completado"
                                                            width={30}
                                                            height={30}
                                                            title="Carrera comentada"
                                                        />
                                                    </div>
                                                </td>
                                            ) : row.estado === 2 ? (
                                                <td className="px-2 md:px-4 py-2 text-center">
                                                    <div className="flex justify-center">
                                                        <Image
                                                            src={awaiting}
                                                            alt="Pendiente"
                                                            width={30}
                                                            height={30}
                                                            title="Pendiente de respuesta"
                                                        />
                                                    </div>
                                                </td>
                                            ) : (
                                                <td className="px-2 md:px-4 py-2 text-center">
                                                    <div className="flex justify-center">
                                                        <Image
                                                            src={comment}
                                                            alt="Comentar"
                                                            width={30}
                                                            height={30}
                                                            title="Pendiente de añadir comentario"
                                                        />
                                                    </div>
                                                </td>
                                            )}
                                            <td className="w-3"></td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Responsive móvil */}
                <table className="min-w-full table-auto border-collapse md:hidden">
                    <colgroup>
                        {colWidths.map((w, i) => (
                            <col key={i} style={{ width: w ? `${w}px` : undefined }} />
                        ))}
                    </colgroup>
                    <tbody>
                        {data.map((row) => (
                            <tr
                                key={row.id ?? row.numero_licencia ?? row.evento_id ?? row.dorsal}
                                className="hover:bg-blue-900/20 transition cursor-pointer border-t border-blue-900/30"
                                onClick={() => onRowClick?.(row)}
                            >
                                <td colSpan={columns.length + (showActions ? 2 : 0)} className="px-4 py-4">
                                    <div className="flex flex-col gap-2">
                                        {columns.map((col, i) => (
                                            <div key={i}>
                                                <span className="font-bold text-blue-300">
                                                    {col.name}:{' '}
                                                </span>
                                                <span>
                                                    {col.key === "role"
                                                        ? translateRole(row[col.key])
                                                        : (col.key === "fecha" || col.key === "fecha_nacimiento" || col.key === "expires_at")
                                                            ? formatFecha(row[col.key])
                                                            : (row[col.key] !== null && row[col.key] !== undefined
                                                                ? row[col.key].toString().replace("_", "-")
                                                                : "")}
                                                </span>
                                            </div>
                                        ))}
                                        {showActions && (
                                            <div className="flex gap-2 mt-2">
                                                {onHistorial && row.numero_licencia && (
                                                    <Image
                                                        src="/media/dashboard/historial.svg"
                                                        alt="Historial"
                                                        width={30}
                                                        height={30}
                                                        className="cursor-pointer invert hover:scale-110 transition-transform duration-200"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            window.location.href = `/es/historial?numero_licencia=${row.numero_licencia}`;
                                                        }}
                                                    />
                                                )}
                                                {onEdit && (
                                                    <button
                                                        className="px-2 py-1 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 transition font-semibold w-full"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            onEdit(row);
                                                        }}
                                                    >
                                                        Editar
                                                    </button>
                                                )}
                                                {onDelete && (
                                                    <button
                                                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold w-full"
                                                        onClick={e => {
                                                            e.stopPropagation();
                                                            onDelete(row.id);
                                                        }}
                                                    >
                                                        Eliminar
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
