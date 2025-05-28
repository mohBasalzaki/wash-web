import Link from 'next/link'
import SectionTitle from './SectionTitle'
import ProductsRow from './ProductsRow'

export default function Products() {
  return (
    <section id="products" class="py-md-5 py-3">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-md-5 mb-4">
          <SectionTitle title={"منتجات للعناية بسيارتك"} body={"اشترِ منتجات العناية بالسيارة التي نستخدمها في خدماتنا."} />
          <Link href={"/store"} class="d-none d-md-block btn btn-outline-primary px-4">عرض المزيد</Link>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <ProductsRow />
        </div>

        <div class="text-center">
          <Link href={"/store"} class="d-md-none btn btn-outline-primary px-4 mt-4">عرض المزيد</Link>
        </div>
      </div>
    </section>
  );
}
