import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default function Services() {
  return (
    <section id="services_section" class="py-md-5 py-3">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col order-1 order-md-0">
            <div class="mb-4">
              <SectionTitle title={"خدمات ريواش"} body={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة."} />
            </div>
            <Link href="/services" class="btn btn-primary px-4">خدماتنا</Link>
          </div>
          <div class="col">
            <div class="card h-50vh bg-img border-0 p-5" style={{backgroundImage: 'url("image/services_img.svg")'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
