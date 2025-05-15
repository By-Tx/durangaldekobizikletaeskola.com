'use client'

import { useState } from 'react'
import Image from 'next/image';
import { API_URL } from "@/lib/config";
import { useEffect } from 'react';


export default function ClientForm() {
    // { role }: { role: string } 
    // VARIABLES

    const [disabledDropdowns, setDisabledDropdowns] = useState({
        mode: true,
        category: true,
        race: true,
    });

    type FormFields = {
        year: string;
        yearText?: string;
        mode: string;
        modeText?: string;
        category: string;
        categoryText?: string;
        race: string;
        raceText?: string;
        isNewfolder: boolean;
        fileUpload?: FileList | null;
    };

    const [formData, setFormData] = useState<FormFields>({
        year: "",
        mode: "",
        category: "",
        race: "",
        isNewfolder: false,
        fileUpload: null,
    });

    const [yearOptions, setYearOptions] = useState<string[]>([]);
    const [modeOptions, setModeOptions] = useState<string[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
    const [raceOptions, setRaceOptions] = useState<string[]>([]);

    // LOGIC 

    useEffect(() => {
        const loadYears = async () => {
            const years = await fetchGalleryData({});
            setYearOptions(years);
        };
        loadYears();
    }, []);


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;



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

        setFormData(prev => ({ ...prev, [name]: value }));


        try {
            if (name === "year" || name === "yearText") {
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
                setRaceOptions([]);

            } else if (name === "mode") {
                const categories = await fetchGalleryData({ year: formData.year, mode: value });
                setCategoryOptions(categories);

                // Reset lower fields
                setFormData(prev => ({
                    ...prev,
                    category: "",
                    race: ""
                }));
                setRaceOptions([]);

            } else if (name === "category") {
                const races = await fetchGalleryData({
                    year: formData.year,
                    mode: formData.mode,
                    category: value
                });
                setRaceOptions(races);

                // Reset only race
                setFormData(prev => ({
                    ...prev,
                    race: ""
                }));

            }
        } catch (error) {
            console.error("Error in handleChange:", error);
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            // Convert the FileList to an array, filter files larger than 5MB, and limit the selection to 30 files
            const newFiles = Array.from(files)
                .filter(file => file.size <= 5 * 1024 * 1024) // Filter files <= 5MB
                .slice(0, 30);

            if (newFiles.length < files.length) {
                alert("Algunas imágenes no se seleccionaron porque superan el límite de 5MB.");
            }

            setFormData({
                ...formData,
                fileUpload: (() => {
                    const dataTransfer = new DataTransfer();
                    newFiles.forEach(file => dataTransfer.items.add(file));
                    return dataTransfer.files;
                })(),
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
        requestBody.dir = "gallery"

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



        const parsedData = {
            year: formData.yearText || formData.year,
            mode: formData.modeText || formData.mode,
            category: formData.categoryText || formData.category,
            race: formData.raceText || formData.race,
            isNewfolder: formData.isNewfolder,
        };
        if (!parsedData.year || !parsedData.mode || !parsedData.category || !parsedData.race || !formData.fileUpload) {
            alert("Por favor, rellene todos los datos antes de clickar subir.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('dir', `/www/wwwroot/photos.txuli.com/duranguesa/gallery/${parsedData.year}/${parsedData.mode}/${parsedData.category}/${parsedData.race}`);
        if (formData.fileUpload) {
            Array.from(formData.fileUpload).forEach((file, index) => {
                formDataToSend.append('file', file, file.name);
            });
        }

        try {
            const response = await fetch(`${API_URL}/api/imageUpload`, {
                method: "POST",
                body: formDataToSend,
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <h1 className='mt-3 text-center w-full'>SUBIR IMAGENES</h1>
            <form onSubmit={handleSubmit} className="w-full mx-auto px-2 sm:px-4 md:px-24 lg:px-52 xl:px-[28%]">
                {/* AÑO */}
                <section className="flex my-3">

                    {/* dropdown */}
                        <label htmlFor="year" className="block text-gray-200 m-2.5 text-left  w-1/4">AÑO:</label>
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


                {/* mode */}
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

                {/* category */}
                <section className="flex my-3">

                    {/* dropdown */}
                    
                        <label htmlFor="category" className="block text-gray-200 m-2.5 text-left  w-1/4">Categoría:</label>
                    
                   
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

                {/* race */}
                <section className="flex my-3">


                    {/* dropdown */}
                    <label htmlFor="race" className="block text-gray-200 m-2.5 text-left  w-1/4">Carrera:</label>
                    <select
                        id="race"
                        name="race"
                        value={formData.race}
                        onChange={handleChange}
                        disabled={disabledDropdowns.race}
                        className="w-full h-auto border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                    >
                        <option value="">Seleccionar</option>
                        {raceOptions.map((race) => (
                            <option key={race} value={race}>
                                {race}
                            </option>
                        ))}
                    </select>

                </section>

                <section className='flex my-3'>
                    <p className="text-orange-400 italic text-sm ">* si deseas crear una nueva Carrera deberas dejar el desplegable sin selecionar</p>
                </section>

                <section className="flex my-3">
                    <div className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <input
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                            onChange={handleFileChange}
                            multiple
                            accept=".jpg,.jpeg,.png,.webp" // Only allow specific file types

                            className="hidden"
                        />
                        <label htmlFor="fileUpload" className="cursor-pointer text-center block">
                            Haz clic aquí para seleccionar imagenes
                        </label>
                        <section className='text-center '>
                            <p className="text-orange-400 italic text-sm ">hay un limite de 30 imagenes de 5MB por cada subida</p>
                        </section>
                    </div>
                </section>
                <section>
                    <p className="text-center text-gray-300 italic">Previsualización de imágenes seleccionadas:</p>
                    <div className="grid grid-cols-5 gap-4 mt-4">

                        {formData.fileUpload && Array.from(formData.fileUpload).map((file, index) => (
                            <div key={index} className="relative w-26 h-20">
                                <Image
                                    src={URL.createObjectURL(file)} // This will generate a URL for the preview
                                    alt="imagen"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mx-auto my-3">
                    <button type="submit" className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Subir Imágenes
                    </button>
                </div>
            </form>
        </>
    )
}
