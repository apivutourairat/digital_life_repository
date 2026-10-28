import { Link } from 'react-router-dom'
import { site } from '../data/site'
import Mantra from './Mantra'
import './SideNav.css'

export default function SideNav() {
  return (
    <nav className="side-nav">
      <div className="nav-column">
        <Mantra lines={site.mantra.left} />
        {site.nav.map((item) => (
          <Link key={item.hash} to={`/#${item.hash}`} className="nav-item">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="nav-column nav-column-right">
        <Mantra lines={site.mantra.right} />
        <div className="metadata scroll-hint">{site.scrollHint}</div>
      </div>
    </nav>
  )
}
