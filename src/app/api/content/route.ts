
import fs from 'fs/promises';
import path from 'path';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    //path the data from files
    const filePath = path.join(process.cwd(), 'public', 'notices.json');
    const filePathEs = path.join(process.cwd(), 'messages', 'es.json');
    const filePathEus = path.join(process.cwd(), 'messages', 'eus.json');
    //read the data from the request
    const newNotice = await req.json();

    try {
        //read an save the data from the request
        const jsonData = await fs.readFile(filePath, 'utf-8');
        const jsonDataTraductionEs = await fs.readFile(filePathEs, 'utf-8');
        const jsonDataTraductionEus = await fs.readFile(filePathEus, 'utf-8');
        //parse data from the files
        const dataEs = JSON.parse(jsonDataTraductionEs);
        const dataEus = JSON.parse(jsonDataTraductionEus);
        const data = JSON.parse(jsonData);
        //select the object data from the 
        const noticeComponent = dataEs.noticeComponent;
        const noticeComponentEus = dataEus.noticeComponent;



        //add the cover data to the file notices.json
        const lastKey = Object.keys(dataEs.noticeComponent).pop();

        const number = lastKey ? parseInt(lastKey.replace('noticeTitle', '')) + 1 : 1;

        const filteredNotice = {
            date: newNotice.date,
            href: "/cronica" + newNotice.date,
            imageSrc: newNotice.imageSrc,
            altKey: "altKey" + number,
            titleKey: "noticeTitle" + number,
            categoryKey: "noticeCategory" + number,

        };
        //add the translation data of cover data to the file eus.json
        const tanslationNoticeCoverEus = {
            ['AltImage' + number]: newNotice.altKeyEus,
            ['title' + number]: newNotice.titleKeyEus,
            ['category' + number]: newNotice.categoryKeyEus,
            ['date' + number]: newNotice.date,
            translation: ['cronica' + newNotice.date]
        }
        //add the translation data of cover data to the file es.json
        const tanslationNoticeCoverEs = {
            ['AltImage' + number]: newNotice.altKey,
            ['title' + number]: newNotice.titleKey,
            ['category' + number]: newNotice.categoryKey,
            ['date' + number]: newNotice.dateEs,
            translation: ['cronica' + newNotice.dateEs]
        }
        //add translation data info the file eus.json
        const translationNoticeEus = {
            ['cronica' + newNotice.date]: {
                "title": newNotice.titleKeyEus,
                "subtitle": newNotice.subtitleKeyEus,
                "p1": newNotice.p1Eus,
                "p2": newNotice.p2Eus,
                "p3": newNotice.p3Eus,
                "p4": newNotice.p4Eus,
            }
        }
        //add translation data info the file es.json
        const translationNotice = {
            ['cronica' + newNotice.date]: {
                "title": newNotice.titleKey,
                "subtitle": newNotice.subtitleKey,
                "p1": newNotice.p1,
                "p2": newNotice.p2,
                "p3": newNotice.p3,
                "p4": newNotice.p4,
            }
        }
        
        //add the translation data of cover data to the file es.json
        Object.assign(noticeComponent, tanslationNoticeCoverEs);
        Object.assign(noticeComponentEus, tanslationNoticeCoverEus);
        Object.assign(dataEs, translationNotice);
        Object.assign(dataEus, translationNoticeEus);
        
        
        // Agregar el nuevo aviso a la lista existente
        const updatedData = [...data, filteredNotice];
        
        try {
             await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));  // save the cover data in the file
             await fs.writeFile(filePathEs, JSON.stringify(dataEs, null, 2));
             await fs.writeFile(filePathEs, JSON.stringify(dataEus, null, 2));
            return new Response(JSON.stringify({ message: 'Nueva noticia agregada correctamente' }), { status: 200 });
        } catch (err) {
            return new Response(JSON.stringify({ message: 'Error al guardar el archivo', error: err }), { status: 500 });
        }
    } catch (error) {
        console.log("Error:", error);
        return new Response(JSON.stringify({ message: 'Error al leer el archivo', error: error }), { status: 500 });
    }
}
