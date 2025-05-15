import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default async function AboutUs({ bgImg, classTag, hideBtn }) {
  let post = {
    id: 1,
    title: 'عنوان افتراضي',
    sub_title: 'وصف افتراضي',
    description: 'تفاصيل افتراضية',
    image: '/image/logo_2.webp'
  };

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/about', { cache: 'no-store' });
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
    console.error('Error fetching about data:', error);
  }

  return (
    <section id="about_section" class="py-md-5 py-3">
      <div class="container" key={post.id}>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col">
            <div class="card h-50vh bg-img bg-primary border-0 p-5" style={{ backgroundImage: `url(${bgImg})` }}>
              <img 
                src="/image/logo_2.webp"
                class={`m-auto ${classTag}`}
                width="250" 
                loading="lazy" 
                alt="ReWash Logo" 
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-4">
              <SectionTitle title={post.title} body={post.description} />
            </div>
            <Link href={"/about"} class={`btn btn-primary px-4 ${hideBtn}`}>قراءة المزيد</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
