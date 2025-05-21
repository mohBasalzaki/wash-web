import SectionTitle from './SectionTitle'

export default async function Features() {
  let post = {
    id: null,
    title: 'عنوان افتراضي',
    sub_title: 'وصف افتراضي',
    description: '',
    image: ''
  };

  let features = [];

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/features', { cache: 'no-store' });
    const json = await res.json();

    if (json.status && json.data) {
      post = {
        id: json.data.id,
        title: json.data.title,
        sub_title: json.data.sub_title,
        description: json.data.description,
        image: json.data.image
      };

      features = json.data.children || [];
    }
  } catch (error) {
    console.error('Error fetching features data:', error);
  }

  return (
    <section id="features" class="py-md-5 py-3">
      <div class="container" key={post.id}>
        <div class="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div class="row row-cols-2 row-cols-md-4 g-4">
          {features.map((feature) => (
            <div class="col" key={feature.id}>
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
