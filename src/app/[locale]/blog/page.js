import Breadcrumb from '../components/Breadcrumb';
import FeaturePost from '../components/FeaturePost';
import MostCommonPost from '../components/MostCommonPost';
import { generatePageMetadata } from '../components/PageMetadata';
import PostCard from '../components/PostCard';
import { fetchPosts } from "@/app/utils/api";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'blog' });
}

async function getPosts() {
  let post = [];
      
  try {
    post = await fetchPosts();
  
  } catch (error) {
    console.error('Error fetching Blogs data:', error);
  };

  return post;
}

export default async function Blog() {
  const t = await getTranslations('Home');

  const posts = await getPosts();

  const featurePost = posts[0];
  const mostCommonPosts = posts.slice(1, 4);
  const otherPosts = posts.slice(4);

  return (
    <>
      <Breadcrumb title={t('blog')} />

      <section id="blog_page" class="pb-4">
        <div class="container">
          <div class="row mb-md-4 mb-3 g-md-4 g-3">
            <div class="col-12 col-md-8">
              <FeaturePost post={featurePost} />
            </div>

            <div class="col-12 col-md-4 d-flex flex-column justify-content-between">
              <h1 class="fw-bold fs-6 mt-0 mb-2">{t('mostPopular')}</h1>
              <MostCommonPost posts={mostCommonPosts} />
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-md-4 g-3">
            {otherPosts.map((post) => (
              <PostCard id={post.id} post={post} />
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul class="pagination d-none">
              <li class="page-item"><a class="page-link" href="#">Previous</a></li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}