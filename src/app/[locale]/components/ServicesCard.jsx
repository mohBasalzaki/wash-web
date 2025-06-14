import { fetchHomeServices } from "@/app/utils/api";

export default async function ServicesCard({ locale }) {
  let services = [];

  try {
    const data = await fetchHomeServices(locale)

    if (data && Array.isArray(data.children)) {
      services = data.children;
    }
  } catch (error) {
    console.error('Error fetching services data:', error);
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {services.map((service) => (
          <div className="col mb-md-5 mb-0" id={service.id}>
              <div className="card bg-body-tertiary text-center position-relative border-0 p-md-4 p-3">
                  <img src={service.image} className="service_card_img d-none d-md-block position-absolute" width={80} alt={service.title} />
                  <img src={service.image} className="service_card_img d-md-none" width={80} alt={service.title} />
                  <h1 className="fw-semibold fs-5 mt-md-4 mt-0 pt-2">{service.title}</h1>
                  <p className="text-body-secondary text-truncate line-clamp-2 m-0">{service.description}</p>
              </div>
          </div>
        ))}
    </div>
  );
}
