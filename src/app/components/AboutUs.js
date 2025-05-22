import { fetchHomeAbout } from '../utils/api';
import SectionTitle from './SectionTitle'
import Link from 'next/link'

export default async function AboutUs({ bgImg, classTag, hideBtn }) {
  let post = [];

  try {
    post = await fetchHomeAbout();

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
