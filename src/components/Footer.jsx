import { site } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="display-yant footer-mantra">{site.mantra.footer}</div>
      <div className="metadata">{site.footer.line}</div>
      <div className="metadata footer-binary">{site.footer.binary}</div>
    </footer>
  )
}
