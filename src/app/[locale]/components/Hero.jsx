import Link from 'next/link'
import { fetchHomeHero } from "@/app/utils/api";
import { getTranslations } from 'next-intl/server';

export default async function Hero({ locale }) {
  const t = await getTranslations('Home', { locale });

  let post = [];

  try {
    post = await fetchHomeHero(locale);

  } catch (error) {
    console.error('Error fetching hero data:', error);
  }

  return (
    <section id="hero_section" className="bg-img d-flex align-items-center py-md-5 py-3" style={{ backgroundImage: `url('/image/hero-bg.webp')` , height:`95vh` }}>
      <div className="container" id={post.id}>
        <div className="row row-cols-1 row-cols-md-2 align-items-center g-4">
          <div className="col order-1 order-md-0">
            <span className="bg-body-secondary text-body-secondary rounded py-2 px-4">{post.title}</span>

            <div className="section_content my-md-4 my-3">
              <h1 className="fw-bold fs-1">{post.sub_title}</h1>
              <p className="text-justify text-body-secondary m-0">{post.description}</p>
            </div>

            <div className="d-flex justify-content-center justify-content-md-start">
              <Link href={`/${locale}/#pricing-section`} className="btn btn-primary px-4 ms-2">{t('booking')}</Link>

              <Link href={`/${locale}/#promo_section`} className="btn btn-outline-primary px-4 ms-2">{t('download_app')}</Link>
            </div>
          </div>

          <div className="col text-center">
            <img src={post?.image || "/image/mobile_1.webp"} className="w-100" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}