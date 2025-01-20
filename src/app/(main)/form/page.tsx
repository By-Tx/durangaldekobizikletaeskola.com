"use client";
import { useState } from "react";
import Title from "@/app/(main)/components/Titles/Title";

export default function Page() {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: "",
        birthDate: "",
        address: "",
        city: "",
        school: "",
        guardianName: "",
        phone: "",
        email: "",
        message: "",
    });

    
    const [responseMessage, setResponseMessage] = useState("");

  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Enviar los datos al endpoint de la API
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        // const result = await response.json();

        
        if (response.ok) {
            setResponseMessage("Correo enviado correctamente.");
        } else {
            setResponseMessage("Hubo un error enviando el correo.");
        }
    };

    return (
        <section className="mt-52">
            <Title title="Izena eman" />

            <p className="mt-4 text-center text-lg text-gray-600 ">
                Izena emateko, bete beheko formularioa eta lehen baino lehen zurekin kontaktuan jarriko gara. Eskerrik asko!
                Dudaren bat badaukazu, telefonoz kontaktatu dezakezu:
            </p>
            <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-400 shadow-2xl rounded-lg p-8 text-black">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Izen abizena</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Umearen izena"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Jaiotze data</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Helbidea</label>
                    <input
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Zure helbidea"
                    />
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Herria</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Zure herria"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Ikasketa Zentroa</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder="Ikasketa Zentroaren izena"
                        />
                    </div>
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Aita Ama edo tutorearen Izen-abizenak</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            placeholder="Tutorearen izena eta abizenak"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Telefono Zenbakia</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="123456789"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Posta electronikoa</label>
                    <input
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="zure.emaila@example.com"
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-gray-700">Mezua</label>
                    <textarea
                        className="border-2 border-gray-300 rounded-lg p-3 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Zure mezua hemen idatzi"
                    ></textarea>
                </div>
                <div className="text-center mt-8">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Bidali
                    </button>
                </div>
            </form>
            {responseMessage && (
                <div className="mt-6 text-center text-lg text-gray-600">
                    {responseMessage}
                </div>
            )}
        </section>
    );
}
