import Link from 'next/link'
import React from 'react'

export default function FeaturePost() {
  return (
    <Link href="#" class="card text-bg-dark position-relative border-0">
        <div class="card-img bg-img h-50vh" style={{backgroundImage: "url('image/jan-kopriva-sh_7sFEFICI-unsplash.png')"}} alt=""></div>

        <div class="card-img-overlay p-0">
            <div className="position-absolute bottom-0 p-md-4 p-0 m-4">
                <span class="py-2 px-3 bg-light bg-opacity-25 rounded">مغسلة ريواش</span>
                <h1 class="fw-bold fs-5 mt-3 mb-0">هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد</h1>
            </div>
        </div>
    </Link>
  )
}
