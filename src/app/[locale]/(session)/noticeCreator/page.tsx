'use client'

import { useState } from 'react'



export default function Page() {
  const [formData, setFormData] = useState({
    href: '',
    imageSrc: '',
    altKey: '',
    date: '',
    titleKey: '',
    categoryKey: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    altKeyEus: '',
    titleKeyEus: '',
    categoryKeyEus: '',
    p1Eus: '',
    p2Eus: '',
    p3Eus: '',
    p4Eus: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;
    try {
       await fetch(`${API_URL}/api/content`, {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Crear cronica nueva</h1>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <h2 className='text-gray-700 text-center'>EUSKERA</h2>
          </div>
          <div className='w-1/2'>
            <h2 className='text-gray-700 text-center'>CASTELLANO</h2>
          </div>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="space-y-4 flex">

            <div className='w-1/2 mr-3 p-2'>
              <section className=''>
                <h3 className='text-gray-700 '>Portada de la noticia</h3>
                {/* Category */}
                <div>
                  <label htmlFor="categoryKey" className="block text-gray-700">Categoría:</label>
                  <input
                    type="text"
                    id="categoryKey"
                    name="categoryKeyEus"
                    value={formData.categoryKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>



                {/* Alt Text */}
                <div>
                  <label htmlFor="altKey" className="block text-gray-700">Texto alternativo de la imagen:</label>
                  <input
                    type="text"
                    id="altKey"
                    name="altKey"
                    value={formData.altKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </section>

              <section>
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-gray-700">Fecha:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="titleKey" className="block text-gray-700">Título:</label>
                  <input
                    type="text"
                    id="titleKey"
                    name="titleKey"
                    value={formData.titleKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>



                {/* Paragraph 1 */}
                <div>
                  <label htmlFor="p1" className="block text-gray-700">Parrafo 1:</label>
                  <input
                    type="text"
                    id="p1"
                    name="p1"
                    value={formData.p1Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 2 */}
                <div>
                  <label htmlFor="p2" className="block text-gray-700">Parrafo 2:</label>
                  <input
                    type="text"
                    id="p2"
                    name="p2"
                    value={formData.p2Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 3 */}
                <div>
                  <label htmlFor="p3" className="block text-gray-700">Parrafo 3:</label>
                  <input
                    type="text"
                    id="p3"
                    name="p3"
                    value={formData.p3Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 4 */}
                <div>
                  <label htmlFor="p4" className="block text-gray-700">Parrafo 4:</label>
                  <input
                    type="text"
                    id="p4"
                    name="p4"
                    value={formData.p4Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </section>
            </div>

            <div className='w-1/2 mr-3 p-2'>
              <section className=''>
                <h3 className='text-gray-700 '>Portada de la noticia</h3>
                {/* Category */}
                <div>
                  <label htmlFor="categoryKey" className="block text-gray-700">Categoría:</label>
                  <input
                    type="text"
                    id="categoryKey"
                    name="categoryKey"
                    value={formData.categoryKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label htmlFor="imageSrc" className="block text-gray-700">Imagen URL:</label>
                  <input
                    type="text"
                    id="imageSrc"
                    name="imageSrc"
                    value={formData.imageSrc}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Alt Text */}
                <div>
                  <label htmlFor="altKey" className="block text-gray-700">Texto alternativo de la imagen:</label>
                  <input
                    type="text"
                    id="altKey"
                    name="altKey"
                    value={formData.altKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </section>

              <section>
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-gray-700">Fecha:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="titleKey" className="block text-gray-700">Título:</label>
                  <input
                    type="text"
                    id="titleKey"
                    name="titleKey"
                    value={formData.titleKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>



                {/* Paragraph 1 */}
                <div>
                  <label htmlFor="p1" className="block text-gray-700">Parrafo 1:</label>
                  <input
                    type="text"
                    id="p1"
                    name="p1"
                    value={formData.p1}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 2 */}
                <div>
                  <label htmlFor="p2" className="block text-gray-700">Parrafo 2:</label>
                  <input
                    type="text"
                    id="p2"
                    name="p2"
                    value={formData.p2}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 3 */}
                <div>
                  <label htmlFor="p3" className="block text-gray-700">Parrafo 3:</label>
                  <input
                    type="text"
                    id="p3"
                    name="p3"
                    value={formData.p3}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 4 */}
                <div>
                  <label htmlFor="p4" className="block text-gray-700">Parrafo 4:</label>
                  <input
                    type="text"
                    id="p4"
                    name="p4"
                    value={formData.p4}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </section>
            </div>






            {/* Submit Button */}

          </div>

          <div className="mt-4">
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Crear noticia
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
