import React from 'react'
import SectionTitle from './SectionTitle';

export default function Features() {
  const features = [
    {
      img: "image/section_1_img_1.svg",
      title: "جودة عالية",
      description: "استخدام أدوات ومواد احترافية إيطالية."
    },
    {
      img: "image/section_1_img_2.svg",
      title: "خدمة عند الطلب",
      description: "نحن نأتي إليك، سواء كنت في منزلك، مكتبك أو أي مكان."
    },
    {
      img: "image/section_1_img_3.svg",
      title: "أسعار تنافسية",
      description: "مع ريواش، تحصل على أفضل قيمة مقابل ما تدفعه."
    },
    {
      img: "image/section_1_img_4.svg",
      title: "تطبيق سهل",
      description: "سواء كنت تطلب الخدمة لأول مرة أو من عملائنا الدائمين."
    }
  ];

  return (
    <section id="features" class="py-md-5 py-3">
      <div class="container">
        <div class="mb-md-5 mb-4">
          <SectionTitle title={"مميزات ريواش"} body={"نحن نقدم لك تجربة تسوق سريعة وآمنة مع العديد من المزايا."} />
        </div>
        
        <div class="row row-cols-2 row-cols-md-4 g-4">
          {features.map((feature, index) => (
            <div class="col" key={index}>
              <img src={feature.img} width="80" loading="lazy" class="mb-3" alt={feature.title} />
              <h2 class="fw-bold fs-4">{feature.title}</h2>
              <p class="text-justify text-body-secondary m-0">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
