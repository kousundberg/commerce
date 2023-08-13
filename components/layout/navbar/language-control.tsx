'use client';

import clsx from 'clsx';
import type { Locale } from 'i18n-config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LanguageControl = ({ lang }: { lang?: Locale }) => {
  const pathName = usePathname();
  console.debug({ lang });
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex flex-row space-x-0">
      <span className="px-2 py-4">
        <Link
          href={redirectedPathName('ja')}
          className={clsx(
            lang === 'ja' && 'opacity-70',
            'transition-opacity duration-150 hover:opacity-50'
          )}
        >
          JP
        </Link>
      </span>
      <span className="py-4">/</span>
      <span className="px-2 py-4">
        <Link
          href={redirectedPathName('en')}
          className={clsx(
            lang === 'en' && 'opacity-70',
            'transition-opacity duration-150 hover:opacity-50'
          )}
        >
          EN
        </Link>
      </span>
    </div>
  );
};
