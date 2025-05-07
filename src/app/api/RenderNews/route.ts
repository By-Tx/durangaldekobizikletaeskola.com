import fs from 'fs/promises';
import path from 'path';
import { NextRequest,NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body);
        //path the data from files
        const fileDataPath = path.join(process.cwd(), 'public', 'noticesPages.json');
        //read the data from the file 
        const fileDaraRaw = await fs.readFile(fileDataPath, 'utf-8'); 
        // console.log(fileDaraRaw);
        return NextResponse.json({ message: 'Data read successfully', data: fileDaraRaw }, { status: 200 });
    }catch (error) {
        console.error('Error en el endpoint /api/content:', error);
        return NextResponse.json({ message: 'Error al obtener contenido' }, { status: 500 });
    }
}