"use client";
import { useState } from "react";
import Title from "@/app/[locale]/(main)/components/Titles/Title";
import { useTranslations } from "next-intl";
export default function Page() {
    const t = useTranslations("formPage");
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
        <section className=" mb-20">
            <Title title={t("title")} />

            <p className="mt-4 text-center text-lg text-white ">
                {t("P")}
            </p>
            <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto bg-gradient-to-br bg-customblue shadow-2xl rounded-lg p-8 text-black">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-white">{t("name")}</label>
                        <input
                            className="border-2 border-gray-300   rounded-lg p-3 w-full focus:outline-none  "
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t("namePlaceholder")}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">{t("birth")}</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-white">{t("direction")}</label>
                    <input
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder={t("directionPlaceholder")}
                    />
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-white">{t("city")}</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder={t("cityPlaceholder")}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">{t("school")}</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            placeholder={t("schoolPlaceholder")}
                        />
                    </div>
                </div>
                <div className="grid gap-6 mt-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-white">{t("parents")}</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            name="guardianName"
                            value={formData.guardianName}
                            onChange={handleChange}
                            placeholder={t("parentsPlaceholder")}
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium text-white">{t("phone")}</label>
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
                    <label className="block text-lg font-medium text-white">{t("mail")}</label>
                    <input
                        className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("mailPlaceholder")}
                    />
                </div>
                <div className="mt-6">
                    <label className="block text-lg font-medium text-white">{t("message")}</label>
                    <textarea
                        className="border-2 border-gray-300 rounded-lg p-3 w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("messagePlaceholder")}
                    ></textarea>
                </div>
                <div className="text-center mt-8">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold transition transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {t("button")}
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
