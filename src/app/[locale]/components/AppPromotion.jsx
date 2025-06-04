import Link from 'next/link'
import { fetchHomePromo } from "@/app/utils/api";

export default async function AppPromotion({ locale }) {
  let post = [];

  try {
    const data = await fetchHomePromo(locale);

    post = data;
    
  } catch (error) {
    console.error('Error fetching hero data:', error);
  }

  return (
    <section id="promo_section" className="py-md-5 py-3 mt-auto mt-md-5">
      <div className="container" id={post.id}>
        <div className="card text-bg-primary border-0 position-relative p-md-5 p-4">
          <div className="row row-cols-1 row-cols-md-2 g-0">
            <div className="col d-md-none text-center">
              <img src={post?.image || "/image/mobile_1.webp"} className="w-100" loading="lazy" alt={post.title} />
            </div>

            <div className="col">
              <div className="mb-4">
                <h1 className="fw-bold fs-3">{post.title}</h1>
                <p className="text-justify m-0">{post.description}</p>
              </div>

              <div className="d-flex flex-column flex-md-row align-items-center gap-2">
                <Link href={post.button_link.google} target="_blank" rel="noreferrer">
                  <img src="/image/googleStore.png" className="w-100" loading="lazy" alt="Google Play" />
                </Link>

                <Link href={post.button_link.apple} target="_blank" rel="noreferrer">
                  <img src="/image/appStore.png" className="w-100" loading="lazy" alt="App Store" />
                </Link>

                <Link href={"#"} target="_blank" rel="noreferrer">
                  <img src="/image/huaweiStore.png" className="w-100" loading="lazy" alt="Huawei Store" />
                </Link>
              </div>
            </div>

            <div className="col d-none d-md-block">
              <img 
                src={"/image/mobile_2.webp" || post.image} 
                className="d-none d-md-block promo--img position-absolute z-1" 
                loading="lazy"
                alt={post.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
