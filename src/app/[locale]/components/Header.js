'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslations, useLocale } from "next-intl"
import SwitchLang from "./SwitchLang"

export default function Heade({ post }) {
  const t = useTranslations('Home');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    const handleRouteChange = () => {
      const offcanvasEl = document.querySelector(".offcanvas.show");
      if (offcanvasEl) {
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
        if (offcanvas) offcanvas.hide();
      }
    };

    const observer = new MutationObserver(() => {
      handleRouteChange();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  const navItems = [
    { label: t('home'), href: `/${locale}`, match: `/` },
    { label: t('about'), href: `/${locale}/about`, match: `/about` },
    { label: t('services'), href: `/${locale}/services`, match: `/services` },
    { label: t('store'), href: `/${locale}/store`, match: `/store` },
    { label: t('pricing'), href: `/${locale}/pricing`, match: `/pricing` },
    { label: t('blog'), href: `/${locale}/blog`, match: `/blog` },
    { label: t('partnerships'), href: `/${locale}/partnerships`, match: `/partnerships` },
  ];

  return (
    <header>
      <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
        <div class="container">
          <Link class="navbar-brand" href={`/${locale}`}>
            <Image src="/image/logo.svg" width={120} height={50} title={post.site_name} alt={post.site_name} />
          </Link>

          <button class="navbar-toggler shadow-none border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
            <i class="ti ti-menu-3 text-black fs-2"></i>
          </button>

          <div class="offcanvas offcanvas-end border-0" style={{ width: `90vw` }} tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvas_navbar_meun">
            <div class="offcanvas-header">
              <div class="offcanvas-title" id="offcanvas_navbar_meun">
                <Image src="/image/logo.svg" width={100} height={40} title={post.site_name} alt={post.site_name} />
              </div>
              <button type="button" class="btn shadow-none border-0 ms-auto p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="ti ti-x text-black fs-5"></i>
              </button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 mb-md-0 mb-3">
                {navItems.map(({ label, href, match }, index) => (
                  <li class="nav-item" id={index}>
                    <Link
                      href={href}
                      class={`nav-link${pathname === `/${locale}${match}` ? ' active' : ''}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <SwitchLang />
              <Link href={`/${locale}/contact`} class="btn btn-outline-primary px-4">{t('contact')}</Link>
              <Link href={`/${locale}/pricing`} class="btn btn-primary px-4 ms-2">{t('booking')}</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
