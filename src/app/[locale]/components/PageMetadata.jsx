import { getTranslations } from 'next-intl/server';
import { fetchInfo, fetchPosts } from '@/app/utils/api';

/**
 * @param {Object} params
 * @param {string} namespace
 * @param {string} key
 * @param {string} type
 */
export async function generatePageMetadata({ params, namespace = 'Home', key = 'about', type = null }) {
  try {
    const [t, info] = await Promise.all([
      getTranslations({ locale: params.locale, namespace }),
      fetchInfo()
    ]);

    if (type === 'blog') {
      const posts = await fetchPosts();
      const post = posts.find(p => p.slug === params.slug);

      if (post) {
        return {
          title: `${info?.site_name || 'ReWash'} | ${post.title}`,
          description: post.description || info?.description || '',
        };
      }

      return {
        title: `${info?.site_name || 'ReWash'} | ${t('blog')}`,
        description: t('blog_not_found'),
      };
    }

    return {
      title: `${info?.site_name || 'ReWash'} | ${t(key)}`,
      description: info?.description,
    };

  } catch (error) {
    console.error('Metadata Generation Error:', error);
  }
}