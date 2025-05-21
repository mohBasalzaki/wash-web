import Link from 'next/link'

export default async function Footer() {
  let post = {
    phone: "00966505982918",
    email: "info@rewash.store",
    address: "ريواش",
    store_link: null,
    facebook: null,
    instagram: null,
    twitter: null,
    site_name: "ريواش",
    site_description: "",
    site_logo: "",
    site_favicon: ""
  };

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/info', { cache: 'no-store' });
    const json = await res.json();

    if (json.status && json.data) {
      post = {
        phone: json.data.phone,
        email: json.data.email,
        address: json.data.address,
        store_link: json.data.store_link,
        facebook: json.data.facebook,
        instagram: json.data.instagram,
        twitter: json.data.twitter,
        site_name: json.data.site_name,
        site_description: json.data.site_description,
        site_logo: json.data.site_logo,
        site_favicon: json.data.site_favicon,
      };
    }
  } catch (error) {
    console.error('Error fetching Site Info:', error);
  };

  const cleanedPhone = post.phone.startsWith("00")
    ? post.phone.slice(2)
    : post.phone;

  const year = new Date().getFullYear();

  return (
    <footer>
      <section id="footer_section" class="bg-img text-bg-dark py-md-5 py-3" style={{backgroundImage: `url('image/footer_bg.webp')`}}>
        <div class="container">
          <div class="row g-4">
            <div class="col-12 col-md-6">
              <img src="/image/logo.svg" class="mb-3" width="120" alt={post.site_name} />
              
              <p class="text-justify">{post.site_description}</p>
              
              <ul class="d-flex p-0 m-0">
                <li class="list-unstyled me-3">
                  <Link href={"#"} class="text-decoration-none">
                    <img src="/image/instagram.png" width="25" loading="lazy" alt="instagram" />
                  </Link>
                </li>
                <li class="list-unstyled me-3">
                  <Link href={"#"} class="text-decoration-none">
                    <img src="/image/x-twitter.png" width="22" loading="lazy" alt="x-twitter" />
                  </Link>
                </li>
                <li class="list-unstyled me-3">
                  <Link href={"#"} class="text-decoration-none">
                    <img src="/image/facebook.png" width="25" loading="lazy" alt="facebook" />
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-3">
              <h2 class="fw-bold fs-4 mb-4">روابط سريعة</h2>

              <div class="row row-cols-2">
                <div class="col">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link p-0" href={"/"}>الرئيسية</Link>
                      <Link class="nav-link p-0" href={"/about"}>من نحن</Link>
                      <Link class="nav-link p-0" href={"/services"}>الخدمات</Link>
                      <Link class="nav-link p-0" href={"/store"}>المتجر</Link>
                    </li>
                  </ul>
                </div>

                <div class="col">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link p-0" href={"/pricing"}>الباقات</Link>
                      <Link class="nav-link p-0" href={"/blog"}>المدونة</Link>
                      <Link class="nav-link p-0" href={"/partnerships"}>الشراكات</Link>
                      <Link class="nav-link p-0" href={"/f&q"}>الأسئلة الشائعة</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-3">
              <h2 class="fw-bold fs-4 mb-4">معلومات التواصل</h2>
              
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link p-0 mb-1" href={`tel:${post.phone}`}>
                    <img src="/image/phone.png" width="25" loading="lazy" class="me-2" alt={post.phone} />
                    {post.phone}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link p-0 mb-1" href={`mailto:${post.email}`}>
                    <img src="/image/email.png" width="25" loading="lazy" class="me-2" alt={post.email} />
                    {post.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="copy_right" class="text-bg-dark p-1">
        <div class="container">
          <div class="text-center">
            <small>جميع الحقوق محفوظة لموقع ريواش &copy; {year}</small>
          </div>
        </div>
      </section>

      <div class="whatsapp position-fixed z-1"> 
        <Link href={`https://wa.me/${cleanedPhone}`} target="_blank">
          <img src="/image/whatsapp.gif" width="55" alt="" />
        </Link> 
      </div>
    </footer>
  );
}
