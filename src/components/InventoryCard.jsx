import { Link } from 'react-router-dom'
import './InventoryCard.css'

// A project card. The whole card is a link to the project's own page.
export default function InventoryCard({ project }) {
  return (
    <Link to={`/project/${project.slug}`} className={`inventory-item${project.cover ? ' has-cover' : ''}`}>
      {project.cover && (
        <span
          className="item-cover"
          aria-hidden="true"
          style={{ backgroundImage: `url(${project.cover})`, backgroundPosition: project.coverPosition || 'center' }}
        />
      )}
      <span className="item-number">{project.number}</span>
      <div>
        <span className="item-category">{project.category}</span>
        <h3 className="item-title">{project.title}</h3>
      </div>
      <p className="item-desc">{project.summary}</p>
      <span className="nav-item">{project.cta}</span>
    </Link>
  )
}
