import Link from 'next/link';
import React from 'react'

export default function AppPromotion() {
  return (
    <section id="promo_section" class="py-md-5 py-3 mt-auto mt-md-5">
      <div class="container">
        <div class="card text-bg-primary border-0 position-relative p-md-5 p-4">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col d-md-none text-center">
              <img src="/image/mobile_1.webp" class="w-100" loading="lazy" alt="" />
            </div>

            <div class="col">
              <div class="mb-4">
                <h1 class="fw-bold fs-3">هذا النص هو مثال لنص يستبدل</h1>
                <p class="text-justify m-0">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص</p>
              </div>

              <div class="d-grid d-md-flex align-items-center">
                <Link href="#" class="btn btn-light rounded-1 px-3" target="_blank" rel="noreferrer">
                  <div class="d-flex justify-content-center align-items-center">
                    <img src="/image/google_play.webp" width="30" loading="lazy" alt="Google Play" />
                    <div class="text-start ms-2">
                      <small class="m-0">تنزيل من</small>
                      <h6 class="m-0">Google Play</h6>
                    </div>
                  </div>
                </Link>

                <Link href="#" class="btn btn-light rounded-1 px-3 ms-md-3 mt-md-0 mt-3" target="_blank" rel="noreferrer">
                  <div class="d-flex justify-content-center align-items-center">
                    <img src="/image/app_store.webp" width="30" loading="lazy" alt="App Store" />
                    <div class="text-start ms-2">
                      <small class="m-0">تنزيل من</small>
                      <h6 class="m-0">Apple Store</h6>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="col d-none d-md-block">
              <img 
                src="/image/mobile_2.webp" 
                class="d-none d-md-block position-absolute z-1" 
                loading="lazy" 
                style={{
                  width: "30vh",
                  bottom: "0px",
                  left: "10vw"
                }}
                alt="Mobile app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
