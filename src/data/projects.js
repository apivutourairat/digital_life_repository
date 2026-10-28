// Project cards on the home page. Each card opens its own page at /project/<slug>.
//
// Optional card extras: `cover` (image path from /public) and `coverPosition` (CSS background-position)
// show a photo behind the card text.
//
// To add a project: copy one object, give it a unique `slug`, and fill in the fields.
// `body` is the blog-style content of the project page, built from simple blocks:
//   { type: 'h', text: '...' }                    section heading
//   { type: 'p', text: '...' }                    paragraph
//   { type: 'quote', text: '...' }                pull quote
//   { type: 'list', items: ['...', '...'] }       bullet list
//   { type: 'image', src: '...', caption: '...' } image (put files in /public and use '/name.jpg')
//   { type: 'video', src: '/clip.mp4', poster: '/clip.jpg', caption: '...' }   video file from /public
//   { type: 'video', embed: 'https://www.youtube.com/embed/<id>', caption: '...' }   YouTube/Vimeo embed

export const projects = [
  {
    slug: 'muay-thai-mayhem',
    number: '01',
    category: 'EVENT SERIES',
    title: 'Muay Thai Mayhem',
    summary:
      'An amateur fight series that gives SJMT students a safe stage for real fights. Four events, all sold out, grown from gym nights into venue shows.',
    cta: 'READ STORY',
    cover: '/mtm/mtm4-fight-1.jpg',
    coverPosition: 'center 35%',
    date: 'Ongoing',
    meta: [
      { label: 'ROLE', value: 'Founder & organiser' },
      { label: 'EVENTS', value: '4, all sold out' },
      { label: 'TICKETS', value: '1,300 across the series' },
    ],
    body: [
      { type: 'p', text: 'Muay Thai Mayhem, or MTM, is the amateur fight series I run with SJMT, our Muay Thai gym in Berlin. I created it so our students could finally get real fight experience in a safe, properly run environment, somewhere they can show what they have learned and keep growing.' },
      {
        type: 'gallery',
        caption: 'MTM 4 // FIGHT NIGHT',
        items: [
          { src: '/mtm/mtm4-fight-1.jpg', w: 935, h: 1701, alt: 'Two fighters trading knees in the ring under the stage lights' },
          { src: '/mtm/mtm4-fight-2.jpg', w: 956, h: 1800, alt: 'A fighter in red throws a knee as his blue-corner opponent blocks' },
        ],
      },
      { type: 'h', text: 'Why I started it' },
      { type: 'p', text: 'Real fights are a huge part of getting better at this sport, and I wanted them to happen somewhere people are looked after. So MTM gives our students a proper stage: good organisation, a real crowd, and a night that belongs to them.' },
      {
        type: 'gallery',
        caption: 'THE FIGHTERS',
        items: [
          { src: '/mtm/mtm4-fighter-1.jpg', w: 1440, h: 1800, alt: 'A fighter in a red headguard and SJMT shirt looks out from the red corner' },
          { src: '/mtm/mtm4-fighter-2.jpg', w: 1088, h: 1800, alt: 'A fighter in blue holds his guard up, gloves in front of his face' },
          { src: '/mtm/mtm4-fighter-3.jpg', w: 1205, h: 1700, alt: 'Portrait of a fighter in a navy headguard and blue shirt' },
        ],
      },
      { type: 'h', text: 'The journey' },
      { type: 'p', text: 'Four events so far, and I am proud to say every single one sold out: 1,300 tickets across the series. I had professional videographers at every event too, so the fights and the crowd live on long after the night is over.' },
      {
        type: 'list',
        items: [
          'Event 1: 300 tickets, inside the SJMT gym. No sponsors at all. We carried the night with a lot of video content and strong marketing.',
          'Event 2: 300 tickets, still inside the gym. Three small sponsors: friends, fellow students and a Thai restaurant.',
          'Event 3: 400 tickets, at an outside venue. Two larger sponsors, plus a protein and health drink sponsor.',
          'Event 4: 300 tickets at a more premium venue, with a more premium ticket price. A club venue partner and a returning sponsor.',
        ],
      },
      { type: 'video', src: '/mtm/mtm3-fight.mp4', caption: 'MTM 3 // FIGHT' },
      { type: 'h', text: 'How I got the sponsors on board' },
      { type: 'p', text: 'It started small and humble. I went after the low-hanging fruit first: friends, family and fellow students, and I asked investors if they knew anyone who might want in. Everyone got a short presentation of the long-term goal, and I told them the plan was to build this together, one event at a time. That is exactly how it went. Every event brought in bigger sponsors than the one before.' },
      {
        type: 'gallery',
        caption: 'BEHIND THE ROPES',
        items: [
          { src: '/mtm/mtm4-backstage-1.jpg', w: 1368, h: 1800, alt: 'Team members preparing gloves and headguards backstage' },
          { src: '/mtm/mtm4-backstage-2.jpg', w: 985, h: 1800, alt: 'Seen through a window frame, a person in red reaches up at the edge of the venue' },
          { src: '/mtm/mtm4-backstage-3.jpg', w: 1397, h: 1700, alt: 'Someone in a Spider-Man mask leaning on the ring ropes' },
        ],
      },
      { type: 'h', text: 'How I measured each event' },
      { type: 'p', text: 'I tracked four KPIs for every event, and whatever I learned went straight into planning the next one:' },
      {
        type: 'list',
        items: [
          'Revenue',
          'Customer feedback',
          'Number of fighter sign-ups',
          'Instagram stories and videos that came out of the event naturally. I counted every story SJMT reposted, because the more electric the event, the more people record it.',
        ],
      },
      { type: 'video', src: '/mtm/mtm4-reel-1.mp4', caption: 'MTM 4 // REEL 01' },
      { type: 'video', src: '/mtm/mtm4-reel-2.mp4', caption: 'MTM 4 // REEL 02' },
      { type: 'h', text: 'Where I am taking it' },
      { type: 'p', text: 'As the MTM name grows, I want to keep moving into bigger and bigger venues. What really drives me is the idea of paying every fighter fight money, and that is what I am building towards:' },
      { type: 'quote', text: 'The only amateur fight event in Berlin that pays its fighters.' },
      {
        type: 'gallery',
        caption: 'MTM 4 // RESPECT IN THE RING',
        items: [
          { src: '/mtm/mtm4-respect.jpg', w: 1280, h: 1700, alt: 'Two fighters embracing between the ropes after the bout' },
          { src: '/mtm/mtm4-corner.jpg', w: 920, h: 1800, alt: 'A fighter in red waits in the corner beside the chained ring post' },
        ],
      },
    ],
  },
  {
    slug: 'neo-traditional-mobile-interface',
    number: '02',
    category: 'UI/UX DESIGN',
    title: 'Neo-Traditional Mobile Interface',
    summary:
      'A conceptual banking app designed using the aesthetics of 1960s Hong Kong tea houses. High contrast, ceramic textures.',
    cta: 'VIEW SPECS',
    date: '2024',
    meta: [
      { label: 'ROLE', value: 'Design lead' },
      { label: 'TOOLS', value: 'Figma, Principle' },
      { label: 'STATUS', value: 'Concept' },
    ],
    body: [
      { type: 'p', text: 'Replace this text with the story of the project: what the brief was, who it was for, and why you made it.' },
      { type: 'h', text: 'The idea' },
      { type: 'p', text: 'Banking apps tend to look the same. This concept borrows from the printed menus, ceramic cups and bold signage of 1960s Hong Kong tea houses to give money a sense of place.' },
      { type: 'quote', text: 'Money apps should feel like somewhere you want to sit down.' },
      { type: 'h', text: 'What I made' },
      { type: 'list', items: ['A full set of mobile screens', 'A ceramic-inspired texture system', 'A high-contrast colour palette'] },
    ],
  },
  {
    slug: 'pixelated-ceramic-shaders',
    number: '03',
    category: 'CREATIVE CODE',
    title: 'Pixelated Ceramic Shaders',
    summary:
      'A library of WebGL shaders that simulate the aging process of porcelain glaze on 3D geometric primitives.',
    cta: 'VIEW REPO',
    date: '2024',
    meta: [
      { label: 'ROLE', value: 'Developer' },
      { label: 'TOOLS', value: 'WebGL, GLSL, Three.js' },
      { label: 'STATUS', value: 'Open source' },
    ],
    body: [
      { type: 'p', text: 'Replace this text with a write-up of the project, how it works and what you learned.' },
      { type: 'h', text: 'How it works' },
      { type: 'p', text: 'Each shader layers crackle, glaze thickness and wear over a base primitive, then quantises the result into chunky pixels.' },
      { type: 'list', items: ['Crackle pattern from Voronoi noise', 'Glaze ageing driven by a single time uniform', 'Pixel grid applied as a final post-process'] },
    ],
  },
  {
    slug: 'global-export-branding',
    number: '04',
    category: 'STRATEGY',
    title: 'Global Export Branding',
    summary:
      'Full identity for an international logistics firm, utilizing a palette of kraft paper, safety orange, and monospaced type.',
    cta: 'VIEW CASE',
    date: '2023',
    meta: [
      { label: 'ROLE', value: 'Brand strategist' },
      { label: 'CLIENT', value: 'Logistics firm' },
      { label: 'STATUS', value: 'Shipped' },
    ],
    body: [
      { type: 'p', text: 'Replace this text with the case study: the client, the problem and the outcome.' },
      { type: 'h', text: 'The identity' },
      { type: 'p', text: 'Kraft paper, safety orange and monospaced type, borrowed straight from the shipping crate and applied across the whole brand.' },
    ],
  },
  {
    slug: 'haptic-cardboard',
    number: '05',
    category: 'INTERACTION',
    title: 'Haptic Cardboard',
    summary:
      'Investigating the tactile feedback of digital textures on glass surfaces through sonic and vibration mapping.',
    cta: 'READ PAPER',
    date: '2023',
    meta: [
      { label: 'ROLE', value: 'Researcher' },
      { label: 'TOOLS', value: 'Web Audio, Vibration API' },
      { label: 'STATUS', value: 'Published' },
    ],
    body: [
      { type: 'p', text: 'Replace this text with the abstract and key findings of your research.' },
      { type: 'h', text: 'Method' },
      { type: 'p', text: 'Short sonic and vibration patterns were mapped to texture changes under the finger, to see whether glass can feel like cardboard.' },
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
