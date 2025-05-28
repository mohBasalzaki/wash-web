import Link from 'next/link'

export default function MostCommonPost({ posts, locale }) {

    return (
        <>
            {posts.map((post) => (
                <div key={post.id} class="row align-items-center mb-md-1 mb-2 g-0">
                    <div class="col-4">
                        <Link href={`/${locale}/blog/${post.slug[locale]}`}>
                            <div class="bg-img rounded p-5" style={{ backgroundImage: `url(${post?.image || "/image/about_img.svg"})` }} alt={post.title}></div>
                        </Link>
                    </div>
                    
                    <div class="col-8 ps-3">
                        <div class="card-body">
                            <small class="text-body-secondary">{post.category?.name}</small>
                            <h1 class="fw-bold fs-6 mt-1 mb-0">
                                <Link href={`/${locale}/blog/${post.slug[locale]}`} class="text-body text-decoration-none">{post.title[locale]}</Link>
                            </h1>
                            <div class="text-body-secondary text-truncate line-clamp-2 m-0">{post.description[locale]}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
