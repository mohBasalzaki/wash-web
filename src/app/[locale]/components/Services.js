import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { fetchHomeServices } from "@/app/utils/api";
import { getTranslations } from 'next-intl/server';

export default async function Services({ locale }) {
  const t = await getTranslations('Home', { locale });

  let post = [];

  try {
    post = await fetchHomeServices(locale);
    
  } catch (error) {
    console.error('Error fetching services data:', error);
  }

  return (
    <section id="services_section" class="py-md-5 py-3">
      <div class="container" id={post.id}>
        <div class="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div class="col order-1 order-md-0">
            <div class="mb-4">
              <SectionTitle title={post.title} body={post.description} />
            </div>

            <Link href={`/${locale}/services`} class="btn btn-primary px-4">{t('read_more')}</Link>
          </div>

          <div class="col">
            <div class="card h-50vh bg-img border-0 p-5" style={{backgroundImage: `url(${post?.image || "/image/services_img.svg"})`}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
