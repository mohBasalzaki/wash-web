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
    <section id="features" className="py-md-5 py-3">
      <div className="container" id={post.id}>
        <div className="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div className="row row-cols-2 row-cols-md-4 g-4">
          {features.map((feature) => (
            <div className="col" id={feature.id}>
              <img src={feature.image} width="80" loading="lazy" className="mb-3" alt={feature.title} />
              <h2 className="fw-bold fs-5">{feature.title}</h2>
              <p className="text-justify text-body-secondary m-0">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
