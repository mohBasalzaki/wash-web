import { fetchPosts } from "@/app/utils/api";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from "../../components/PageMetadata";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'blog' });
}

export default async function BlogPostPage({ params }) {
  const { locale, slug } = params;
  const t = await getTranslations('Home');

  let posts = [];
  try {
    posts = await fetchPosts(locale);
  } catch (error) {
    console.error('Error fetching Blogs data:', error);
  }

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-5">
        <h1>{t('blog_not_found')}</h1>
      </div>
    );
  }

  return (
    <>
      <section id="breadcrumb" className="pb-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <Link href={`/${locale}`} className="text-decoration-none text-body-secondary">
                  {t('home')}
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href={`/${locale}/blog`} className="text-decoration-none text-body-secondary">
                  {t('blog')}
                </Link>
              </li>
              <li className="breadcrumb-item text-body" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section id="blog_page" className="pb-4">
        <div className="container">
          <div
            className="bg-img h-50vh rounded mb-md-4 mb-3"
            style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
            role="img"
            aria-label={post.title}
          ></div>

          <div className="section_content mb-0">
            <div className="section_title">
              <h1 className="fw-bold fs-3 mb-1 mt-0">{post.title}</h1>

              <div
                className="text-justify text-body mt-3"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
