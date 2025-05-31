import { fetchPosts } from "@/app/utils/api";
import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from "../../components/PageMetadata";

export async function generateMetadata({ params }) {
  return await generatePageMetadata({ params, namespace: 'Home', key: 'blog' });
}

export default async function BlogPostPage({ params }) {
  const t = await getTranslations('Home');

  let posts = [];
  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error('Error fetching Blogs data:', error);
  }

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div class="container py-5">
        <h1>{t('blog_not_found')}</h1>
      </div>
    );
  }

  return (
    <>
      <section id="breadcrumb" class="pb-3">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <Link href="/" class="text-decoration-none text-body-secondary">
                  {t('home')}
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link href="/blog" class="text-decoration-none text-body-secondary">
                  {t('blog')}
                </Link>
              </li>
              <li class="breadcrumb-item text-body" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section id="blog_page" class="pb-4">
        <div class="container">
          <div
            class="bg-img h-50vh rounded mb-md-4 mb-3"
            style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
            alt={post.title}
          ></div>

          <div class="section_content mb-0">
            <div class="section_title">
              <h1 class="fw-bold fs-3 mb-1 mt-0">{post.title}</h1>

              <div
                class="text-justify text-body mt-3"
                dangerouslySetInnerHTML={{ __html: post.description }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}