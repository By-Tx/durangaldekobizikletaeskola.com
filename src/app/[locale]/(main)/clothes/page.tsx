'use server';

import { createTranslator } from 'next-intl';
import fs from 'fs/promises';
import path from 'path';
import ClothesClient from './clothesClient';

export default async function ClothesPage() {
  const locale = 'es'; // Puedes usar 'await getLocale()' si es dinámico

  // Cargar el archivo de traducciones
  const messagesPath = path.join(process.cwd(), 'messages', `${locale}.json`);
  const raw = await fs.readFile(messagesPath, 'utf-8');
  const messages = JSON.parse(raw);

  const t = createTranslator({ locale, messages, namespace: 'shopPage' });

  const tallas = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const item = [
    {
      image: 'https://photos.txuli.com/duranguesa/clothes/mailotDromFront.png',
      image2: 'https://photos.txuli.com/duranguesa/clothes/mailotDromSide.png',
      name: 'maillot',
      add: t('add'),
    },
    {
      image: 'https://photos.txuli.com/duranguesa/clothes/culotteDromFront.png',
      image2: 'https://photos.txuli.com/duranguesa/clothes/culotteDromSide.png',
      name: 'culotte',
      add: t('add'),
    },
  ];

  const itemSchool = [
    {
      image: 'https://photos.txuli.com/duranguesa/clothes/mailotEscuelaFront.png',
      image2: 'https://photos.txuli.com/duranguesa/clothes/mailotEscuelaSide.png',
      name: 'maillot',
      add: t('add'),
    },
    {
      image: 'https://photos.txuli.com/duranguesa/clothes/culotteEscuelaFront.png',
      image2: 'https://photos.txuli.com/duranguesa/clothes/culotteEscuelaSide.png',
      name: 'culotte',
      add: t('add'),
    },
  ];

  const items = [
    { content: 'maillot', value: 'maillot', checked: false },
    { content: 'culotte', value: 'culotte', checked: false },
  ];

  return (
    <ClothesClient
      t={{
        title: t('title'),
        school: t('school'),
        equipmentText: t('equipmentText'),
        nameSurname: t('nameSurname'),
        telephone: t('telephone'),
        send: t('send'),
        clothesType: t('clothesType'),
        add: t('add'),
        size: t('size'),
        info: t('info'),
      }}
      item={item}
      itemSchool={itemSchool}
      items={items}
      tallas={tallas}
    />
  );
}
