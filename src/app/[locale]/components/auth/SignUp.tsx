"use client";
import { authClient } from "@/lib/auth-client";
import { useState, useRef } from "react";
import alert from "@/app/media/error.svg";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [activationCode, setActivationCode] = useState('');
    const [role, setRole] = useState('');
    const [codeValidated, setCodeValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [closingError, setClosingError] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [requiredError, setRequiredError] = useState(false);
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsError, setTermsError] = useState(false);
    const termsRef = useRef<HTMLInputElement>(null);

    const [extraFields, setExtraFields] = useState({
        apellidos: '',
        dni: '',
        telefono: '',
        nacimiento: '',
        licencia: '',
        peso: '',
        altura: '',
        ftp: '',
        pulso: '',
    });

    const validateCode = async () => {
        setErrorMsg(null);
        setSuccess('');
        setLoading(true);
        try {
            const res = await fetch("/api/activate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: activationCode })
            });
            const data = await res.json();
            if (res.ok) {
                setRole(data.role);
                setCodeValidated(true);
                setSuccess("Código validado correctamente.");
            } else {
                setErrorMsg(data.error || "El código introducido no es válido o ya ha caducado.");
            }
        } catch {
            setErrorMsg("Error validando el código.");
        } finally {
            setLoading(false);
        }
    };

    const signUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);
        setSuccess('');
        setLoading(true);

        const requiredFields = [
            { key: "name", value: name },
            { key: "email", value: email },
            { key: "password", value: password },
            ...(role === "runner" || role === "coach"
                ? [
                    { key: "apellidos", value: extraFields.apellidos },
                    { key: "dni", value: extraFields.dni },
                    { key: "telefono", value: extraFields.telefono },
                    { key: "nacimiento", value: extraFields.nacimiento },
                ]
                : []),
            ...(role === "runner"
                ? [
                    { key: "licencia", value: extraFields.licencia },
                    { key: "peso", value: extraFields.peso },
                    { key: "altura", value: extraFields.altura },
                    { key: "ftp", value: extraFields.ftp },
                    { key: "pulso", value: extraFields.pulso },
                ]
                : []),
        ];
        const emptyFields = requiredFields.filter(f => !f.value.trim()).map(f => f.key);

        if (emptyFields.length > 0) {
            setInvalidFields(emptyFields);
            setRequiredError(true);
            setLoading(false);
            return;
        } else {
            setInvalidFields([]);
            setRequiredError(false);

            // Validar términos y condiciones
            if (!termsAccepted) {
                setTermsError(true);
                setLoading(false);
                setTimeout(() => {
                    termsRef.current?.focus();
                }, 100);
                return;
            } else {
                setTermsError(false);
            }
        }

        try {
            // 1. Registro de usuario
            await authClient.signUp.email({
                email,
                password,
                name,
            }, {
                onRequest: () => { },
                onSuccess: () => { },
                onError: (ctx) => { throw new Error(ctx.error.message); },
            });

            // 2. Login automático
            await authClient.signIn.email({
                email,
                password,
            }, {
                onRequest: () => { },
                onSuccess: () => { },
                onError: (ctx) => { throw new Error(ctx.error.message); },
            });

            // 3. Guardar datos extra en la BD
            if (role === "runner" || role === "coach") {
                const res = await fetch("/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        role,
                        ...extraFields,
                    }),
                });
                if (!res.ok) {
                    const data = await res.json();
                    setErrorMsg(data.error || "Error guardando los datos");
                    return;
                }
            }

            setSuccess("Registro completado. Redirigiendo...");
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => window.location.href = "/es/dashboard", 1200);
        } catch (err: any) {
            setErrorMsg(err.message || "Error en el registro");
        } finally {
            setLoading(false);
        }
    };

    const handleCloseError = () => {
        setClosingError(true);
        setTimeout(() => {
            setErrorMsg(null);
            setClosingError(false);
        }, 300);
    };

    // Función para formatear el teléfono
    function formatTelefono(value: string) {
        // Elimina todo lo que no sea dígito
        const digits = value.replace(/\D/g, "");
        if (digits.length !== 9) return digits;
        // Aplica el formato XXX XX XX XX
        return `${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`;
    }

    return (
        <>
            {/* Popup de error */}
            {errorMsg && (
                <div className={`fixed inset-0 flex items-center justify-center z-[110] ${closingError ? "animate-fade-out" : "animate-fade-in"}`}>
                    <div className={`bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border-4 border-red-500 relative ${closingError ? "animate-slide-down" : "animate-slide-up"}`}>
                        <div className="flex items-center justify-center mb-4 gap-3">
                            <Image
                                src={alert}
                                alt="Error"
                                className="w-10 h-10"
                                style={{
                                    filter: "invert(36%) sepia(99%) saturate(2000%) hue-rotate(340deg) brightness(90%) contrast(110%)"
                                }}
                            />
                            <h3 className="text-xl font-bold text-red-400 drop-shadow m-0">¡Error!</h3>
                        </div>
                        <p className="mb-4 text-gray-200">{errorMsg}</p>
                        <button
                            className="mt-2 px-5 py-2 bg-gradient-to-r from-red-700 to-red-500 text-gray-100 rounded-lg font-bold shadow transition duration-200 hover:filter hover:brightness-125"
                            onClick={handleCloseError}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <div className="flex items-center justify-center">
                <div className="w-full max-w-xl p-8 rounded-2xl shadow-2xl bg-gray-900/90 border border-blue-700 mb-5">
                    <h2 className="text-3xl font-bold text-center mb-8 text-blue-200 drop-shadow">Registro</h2>

                    {/* Validación de código de activación FUERA del formulario */}
                    {!codeValidated && (
                        <div>
                            <label className="block text-blue-200 font-semibold mb-1">Código de Activación</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={activationCode}
                                    onChange={(e) => setActivationCode(e.target.value)}
                                    autoComplete="off"
                                    className="flex-1 p-3 rounded-lg bg-gray-800 text-blue-100 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow"
                                    placeholder="Introduce tu código de activación"
                                    disabled={loading}
                                />
                                <button
                                    type="button"
                                    onClick={validateCode}
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow transition"
                                    disabled={loading || !activationCode}
                                >
                                    {loading ? "Validando..." : "Validar Código"}
                                </button>
                            </div>
                            {success && <div className="mt-4 text-green-400 text-center font-semibold">{success}</div>}
                        </div>
                    )}

                    {/* Formulario principal SOLO si el código es válido */}
                    {codeValidated && (
                        <form autoComplete="off" onSubmit={signUp} className="space-y-6">
                            {success && <div className="mb-4 text-green-400 text-center font-semibold">{success}</div>}
                            {requiredError && (
                                <div className="mb-4 text-red-400 text-left font-semibold">
                                    Todos los campos son obligatorios
                                </div>
                            )}
                            {termsError && (
                                <div className="mb-4 text-red-400 text-left font-semibold">
                                    Tienes que aceptar los términos y condiciones de uso
                                </div>
                            )}
                            <div>
                                <label className="block text-blue-200 font-semibold mb-1">
                                    Nombre <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    autoComplete="off"
                                    className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("name") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                    placeholder="Introduce tu nombre"
                                    disabled={loading}
                                />
                            </div>
                            {(role === "runner" || role === "coach") && (
                                <div>
                                    <label className="block text-blue-200 font-semibold mb-1">
                                        Apellidos <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={extraFields.apellidos}
                                        onChange={e => setExtraFields({ ...extraFields, apellidos: e.target.value })}
                                        autoComplete="off"
                                        className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("apellidos") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                        placeholder="Introduce tus apellidos"
                                        disabled={loading}
                                    />
                                </div>
                            )}
                            <div>
                                <label className="block text-blue-200 font-semibold mb-1">
                                    Correo electrónico <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    autoComplete="off"
                                    className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("email") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                    placeholder="Introduce tu correo"
                                    disabled={loading}
                                />
                            </div>
                            <div>
                                <label className="block text-blue-200 font-semibold mb-1">
                                    Contraseña <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                    className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("password") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                    placeholder="Introduce tu contraseña"
                                    disabled={loading}
                                />
                            </div>

                            {/* Campos según el rol */}
                            {(role === "runner" || role === "coach") && (
                                <>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            DNI <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={extraFields.dni}
                                            onChange={e => setExtraFields({ ...extraFields, dni: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("dni") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu DNI"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Teléfono <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formatTelefono(extraFields.telefono)}
                                            onChange={e => setExtraFields({ ...extraFields, telefono: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("telefono") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu teléfono"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Fecha de nacimiento <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            value={extraFields.nacimiento}
                                            onChange={e => setExtraFields({ ...extraFields, nacimiento: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("nacimiento") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            disabled={loading}
                                        />
                                    </div>
                                </>
                            )}

                            {role === "runner" && (
                                <>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Número de licencia <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={extraFields.licencia}
                                            onChange={e => setExtraFields({ ...extraFields, licencia: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("licencia") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu número de licencia"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Peso (kg) <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={extraFields.peso}
                                            onChange={e => setExtraFields({ ...extraFields, peso: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("peso") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu peso"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Altura (m) <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={extraFields.altura}
                                            onChange={e => setExtraFields({ ...extraFields, altura: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("altura") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu altura"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            FTP <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={extraFields.ftp}
                                            onChange={e => setExtraFields({ ...extraFields, ftp: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("ftp") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu FTP"
                                            disabled={loading}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-blue-200 font-semibold mb-1">
                                            Pulso <span className="text-red-400">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            value={extraFields.pulso}
                                            onChange={e => setExtraFields({ ...extraFields, pulso: e.target.value })}
                                            autoComplete="off"
                                            className={`w-full p-3 rounded-lg bg-gray-800 text-blue-100 border ${invalidFields.includes("pulso") ? "border-red-500" : "border-blue-700"} focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow`}
                                            placeholder="Introduce tu pulso"
                                            disabled={loading}
                                        />
                                    </div>
                                </>
                            )}

                            {/* Términos y condiciones */}
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className={`mr-2 rounded-lg border-gray-700 transition ${termsError ? "border-red-500 ring-2 ring-red-400" : ""}`}
                                    required={false}
                                    disabled={loading}
                                    checked={termsAccepted}
                                    onChange={e => {
                                        setTermsAccepted(e.target.checked);
                                        if (e.target.checked) setTermsError(false);
                                    }}
                                    ref={termsRef}
                                />
                                <label
                                    htmlFor="terms"
                                    className={`font-semibold ${termsError ? "text-red-400" : "text-blue-200"}`}
                                >
                                    Acepto los&nbsp;
                                    <Link href="/es/terms&use" target="_blank" className={`${termsError ? "text-red-600" : "text-blue-500"} hover:underline`}>
                                        Términos y condiciones de uso
                                    </Link>
                                </label>
                            </div>

                            {/* Botón de enviar */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold shadow transition"
                                    disabled={loading}
                                >
                                    {loading ? "Registrando..." : "Registrarse"}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}