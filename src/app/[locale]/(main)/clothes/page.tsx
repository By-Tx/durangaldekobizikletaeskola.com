"use server"
import { getTranslations } from 'next-intl/server';
import ClothesClient from './clothesClient';

export default async function ClothesPage() {
    // Traducciones para la página de la tienda
    const t = await getTranslations("shopPage");

    // Array de tallas disponibles
    const tallas = ["XS", "S", "M", "L", "XL", "XXL"];

    // Productos
    const item = [
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/mailotDromFront.png',
            image2: 'https://photos.txuli.com/duranguesa/clothes/mailotDromSide.png',
            name: 'maillot',
            add: t("add")
        },
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/culotteDromFront.png',
            image2: 'https://photos.txuli.com/duranguesa/clothes/culotteDromSide.png',
            name: 'culotte',
            add: t("add")
        }
    ];
    const itemSchool = [
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/mailotEscuelaFront.png',
            image2: 'https://photos.txuli.com/duranguesa/clothes/mailotEscuelaSide.png',
            name: 'maillot',
            add: t("add")
        },
        {
            image: 'https://photos.txuli.com/duranguesa/clothes/culotteEscuelaFront.png',
            image2: 'https://photos.txuli.com/duranguesa/clothes/culotteEscuelaSide.png',
            name: 'culotte',
            add: t("add")
        }
    ];
    
    // Opciones de items para posibles usos futuros (no usado directamente aquí)
    const items = [
        { content: 'maillot', value: 'maillot', checked: false },
        { content: 'culotte', value: 'culotte', checked: false },
    ];

    return (
        // Renderiza el componente principal de la página de ropa, pasando traducciones, productos y tallas
        <ClothesClient
            t={{
                title: t("title"),
                school: t("school"),
                equipmentText: t("equipmentText"),
                nameSurname: t("nameSurname"),
                telephone: t("telephone"),
                send: t("send"),
                clothesType: t("clothesType"),
                add: t("add"),
                size: t("size"),
                info: t("info"),
            }}
            item={item}
            itemSchool={itemSchool}
            items={items}
            tallas={tallas}
        />
    );
}