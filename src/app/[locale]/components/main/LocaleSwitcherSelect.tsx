'use client';

import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { usePathname, useRouter } from '@/i18n/routing';

type Locale = 'eus' | 'es';

interface LocaleSwitcherProps {
  className?: string; 
}

export default function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale; 

  
  function changeLocale(locale: Locale) {
    startTransition(() => {
      router.replace({ pathname, query: params }, { locale });
    });
  }

  return (
    <div className={`flex items-center space-x-2 text-white `}>
      
      <div
        onClick={() => changeLocale('eus')}
        className={`cursor-pointer ${isPending && 'opacity-50'} ${currentLocale === 'eus' ? className || 'bg-customDarkBlue' : ''} p-2 rounded`}
      >
        EUS
      </div>

      <div>/</div>

     
      <div
        onClick={() => changeLocale('es')}
        className={`cursor-pointer ${isPending && 'opacity-50'} ${currentLocale === 'es' ? className || 'bg-customDarkBlue' : ''} p-2 rounded`}
      >
        ES
      </div>
    </div>
  );
}
