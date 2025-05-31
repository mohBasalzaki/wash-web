import SectionTitle from './SectionTitle'
import { fetchHomeTestimonials } from "@/app/utils/api";

export default async function Testimonials() {
  let post = [];

  let testimonials = [];

  try {
    const data = await fetchHomeTestimonials();

    post = data;

    if (data && Array.isArray(data.children)) {
      testimonials = data.children;
    }
    
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
  }

  return (
    <section id="testimonials" class="py-md-5 py-3">
      <div class="container">
        <div class="mb-md-5 mb-4">
          <SectionTitle title={post.title} body={post.sub_title} />
        </div>
        
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {testimonials.map((testimonial) => (
            <div class="col" id={testimonial.id}>
              <div class="card bg-body-tertiary border-0 p-md-4 p-3">
                <div class="d-flex align-items-center mb-3">
                  <div
                    class="bg-img rounded p-4"
                    style={{ backgroundImage: `url(${testimonial?.image || "/image/about_img.svg"})` }}
                    alt={testimonial.title}
                  ></div>

                  <div class="ms-2">
                    <h6 class="fw-bold mb-0">{testimonial.title}</h6>
                    <small class="text-body-secondary m-0">{testimonial.sub_title}</small>
                  </div>

                  <div class="ms-auto">
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                    <i class="ti ti-star-filled text-warning"></i>
                  </div>
                </div>
                
                <p class="text-start text-body-secondary text-truncate line-clamp-4 m-0">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
