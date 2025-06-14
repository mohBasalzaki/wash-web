import Link from 'next/link'
import SectionTitle from './SectionTitle'
import PricingRow from './PricingRow'
import { useTranslations } from 'next-intl';

export default function PricingSection({ locale }) {
  const t = useTranslations('Home', { locale });

  return (
    <section id="pricing-section" className="py-0">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-md-5 mb-4">
          <SectionTitle title={"أسعارنا"} body={"إختر الباقة المناسبة لك"} />
          <Link href={`/${locale}/pricing`} className="d-none d-md-block btn btn-outline-primary px-4">{t('read_more')}</Link>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <PricingRow limit={3} />
        </div>

        <div className="text-center">
          <Link href={`/${locale}/pricing`} className="d-md-none btn btn-outline-primary px-4 mt-4">{t('read_more')}</Link>
        </div>
      </div>
    </section>
  );
}
