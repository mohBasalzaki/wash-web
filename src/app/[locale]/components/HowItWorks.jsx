import { fetchHowItWorkSection } from '@/app/utils/api';
import SectionTitle from './SectionTitle'

export default async function HowItWorks({ locale }) {
  let post = [];
  
  let steps = [];

  try {
    const data = await fetchHowItWorkSection(locale);

    post = data;

    if (data && Array.isArray(data.children)) {
      steps = data.children;
    }

  } catch (error) {
    console.error('Error fetching steps data:', error);
  }

  return (
    <section id="how_it_work" className="py-md-5 py-3">
      <div className="container position-relative">
        <div className="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div className="row row-cols-1 row-cols-md-3 position-sticky z-1 g-4">
          {steps.map((step) => (
            <div className="col text-center text-md-start" id={step.id}>
              <img src={step.image} width="80" loading="lazy" className="mb-3" alt={step.title} />
              <h2 className="fw-bold fs-5">{step.title}</h2>
              <p className="text-center text-md-start text-body-secondary m-0">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="d-none d-lg-block custom_line position-absolute border-light-subtle border-3 opacity-50 z-0 m-0"></div>
      </div>
    </section>
  );
}
