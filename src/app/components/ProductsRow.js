import Link from 'next/link'
import React from 'react'

export default function ProductsRow() {
  const products = [
    {
      img: "image/product_img/product_1.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "image/product_img/product_2.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "image/product_img/product_3.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "image/product_img/product_4.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    }
  ];

  return (
    <div class="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product, index) => (
        <div class="col" key={index}>
          <div class="card border-light-subtle p-3">
            <div class="position-relative">
              <img src={product.img} alt={product.title} class="card-img img-fluid w-100" />
              
              <div class="overlay d-none d-md-block rounded position-absolute z-0"></div>

              <Link class="product_btn d-none d-md-block btn btn-light position-absolute rounded-1 w-100" href={product.url} target="_blank">الطلب الان</Link>
            </div>

            <div class="card-body bg-white z-1 p-0">
                <div class="product_title my-3">
                  <h6 class="fw-bold mb-1">{product.title}</h6>
                  <small class="text-body-secondary m-0">{product.description}</small>
                </div>

                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <span class="fw-bold">{product.price}</span>
                    <img src="/image/Saudi_Riyal_Symbol.webp" width="15" alt="SAR" class="ms-1" />
                  </div>

                  <div class="d-flex align-items-center text-body-tertiary text-decoration-line-through ms-3">
                    <span class="fw-bold">{product.originalPrice}</span>
                    <img src="/image/Saudi_Riyal_Symbol.webp" width="15" alt="SAR" class="ms-1" />
                  </div>
                </div>

                <Link class="d-block d-md-none btn btn-primary rounded-1 w-100 mt-3" href={product.url} target="_blank">الطلب الان</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
