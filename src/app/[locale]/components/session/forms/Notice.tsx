'use client'

import { useRef,useState } from 'react'



export default function ClientForm() {

  const [formData, setFormData] = useState({
    //data of the cover
    slug: '',
    imagePageUrl: '',
    imageUrl: '',
    altKey: '',
    date: '',
    //data es language
    titleKey: '',
    subtitleKey: '',
    categoryKey: '',
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    //data eus language
    altKeyEus: '',
    titleKeyEus: '',
    subtitleKeyEus: '',
    categoryKeyEus: '',
    p1Eus: '',
    p2Eus: '',
    p3Eus: '',
    p4Eus: '',
  });
  const imageCoverRef = useRef<HTMLInputElement>(null);
  const imagePageRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const API_URL =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_URL_DEVELOPMENT
        : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;
  
    const imageCover = imageCoverRef.current?.files?.[0];
    const imagePage = imagePageRef.current?.files?.[0];
  
    if (!imageCover || !imagePage) {
      alert("Debes seleccionar ambas imágenes.");
      return;
    }
  
    const formDataToSend = new FormData();
  
    // Archivos
    formDataToSend.append("file", imageCover);
    formDataToSend.append("filePage", imagePage);
  
    // Campos de texto
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
  
    try {
      const res = await fetch(`${API_URL}/api/content`, {
        method: "POST",
        body: formDataToSend,
      });
  
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Error al enviar los datos");
      }
  
      const result = await res.json();
      alert("Noticia creada correctamente");
  
      // Opcional: guardar URLs recibidas en el estado
      setFormData(prev => ({
        ...prev,
        imageUrl: result.imageUrl,
        imagePageUrl: result.imagePageUrl,
      }));
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al guardar la noticia");
    }
  };
  

  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 p-6 bg-white/45 shadow-lg rounded-lg text-black">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">Crear cronica nueva</h1>
        {/* Sección común */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">Datos generales</h2>

          {/* Fecha */}
          <div className="mb-4">
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

           {/* Imagen de portada */}
      <div className="mb-4">
        <label className="block text-gray-700">Imagen de portada:</label>
        <input
          type="file"
          name="imageCover"
          accept="image/*"
          ref={imageCoverRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Imagen de contenido */}
      <div className="mb-4">
        <label className="block text-gray-700">Imagen de contenido:</label>
        <input
          type="file"
          name="imagePage"
          accept="image/*"
          ref={imagePageRef}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>
        </div>

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
                  <label htmlFor="altKeyEus" className="block text-gray-700">Texto alternativo de la imagen:</label>
                  <input
                    type="text"
                    id="altKeyEus"
                    name="altKeyEus"
                    value={formData.altKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-transparent"
                  />
                </div>
              </section>

              <section>
                
                <h3 className='text-black text-l'>contenido de la pagina de la noticia</h3>
                {/* Title */}
                <div>
                  <label htmlFor="titleKeyEus" className="block text-gray-700">Título:</label>
                  <input
                    type="text"
                    id="titleKeyEus"
                    name="titleKeyEus"
                    value={formData.titleKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* subtitle Text */}
                <div>
                  <label htmlFor="subtitleKeyEus" className="block text-gray-700">Subtitulo:</label>
                  <input
                    type="text"
                    id="subtitleKeyEus"
                    name="subtitleKeyEus"
                    value={formData.subtitleKeyEus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>

                {/* Paragraph 1 */}
                <div>
                  <label htmlFor="p1Eus" className="block text-gray-700">Parrafo 1:</label>
                  <input
                    type="text"
                    id="p1Eus"
                    name="p1Eus"
                    value={formData.p1Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 2 */}
                <div>
                  <label htmlFor="p2Eus" className="block text-gray-700">Parrafo 2:</label>
                  <input
                    type="text"
                    id="p2Eus"
                    name="p2Eus"
                    value={formData.p2Eus}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Paragraph 3 */}
                <div>
                  <label htmlFor="p3Eus" className="block text-gray-700">Parrafo 3:</label>
                  <input
                    type="text"
                    id="p3Eus"
                    name="p3Eus"
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
                    id="p4Eus"
                    name="p4Eus"
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
               
                <h3 className='text-black text-l'>contenido de la pagina de la noticia</h3>
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
                {/* subtitle Text */}
                <div>
                  <label htmlFor="subtitleKey" className="block text-gray-700">Subtitulo</label>
                  <input
                    type="text"
                    id="subtitleKey"
                    name="subtitleKey"
                    value={formData.subtitleKey}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
