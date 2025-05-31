import { fetchHowItWorkSection } from '@/app/utils/api';
import SectionTitle from './SectionTitle'

export default async function HowItWorks() {
  let post = [];
  
  let steps = [];

  try {
    const data = await fetchHowItWorkSection();

    post = data;

    if (data && Array.isArray(data.children)) {
      steps = data.children;
    }

  } catch (error) {
    console.error('Error fetching steps data:', error);
  }

  return (
    <section id="how_it_work" class="py-md-5 py-3">
      <div class="container position-relative">
        <div class="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 position-sticky z-1 g-4">
          {steps.map((step) => (
            <div class="col text-center text-md-start" id={step.id}>
              <img src={step.image} width="80" loading="lazy" class="mb-3" alt={step.title} />
              <h2 class="fw-bold fs-5">{step.title}</h2>
              <p class="text-center text-md-start text-body-secondary m-0">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div class="d-none d-lg-block custom_line position-absolute border-light-subtle border-3 opacity-50 z-0 m-0"></div>
      </div>
    </section>
  );
}
