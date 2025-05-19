import React from 'react'

export default function PartnersLogo() {
    const logos = [
        {
            title: "سيار",
            image: "/image/partners/1.png"
        },
        {
            title: "سيار",
            image: "/image/partners/2.png"
        },
        {
            title: "سيار",
            image: "/image/partners/3.png"
        },
        {
            title: "سيار",
            image: "/image/partners/4.png"
        },
        {
            title: "سيار",
            image: "/image/partners/5.png"
        },
        {
            title: "سيار",
            image: "/image/partners/6.png"
        }
    ];

    return (
        <>
            {logos.map((logo, index) => (
                <div key={index} class="col">
                    <div class="border border-2 border-light-subtle rounded p-md-4 p-3">
                        <img class="w-100" src={logo.image} alt={logo.title} />
                    </div>
                </div>
            ))}
        </>
    )
}
