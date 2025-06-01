import Link from 'next/link';

export default function FeaturePost({ post, locale }) {
  if (!post) return null;

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="card text-bg-dark position-relative border-0"
      id={post.id}
    >
      <div
        className="card-img bg-img h-50vh"
        style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
        alt={post.title}
      ></div>

      <div className="card-img-overlay p-0">
        <div className="position-absolute bottom-0 p-md-4 p-0 m-4">
          {post?.category?.name && (
            <span className="py-2 px-3 bg-light bg-opacity-25 rounded">
              {post.category.name}
            </span>
          )}
          <h1 className="fw-bold fs-5 mt-3 mb-0">{post.title}</h1>
        </div>
      </div>
    </Link>
  );
}