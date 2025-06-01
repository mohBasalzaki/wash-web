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

              <div className="d-grid d-md-flex align-items-center">
                <Link href={post.button_link.google} className="btn btn-light rounded-1 px-3" target="_blank" rel="noreferrer">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/image/google_play.webp" width="30" loading="lazy" alt="Google Play" />
                    <div className="text-start ms-2">
                      <small className="m-0">تنزيل من</small>
                      <h6 className="m-0">Google Play</h6>
                    </div>
                  </div>
                </Link>

                <Link href={post.button_link.apple} className="btn btn-light rounded-1 px-3 ms-md-3 mt-md-0 mt-3" target="_blank" rel="noreferrer">
                  <div className="d-flex justify-content-center align-items-center">
                    <img src="/image/app_store.webp" width="30" loading="lazy" alt="App Store" />
                    <div className="text-start ms-2">
                      <small className="m-0">تنزيل من</small>
                      <h6 className="m-0">Apple Store</h6>
                    </div>
                  </div>
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
