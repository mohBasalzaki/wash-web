import React from 'react'

export default async function ServicesCard() {
  let services = [];

  try {
    const res = await fetch('https://rewash-store.bright-ignite.com/api/home/services', { cache: 'no-store' });
    const json = await res.json();

    if (json.status && json.data && Array.isArray(json.data.children)) {
      services = json.data.children;
    }
  } catch (error) {
    console.error('Error fetching services data:', error);
  }

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
        {services.length > 0 ? (
        services.map((service) => (
        <div class="col mb-md-5 mb-0" key={service.id}>
            <div class="card bg-body-tertiary text-center position-relative border-0 p-md-4 p-3">
                <img src={service.image} class="service_card_img d-none d-md-block position-absolute" width={80} alt={service.title} />
                <img src={service.image} class="service_card_img d-md-none" width={80} alt={service.title} />
                <h1 class="fw-semibold fs-5 mt-md-4 mt-0 pt-2">{service.title}</h1>
                <p class="text-body-secondary m-0">{service.description}</p>
            </div>
        </div>
        ))
      ) : (
        <div className="col">
          <p className="text-center text-muted">لا توجد خدمات متاحة حالياً.</p>
        </div>
      )}
    </div>
  );
}
