import Link from 'next/link'
import { title } from 'process';
import React from 'react'

export default function PostCard() {
  const posts = [
    {
      tag: "غسيل سيارات",
      title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
      image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
      url: "https://google.com/"
    },
    {
      tag: "غسيل سيارات",
      title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
      image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
      url: "https://google.com/"
    },
    {
      tag: "غسيل سيارات",
      title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
      image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
      url: "https://google.com/"
    },
    {
      tag: "غسيل سيارات",
      title: "هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى",
      image: "image/jan-kopriva-sh_7sFEFICI-unsplash.png",
      url: "https://google.com/"
    },
  ];

  return (
    <>
      {posts.map((post, index) => (
        <div class="col" key={index}>
          <Link href={post.url}>
            <div class="bg-img h-30vh rounded p-5" style={{backgroundImage: `url(${post.image})`}} alt=""></div>
          </Link>
          
          <div class="card-body mt-2">
              <small class="text-body-secondary">{post.tag}</small>
              <h1 class="text-truncate fw-bold fs-5 my-2">
                  <Link href={post.url} class="text-body text-decoration-none">{post.title}</Link>
              </h1>
              <p class="text-body-secondary m-0">{post.description}</p>
          </div>
        </div>
      ))}
    </>
  )
}
