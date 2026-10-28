// Site-wide text. Edit the strings here; components only render them.

export const site = {
  // The four corner labels fixed to the screen frame.
  frame: {
    topLeft: 'MANIFEST ID: 88-2024-KRAFT',
    topRight: 'ORIGIN: HK-GLOBAL-EXP',
    bottomLeft: '© OPEN SOURCE / ALL RIGHTS RESERVED',
    bottomRight: 'V. 4.02 // STABLE BUILD',
  },

  // Thai mantra columns on either side of the screen (one array item per line).
  mantra: {
    left: ['นะ', 'โม', 'พุท', 'ธา', 'ยะ'],
    right: ['มะ', 'อะ', 'อุ'],
    footer: 'นะ โม พุท ธา ยะ · มะ อะ อุ',
  },

  scrollHint: 'SCROLL TO UNPACK',

  hero: {
    title: ['DIGITAL', 'CARGO', 'REPOSITORY'],
    batch: 'BATCH NUMBER: #992-B // 2024',
  },

  footer: {
    line: 'PACKAGED AND SHIPPED FROM THE STUDIO // NO GUESTS BEYOND THIS POINT',
    binary: '00101010 00101010 00101010',
  },

  // Left-hand navigation. `hash` is the id of the section on the home page.
  nav: [
    { label: '01. INVENTORY', hash: 'inventory' },
    { label: '02. TRANSMISSIONS', hash: 'transmissions' },
    { label: '03. SYSTEM LOGS', hash: 'logs' },
  ],

  // Section headings on the home page.
  sections: {
    inventory: { module: 'MODULE 01', title: 'PROJECT INVENTORY' },
    transmissions: { module: 'MODULE 02', title: 'FIELD TRANSMISSIONS', meta: 'ENCODING: H.264 / 4K' },
    logs: { module: 'MODULE 03', title: 'SYSTEM LOGS', meta: 'LATEST ENTRY: OCT 24' },
  },
}
