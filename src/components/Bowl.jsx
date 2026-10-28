import { useEffect, useRef, useState } from 'react'
import './Bowl.css'

export default function Bowl() {
  const vesselRef = useRef(null)
  const [zoomed, setZoomed] = useState(false)

  // Parallax: the bowl drifts down slightly as the page scrolls.
  useEffect(() => {
    const onScroll = () => {
      vesselRef.current.style.transform = `translateY(${window.scrollY * 0.1}px)`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="bowl-vessel" ref={vesselRef}>
      <div
        className={`pixel-content${zoomed ? ' is-zoomed' : ''}`}
        onMouseOver={() => setZoomed(true)}
        onMouseOut={() => setZoomed(false)}
      />
      <div className="bowl">
        <div className="bowl-decoration" />
      </div>
      <div className="bowl-foot" />
    </div>
  )
}
