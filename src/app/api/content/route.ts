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

        // get the number of the last notice
        const titleKeys = Object.keys(noticeComponent).filter(key => key.startsWith('noticeTitle'));
        const numbers = titleKeys
          .map(key => parseInt(key.replace('noticeTitle', '')))
          .filter(num => !isNaN(num));
        const number = numbers.length > 0 ? Math.max(...numbers) + 1 : 1;

        const slug = `cronica${fields.date}`;

        const filteredNotice: Record<string, any> = {
          date: fields.date,
          slug,
          image: uploads['file'],
          altKey: `altKey${number}`,
          titleKey: `noticeTitle${number}`,
          categoryKey: `noticeCategory${number}`,
          imagePage: uploads['filePage'],
          translationKey: [`${slug}Page`],
        };

        // add urls 
        const links: { url: string; txt: string }[] = [];
        for (let i = 1; i <= 5; i++) {
          const url = fields[`url${i}`];
          const txt = fields[`urltxt${i}`];
          if (url) {
            links.push({ url, txt });
          }
        }
        if (links.length > 0) {
          filteredNotice.urls = links;
        }

        // ES translations
        const translationNotice: Record<string, any> = {
          [`${slug}Page`]: {
            title: fields.titleKey,
            subTitle: fields.subtitleKey,
            altImage: fields.altKey,
            urls: "Clasificaciones",
          },
        };

        for (let i = 1; i <= 7; i++) {
          const value = fields[`p${i}`];
          if (value) {
            translationNotice[`${slug}Page`][`p${i}`] = value;
          }
        }

        //EUS translations
        const translationNoticeEus: Record<string, any> = {
          [`${slug}Page`]: {
            title: fields.titleKeyEus,
            subTitle: fields.subtitleKeyEus,
            altImage: fields.altKeyEus,
            urls: "sailkapenak",
          },
        };

        for (let i = 1; i <= 7; i++) {
          const value = fields[`p${i}Eus`];
          if (value) {
            translationNoticeEus[`${slug}Page`][`p${i}`] = value;
          }
        }

        // assingn keys to the object ES
        Object.assign(noticeComponent, {
          [`altKey${number}`]: fields.altKey,
          [`noticeTitle${number}`]: fields.titleKey,
          [`noticeCategory${number}`]: fields.categoryKey,
          [`date${number}`]: fields.date,
          translation: [slug],
        });

        // assingn keys to the object EUS
        Object.assign(noticeComponentEus, {
          [`altKey${number}`]: fields.altKeyEus,
          [`noticeTitle${number}`]: fields.titleKeyEus,
          [`noticeCategory${number}`]: fields.categoryKeyEus,
          [`date${number}`]: fields.date,
          translation: [slug],
        });

        // save the new object to the file
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

    // adapt the request body to a ReadableStream
    // to be compatible with busboy
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
