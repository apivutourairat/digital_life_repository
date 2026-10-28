import { transmission as t } from '../data/transmission'
import './Transmission.css'

export default function Transmission() {
  return (
    <div className="video-reel">
      <div className="video-container">
        <img src={t.image} alt={t.alt} />
        <div className="video-badge">{t.badge}</div>
      </div>
      <div className="video-meta">
        <div className="stamp">{t.stamp}</div>
        <h3 className="item-title">{t.title}</h3>
        <p className="item-desc">{t.description}</p>
        <div className="metadata video-duration">{t.duration}</div>
      </div>
    </div>
  )
}
