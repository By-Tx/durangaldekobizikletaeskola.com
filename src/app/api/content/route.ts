import { NextRequest } from 'next/server';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import Busboy from 'busboy';
import { Readable } from 'stream';

export async function POST(req: NextRequest): Promise<Response> {
  return new Promise<Response>((resolve) => {
    const fields: Record<string, string> = {};
    const uploads: Record<string, string> = {};

    const busboy = Busboy({
      headers: Object.fromEntries(req.headers),
    });

    busboy.on('file', (fieldname, file) => {
      const safeFilename = `${Date.now()}`;
      const destPath = `/www/wwwroot/photos.txuli.com/duranguesa/notices/${safeFilename}.webp`;
      const writeStream = fs.createWriteStream(destPath);

      file.pipe(writeStream);
      file.on('end', () => {
        fs.chmodSync(destPath, 0o644);
        uploads[fieldname] = `https://photos.txuli.com/duranguesa/notices/${safeFilename}.webp`;
      });
    });

    busboy.on('field', (fieldname, value) => {
      fields[fieldname] = value;
    });

    busboy.on('finish', async () => {
      try {
        const root = process.cwd();
        const filePath = path.join(root, 'public', 'notices.json');
        const filePathEs = path.join(root, 'messages', 'es.json');
        const filePathEus = path.join(root, 'messages', 'eus.json');

        const [jsonData, jsonEs, jsonEus] = await Promise.all([
          fsp.readFile(filePath, 'utf-8'),
          fsp.readFile(filePathEs, 'utf-8'),
          fsp.readFile(filePathEus, 'utf-8'),
        ]);

        const data = JSON.parse(jsonData);
        const dataEs = JSON.parse(jsonEs);
        const dataEus = JSON.parse(jsonEus);

        const noticeComponent = dataEs.noticeComponent;
        const noticeComponentEus = dataEus.noticeComponent;

        const lastKey = Object.keys(noticeComponent).pop();
        const number = lastKey ? parseInt(lastKey.replace('noticeTitle', '')) + 1 : 1;
        const slug = `cronica${fields.date}`;

        const filteredNotice = {
          date: fields.date,
          slug,
          image: uploads['file'],
          altKey: `altKey${number}`,
          titleKey: `noticeTitle${number}`,
          categoryKey: `noticeCategory${number}`,
          imagePage: uploads['filePage'],
          translationKey: [`${slug}Page`],
        };

        const translationNotice = {
          [`${slug}Page`]: {
            title: fields.titleKey,
            subTitle: fields.subtitleKey,
            p1: fields.p1,
            p2: fields.p2,
            p3: fields.p3,
            p4: fields.p4,
            altImage: fields.altKey,
          },
        };

        const translationNoticeEus = {
          [`${slug}Page`]: {
            title: fields.titleKeyEus,
            subTitle: fields.subtitleKeyEus,
            p1: fields.p1Eus,
            p2: fields.p2Eus,
            p3: fields.p3Eus,
            p4: fields.p4Eus,
            altImage: fields.altKeyEus,
          },
        };

        // sum up of the notices
        Object.assign(noticeComponent, {
          [`altKey${number}`]: fields.altKey,
          [`noticeTitle${number}`]: fields.titleKey,
          [`noticeCategory${number}`]: fields.categoryKey,
          [`date${number}`]: fields.date,
          translation: [slug],
        });

        Object.assign(noticeComponentEus, {
          [`altKey${number}`]: fields.altKeyEus,
          [`noticeTitle${number}`]: fields.titleKeyEus,
          [`noticeCategory${number}`]: fields.categoryKeyEus,
          [`date${number}`]: fields.date,
          translation: [slug],
        });

        Object.assign(dataEs, translationNotice);
        Object.assign(dataEus, translationNoticeEus);

        const updatedData = [...data, filteredNotice];

        await Promise.all([
          fsp.writeFile(filePath, JSON.stringify(updatedData, null, 2)),
          fsp.writeFile(filePathEs, JSON.stringify(dataEs, null, 2)),
          fsp.writeFile(filePathEus, JSON.stringify(dataEus, null, 2)),
        ]);

        resolve(
          new Response(
            JSON.stringify({
              message: 'Noticia creada correctamente',
              imageUrl: uploads['file'],
              imagePageUrl: uploads['filePage'],
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
          )
        );
      } catch (error) {
        console.error('Error al guardar los datos:', error);
        resolve(new Response('Error interno', { status: 500 }));
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
