// import noticeForm from '@/app/[locale]/components/session/noticeForm';
// import { number } from 'better-auth';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    //path the data from files
    const filePath = path.join(process.cwd(), 'public', 'notices.json');
    const filePath2 = path.join(process.cwd(), 'messages', 'es.json');
    //read the data from the request
    const newNotice = await request.json();
    
    try {
        //read an save the data from the request
        const jsonData = await fs.readFile(filePath, 'utf-8');
        const jsonDataTraductionEs = await fs.readFile(filePath2, 'utf-8');
        const dataEs = JSON.parse(jsonDataTraductionEs);
        const data = JSON.parse(jsonData);
        
        
        const lastKey = Object.keys(dataEs.noticeComponent).pop();
        console.log("Última clave de noticeComponent:", lastKey); // Ejemplo: "noticeTitle9"
        const number = lastKey ? parseInt(lastKey.replace('noticeTitle', '')) + 1 : 1; // we get the last number of the key and add 1 for create the traduction
        const filteredNotice = {
            date: newNotice.date,
            href: "/cronica"+newNotice.date,
            imageSrc: newNotice.imageSrc,
            altKey: "altKey" + number,
            titleKey: "noticeTitle" + number,
            categoryKey: "noticeCategory" + number,
           
        };
        const filteredNoticeDataPageEs = {
            title:"title" ,
            subTitle: "subTitle" ,
            altImage: "altImage" ,
            p1: newNotice.p1,
            p2: newNotice.p2,
            p3: newNotice.p3,
            p4: newNotice.p4,
           
        };
        console.log("filteredNoticeDataPage", filteredNoticeDataPageEs);
        // Agregar el nuevo aviso a la lista existente
        const updatedData = [...data, filteredNotice];

        try {
            await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));  // save the cover data in the file
            await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));  // save the cover data in the file
            return new Response(JSON.stringify({ message: 'Nuevo aviso agregado correctamente' }), { status: 200 });
        } catch (err) {
            return new Response(JSON.stringify({ message: 'Error al guardar el archivo', error: err }), { status: 500 });
        }
    } catch (error) {
        console.log("Error:", error);
        return new Response(JSON.stringify({ message: 'Error al leer el archivo', error: error }), { status: 500 });
    }
}
