import Link from 'next/link'
import { useTranslations, useLocale } from "next-intl"

export default function Footer({ post }) {
  const t = useTranslations('Home');

  const locale = useLocale();
  
  const cleanedPhone = post.phone.startsWith("00")
    ? post.phone.slice(2)
    : post.phone;

  const year = new Date().getFullYear();

  return (
    <footer>
      <section id="footer_section" className="bg-img text-bg-dark py-md-5 py-3" style={{backgroundImage: `url('../image/footer_bg.webp')`}}>
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <img src="/image/logo.svg" className="mb-3" width="120" title={post.site_name} alt={post.site_name} />
              
              <p className="text-justify">{post.site_description}</p>
              
              <ul className="d-flex p-0 m-0">
                <li className="list-unstyled me-3">
                  <Link href={post.instagram} className="text-decoration-none" target="_blank">
                    <img src="/image/instagram.png" width="25" loading="lazy" alt="instagram" />
                  </Link>
                </li>
                <li className="list-unstyled me-3">
                  <Link href={post.twitter} className="text-decoration-none" target="_blank">
                    <img src="/image/x-twitter.png" width="22" loading="lazy" alt="x-twitter" />
                  </Link>
                </li>
                <li className="list-unstyled me-3">
                  <Link href={post.facebook} className="text-decoration-none" target="_blank">
                    <img src="/image/facebook.png" width="25" loading="lazy" alt="facebook" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-3">
              <h2 className="fw-bold fs-4 mb-4">{t('quick_links')}</h2>

              <div className="row row-cols-2">
                <div className="col">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link p-0" href={`/${locale}/`}>{t('home')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/about`}>{t('about')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/services`}>{t('services')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/store`}>{t('store')}</Link>
                    </li>
                  </ul>
                </div>

                <div className="col">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link p-0" href={`/${locale}/pricing`}>{t('pricing')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/blog`}>{t('blog')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/partnerships`}>{t('partnerships')}</Link>
                      <Link className="nav-link p-0" href={`/${locale}/faq`}>{t('faq')}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <h2 className="fw-bold fs-4 mb-4">{t('contact_info')}</h2>
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link p-0 mb-1" href={`tel:${post.phone}`}>
                    <img src="/image/phone.png" width="25" loading="lazy" className="me-2" alt={post.phone} />
                    {post.phone}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link p-0 mb-1" href={`mailto:${post.email}`}>
                    <img src="/image/email.png" width="25" loading="lazy" className="me-2" alt={post.email} />
                    {post.email}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="copy_right" className="text-bg-dark p-1">
        <div className="container">
          <div className="text-center">
            <small>{t('copy_right')} {post.site_name} &copy; {year}</small>
          </div>
        </div>
      </section>

      <div className="whatsapp position-fixed z-1"> 
        <Link href={`https://wa.me/${cleanedPhone}`} target="_blank">
          <img src="/image/whatsapp.gif" width="55" alt="" />
        </Link> 
      </div>
    </footer>
  );
}
