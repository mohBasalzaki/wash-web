import Breadcrumb from '../components/Breadcrumb'
import { generatePageMetadata } from '../components/PageMetadata';
import SectionTitle from '../components/SectionTitle';
import ServicesCard from '../components/ServicesCard'
import { fetchHomeServices } from "@/app/utils/api";
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'services' });
}

export default async function Services({ params }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'Home' });

  let post = [];

  try {
    post = await fetchHomeServices();
  } catch (error) {
    console.error('Error fetching services data:', error);
  }

  return (
    <>
      <Breadcrumb title={t('services')} />

      <section id="services_page" class="pb-0">
        <div class="container" key={post.id}>
          <div class="d-block d-md-none mb-4">
            <SectionTitle title={post.title} body={post.description} />
          </div>

          <div class="card h-50vh d-none d-md-flex justify-content-center bg-img text-bg-dark border-0 p-5" style={{ backgroundImage: "url('/image/jan-kopriva-sh_7sFEFICI-unsplash.png')" }}>
            <SectionTitle title={post.title} />
          </div>

          <div class="service_card pt-0 my-4 my-md-0">
            <div class="px-md-5 px-0">
              <ServicesCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
