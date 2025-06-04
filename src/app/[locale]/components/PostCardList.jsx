'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function PostCardList({ posts, locale }) {
  const t = useTranslations('Home');

  if (!posts || posts.length === 0) return null;

  const postsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-md-4 g-3">
        {currentPosts.map((post) => (
          <div key={post.id} className="col">
            <Link href={`/${locale}/blog/${post.slug}`}>
              <div
                className="bg-img h-30vh rounded p-5"
                style={{
                  backgroundImage: `url(${post?.image || "/image/about_img.svg"})`,
                }}
              ></div>
            </Link>

            <div className="card-body mt-2">
              <small className="text-body-secondary">
                {post.category?.name}
              </small>

              <h1 className="text-truncate fw-bold fs-5 my-2">
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="text-body text-decoration-none"
                >
                  {post.title}
                </Link>
              </h1>

              <p className="text-body-secondary text-truncate line-clamp-2 m-0">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Blog pagination" className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => goToPage(currentPage - 1)}>
                {t('previous')}
              </button>
            </li>

            {[...Array(totalPages)].map((_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button className="page-link px-3" onClick={() => goToPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link px-3" onClick={() => goToPage(currentPage + 1)}>
                {t('next')}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}