import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { fetchHomeServices } from "@/app/utils/api";

export default async function Services() {
  let post = [];

  try {
    post = await fetchHomeServices();
    
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
            <div class="card h-50vh bg-img border-0 p-5" style={{backgroundImage: `url(${"/image/services_img.svg" || post.image})`}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
