'use client';

import NewsSelector from './noticeSelector';
import { NewsItem } from './noticeSelector';

interface Props {
  items: NewsItem[];
}

export default function NoticeEditorClient({ items }: Props) {
  return (
    <NewsSelector
      items={items}
      onSelect={(slug) => console.log("Seleccionada:", slug)}
      onEdit={(slug) => console.log("Editar noticia:", slug)}
    />
  );
}
