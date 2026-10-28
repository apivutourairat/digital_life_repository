import { site } from '../data/site'
import './Frame.css'

export default function Frame() {
  const { topLeft, topRight, bottomLeft, bottomRight } = site.frame

  return (
    <div className="frame">
      <div className="metadata frame-label frame-top-left">{topLeft}</div>
      <div className="metadata frame-label frame-top-right">{topRight}</div>
      <div className="metadata frame-label frame-bottom-left">{bottomLeft}</div>
      <div className="metadata frame-label frame-bottom-right">{bottomRight}</div>
    </div>
  )
}
