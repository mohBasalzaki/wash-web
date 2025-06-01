import SectionTitle from './SectionTitle'
import { fetchHomeFeatures } from "@/app/utils/api";

export default async function Features({ locale }) {
  let post = [];

  let features = [];

  try {
    const data = await fetchHomeFeatures(locale);

    post = data;

    if (data && Array.isArray(data.children)) {
      features = data.children;
    }

  } catch (error) {
    console.error('Error fetching features data:', error);
  }

  return (
    <section id="features" class="py-md-5 py-3">
      <div class="container" id={post.id}>
        <div class="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div class="row row-cols-2 row-cols-md-4 g-4">
          {features.map((feature) => (
            <div class="col" id={feature.id}>
              <img src={feature.image} width="80" loading="lazy" class="mb-3" alt={feature.title} />
              <h2 class="fw-bold fs-5">{feature.title}</h2>
              <p class="text-justify text-body-secondary m-0">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
