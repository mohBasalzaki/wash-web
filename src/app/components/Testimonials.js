import SectionTitle from './SectionTitle'

export default function Testimonials() {
  const testimonials = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEYRnkRBLz_IlcdnSo9OwfOdnctl0J9DMTg&s",
      name: "خالد العنزي",
      role: "عميل ريواش",
      rating: 4,
      review: "خدمة ريواش فاقت توقعاتي! طلبت غسيل داخلي وخارجي من التطبيق، ووصل الفريق في الوقت المحدد وكانوا في قمة الاحترافية. السيارة صارت تلمع وكأنها توها طالعة من المعرض. أعجبني كثيرًا استخدامهم لمنتجات عالية الجودة،"
    },
    {
      img: "https://t3.ftcdn.net/jpg/03/53/59/46/360_F_353594684_Ca3p9RIc3xgQ1Y6ff7Jk6nVe54v9NbpQ.jpg",
      name: "خالد العنزي",
      role: "عميل ريواش",
      rating: 4,
      review: "خدمة ريواش فاقت توقعاتي! طلبت غسيل داخلي وخارجي من التطبيق، ووصل الفريق في الوقت المحدد وكانوا في قمة الاحترافية. السيارة صارت تلمع وكأنها توها طالعة من المعرض. أعجبني كثيرًا استخدامهم لمنتجات عالية الجودة،"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEYRnkRBLz_IlcdnSo9OwfOdnctl0J9DMTg&s",
      name: "خالد العنزي",
      role: "عميل ريواش",
      rating: 4,
      review: "خدمة ريواش فاقت توقعاتي! طلبت غسيل داخلي وخارجي من التطبيق، ووصل الفريق في الوقت المحدد وكانوا في قمة الاحترافية. السيارة صارت تلمع وكأنها توها طالعة من المعرض. أعجبني كثيرًا استخدامهم لمنتجات عالية الجودة،"
    }
  ];

  return (
    <section id="testimonials" class="py-md-5 py-3">
      <div class="container">
        <div class="mb-md-5 mb-4">
          <SectionTitle title={"قالو عنا"} body={"آراء وتقييمات المستخدمين حول تجربتهم مع تقارير"} />
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((testimonial, index) => (
            <div class="col" key={index}>
              <div class="card bg-body-tertiary border-0 p-md-4 p-3">
                <div class="d-flex align-items-center mb-3">
                  <img class="d-none" src={testimonial.img} width="50" alt={testimonial.name} />

                  <div
                    class="bg-img rounded p-4"
                    style={{ backgroundImage: `url(${testimonial.img})` }}
                    alt={testimonial.name}
                  ></div>

                  <div class="ms-2">
                    <h6 class="fw-bold mb-0">{testimonial.name}</h6>
                    <small class="text-body-secondary m-0">{testimonial.role}</small>
                  </div>

                  <div class="ms-auto">
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                  </div>
                </div>
                
                <p class="text-start text-body-secondary m-0">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
