import Link from 'next/link'
import React from 'react'

export default function MostCommonPost() {
    const posts = [
        {
            tag: "غسيل سيارات",
            title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
            image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
            url: "https://google.com/"
        },
        {
            tag: "غسيل سيارات",
            title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
            image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
            url: "https://google.com/"
        },
        {
            tag: "غسيل سيارات",
            title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
            image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
            url: "https://google.com/"
        }
    ];

    return (
        <>
            {posts.map((post, index) => (
                <div key={index} class="row align-items-center mb-md-1 mb-2 g-0">
                    <div class="col-4">
                        <Link href={post.url}>
                            <div class="bg-img rounded p-5" style={{backgroundImage: `url(${post.image})`}} alt=""></div>
                        </Link>
                    </div>
                    
                    <div class="col-8 ps-3">
                        <div class="card-body">
                            <small class="text-body-secondary">{post.tag}</small>
                            <h1 class="text-truncate fw-bold fs-6 mt-1 mb-0">
                                <Link href={post.url} class="text-body text-decoration-none">{post.title}</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
