import './SectionHeader.css'

export default function SectionHeader({ module, title, meta }) {
  return (
    <div className="section-header">
      <div>
        <div className="metadata">{module}</div>
        <h2 className="display-en section-title">{title}</h2>
      </div>
      <div className="metadata">{meta}</div>
    </div>
  )
}
