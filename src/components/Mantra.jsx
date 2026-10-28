import { Fragment } from 'react'

// Thai text stacked one syllable per line.
export default function Mantra({ lines }) {
  return (
    <div className="display-yant">
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </div>
  )
}
