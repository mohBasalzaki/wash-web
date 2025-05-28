import Breadcrumb from '../components/Breadcrumb'
import SectionTitle from '../components/SectionTitle'
import PricingRow from '../components/PricingRow'
import { useTranslations } from 'next-intl';
import { generatePageMetadata } from '../components/PageMetadata';

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'pricing' });
}

export default function Pricing() {
    const t = useTranslations('Home');

    return (
        <>
            <Breadcrumb title={t('pricing')} />
    
            <section id="pricing_page" class="pb-md-5 pb-3">
                <div class="container">
                    <div class="mb-4">
                        <SectionTitle title={"اكتشف باقات ريواش"} body={"إختر الباقة المناسبة للعناية بسيارتك."} />
                    </div>
                    
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <PricingRow />
                    </div>
                </div>
            </section>
        </>
    )
}
