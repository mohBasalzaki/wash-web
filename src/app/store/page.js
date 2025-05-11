import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import ProductsRow from '../components/ProductsRow';
import SectionTitle from '../components/SectionTitle';

export default function Store() {
  return (
    <>
      <Breadcrumb title={"المتجر"} />

      <section id="store_page" class="pb-md-5 pb-3">
        <div class="container">
          <div class="mb-4">
            <SectionTitle title={"اكتشف منتجات ريواش"} body={"اشترِ منتجات العناية بالسيارة التي نستخدمها في خدماتنا."} />
          </div>
          <ProductsRow />
        </div>
      </section>
    </>
  );
}