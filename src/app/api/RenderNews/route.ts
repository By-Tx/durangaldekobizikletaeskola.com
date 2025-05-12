import fs from 'fs/promises';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const slug = body.slug;



        //path the data from files
        const fileDataPath = path.join(process.cwd(), 'public', 'notices.json');
        //read the data from the file 
        const fileDataRaw = await fs.readFile(fileDataPath, 'utf-8');
        const fileData = JSON.parse(fileDataRaw);
        
        const foundItem = fileData.find(
            (item: { slug: string }) =>
                item.slug.trim().toLowerCase().replace(/-/g, '') === slug.trim().toLowerCase().replace(/-/g, '')
        );
       
        return NextResponse.json({ message: 'Data read successfully', data: foundItem }, { status: 200 });
    } catch (error) {
        console.error('Error en el endpoint /api/content:', error);
        return NextResponse.json({ message: 'Error al obtener contenido' }, { status: 500 });
    }
}