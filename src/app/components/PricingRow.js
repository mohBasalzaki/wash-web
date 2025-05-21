import React from 'react'
import BookingButton from './BookingButton'

export default function PricingRow() {
const prices = [
  {
    title: "الغسيل مرة واحدة",
    price: "45",
    time: "لليوم",
    list: [
      "غسلة واحدة",
      "( جدولها على كيفك )",
      "شامبو و ملمع للبودي الخارجي",
      "ملمع كفرات",
      "مكنسة كهربائية من الداخل",
      "تلميع الديكور الداخلي"
    ],
    url: "",
    featured: false
  },
  {
    title: "الإشتراك الشهري",
    price: "718",
    time: "للشهر",
    list: [
      "غسلة واحدة",
      "( جدولها على كيفك )",
      "شامبو و ملمع للبودي الخارجي",
      "ملمع كفرات",
      "مكنسة كهربائية من الداخل",
      "تلميع الديكور الداخلي"
    ],
    url: "",
    featured: true
  },
  {
    title: "الغسيل مرة واحدة",
    price: "45",
    time: "لليوم",
    list: [
      "غسلة واحدة",
      "( جدولها على كيفك )",
      "شامبو و ملمع للبودي الخارجي",
      "ملمع كفرات",
      "مكنسة كهربائية من الداخل",
      "تلميع الديكور الداخلي"
    ],
    url: "",
    featured: false
  }
];

  return (
    <>
        {prices.map((price, index) => (
            <div class="col item" key={index}>
                <div class={`card text-center mb-3 ` + (price.featured ? 'border-primary' : 'border-light-subtle')}>
                    <div class={`card-header border-0 py-3 ` + (price.featured ? 'text-bg-primary' : '')}>
                        <p class="my-0 fw-normal">{price.title}</p>
                    </div>
                    
                    <div class="card-body">
                        <div class="d-flex align-items-baseline justify-content-center">
                            <h1 class="card-title pricing-card-title fw-bold mt-0">
                                <span>{price.price}</span>
                                <img src="/image/Saudi_Riyal_Symbol.svg" width="20" alt="SAR" class="ms-1" />
                            </h1>
                            <span class="mx-1">/</span>
                            <small>{price.time}</small>
                        </div>

                        <ul class="list-unstyled mt-3 mb-4">
                            {price.list.map((item, idx) => (
                                <li key={idx}>
                                    <small>{item}</small>
                                </li>
                            ))}
                        </ul>
                        
                        <BookingButton dataPackage={price.title} />
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}
