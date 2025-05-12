import React from 'react'
import SectionTitle from './SectionTitle'

export default function HowItWorks() {
  const steps = [
    {
      img: "image/section_3_img_1.svg",
      title: "حمل التطبيق",
      description: "ابدأ بفتح تطبيق ريواش، وتصفح قائمة خدمات العناية بالسيارات المصممة لتناسب احتياجاتك سواء غسيل خارجي، داخلي، أو تنظيف شامل."
    },
    {
      img: "image/section_3_img_2.svg",
      title: "نصل إليك في الوقت",
      description: "فريقنا المحترف يصل إليك أينما كنت – في المنزل، العمل، أو أي مكان تختاره. نأتي مجهزين بالكامل، باستخدام أفضل المواد والمعدات."
    },
    {
      img: "image/section_3_img_3.svg",
      title: "استمتع بسيارتك",
      description: "بعد انتهاء الخدمة، ستندهش من النتيجة! نظافة مثالية، لمعان يدوم، وتجربة راقية. تقييمك يهمنا، لذا نحرص على رضاك الكامل."
    }
  ];

  return (
    <section id="how_it_work" class="py-md-5 py-3">
      <div class="container position-relative">
        <div class="mb-md-5 mb-4">
          <SectionTitle title={"كيف يعمل ريواش؟"} body={"هذا النص هو مثال لنص يمكن استبداله في نفس المكان."} />
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 position-sticky z-1 g-4">
          {steps.map((step, index) => (
            <div class="col text-center text-md-start" key={index}>
              <img src={step.img} width="80" loading="lazy" class="mb-3" alt={step.title} />
              <h2 class="fw-bold fs-5">{step.title}</h2>
              <p class="text-center text-md-start text-body-secondary m-0">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div class="d-none d-lg-block custom_line position-absolute border-light-subtle border-3 opacity-50 z-0 m-0"></div>
      </div>
    </section>
  );
}
