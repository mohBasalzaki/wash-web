import Link from 'next/link'

export default function MostCommonPost({ posts }) {

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} class="row align-items-center mb-md-1 mb-2 g-0">
                    <div class="col-4">
                        <Link href={`/blog/${post.slug}`}>
                            <div class="bg-img rounded p-5" style={{backgroundImage: `url(${"/image/about_img.svg" || post.image})`}} alt={post.title}></div>
                        </Link>
                    </div>
                    
                    <div class="col-8 ps-3">
                        <div class="card-body">
                            <small class="text-body-secondary">{post.tag}</small>
                            <h1 class="fw-bold fs-6 mt-1 mb-0">
                                <Link href={`/blog/${post.slug}`} class="text-body text-decoration-none">{post.title}</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
