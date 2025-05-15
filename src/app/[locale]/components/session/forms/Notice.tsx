// Adaptación visual del formulario ClientForm al estilo moderno de RaceClient

'use client';
import { useRef, useState } from 'react';
import { API_URL } from '@/lib/config';

type FormFields = {
    [key: string]: string;
};

type LinkItem = {
    text: string;
    url: string;
};

export default function ClientForm() {
    const [formData, setFormData] = useState<FormFields>({
        slug: '', imagePageUrl: '', imageUrl: '', altKey: '', date: '',
        titleKey: '', subtitleKey: '', categoryKey: '', p1: '', p2: '', p3: '', p4: '', p5: '', p6: '',
        altKeyEus: '', titleKeyEus: '', subtitleKeyEus: '', categoryKeyEus: '', p1Eus: '', p2Eus: '', p3Eus: '', p4Eus: '', p5Eus: '', p6Eus: '',
    });

    const [links, setLinks] = useState<LinkItem[]>([]);

    const imageCoverRef = useRef<HTMLInputElement>(null);
    const imagePageRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLinkChange = (index: number, field: keyof LinkItem, value: string) => {
        const updatedLinks = [...links];
        updatedLinks[index][field] = value;
        setLinks(updatedLinks);
    };

    const addLink = () => {
        if (links.length >= 5) return;
        setLinks([...links, { text: '', url: '' }]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const imageCover = imageCoverRef.current?.files?.[0];
        const imagePage = imagePageRef.current?.files?.[0];
        if (!imageCover || !imagePage) return alert("Debes seleccionar ambas imágenes.");

        const formDataToSend = new FormData();
        formDataToSend.append("file", imageCover);
        formDataToSend.append("filePage", imagePage);
        Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

        links.forEach((link, index) => {
            formDataToSend.append(`url${index + 1}`, link.url);
            formDataToSend.append(`urltxt${index + 1}`, link.text);
        });

        try {
            const res = await fetch(`${API_URL}/api/content`, {
                method: "POST",
                body: formDataToSend,
            });
            if (!res.ok) throw new Error(await res.text());
            const result = await res.json();
            alert("Noticia creada correctamente");
            setFormData(prev => ({ ...prev, imageUrl: result.imageUrl, imagePageUrl: result.imagePageUrl }));
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al guardar la noticia");
        }
    };

    const inputClass = "w-full px-4 py-2 border border-blue-500 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 mb-4";

    return (
        <div className="max-w-6xl mx-auto mt-10 p-8 bg-gray-900/80 rounded-3xl shadow-2xl text-white font-fredoka">
            <h1 className="text-3xl font-semibold text-center mb-8 text-blue-400 uppercase">Crear Crónica Nueva</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 text-gray-300">Fecha</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputClass} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-gray-300">Imagen de portada</label>
                        <input
                            type="file"
                            ref={imageCoverRef}
                            accept=".jpg,.jpeg,.png,.webp,.gif,.bmp"
                            className="block w-full text-sm text-blue-100
                                       file:mr-4 file:py-2 file:px-6
                                       file:rounded-lg file:border-0
                                       file:bg-gradient-to-r file:from-blue-700 file:to-blue-500
                                       file:text-white file:font-semibold
                                       file:shadow-lg file:uppercase file:tracking-wide
                                       hover:file:opacity-90 hover:file:shadow-xl
                                       transition file:transition file:duration-200
                                       bg-gray-800 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 mb-4 file:cursor-pointer"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-300">Imagen de contenido</label>
                        <input
                            type="file"
                            ref={imagePageRef}
                            accept=".jpg,.jpeg,.png,.webp,.gif,.bmp"
                            className="block w-full text-sm text-blue-100
                                       file:mr-4 file:py-2 file:px-4
                                       file:rounded-lg file:border-0
                                       file:bg-gradient-to-r file:from-blue-700 file:to-blue-500
                                       file:text-white file:font-semibold
                                       file:shadow-lg file:uppercase file:tracking-wide
                                       hover:file:opacity-90 hover:file:shadow-xl
                                       transition file:transition file:duration-200
                                       bg-gray-800 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 mb-4 file:cursor-pointer"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-xl font-semibold text-center text-blue-300 mb-4">EUSKERA</h2>
                        <input placeholder="Categoría" name="categoryKeyEus" value={formData.categoryKeyEus} onChange={handleChange} className={inputClass} />
                        <input placeholder="Alt img" name="altKeyEus" value={formData.altKeyEus} onChange={handleChange} className={inputClass} />
                        <input placeholder="Título" name="titleKeyEus" value={formData.titleKeyEus} onChange={handleChange} className={inputClass} />
                        <input placeholder="Subtítulo" name="subtitleKeyEus" value={formData.subtitleKeyEus} onChange={handleChange} className={inputClass} />
                        {["p1Eus", "p2Eus", "p3Eus", "p4Eus", "p5Eus", "p6Eus"].map(p => (
                            <input key={p} placeholder={`Párrafo ${p.match(/\d+/)?.[0] || ''}`} name={p} value={formData[p]} onChange={handleChange} className={inputClass} />
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-center text-blue-300 mb-4">CASTELLANO</h2>
                        <input placeholder="Categoría" name="categoryKey" value={formData.categoryKey} onChange={handleChange} className={inputClass} />
                        <input placeholder="Alt img" name="altKey" value={formData.altKey} onChange={handleChange} className={inputClass} />
                        <input placeholder="Título" name="titleKey" value={formData.titleKey} onChange={handleChange} className={inputClass} />
                        <input placeholder="Subtítulo" name="subtitleKey" value={formData.subtitleKey} onChange={handleChange} className={inputClass} />
                        {["p1", "p2", "p3", "p4", "p5", "p6"].map(p => (
                            <input key={p} placeholder={`Párrafo ${p.match(/\d+/)?.[0] || ''}`} name={p} value={formData[p]} onChange={handleChange} className={inputClass} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-center text-blue-300 mb-4">URLs de clasificaciones</h2>
                    {links.map((link, i) => (
                        <div key={i} className="grid grid-cols-2 gap-4">
                            <input
                                placeholder={`Texto del enlace ${i + 1}`}
                                value={link.text}
                                onChange={e => handleLinkChange(i, 'text', e.target.value)}
                                className={inputClass}
                            />
                            <input
                                placeholder={`URL ${i + 1}`}
                                value={link.url}
                                onChange={e => handleLinkChange(i, 'url', e.target.value)}
                                className={inputClass}
                            />
                        </div>
                    ))}
                    <div className="text-center mt-4">
                        <button
                            type="button"
                            onClick={addLink}
                            className="px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl text-white font-semibold shadow-md uppercase tracking-wide transition hover:opacity-90 hover:shadow-xl"
                            disabled={links.length >= 5}
                        >
                            Añadir enlace
                        </button>
                    </div>
                </div>

                <div className="pt-6 text-center">
                    <button type="submit" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-semibold shadow-lg transition hover:opacity-90 hover:shadow-xl uppercase">
                        Crear Crónica
                    </button>
                </div>
            </form>
        </div>
    );
}
