import { Link } from 'react-router-dom'
import './LogCard.css'

// A blog-post teaser. The whole card is a link to the log's own page.
export default function LogCard({ log }) {
  return (
    <Link to={`/log/${log.slug}`} className="log-card">
      <div className="metadata log-kicker">
        LOG ENTRY #{log.number} // {log.topic}
      </div>
      <h4 className="log-title">{log.title}</h4>
      <p className="log-excerpt">{log.excerpt}</p>
      <div className="log-footer">
        <span className="nav-item">{log.cta}</span>
        <span className="metadata">WORDS: {log.words}</span>
      </div>
    </Link>
  )
}
