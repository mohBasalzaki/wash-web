import React from 'react'

export default function Accordion() {
  const accordions = [
    {
      title: "عنوان 1",
      description: "محتوى العنصر الأول"
    },
    {
      title: "عنوان 2",
      description: "محتوى العنصر الثاني"
    },
    {
      title: "عنوان 3",
      description: "محتوى العنصر الثالث"
    }
  ];

  return (
    <>
      {accordions.map((accordion, index) => (
        <div class="accordion-item bg-body-tertiary rounded border-0 mb-3" key={index}>
          <h2 class="accordion-header" id={`heading-${index}`}>
            <button
              class="accordion-button bg-body-tertiary rounded shadow-none collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
              {accordion.title}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            class="accordion-collapse collapse bg-body-tertiary rounded-bottom"
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body pt-0">
              <small>{accordion.description}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
