import { Link } from 'react-router-dom'
import Prose from './Prose'
import './ArticlePage.css'

// Blog-style page used by both projects and logs.
//   backTo / backLabel: link at the top
//   kicker, category, number, title, summary: header content (all optional except title)
//   meta: [{ label, value }] shown as a small spec row
//   prev / next: { to, label } links at the bottom (optional)
export default function ArticlePage({
  backTo,
  backLabel,
  kicker,
  category,
  number,
  title,
  summary,
  meta = [],
  blocks,
  prev,
  next,
}) {
  return (
    <main className="article-page">
      <Link to={backTo} className="nav-item article-back">
        ← {backLabel}
      </Link>

      <header className="article-header">
        {number && <span className="article-number">{number}</span>}
        {category && <span className="item-category">{category}</span>}
        {kicker && <div className="metadata article-kicker">{kicker}</div>}
        <h1 className="article-title">{title}</h1>
        {summary && <p className="article-summary">{summary}</p>}
        {meta.length > 0 && (
          <dl className="article-meta">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="metadata">{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <article className="article-body">
        <Prose blocks={blocks} />
      </article>

      {(prev || next) && (
        <div className="article-pager">
          {prev ? (
            <Link to={prev.to} className="nav-item">
              ← {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={next.to} className="nav-item">
              {next.label} →
            </Link>
          )}
        </div>
      )}
    </main>
  )
}
