import Breadcrumb from '../components/Breadcrumb';
import FeaturePost from '../components/FeaturePost';
import MostCommonPost from '../components/MostCommonPost';
import { generatePageMetadata } from '../components/PageMetadata';
import { fetchPosts } from '@/app/utils/api';
import { getTranslations } from 'next-intl/server';
import PostCardList from '../components/PostCardList';

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'blog' });
}

async function getPosts({ locale }) {
  let post = [];

  try {
    post = await fetchPosts(locale);
  } catch (error) {
    console.error('Error fetching Blogs data:', error);
  }

  return post;
}

export default async function Blog({ params }) {
  const { locale } = params;
  const t = await getTranslations('Home');
  const posts = await getPosts({ locale });

  const featurePost = posts[0];
  const mostCommonPosts = posts.slice(1, 4);
  const otherPosts = posts.slice(4);

  return (
    <>
      <Breadcrumb title={t('blog')} />

      <section id="blog_page" className="pb-4">
        <div className="container">
          <div className="row mb-md-4 mb-3 g-md-4 g-3">
            <div className="col-12 col-md-8">
              <FeaturePost post={featurePost} locale={locale} />
            </div>

            <div className="col-12 col-md-4 d-flex flex-column justify-content-between">
              <h1 className="fw-bold fs-6 mt-0 mb-2">{t('mostPopular')}</h1>
              <MostCommonPost posts={mostCommonPosts} locale={locale} />
            </div>
          </div>

          <PostCardList posts={otherPosts} locale={locale} />
        </div>
      </section>
    </>
  );
}