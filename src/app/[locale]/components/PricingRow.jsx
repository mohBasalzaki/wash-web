import BookingButton from './BookingButton'
import { fetchWashingPlans } from "@/app/utils/api";
import { getTranslations } from 'next-intl/server';

export default async function PricingRow({ locale, limit = null }) {
  const t = await getTranslations('Home', { locale });

  let plans = [];

  try {
    const data = await fetchWashingPlans(locale);

    if (Array.isArray(data)) {
      plans = data;
    }
  } catch (error) {
    console.error('Error fetching washing plans:', error);
  }

  const visiblePlans = limit ? plans.slice(0, limit) : plans;

  return (
    <>
        {visiblePlans.map((plan) => (
            <div className="col item" id={plan.id}>
                <div className={`card text-center mb-3 ` + (plan.featured ? 'border-primary' : 'border-light-subtle')}>
                    <div className={`card-header border-0 py-3 ` + (plan.featured ? 'text-bg-primary' : '')}>
                        <p className="my-0 fw-normal">{plan.name}</p>
                    </div>
                    
                    <div className="card-body">
                        <div className="d-flex align-items-baseline justify-content-center">
                            <h1 className="card-title pricing-card-title fw-bold mt-0">
                                <span>{plan.price}</span>
                                <img src="/image/Saudi_Riyal_Symbol.svg" width="20" alt="SAR" className="ms-1" />
                            </h1>
                            <span className="mx-1">/</span>
                            <small>{t('washing_time')} "{plan.number_of_washes}"</small>
                        </div>

                        <div className="list-unstyled text-truncate line-clamp-2 mt-3 mb-4">
                          <small>
                            {plan.description}
                          </small>
                        </div>
                        
                        <BookingButton dataPackage={plan.subscription_package} />
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}
