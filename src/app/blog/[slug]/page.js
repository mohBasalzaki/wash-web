import Link from "next/link";

export async function generateMetadata({ params }) {
  const res = await fetch("https://rewash-store.bright-ignite.com/api/blogs", {
    cache: "no-store",
  });
  const json = await res.json();

  if (json?.status && Array.isArray(json.data)) {
    const posts = json.data.map((item) => ({
      title: item.title?.ar || item.title?.en || "",
      description: item.description?.ar || item.description?.en || "",
      slug: item.slug?.ar || item.slug?.en || "",
    }));

    const matchedPost = posts.find((p) => p.slug === params.slug);

    if (matchedPost) {
      return {
        title: `ريواش | ${matchedPost.title}`,
        description: matchedPost.description,
      };
    }
  }

  return {
    title: "ريواش | المقال غير موجود",
    description: "لم يتم العثور على المقال المطلوب",
  };
}

export default async function BlogPostPage({ params }) {
  const res = await fetch("https://rewash-store.bright-ignite.com/api/blogs", {
    cache: "no-store",
  });
  const json = await res.json();

  if (!json?.status || !Array.isArray(json.data)) {
    return <div class="text-center">حدث خطأ أثناء جلب البيانات.</div>;
  }

  const posts = json.data.map((item) => ({
    id: item.id,
    title: item.title?.ar || item.title?.en || "",
    description: item.description?.ar || item.description?.en || "",
    image: item.image,
    slug: item.slug?.ar || item.slug?.en || "",
    tag: item.tag?.ar || item.tag?.en || "",
  }));

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <div class="text-center">Post not found.</div>;
  }

  return (
    <>
      <section id="breadcrumb" class="pb-3">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb m-0">
              <li class="breadcrumb-item">
                <Link href="/" class="text-decoration-none text-body-secondary">
                  الرئيسية
                </Link>
              </li>

              <li class="breadcrumb-item">
                <Link href="/blog" class="text-decoration-none text-body-secondary">
                  المدونة
                </Link>
              </li>

              <li class="breadcrumb-item text-body" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section id="blog_page" class="pb-4">
        <div class="container">
          <div
            class="bg-img h-50vh rounded mb-md-4 mb-3"
            style={{ backgroundImage: `url(${post.image})` }}
            alt={post.title}
          ></div>

          <div class="section_content mb-0">
            <div class="section_title">
              <h1 class="fw-bold fs-3 mb-1 mt-0">{post.title}</h1>
              <p class="text-justify text-body-secondary m-0">{post.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}