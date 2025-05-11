import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <section id="footer_section" class="bg-img text-bg-dark py-md-5 py-3" style={{backgroundImage: `url('image/footer_bg.webp')`}}>
        <div class="container">
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <img src="/image/logo.svg" class="mb-3" width="120" alt="" />
              
              <p class="text-justify">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة.</p>
              
              <ul class="d-flex p-0 m-0">
                <li class="list-unstyled m-md-0 mx-3">
                  <a href="#" class="text-decoration-none btn text-light border rounded-1 fs-5 pt-2">
                    <i class="ti ti-brand-instagram"></i>
                  </a>
                </li>
                <li class="list-unstyled m-md-0 ms-md-3 mx-3">
                  <a href="#" class="text-decoration-none btn text-light border rounded-1 fs-5 pt-2">
                    <i class="ti ti-brand-x"></i>
                  </a>
                </li>
                <li class="list-unstyled m-md-0 ms-md-3 mx-3">
                  <a href="#" class="text-decoration-none btn text-light border rounded-1 fs-5 pt-2">
                    <i class="ti ti-brand-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-3">
              <h2 class="fw-bold fs-4 mb-4">روابط سريعة</h2>

              <div class="row row-cols-2">
                <div class="col">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link p-0" href="/">الرئيسية</Link>
                      <Link class="nav-link p-0" href="/about">من نحن</Link>
                      <Link class="nav-link p-0" href="/services">الخدمات</Link>
                      <Link class="nav-link p-0" href="/store">المتجر</Link>
                    </li>
                  </ul>
                </div>

                <div class="col">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link p-0" href="/blog">المدونة</Link>
                      <Link class="nav-link p-0" href="/partnerships">الشراكات</Link>
                      <Link class="nav-link p-0" href="/f&q">الأسئلة الشائعة</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <h2 class="fw-bold fs-4 mb-4">معلومات التواصل</h2>
              
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link p-0" href="tel:920003884">
                    <i class="ti ti-phone"></i>
                    920003884
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link p-0" href="mailto:info@rewash.com">
                    <i class="ti ti-mail"></i>
                    info@rewash.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="copy_right" class="text-bg-dark p-1">
        <div class="container">
          <div class="text-center">
            <small>جميع الحقوق محفوظة لموقع ريواش &copy; {new Date().getFullYear()}</small>
          </div>
        </div>
      </section>

      <div class="whatsapp position-fixed z-1"> 
        <a href="https://wa.me/" target="_blank">
          <img src="/image/whatsapp.gif" width="55" alt="" />
        </a> 
      </div>
    </footer>
  );
}
