'use client';

import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { locales } from '@/i18n/routing';

export default function SwitchLang() {
  const pathname = usePathname();

  const pathParts = pathname.split('/');
  const currentLocale = pathParts[1];
  const basePath = pathParts.slice(2).join('/');

  return (
    <div className="d-flex align-items-center mb-md-0 mb-3">
      {locales.map((locale, index) => (
        <div key={locale} className="d-flex align-items-center">
          <Link
            href={`/${basePath}`}
            locale={locale}
            className="text-decoration-none"
          >
            <small>{locale === 'ar' ? 'عربي' : 'ENG'}</small>
          </Link>
          {index === 0 && <span className="text-body-secondary mx-1">|</span>}
        </div>
      ))}
    </div>
  );
}
