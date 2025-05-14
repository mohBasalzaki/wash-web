import Link from 'next/link'
import React from 'react'

export default function MostCommonPost() {
  return (
    <div class="row align-items-center g-0">
        <div class="col-4">
            <div class="bg-img rounded p-5" style={{backgroundImage: "url('image/jan-kopriva-sh_7sFEFICI-unsplash.png')"}} alt=""></div>
        </div>
        
        <div class="col-8 ps-3">
            <div class="card-body">
                <small class="text-body-secondary">غسيل سيارات</small>
                <h1 class="text-truncate fw-bold fs-5 mt-1 mb-0">
                    <Link href="#" class="text-body text-decoration-none">هذا النص هو مثال لنص يمكن استبداله في نفس المكان هنا في هذا المكان بالتحديد</Link>
                </h1>
            </div>
        </div>
    </div>
  )
}
