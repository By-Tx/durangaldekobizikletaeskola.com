"use client";
import { useState } from "react";
import Title from "@/app/[locale]/components/mainPage/Titles/Title";
import { useTranslations } from "next-intl";
import { API_URL } from "@/lib/config";
export default function Page() {
    const t = useTranslations("formPage");

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

    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [termsError, setTermsError] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!acceptedTerms) {
            setTermsError(true);
            return;
        }

        setTermsError(false);

        const response = await fetch("/api/mails/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
            
        });

        if (response.ok) {
            setResponseMessage("Correo enviado correctamente.");
        } else {
            let errorMsg = "Error al enviar el correo.";
            try {
                const data = await response.json();
                if (data && data.message) {
                    errorMsg = data.message;
                }
            } catch {
                errorMsg = "Error al enviar el correo."
            }
            setResponseMessage(errorMsg);
        }
    };

    return (
        <section className="mb-20 font-fredoka">
            <Title title={t("title")} />

            <form
                onSubmit={handleSubmit}
                className="mt-10 max-w-3xl mx-auto bg-gradient-to-br bg-customblue shadow-2xl rounded-lg p-8 text-black"
            >
                <p className="my-4 text-center text-white font-fredoka text-xl">
                    {t("P")}
                </p>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-lg font-medium text-white">{t("name")}</label>
                        <input
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none"
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
                            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
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

                <div className="mt-6 flex items-center">
                    <input
                        type="checkbox"
                        className="mr-3"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                    />
                    <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                    <a href="https://durangaldekobizikletaeskola.com/es/terms&use" target="_blank" className="text-white underline">
                        {t("terms")}
                    </a>
                </div>

                {termsError && (
                    <p className="text-red-500 text-sm mt-2">
                       {t("termsError")}
                    </p>
                )}

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
