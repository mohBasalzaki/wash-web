import Link from 'next/link';

export default function MostCommonPost({ posts, locale }) {
  if (!posts || posts.length === 0) return null;

  return (
    <>
      {posts.map((post) => (
        <div key={post.id} id={post.id} className="row align-items-center mb-md-1 mb-2 g-0">
          <div className="col-4">
            <Link href={`/${locale}/blog/${post.slug}`}>
              <div
                className="bg-img rounded p-5"
                style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
                alt={post.title}
              ></div>
            </Link>
          </div>

          <div className="col-8 ps-3">
            <div className="card-body">
              <small className="text-body-secondary">{post?.category?.name}</small>
              <h1 className="fw-bold fs-6 mt-1 mb-0">
                <Link href={`/${locale}/blog/${post.slug}`} className="text-body text-decoration-none">
                  {post.title}
                </Link>
              </h1>
              <div className="d-none text-body-secondary text-truncate line-clamp-2 m-0">
                {post.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}