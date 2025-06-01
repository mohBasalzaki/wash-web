import { fetchHomeAbout } from "@/app/utils/api";
import SectionTitle from './SectionTitle'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server';

export default async function AboutUs({ locale, bgImg, classTag, hideBtn }) {
  const t = await getTranslations('Home', { locale });

  let post = [];

  try {
    post = await fetchHomeAbout(locale);

  } catch (error) {
    console.error('Error fetching about data:', error);
  }

  return (
    <section id="about_section" className="py-md-5 py-3">
      <div className="container" id={post.id}>
        <div className="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div className="col">
            <div className="card h-50vh bg-img bg-primary border-0 p-5" style={{ backgroundImage: `url(${bgImg})` }}>
              <img 
                src="/image/logo_2.webp"
                className={`m-auto ${classTag}`}
                width="250" 
                loading="lazy" 
                alt="ReWash Logo" 
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-4">
              <SectionTitle title={post.title} body={post.description} />
            </div>
            <Link href={`/${locale}/about`} className={`btn btn-primary px-4 ${hideBtn}`}>{t('read_more')}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
