'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <header>
      <nav class="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
        <div class="container">
          <Link class="navbar-brand" href="/">
            <Image src="/image/logo.svg" width={120} height={0} alt="" style={{ height: 'auto' }} />
          </Link>

          <button class="navbar-toggler shadow-none border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
            <i class="ti ti-menu-3 text-black fs-2"></i>
          </button>

          <div class="offcanvas offcanvas-end border-0" style={{width:`90vw`}} tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvas_navbar_meun">
            <div class="offcanvas-header">
              <div class="offcanvas-title" id="offcanvas_navbar_meun">
                <Image src="/image/logo.svg" width={100} height={0} alt="" style={{ height: 'auto' }} />
              </div>
              <button type="button" class="btn shadow-none border-0 ms-auto p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="ti ti-x text-black fs-5"></i>
              </button>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">الرئيسية</Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/about' ? 'active' : ''}`} href="/about">من نحن</Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/services' ? 'active' : ''}`} href="/services">الخدمات</Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/store' ? 'active' : ''}`} href="/store">المتجر</Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/blog' ? 'active' : ''}`} href="/blog">المدونة</Link>
                </li>
                <li class="nav-item">
                  <Link class={`nav-link ${pathname === '/partnerships' ? 'active' : ''}`} href="/partnerships">الشراكات</Link>
                </li>
              </ul>

              <Link href="/contact" class="btn btn-outline-primary px-4">تواصل معنا</Link>
              <Link href="/#pricing-section" class="btn btn-primary px-4 ms-2">احجز موعد</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
