import Link from 'next/link';

export default function PostCard({ post, locale }) {

  return (
    <div class="col">
      <Link href={`/${locale}/blog/${post.slug[locale]}`}>
        <div
          class="bg-img h-30vh rounded p-5"
          style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
        />
      </Link>

      <div class="card-body mt-2">
        <small class="text-body-secondary">{post.category?.name}</small>

        <h1 class="text-truncate fw-bold fs-5 my-2">
          <Link
            href={`/${locale}/blog/${post.slug[locale]}`}
            class="text-body text-decoration-none"
          >
            {post.title}
          </Link>
        </h1>

        <p class="text-body-secondary text-truncate line-clamp-2 m-0">{post.description[locale]}</p>
      </div>
    </div>
  );
}
