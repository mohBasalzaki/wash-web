import Link from 'next/link'
import React from 'react'

export default function ContactCTA() {
    const ctas = [
        {
            title: "الموقع",
            address: "حي الملك سلمان، الرياض",
            icon: "/image/contact_1.png",
            url: "#123"
        },
        {
            title: "رقم الهاتف",
            address: "920003884",
            icon: "/image/contact_2.png",
            url: "tel:+966920003884"
        },
        {
            title: "الايميل",
            address: "support@rewash.com",
            icon: "/image/contact_3.png",
            url: "mailto:support@rewash.com"
        },
    ];

    return (
        <>
            {ctas.map((cta, index) => (
                <Link class="text-decoration-none text-light" href={cta.url} target="_blank">
                    <div key={index} class="d-flex align-items-center mb-md-4 mb-3">
                        <img src={cta.icon} class="me-3" loading="lazy" width={70} />
                        <div class="d-block">
                            <h1 class="fw-samibold fs-5 mt-0 mb-2">{cta.title}</h1>
                            <span>{cta.address}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
