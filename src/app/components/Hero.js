import React from 'react'
import Link from 'next/link'

export default async function Hero() {
  let post = {
    id: 1,
    title: 'عنوان افتراضي',
    sub_title: 'وصف افتراضي',
    description: 'تفاصيل افتراضية',
    image: '/image/hero-bg.webp'
  };

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/hero', { cache: 'no-store' });
    const json = await res.json();

    if (json.status && json.data) {
      post = {
        id: json.data.id,
        title: json.data.title,
        sub_title: json.data.sub_title,
        description: json.data.description,
        image: json.data.image
      };
    }
  } catch (error) {
    console.error('Error fetching hero data:', error);
  }

  return (
    <section id="hero_section" class="bg-img d-flex align-items-center py-md-5 py-3" style={{ backgroundImage: `url('image/hero-bg.webp')` , height:`95vh` }}>
      <div class="container" key={post.id}>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col order-1 order-md-0">
            <span class="bg-body-secondary text-body-secondary rounded py-2 px-4">{post.title}</span>

            <div class="section_content my-md-4 my-3">
              <h1 class="fw-bold fs-1">{post.sub_title}</h1>
              <p class="text-justify text-body-secondary m-0">{post.description}</p>
            </div>

            <div class="d-flex justify-content-center justify-content-md-start">
              <Link href={"#pricing-section"} class="btn btn-primary px-4 ms-2">احجز موعد</Link>

              <Link href="#promo_section" class="btn btn-outline-primary px-4 ms-2">حمل التطبيق</Link>
            </div>
          </div>

          <div class="col text-center">
            <img src="/image/mobile_1.webp" class="w-100" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}