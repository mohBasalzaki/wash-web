import React from 'react'
import SectionTitle from './SectionTitle';

export default function BookingModal() {
  const services = [
    {
      img: "image/services_icon.webp",
      title: "غسيل سيارة",
      description: "خدمة غسيل احترافية تصل إلى موقعك، تشمل تنظيف داخلي وخارجي، مع خيارات إضافية حسب احتياجك.",
      url: ""
    },
    {
      img: "image/store_icon.webp",
      title: "متجر ريواش",
      description: "كل ما تحتاجه للعناية بسيارتك في مكان واحد — منتجات مميزة وأدوات احترافية للتنظيف والتلميع.",
      url: ""
    }
  ];

  return (
    <div class="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen-sm-down">
            <div class="modal-content border-0">

                <div class="modal-body position-relative">
                    <img src="/image/modal_img.webp" class="w-100" loading="lazy" />

                    <button
                      type="button"
                      class="btn-close btn-close-white position-absolute m-4 p-1"
                      style={{ top: 0, left: 0, right: 'auto' }}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />

                    <div class="my-3">
                        <SectionTitle title={"حجوزات المشاريع"} body={"نقدم حلول غسيل شاملة للمؤسسات والمشاريع الكبيرة"} />
                    </div>

                    {services.map((service, index) => (
                        <a key={index} href={service.url} class="d-none btn text-start border border-light-subtle mb-3">
                            <div class="d-flex align-items-center">
                                <img src={service.img} class="me-2" width="70" />
                                <div class="d-block">
                                    <h6>{service.title}</h6>
                                    <small class="text-body-secondary">{service.description}</small>
                                </div>
                            </div>
                        </a>
                    ))}

                    <a href="#" class="btn btn-outline-success rounded-1 w-100">
                        <i class="ti ti-brand-whatsapp"></i>
                        <span class="ms-2">تواصل واتساب</span>
                    </a>
                </div>

            </div>
        </div>
    </div>
  );
}
