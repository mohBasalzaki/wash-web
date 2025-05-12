import Link from 'next/link'
import React from 'react'
import SectionTitle from './SectionTitle'
import PricingRow from './PricingRow'

export default function PricingSection() {
  return (
    <section id="pricing-section" class="py-0">
      <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-md-5 mb-4">
          <SectionTitle title={"أسعارنا"} body={"إختر الباقة المناسبة لك"} />
          <Link href="/" class="d-none d-md-block btn btn-outline-primary px-4">عرض المزيد</Link>
        </div>
        
        <PricingRow />

        <div class="text-center">
          <Link href="/" class="d-md-none btn btn-outline-primary px-4 mt-4">عرض المزيد</Link>
        </div>
      </div>
    </section>
  );
}
