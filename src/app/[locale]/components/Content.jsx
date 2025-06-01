import SectionTitle from './SectionTitle'
import { fetchHomeAbout } from "@/app/utils/api";

export default async function Content({ locale }) {
  let post = null;

  try {
    const data = await fetchHomeAbout(locale);

    if (data && Array.isArray(data.children)) {
      post = data.children.find(child => child.id === 12);
    }
  } catch (error) {
    console.error('Error fetching about data:', error);
  }

  return (
    <section id="content" className="pb-md-5 pb-3">
        <div className="container">
            <div className="section_content mb-0">
                <SectionTitle title={post.title} body={post.description} />
            </div>
        </div>
    </section>
  );
}
