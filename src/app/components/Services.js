import React from 'react'
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default async function Services() {
  let post = {
    id: 1,
    title: 'عنوان افتراضي',
    sub_title: 'وصف افتراضي',
    description: 'تفاصيل افتراضية',
    image: '/image/services_img.svg'
  };

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/services', { cache: 'no-store' });
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
    console.error('Error fetching services data:', error);
  }

  return (
    <section id="services_section" class="py-md-5 py-3">
      <div class="container" key={post.id}>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col order-1 order-md-0">
            <div class="mb-4">
              <SectionTitle title={post.title} body={post.description} />
            </div>

            <Link href={"/services"} class="btn btn-primary px-4">خدماتنا</Link>
          </div>

          <div class="col">
            <div class="card h-50vh bg-img border-0 p-5" style={{backgroundImage: 'url("image/services_img.svg")'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
