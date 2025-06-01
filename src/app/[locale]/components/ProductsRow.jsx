import Link from 'next/link'

export default function ProductsRow() {
  const products = [
    {
      img: "/image/product_img/product_1.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "/image/product_img/product_2.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "/image/product_img/product_3.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    },
    {
      img: "/image/product_img/product_4.webp",
      title: "شامبو غسيل",
      description: "تركيبة فعالة لإزالة الأوساخ",
      price: "16",
      originalPrice: "36",
      url: ""
    }
  ];

  return (
    <>
      {products.map((product, index) => (
        <div className="col" id={index}>
          <div className="card border-light-subtle p-3">
            <div className="position-relative">
              <img src={product.img} alt={product.title} className="card-img img-fluid w-100" />
              
              <div className="overlay d-none d-md-block rounded position-absolute z-0"></div>

              <Link className="product_btn d-none d-md-block btn btn-light position-absolute rounded-1 w-100" href={product.url} target="_blank">الطلب الان</Link>
            </div>

            <div className="card-body bg-white z-1 p-0">
                <div className="product_title my-3">
                  <h6 className="fw-bold mb-1">{product.title}</h6>
                  <small className="text-body-secondary m-0">{product.description}</small>
                </div>

                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold">{product.price}</span>
                    <img src="/image/Saudi_Riyal_Symbol.svg" width="15" alt="SAR" className="ms-1" />
                  </div>

                  <div className="d-flex align-items-center text-body-tertiary text-decoration-line-through ms-3">
                    <span className="fw-bold">{product.originalPrice}</span>
                    <img src="/image/Saudi_Riyal_Symbol.svg" width="15" alt="SAR" className="ms-1" />
                  </div>
                </div>

                <Link className="d-block d-md-none btn btn-primary rounded-1 w-100 mt-3" href={product.url} target="_blank">الطلب الان</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
