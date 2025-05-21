import Link from 'next/link'

export default function ContactCTA() {
    const posts = [
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
            {posts.map((post) => (
                <Link class="text-decoration-none text-light" href={post.url} target="_blank">
                    <div key={post.id} class="d-flex align-items-center mb-md-4 mb-3">
                        <img src={post.icon} class="me-3" loading="lazy" width={70} />
                        <div class="d-block">
                            <h1 class="fw-samibold fs-5 mt-0 mb-2">{post.title}</h1>
                            <span>{post.address}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
