import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <section id="about_section" class="py-md-5 py-3">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col">
            <div class="card h-50vh bg-primary border-0 p-5">
              <img 
                src="/image/logo_2.webp" 
                class="m-auto" 
                width="250" 
                loading="lazy" 
                alt="ReWash Logo" 
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <SectionTitle title={"هذا النص هو مثال"} body={"هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة."} />
            </div>
            <Link href="/about" class="btn btn-primary px-4">قراءة المزيد</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
