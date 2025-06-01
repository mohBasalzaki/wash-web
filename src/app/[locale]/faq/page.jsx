import Breadcrumb from '../components/Breadcrumb'
import { generatePageMetadata } from '../components/PageMetadata';
import SectionTitle from '../components/SectionTitle'
import { fetchFaq } from '@/app/utils/api';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'faq' });
}

export default async function FAQ({ params }) {
  const locale = params.locale;
  const t = await getTranslations('Home', { locale });

  let post = {};
  let accordions = [];

  try {
    const data = await fetchFaq(locale);

    if (Array.isArray(data) && data.length > 0) {
      post = data[0];
      accordions = data[0].contents || [];
    }

  } catch (error) {
    console.error('Error fetching FAQ data:', error);
  }

  return (
    <>
      <Breadcrumb title={t('faq')} />

      <section id="faq_page" className="pb-4">
        <div className="container">
          <div className="mb-4">
            <SectionTitle title={t('faq')} body={t('faq_subtitle')} />
          </div>

          <div className="accordion" id="accordionExample">
            {accordions.map((accordion, index) => (
              <div key={index} className="accordion-item bg-body-tertiary rounded border-0 mb-3">
                <h2 className="accordion-header" id={`heading-${index}`}>
                  <button
                    className="accordion-button bg-body-tertiary rounded shadow-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                  >
                    {accordion.title}
                  </button>
                </h2>

                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse bg-body-tertiary rounded-bottom"
                  aria-labelledby={`heading-${index}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body pt-0">
                    <small className="text-body-secondary m-0">{accordion.description}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
