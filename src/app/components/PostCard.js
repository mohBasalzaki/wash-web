import Link from 'next/link'
import React from 'react'

export default function PostCard() {
  return (
    <div class="col">
        <div class="bg-img h-40vh rounded p-5" style={{backgroundImage: "url('image/jan-kopriva-sh_7sFEFICI-unsplash.png')"}} alt=""></div>
        
        <div class="card-body mt-2">
            <small class="text-body-secondary">غسيل سيارات</small>
            <h1 class="text-truncate fw-bold fs-5 mt-1 mb-0">
                <Link href="#" class="text-body text-decoration-none">هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد</Link>
            </h1>
        </div>
    </div>
  )
}
