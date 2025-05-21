import Link from 'next/link'

export default function FeaturePost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} class="card text-bg-dark position-relative border-0">
        <div class="card-img bg-img h-50vh" style={{backgroundImage: `url(${post.image})`}} alt={post.title}></div>

        <div class="card-img-overlay p-0">
            <div class="position-absolute bottom-0 p-md-4 p-0 m-4">
                {post.tag && (
                  <span class="py-2 px-3 bg-light bg-opacity-25 rounded">{post.tag}</span>
                )}
                <h1 class="fw-bold fs-5 mt-3 mb-0">{post.title}</h1>
            </div>
        </div>
    </Link>
  )
}
