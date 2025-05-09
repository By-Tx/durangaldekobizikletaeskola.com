'use client'

import { useState } from 'react'
import Image from 'next/image';



export default function ClientForm({ role }: { role: string }) {
    role = "admin"
    const [formData, setFormData] = useState({
        //data of the cover
        ano: new Date().getFullYear().toString(),
        modalidad: "",
        categoria: "",
        carrera: "",
        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // const API_URL =
        //   process.env.NODE_ENV === "development"
        //     ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
        //     : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;
        // try {
        //   const response = await fetch(`${API_URL}/api/content`, {
        //     method: "POST",
        //     cache: "no-store",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData),
        //   });
        //   const data = await response.json();
        //   if (response.ok) {
        //     alert(data.message);
        //   }
        // } catch (error) {
        //   console.log("Error:", error);
        // }
    };

    const modalidad_array = [
        { value: "data1", label: "Data 1" },
        { value: "data2", label: "Data 2" },
        { value: "data3", label: "Data 3" },
    ];
    const categoria_array = [
        { value: "data1", label: "Data 1" },
        { value: "data2", label: "Data 2" },
        { value: "data3", label: "Data 3" },
    ];
    const carrera_array = [
        { value: "data1", label: "Data 1" },
        { value: "data2", label: "Data 2" },
        { value: "data3", label: "Data 3" },
    ];
    return (
        <>
            <h1 className='mt-3 text-center w-full'>SUBIR IMAGENES</h1>
            <form onSubmit={handleSubmit} className="w-full mx-auto px-2 sm:px-4 md:px-24 lg:px-52 xl:px-[28%]">
                {/* AÑO */}
                <section className="flex my-3">
                    <div className=' w-1/4'>
                        <label htmlFor="ano" className="block text-gray-200 m-2.5 text-left  w-1/4">Año:</label>
                    </div>
                    <div className=' w-3/4'>
                        <input
                            type="text"
                            id="ano"
                            name="ano"
                            value={formData.ano}
                            onChange={handleChange}
                            className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700" />

                    </div>
                </section>

                {/* modalidad */}
                <section className="flex my-3">
                    {role === "admin" && (
                        <>
                            {/* dropdown */}
                            <label htmlFor="modalidad" className="block text-gray-200 m-2.5 text-left  w-1/4">Modalidad:</label>
                            <select
                                id="modalidad"
                                name="modalidad"
                                value={formData.modalidad}
                                onChange={handleChange}
                                className="w-full h-auto border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            >
                                <option value="">Seleccionar</option>
                                {modalidad_array.map((modalidad_array) => (
                                    <option key={modalidad_array.value} value={modalidad_array.value}>
                                        {modalidad_array.label}
                                    </option>
                                ))}
                            </select>

                            {/* textbox */}
                            <label htmlFor="modalidadText" className="block text-gray-200 m-2.5 text-left"> o </label>
                            <input
                                type="text"
                                id="modalidadText"
                                name="modalidadText"
                                placeholder="Escribe aquí"
                                onBlur={(e) => {
                                    if (!e.target.value.trim()) {
                                        setFormData({
                                            ...formData,
                                            modalidad: formData.modalidad || modalidad_array[0]?.value || "",
                                        });
                                    } else {
                                        setFormData({
                                            ...formData,
                                            modalidad: e.target.value,
                                        });
                                    }
                                }}
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                        </>
                    )}

                    {role === "staff" && (
                        <>
                            {/* dropdown */}
                            <div className='w-1/2'>
                                <label htmlFor="modalidad" className="block text-gray-200 m-2.5 text-left  w-1/4">Modalidad:</label>
                            </div>
                            <div className='w-1/2'>
                                <select
                                    id="modalidad"
                                    name="modalidad"
                                    value={formData.modalidad}
                                    onChange={handleChange}
                                    className="w-full  border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                                >
                                    <option value="">Seleccionar</option>
                                    {modalidad_array.map((modalidad_array) => (
                                        <option key={modalidad_array.value} value={modalidad_array.value}>
                                            {modalidad_array.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}

                </section>

                {/* categoria */}
                <section className="flex my-3">
                    {role === "admin" && (
                        <>
                            {/* dropdown */}
                            <label htmlFor="categoria" className="block text-gray-200 m-2.5 text-left  w-1/4">Categoría:</label>
                            <select
                                id="categoria"
                                name="categoria"
                                value={formData.categoria}
                                onChange={handleChange}
                                className="w-full h-auto border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            >
                                <option value="">Seleccionar</option>
                                {categoria_array.map((categoria_array) => (
                                    <option key={categoria_array.value} value={categoria_array.value}>
                                        {categoria_array.label}
                                    </option>
                                ))}
                            </select>

                            {/* textbox */}
                            <label htmlFor="categoriaText" className="block text-gray-200 m-2.5 text-left"> o </label>
                            <input
                                type="text"
                                id="categoriaText"
                                name="categoriaText"
                                placeholder="Escribe aquí"
                                onBlur={(e) => {
                                    if (!e.target.value.trim()) {
                                        setFormData({
                                            ...formData,
                                            categoria: formData.categoria || categoria_array[0]?.value || "",
                                        });
                                    } else {
                                        setFormData({
                                            ...formData,
                                            categoria: e.target.value,
                                        });
                                    }
                                }}
                                className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                            />
                        </>
                    )}

                    {role === "staff" && (
                        <>
                            {/* dropdown */}
                            <div className='w-1/2'>
                                <label htmlFor="categoria" className="block text-gray-200 m-2.5 text-left  w-1/4">Categoría:</label>
                            </div>
                            <div className='w-1/2'>
                                <select
                                    id="categoria"
                                    name="categoria"
                                    value={formData.categoria}
                                    onChange={handleChange}
                                    className="w-full  border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                                >
                                    <option value="">Seleccionar</option>
                                    {categoria_array.map((categoria_array) => (
                                        <option key={categoria_array.value} value={categoria_array.value}>
                                            {categoria_array.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )}

                </section>

                {/* carrera */}
                <section className="flex my-3">


                    {/* dropdown */}
                    <label htmlFor="carrera" className="block text-gray-200 m-2.5 text-left  w-1/4">Carrera:</label>
                    <select
                        id="carrera"
                        name="carrera"
                        value={formData.carrera}
                        onChange={handleChange}
                        className="w-full h-auto border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                    >
                        <option value="">Seleccionar</option>
                        {carrera_array.map((carrera_array) => (
                            <option key={carrera_array.value} value={carrera_array.value}>
                                {carrera_array.label}
                            </option>
                        ))}
                    </select>

                    {/* textbox */}
                    <label htmlFor="carreraText" className="block text-gray-200 m-2.5 text-left"> o </label>
                    <input
                        type="text"
                        id="carreraText"
                        name="carreraText"
                        placeholder="Escribe aquí"
                        onBlur={(e) => {
                            if (!e.target.value.trim()) {
                                setFormData({
                                    ...formData,
                                    carrera: formData.carrera || carrera_array[0]?.value || "",
                                });
                            } else {
                                setFormData({
                                    ...formData,
                                    carrera: e.target.value,
                                });
                            }
                        }}
                        className="w-full border border-blue-700 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder-gray-400 shadow-lg hover:border-blue-400 hover:bg-gray-700"
                    />



                </section>
                {role === "admin" && (
                    <section className='flex  my-3'>
                        <p className="text-orange-400 italic text-sm ">* si deseas crear una nueva Modalidad /Categoría/Carrera deberas dejar el desplegable sin selecionar</p>
                    </section>
                )}
                {role === "staff" && (
                    <section className='flex my-3'>
                        <p className="text-orange-400 italic text-sm ">* si deseas crear una nueva Carrera deberas dejar el desplegable sin selecionar</p>
                    </section>
                )}
                <section className="flex my-3">
                    <div className="w-full py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <input
                            type="file"
                            id="fileUpload"
                            name="fileUpload"
                            multiple
                            accept=".jpg,.jpeg,.png,.webp" // Only allow specific file types
                            onChange={(e) => {
                                const files = e.target.files;
                                if (files) {
                                    console.log("Archivos seleccionados:", Array.from(files).map(file => file.name));
                                }
                            }}
                            className="hidden"
                        />
                        <label htmlFor="fileUpload" className="cursor-pointer text-center block">
                            Haz clic aquí para seleccionar imagenes
                        </label>
                        <section className='text-center '>
                        <p className="text-orange-400 italic text-sm ">hay un limite de 30 imagenes por cada subida</p>
                    </section>
                    </div>
                </section>
                <section>
                    <p className="text-center text-gray-300 italic">Previsualización de imágenes seleccionadas:</p>
                        <div className="grid grid-cols-5 gap-4 mt-4">
                            {Array.from({ length: 30 }).map((_, index) => (
                                <div key={index} className="relative w-26 h-20">
                                    <Image
                                        src='https://photos.txuli.com/duranguesa/fototemporal.png'
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
