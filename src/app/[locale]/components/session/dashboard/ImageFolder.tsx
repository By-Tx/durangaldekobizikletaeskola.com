'use client'

import { useState } from 'react'
import Image from 'next/image';
import { API_URL } from "@/lib/config";
import { useEffect } from 'react';
import { useError } from "@/context/ErrorContext";


export default function ClientForm() {
    // { role }: { role: string } 
    // VARIABLES

    const [type, setType] = useState("Año");
    const [disabledDropdowns, setDisabledDropdowns] = useState({
        mode: true,
        category: true,
        race: true,
    });
    const { setError } = useError();

    const [formData, setFormData] = useState({
        year: '',
        mode: '',
        category: '',
        race: '',

        fileUpload: null as File | null,
    });
    const [yearOptions, setYearOptions] = useState<string[]>([]);
    const [modeOptions, setModeOptions] = useState<string[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
    // LOGIC 

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // disable logic
        if (name === "year" && value === "") {
            setDisabledDropdowns(prev => ({
                mode: true,
                category: true,
                race: true,
            }));
        } else if (name === "mode" && value === "") {
            setDisabledDropdowns(prev => ({
                mode: false,
                category: true,
                race: true,
            }));
        } else if (name === "category" && value === "") {
            setDisabledDropdowns(prev => ({
                mode: false,
                category: false,
                race: true,
            }));
        }

        if (name === "year" && value != "") {
            setDisabledDropdowns(prev => ({
                mode: false,
                category: true,
                race: true,
            }));
        } else if (name === "mode" && value != "") {
            setDisabledDropdowns(prev => ({
                mode: false,
                category: false,
                race: true,
            }));
        } else if (name === "category" && value != "") {
            setDisabledDropdowns(prev => ({
                mode: false,
                category: false,
                race: false,
            }));
        }
        // Data fetching logic
        setFormData(prev => ({ ...prev, [name]: value }));
        console.log("Change :", name, value);

        try {
            if (name === "year") {
                const yearNumber = parseInt(value, 10);
                if (isNaN(yearNumber) || yearNumber < 2000 || yearNumber > 2999) {
                    console.log("Invalid year. Please enter a year between 2000 and 2999.");
                    return;
                }

                const modes = await fetchGalleryData({ year: value });
                setModeOptions(modes);

                // Reset lower fields
                setFormData(prev => ({
                    ...prev,
                    mode: "",
                    category: "",
                    race: ""
                }));
                setCategoryOptions([]);

            } else if (name === "mode") {
                const categories = await fetchGalleryData({ year: formData.year, mode: value });
                setCategoryOptions(categories);

                // Reset lower fields
                setFormData(prev => ({
                    ...prev,
                    category: "",
                    race: ""
                }));

            }

        } catch (error) {
            console.error("Error in handleChange:", error);
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];

            if (file.size > 5 * 1024 * 1024) { // Check if the file exceeds 5MB
                setError("La imagen no se seleccionó porque supera el límite de 5MB.");
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
        requestBody.dir = "covers"

        try {
            const response = await fetch(`${API_URL}/api/galleryManager`, {
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
        console.log(" Submitting form data: Album de ", type, ": ", formData);
        const basePath = "/www/wwwroot/photos.txuli.com/duranguesa/"
        let path = ""
        let folderName = ""
        let imageName = ""
        let canCreateFolder = false
        let errorMsg = ""

        // IF theres a file, it can create a folder
        if (formData.fileUpload) {
            canCreateFolder = true
        }
        canCreateFolder = false;
        errorMsg = "Por favor, completa todos los campos y selecciona una imagen de portada.";

        if (type === "Año") { // Verification of AÑO
            if (!formData.year || !formData.fileUpload) {
                errorMsg = "Por favor, completa todos los campos y selecciona una imagen de portada.";
                canCreateFolder = false;
            } else {
                const existingYears = await fetchGalleryData({});
                if (!existingYears.includes(formData.year)) {
                    canCreateFolder = true;
                    path = "";
                    folderName = formData.year;
                    imageName = formData.year;
                } else {
                    errorMsg = `Album de ${type}: ${formData.year} no se puede crear porque ya existe.`;
                    canCreateFolder = false;
                }
            }
        } else if (type === "Modalidad") { // Verification of Modalidad
            if (!formData.year || !formData.mode || !formData.fileUpload) {
                errorMsg = "Por favor, completa todos los campos y selecciona una imagen de portada.";
                canCreateFolder = false;
            } else {
                const existingModes = await fetchGalleryData({ year: formData.year });
                if (!existingModes.includes(formData.mode)) {
                    canCreateFolder = true;
                    path = "/" + formData.year;
                    folderName = formData.mode;
                    imageName = formData.mode;
                } else {
                    errorMsg = `Album de ${type}: ${formData.mode} no se puede crear porque ya existe.`;
                    canCreateFolder = false;
                }
            }
        } else if (type === "Categoria") { // Verification of Categoria
            if (!formData.year || !formData.mode || !formData.category || !formData.fileUpload) {
                errorMsg = "Por favor, completa todos los campos y selecciona una imagen de portada.";
                canCreateFolder = false;
            } else {
                const existingCategories = await fetchGalleryData({
                    year: formData.year,
                    mode: formData.mode
                });
                if (!existingCategories.includes(formData.category)) {
                    canCreateFolder = true;
                    path = "/" + formData.year + "/" + formData.mode;
                    folderName = formData.category;
                    imageName = formData.category;
                } else {
                    errorMsg = `Album de ${type}: ${formData.category} no se puede crear porque ya existe.`;
                    canCreateFolder = false;
                }
            }
        } else if (type === "Carrera") { // Verification of Carrera
            if (!formData.year || !formData.mode || !formData.category || !formData.race || !formData.fileUpload) {
                errorMsg = "Por favor, completa todos los campos y selecciona una imagen de portada.";
                canCreateFolder = false;
            } else {
                const existingRaces = await fetchGalleryData({
                    year: formData.year,
                    mode: formData.mode,
                    category: formData.category
                });
                if (!existingRaces.includes(formData.race)) {
                    canCreateFolder = true;
                    path = "/" + formData.year + "/" + formData.mode + "/" + formData.category;
                    folderName = formData.race;
                    imageName = formData.race;
                } else {
                    errorMsg = `Album de ${type}: ${formData.race} no se puede crear porque ya existe.`;
                    canCreateFolder = false;
                }
            }
        } else {
            // Optional: handle unknown type
            canCreateFolder = false;
            errorMsg = "Tipo de álbum no reconocido.";
        }

        console.log("ARE YOU HERE ???????")
        console.log(canCreateFolder, "can create folder");

        if (canCreateFolder) {
            // Folder and Thumbnail IMG Creation 
            const bodyCovers = JSON.stringify({
                folder: `${basePath + "covers" + path}/${folderName}`
            });
            const formDataToSend = new FormData();
            formDataToSend.append("dir", basePath + "covers" + path);
            formDataToSend.append("name", imageName);
            if (formData.fileUpload) {
                formDataToSend.append("file", formData.fileUpload);
            }

            let imageUploadSuccess = false;
            let folderCreationSuccess = false;
            let folder2CreationSuccess = false;

            // API CALLS

            // CREATE FOLDER 1 (/covers)
            try {
                // Create Folder
                console.log("Submitting form data:", { folder: `${basePath + "gallery" + path}/${folderName}` });
                const response = await fetch(`${API_URL}/api/galleryManager/createFolder`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: bodyCovers,
                });
                const data = await response.json();
                if (response.ok) {
                    folderCreationSuccess = true;

                } else {
                    console.error("Error response:", data);
                }

            } catch (error) {
                console.error("Error:", error);
            }

            // Change Path for gallery
            const bodyGallery = JSON.stringify({
                folder: `${basePath + "gallery" + path}/${folderName}`
            });

            // CREATE FOLDER 2 (/gallery)

            try {
                // Create Folder
                console.log("Submitting form data:", { folder: `${basePath + "gallery/" + path}/${folderName}` });
                const response = await fetch(`${API_URL}/api/galleryManager/createFolder`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: bodyGallery,
                });
                const data = await response.json();
                if (response.ok) {
                    folder2CreationSuccess = true;
                } else {
                    console.error("Error response:", data);
                }

            } catch (error) {
                console.error("Error:", error);
            }

            // UPLOAD IMAGE to (/covers/...)
            try {
                // Upload image

                const response = await fetch(`${API_URL}/api/galleryManager/uploadImages`, {
                    method: "POST",
                    body: formDataToSend,
                });
                const data = await response.json();
                if (response.ok) {
                    imageUploadSuccess = true;
                } else {
                    console.error("Error response:", data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
            if (imageUploadSuccess && folderCreationSuccess && folder2CreationSuccess) {
                alert(`Álbum de ${type}: ${folderName} creado correctamente.`);
            } else {
                setError("Error interno al crear el álbum.");
            }


        } else {
            setError(errorMsg);
        }

    };

    function handleButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: string): void {
        event.preventDefault();
        setType(data);
        setFormData(prev => ({
            ...prev,
            year: '',
            mode: '',
            category: '',
            race: '',
        }));
        setDisabledDropdowns({
            mode: true,
            category: true,
            race: true,
        });
        console.log("Button clicked, type set to:", type);
    }


    useEffect(() => {
        if (type === "Modalidad" || type === "Categoria" || type === "Carrera") {
            const loadYears = async () => {
                const years = await fetchGalleryData({});
                setYearOptions(years);
            };
            loadYears();
        }
    }, [type]);

    return (
        <>
            <h2 className="text-3xl font-semibold text-white drop-shadow text-center mb-4 uppercase font-fredoka">Categorías de galeria</h2>

            <form onSubmit={handleSubmit} className="w-full mx-auto px-2 sm:px-4 md:px-24 lg:px-52 xl:px-[33%] font-fredoka">
                <p className='text-center'>Seleciona que apartado quieres crear</p> 
                <section className="flex justify-center mx-auto my-3 space-x-2">
                    <button
                        type="button"
                        onClick={(event) => handleButton(event, "Año")}
                        className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Año
                    </button>
                    <button
                        type="button"
                        onClick={(event) => handleButton(event, "Modalidad")}
                        className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Modalidad
                    </button>
                    <button
                        type="button"
                        onClick={(event) => handleButton(event, "Categoria")}
                        className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Categoria
                    </button>
                    <button
                        type="button"
                        onClick={(event) => handleButton(event, "Carrera")}
                        className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Carrera
                    </button>
                </section>
                {/* LOAD DROPDOWNS IF NECESARY */}
                {type === "Modalidad" || type === "Categoria" || type === "Carrera" ? (
                    <>                         {/* AÑO */}
                        <section className="flex my-3">

                            {/* dropdown */}
                            <label htmlFor="year" className="block text-gray-200 m-2.5 text-left  w-1/4">Año:</label>
                            <select
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full  border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            >
                                <option value="">Seleccionar</option>
                                {yearOptions.map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>

                        </section>
                    </>

                ) : null}
                {type === "Categoria" || type === "Carrera" ? (
                    <>                         {/* MODALIDAD */}
                        <section className="flex my-3">

                            {/* dropdown */}
                            <label htmlFor="mode" className="block text-gray-200 m-2.5 text-left  w-1/4">Modalidad:</label>
                            <select
                                id="mode"
                                name="mode"
                                value={formData.mode}
                                onChange={handleChange}
                                disabled={disabledDropdowns.mode}
                                className="w-full  border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            >
                                <option value="">Seleccionar</option>
                                {modeOptions.map((mode) => (
                                    <option key={mode} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>

                        </section>
                    </>

                ) : null}
                {type === "Carrera" ? (
                    <>
                        {/* Categoria */}
                        <section className="flex my-3">

                            {/* dropdown */}
                            <label htmlFor="category" className="block text-gray-200 m-2.5 text-left  w-1/4">Categoria:</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                disabled={disabledDropdowns.category}
                                className="w-full  border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            >
                                <option value="">Seleccionar</option>
                                {categoryOptions.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>

                        </section>
                    </>
                ) : null}
                {/* LOAD TEXTBOXES */}
                {type === "Año" ? (
                    <section className="flex my-3">
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
                ) : null}

                {type === "Modalidad" ? (
                    <section className="flex my-3">
                        <label htmlFor="mode" className="block text-gray-200 m-2.5 text-left w-1/4">Modalidad:</label>
                        <input
                            type="text"
                            id="mode"
                            name="mode"
                            value={formData.mode}
                            onChange={handleChange}
                            placeholder="Escribe la modalidad"
                            disabled={disabledDropdowns.mode}
                            className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                        />
                    </section>
                ) : null}

                {type === "Categoria" ? (
                    <section className="flex my-3">
                        <label htmlFor="category" className="block text-gray-200 m-2.5 text-left w-1/4">Categoría:</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Escribe la categoría"
                            disabled={disabledDropdowns.category}
                            className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                        />
                    </section>
                ) : null}

                {type === "Carrera" ? (
                    <section className="flex my-3">
                        <label htmlFor="race" className="block text-gray-200 m-2.5 text-left w-1/4">Carrera:</label>
                        <input
                            type="text"
                            id="race"
                            name="race"
                            value={formData.race}
                            onChange={handleChange}
                            placeholder="Escribe el nombre de la carrera"
                            disabled={disabledDropdowns.race}
                            className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                        />
                    </section>
                ) : null}


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
