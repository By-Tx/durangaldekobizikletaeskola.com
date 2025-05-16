import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import Busboy from 'busboy';
import { Readable } from 'stream';

export async function POST(req: NextRequest): Promise<Response> {
  return new Promise((resolve) => {
    const uploads: string[] = [];

    const busboy = Busboy({ headers: Object.fromEntries(req.headers) });

    let dir = "/www/wwwroot/photos.txuli.com/duranguesa/gallery-v2";
    let baseFileName = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    let fileExtension = ".webp";
    let fileIndex = 0;

    busboy.on('field', (fieldname, value) => {
      if (fieldname === 'name') {
        baseFileName = value;
        console.log(baseFileName, "NOMBRE BASE DEL ARCHIVO");
      }
      if (fieldname === 'dir') {
        dir = value;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      }
    });

    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string) => {
      let currentName = fileIndex === 0 ? `${baseFileName}${fileExtension}` : `${baseFileName}_${fileIndex}${fileExtension}`;
      let destPath = path.join(dir, currentName);

      // Prevent accidental overwrite if file exists (edge case)
      while (fs.existsSync(destPath)) {
        fileIndex++;
        currentName = `${baseFileName}_${fileIndex}${fileExtension}`;
        destPath = path.join(dir, currentName);
      }

      const stream = fs.createWriteStream(destPath);
      file.pipe(stream);

      file.on('end', () => {
        fs.chmodSync(destPath, 0o644);
        uploads.push(destPath);
        fileIndex++; // Increment index for the next file
      });
    });

    busboy.on('finish', () => {
      if (uploads.length > 0) {
        resolve(
          new Response(`Imágenes subidas correctamente.`, {
            status: 201,
            headers: { 'Content-Type': 'text/plain' },
          })
        );
      } else {
        resolve(
          new Response("No se subió ninguna imagen.", {
            status: 400,
            headers: { 'Content-Type': 'text/plain' },
          })
        );
      }
    });


    const reader = req.body?.getReader();
    const nodeStream = new Readable({
      async read() {
        if (!reader) return this.push(null);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          this.push(value);
        }
        this.push(null);
      },
    });

    nodeStream.pipe(busboy);
  });
}
