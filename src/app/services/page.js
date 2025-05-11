import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ServicesCard from '../components/ServicesCard'

export default function Services() {
  return (
    <>
      <Breadcrumb title={"الخدمات"} />

      <section id="services_page" class="pb-0">
        <div class="container">
          <div class="card h-50vh bg-img border-0 p-5" style={{backgroundImage: "url('image/jan-kopriva-sh_7sFEFICI-unsplash.png')"}}></div>

          <div class="service_card pt-md-0 pt-4 my-4 my-md-0">
            <div class="px-md-5 px-0">
              <ServicesCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
