export default function SectionTitle({ title, body }) {
  return (
    <div className="section_title">
        <h1 className="fw-bold fs-3 mb-1 mt-0">{title}</h1>
        <p className="text-justify text-body-secondary m-0">{body}</p>
    </div>
  );
}
