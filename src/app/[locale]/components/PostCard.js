import Link from 'next/link';

export default function PostCard({ post, locale }) {
  if (!post) return null;

  return (
    <div className="col">
      <Link href={`/${locale}/blog/${post.slug}`}>
        <div
          className="bg-img h-30vh rounded p-5"
          style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
        ></div>
      </Link>

      <div className="card-body mt-2">
        <small className="text-body-secondary">{post.category?.name}</small>

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
  );
}
