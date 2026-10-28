import { Fragment } from 'react'
import { site } from '../data/site'
import Bowl from './Bowl'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-container">
      <div className="display-en">
        {site.hero.title.map((line, i) => (
          <Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </div>

      <Bowl />

      <div className="metadata batch-tag">{site.hero.batch}</div>

      <div className="scroll-indicator">↓</div>
    </section>
  )
}
