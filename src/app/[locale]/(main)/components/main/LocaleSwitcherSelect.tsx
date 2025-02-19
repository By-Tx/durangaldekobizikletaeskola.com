'use client';

import { ReactNode, useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';

type Locale = 'eus' | 'es';

export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale; // Obtener el idioma actual desde los parámetros

  // Función para cambiar el idioma
  function changeLocale(locale: Locale) {
    startTransition(() => {
      router.replace({ pathname, query: params }, { locale });
    });
  }

  return (
    <div className="flex items-center space-x-2 text-white">
      {/* Cambiar idioma con EUS */}
      <div
        onClick={() => changeLocale('eus')}
        className={`cursor-pointer ${isPending && 'opacity-50'} ${currentLocale === 'eus' ? 'bg-customDarkBlue' : ''} p-2 rounded`}
      >
        EUS
      </div>

      <div>/</div>

      {/* Cambiar idioma con ES */}
      <div
        onClick={() => changeLocale('es')}
        className={`cursor-pointer ${isPending && 'opacity-50'} ${currentLocale === 'es' ? 'bg-customDarkBlue' : ''} p-2 rounded`}
      >
        ES
      </div>
    </div>
  );
}
