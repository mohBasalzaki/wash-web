import SectionTitle from './SectionTitle'

export default async function Content() {
  let post = {
    id: null,
    title: 'عنوان افتراضي',
    sub_title: 'وصف افتراضي',
    description: 'خدمة غسيل السيارات المتنقلة المتميزة',
    image: ''
  };

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/about', { cache: 'no-store' });
    const json = await res.json();

    if (json.status && json.data && Array.isArray(json.data.children)) {
      const item = json.data.children.find(child => child.id === 12);

      if (item) {
        post = {
          id: item.id,
          title: item.title,
          sub_title: item.sub_title,
          description: item.description,
          image: item.image
        };
      }
    }
  } catch (error) {
    console.error('Error fetching about data:', error);
  }

  return (
    <section id="content" class="pb-md-5 pb-3">
        <div class="container">
            <div class="section_content mb-0">
                <SectionTitle title={post.title} body={post.description} />
            </div>
        </div>
    </section>
  );
}
