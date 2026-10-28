import './Prose.css'

// Renders the `body` blocks of a project or log (see src/data/projects.js for the block types).
export default function Prose({ blocks }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h':
            return <h2 key={i}>{block.text}</h2>
          case 'quote':
            return <blockquote key={i}>{block.text}</blockquote>
          case 'list':
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          case 'image':
            return (
              <figure key={i}>
                <img src={block.src} alt={block.alt || block.caption || ''} loading="lazy" />
                {block.caption && <figcaption className="metadata">{block.caption}</figcaption>}
              </figure>
            )
          case 'gallery':
            // Photos side by side at one shared height. Each item's w/h sets how much room it gets.
            return (
              <figure key={i}>
                <div className="prose-gallery">
                  {block.items.map((item) => (
                    <img
                      key={item.src}
                      src={item.src}
                      alt={item.alt || ''}
                      loading="lazy"
                      style={{ aspectRatio: `${item.w} / ${item.h}`, flexGrow: item.w / item.h }}
                    />
                  ))}
                </div>
                {block.caption && <figcaption className="metadata">{block.caption}</figcaption>}
              </figure>
            )
          case 'video':
            return (
              <figure key={i}>
                {block.embed ? (
                  <div className="prose-embed">
                    <iframe src={block.embed} title={block.caption || 'Video'} allowFullScreen />
                  </div>
                ) : (
                  <video src={`${block.src}#t=0.1`} poster={block.poster} controls playsInline preload="metadata" />
                )}
                {block.caption && <figcaption className="metadata">{block.caption}</figcaption>}
              </figure>
            )
          default:
            return <p key={i}>{block.text}</p>
        }
      })}
    </div>
  )
}
