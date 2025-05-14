'use client'

import { useState } from 'react'
import Image from 'next/image';
import { API_URL } from "@/lib/config";
import { useEffect } from 'react';


export default function ClientForm() {
    // { role }: { role: string } 
    // VARIABLES

    let type = "Año"
    const [formData, setFormData] = useState({
        year: '',
        fileUpload: null as File | null,
    });

    // LOGIC 

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;


        try {
            console.log("Change :", name, value);
            setFormData(prev => ({ ...prev, [name]: value }));


        } catch (error) {
            console.error("Error in handleChange:", error);
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];

            if (file.size > 5 * 1024 * 1024) { // Check if the file exceeds 5MB
                alert("La imagen no se seleccionó porque supera el límite de 5MB.");
                return;
            }

            setFormData({
                ...formData,
                fileUpload: file,
            });
        }
    };





    async function fetchGalleryData({ year, mode, category, race }: { year?: string; mode?: string; category?: string; race?: string }) {
        console.log("Fetching data with:", { year, mode, category, race });

        // Create a request body by filtering out undefined values
        const requestBody: any = {};
        if (year) requestBody.year = year;
        if (mode) requestBody.mode = mode;
        if (category) requestBody.category = category;
        if (race) requestBody.race = race;
        requestBody.dir = "covers-v2"

        try {
            const response = await fetch(`${API_URL}/api/galleryv2`, {
                method: "POST",
                cache: "no-store",
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`Error al obtener datos: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Response Data:", responseData);

            return responseData.map((item: string) => item.slice(0, -1));
        } catch (error) {
            console.error("Fetching error:", error);
            return [];
        }
    }


    // currently not implemented, ignore this
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitting form data:", formData);
        const basePath = "/www/wwwroot/photos.txuli.com/duranguesa/covers-v2"
        let path = ""
        let imageName = ""
        let canCreateFolder = false
        if (formData.fileUpload) {
            canCreateFolder = true
        }
        if (type === "Año") {
            const existingYears = await fetchGalleryData({});
            if (!existingYears.includes(formData.year)) {
                console.log("album de ", type, ": ", formData.year, " no existe");
                canCreateFolder = true;
                path = formData.year
                imageName = formData.year
            }
            else {
                console.log("album de ", type, ": ", formData.year, " no se puede crear porque ya existe");
                canCreateFolder = false
            }

        }


        if (canCreateFolder) {
            const body = JSON.stringify({
                folder: `${basePath}${path}`
            });
            const formDataToSend = new FormData();
            formDataToSend.append("dir", basePath);
            formDataToSend.append("name", imageName);
            if (formData.fileUpload) {
                formDataToSend.append("file", formData.fileUpload);
            }

            try {
                // Create Folder
                console.log("Submitting form data:", { folder: `${basePath}${path}` });
                const response = await fetch(`${API_URL}/api/folderCreate`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: body,
                });
                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                } else {
                    console.error("Error response:", data);
                }

            } catch (error) {
                console.error("Error:", error);
            }
            try {
                // Upload image

                const response = await fetch(`${API_URL}/api/imageUpload`, {
                    method: "POST",
                    body: formDataToSend,
                });
                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                } else {
                    console.error("Error response:", data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }

    };

    return (
        <>
            <h1 className='mt-3 text-center w-full'>CREAR ALBUM</h1>
            <form onSubmit={handleSubmit} className="w-full mx-auto px-2 sm:px-4 md:px-24 lg:px-52 xl:px-[33%]">
                {/* AÑO */}
                <section className="flex my-3">

                    {/* textbox */}
                    <label htmlFor="year" className="block text-gray-200 m-2.5 text-left w-1/4">AÑO:</label>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="Escribe el año"
                        className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                    />

                </section>

                <section className="flex my-3">
                    <div className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <input
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.webp" // Only allow specific file types

                            className="hidden"
                        />
                        <label htmlFor="fileUpload" className="cursor-pointer text-center block">
                            Haz clic aquí para seleccionar imágen de portada
                        </label>
                        <section className='text-center '>
                            <p className="text-orange-400 italic text-sm ">Limite de 5MB</p>
                        </section>
                    </div>
                </section>
                <section className="text-center">
                    <p className="text-center text-gray-300 italic">Previsualización de imagen de portada de {type} :</p>

                    {formData.fileUpload && (
                        <div className="w-1/5 mx-auto mt-4">
                            <Image
                                src={URL.createObjectURL(formData.fileUpload)} // Preview image
                                alt="imagen"
                                width={500} // Adjust width and height as needed
                                height={300}
                                className="rounded-lg object-cover w-full h-auto"
                            />
                        </div>
                    )}
                </section>


                <div className="mx-auto my-3">
                    <button type="submit" className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Subir Portada de {type}
                    </button>
                </div>
            </form>
        </>
    )
}
