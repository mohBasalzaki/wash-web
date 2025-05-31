import Link from 'next/link';

export default function PostCard({ post }) {

  return (
    <div class="col">
      <Link href={`/blog/${post.slug}`}>
        <div
          class="bg-img h-30vh rounded p-5"
          style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }}
        />
      </Link>

      <div class="card-body mt-2">
        <small class="text-body-secondary">{post.category?.name}</small>

        <h1 class="text-truncate fw-bold fs-5 my-2">
          <Link
            href={`/blog/${post.slug}`}
            class="text-body text-decoration-none"
          >
            {post.title}
          </Link>
        </h1>

        <p class="text-body-secondary text-truncate line-clamp-2 m-0">{post.description}</p>
      </div>
    </div>
  );
}
