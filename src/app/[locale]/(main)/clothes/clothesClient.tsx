"use client";
import { useState } from "react";
import Image from "next/image";
import Title from '@/app/[locale]/components/mainPage/Titles/Title';
import ShopItems from '@/app/[locale]/components/mainPage/shop/ShopItems';
import SubTitle from '../../components/mainPage/Titles/SubTitle';
import info from "@/app/media/info.svg";

// Tipos para los productos seleccionados y props del componente
interface SelectedProduct {
    name: string;
    image: string;
    type: "item" | "itemSchool";
    talla?: string;
}

interface ClothesClientProps {
    t: {
        title: string;
        school: string;
        nameSurname: string;
        telephone: string;
        send: string;
        equipmentText: string;
        size: string;
        clothesType: string;
        add: string;
        info: string;
    };
    item: { name: string; image: string; image2: string; add: string; }[];
    itemSchool: { name: string; image: string; image2: string; add: string; }[];
    tallas: string[];
    items?: { content: string; value: string; checked: boolean }[];
}

export default function ClothesClient({ t, item, itemSchool, tallas }: ClothesClientProps) {

    // Estado para los productos seleccionados
    const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

    // Añadir producto a la selección
    const handleAddProduct = (product: { name: string; image: string }, type: "item" | "itemSchool") => {
        setSelectedProducts((prev) => {
            const alreadyExists = prev.some(p => p.name === product.name && p.type === type);
            if (alreadyExists) return prev;
            return [...prev, { ...product, type, talla: "" }];
        });
    };

    // Eliminar producto de la selección
    const handleRemoveProduct = (index: number) => {
        setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
    };

    // Cambiar talla de un producto seleccionado
    const handleTallaChange = (index: number, talla: string) => {
        setSelectedProducts((prev) =>
            prev.map((prod, i) =>
                i === index ? { ...prod, talla } : prod
            )
        );
    };

    // Obtener etiqueta del tipo de producto
    const getTypeLabel = (type: "item" | "itemSchool") => {
        if (type === "item") return "(Dromedario)";
        if (type === "itemSchool") return `(${t.school})`;
        return "";
    };

    return (
        <>
            <Title title={t.title} />
            <section className="flex items-center gap-2 mx-3 mb-3">
                <Image
                    src={info}
                    alt="Descripción de la imagen"
                    width={30}
                    height={30}
                />
                <div className="text-lg font-fredoka text-customDarkBlue font-semibold italic">
                    <p>{t.info}</p>
                </div>
            </section>

            <section>
                <ShopItems item={item} title="Dromedario" onAdd={product => handleAddProduct(product, "item")} />
                <ShopItems item={itemSchool} title={t.school} onAdd={product => handleAddProduct(product, "itemSchool")} />
            </section>
            <SubTitle subTitle={t.equipmentText} />

            <form
                action=""
                className="mt-10 max-w-3xl mx-auto bg-gradient-to-br rounded-lg p-8 text-black space-y-6"
                onSubmit={async e => {
                    e.preventDefault();

                    const form = e.currentTarget as HTMLFormElement;
                    const data = new FormData(form);

                    // Definición de payload para el envío
                    interface Payload {
                        nombre: FormDataEntryValue | null;
                        mail: FormDataEntryValue | null;
                        productos: ProductoPayload[];
                    }

                    interface ProductoPayload {
                        name: string;
                        type: string;
                        talla: FormDataEntryValue | null;
                    }

                    // Construcción del payload a enviar
                    const payload: Payload = {
                        nombre: data.get("nombre"),
                        mail: data.get("mail"),
                        productos: selectedProducts.map((producto, idx): ProductoPayload => ({
                            name: producto.name,
                            type: producto.type === "item" ? "dromedario" : "escuela",
                            talla: data.get(`talla-${producto.name}-${idx}`),
                        }))
                    };

                    try {
                        // Envío del formulario a la API
                        const res = await fetch("/api/sendEmailClothes", {
                            method: "POST",
                            body: JSON.stringify(payload),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        if (!res.ok) {
                            throw new Error("Error al enviar el formulario.");
                        }

                        console.log("Formulario enviado correctamente:", payload);
                        alert("Formulario enviado correctamente.");
                        setSelectedProducts([]);
                        form.reset();
                    } catch (error) {
                        console.error("Error al enviar:", error);
                        alert("Ocurrió un error al enviar el formulario. Inténtalo de nuevo.");
                    }
                }}
            >
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-customDarkBlue placeholder:font-fredoka placeholder:text-lg placeholder:uppercase placeholder:font-semibold"
                            placeholder={t.nameSurname}
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="email"
                            id="mail"
                            name="mail"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-customDarkBlue placeholder:font-fredoka placeholder:text-lg placeholder:uppercase placeholder:font-semibold"
                            placeholder={t.telephone}
                            required
                        />
                    </div>
                </div>

                {/* Lista de productos seleccionados */}
                {selectedProducts.length > 0 && (
                    <div className="space-y-4 mt-8">
                        {selectedProducts.map((producto, idx) => (
                            <div
                                key={producto.name + idx}
                                className="flex flex-col sm:flex-row items-center gap-4 bg-white bg-opacity-80 rounded-lg p-4"
                            >
                                <div className="flex items-center gap-3 flex-1 w-full">
                                    <Image
                                        src={producto.image}
                                        alt={producto.name}
                                        width={80}
                                        height={96}
                                        className="w-20 h-24 object-contain rounded"
                                    />
                                    <span className="font-semibold font-fredoka text-customDarkBlue capitalize">
                                        {producto.name} <span className="text-gray-500">{getTypeLabel(producto.type)}</span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <select
                                        name={`talla-${producto.name}-${idx}`}
                                        className="rounded-md border border-gray-300 px-3 py-2 font-fredoka"
                                        required
                                        value={producto.talla}
                                        onChange={e => handleTallaChange(idx, e.target.value)}
                                    >
                                        <option value="" disabled>{t.size}</option>
                                        {tallas.map((talla: string) => (
                                            <option key={talla} value={talla}>{talla}</option>
                                        ))}
                                    </select>
                                    <button
                                        type="button"
                                        className="ml-2 px-3 py-1 bg-red-500 text-white rounded-lg font-extrabold text-lg font-fredoka hover:bg-red-600 transition"
                                        onClick={() => handleRemoveProduct(idx)}
                                        aria-label="Eliminar"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    type="submit"
                    className="mt-4 bg-customDarkBlue text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-900 transition uppercase"
                >
                    {t.send}
                </button>
            </form>
        </>
    );
}
