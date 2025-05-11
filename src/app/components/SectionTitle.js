import React from 'react'

export default function SectionTitle({ title, body }) {
  return (
    <div class="section_title">
        <h1 class="fw-bold fs-3 mb-1 mt-0">{title}</h1>
        <p class="text-justify text-body-secondary m-0">{body}</p>
    </div>
  );
}
