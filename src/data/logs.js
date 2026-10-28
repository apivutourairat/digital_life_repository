// System log entries (your blog posts). Each opens at /log/<slug>.
// `body` uses the same block types described in projects.js.

export const logs = [
  {
    slug: 'the-future-of-texture',
    number: 402,
    topic: 'THE FUTURE OF TEXTURE',
    title: 'Why we crave tactile digital experiences.',
    excerpt:
      '"In an era of perfectly smooth screens, the eye searches for friction. We find it in the grit of a scanline, the pattern of a cardboard box, the rim of a ceramic bowl. These are the anchors that keep us grounded in a world of pure data..."',
    cta: 'READ LOG',
    words: '1,240',
    date: 'OCT 24',
    body: [
      { type: 'p', text: 'In an era of perfectly smooth screens, the eye searches for friction. We find it in the grit of a scanline, the pattern of a cardboard box, the rim of a ceramic bowl. These are the anchors that keep us grounded in a world of pure data.' },
      { type: 'p', text: 'Replace this text with your full article.' },
      { type: 'h', text: 'A section heading' },
      { type: 'p', text: 'Add as many paragraphs, headings, quotes and lists as you like.' },
    ],
  },
]

export const getLog = (slug) => logs.find((l) => l.slug === slug)
