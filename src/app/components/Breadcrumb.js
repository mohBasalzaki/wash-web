import Link from 'next/link';
import React from 'react'

export default function Breadcrumb({ title }) {
  return (
    <section id="breadcrumb" class="pb-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                        <Link class="text-decoration-none text-body-secondary" href="/">الرئيسية</Link>
                    </li>

                    <li class="breadcrumb-item text-body" aria-current="page">{title}</li>
                </ol>
            </nav>
        </div>
    </section>
  );
}
