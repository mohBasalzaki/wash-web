import React from 'react'
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero_section" class="bg-img py-md-5 py-3" style={{backgroundImage: `url('image/hero-bg.webp')`}}>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col order-1 order-md-0">
            <span class="bg-body-secondary text-body-secondary rounded py-2 px-4">غسيل السيارات</span>

            <div class="section_content my-md-4 my-3">
              <h1 class="fw-bold fs-1">هذا النص هو مثال</h1>
              <p class="text-justify text-body-secondary m-0">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة.</p>
            </div>

            <div class="d-flex justify-content-center justify-content-md-start">
              <Link href="#pricing-section" class="btn btn-primary px-4 ms-2">احجز موعد</Link>

              <Link href="#" class="btn btn-outline-primary px-4 ms-2">حمل التطبيق</Link>
            </div>
          </div>

          <div class="col text-center">
            <img src="/image/mobile_1.webp" class="w-90" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
