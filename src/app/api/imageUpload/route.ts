import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import Busboy from 'busboy';
import { Readable } from 'stream';

export async function POST(req: NextRequest): Promise<Response> {
  return new Promise((resolve) => {
    const uploads: string[] = [];

    const busboy = Busboy({ headers: Object.fromEntries(req.headers) });
    console.log(busboy)
    let dir = "/www/wwwroot//photos.txuli.com/duranguesa/gallery-v2";
    busboy.on('field', (fieldname, value) => {
      if (fieldname === 'dir') {
      dir = value;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
      }
    });

    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string) => {
      const timestamp = Date.now();
      const safeName = `${timestamp}-${Math.random().toString(36).slice(2)}.webp`;
      const destPath = `${dir}/${safeName}`;
      const stream = fs.createWriteStream(destPath);

      file.pipe(stream);
      file.on('end', () => {
        fs.chmodSync(destPath, 0o644);
        uploads.push(`${dir}/${safeName}`);
      });
    });

    busboy.on('finish', () => {
      resolve(
        new Response(JSON.stringify({ message: 'Imágenes subidas', files: uploads }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      );
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