const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, 'docs')

function cleanName(name) {
  return name
    .replace(/\.md$/, '')
    .replace(/_/g, ' ')
}

function buildSidebar(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const dirs = entries
    .filter(e => 
      e.isDirectory() &&
      e.name !== '.vitepress' &&
      e.name !== 'graphics'
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  const files = entries
    .filter(e => e.isFile() && e.name.endsWith('.md') && e.name !== 'index.md')
    .sort((a, b) => a.name.localeCompare(b.name))

  const items = []

  // Erst Unterordner vollständig erzeugen
  for (const folder of dirs) {
    const folderPath = path.join(dir, folder.name)
    const childBase = `${base}/${folder.name}`
    const childItems = buildSidebar(folderPath, childBase)

    items.push({
      text: cleanName(folder.name),
      collapsed: true,
      link: childBase,
      items: childItems
    })
  }

  // Danach einzelne MD-Dateien hinzufügen
  for (const file of files) {
    const name = file.name.replace(/\.md$/, '')

    items.push({
      text: cleanName(name),
      link: `${base}/${name}`
    })
  }

  return items
}

const sidebar = buildSidebar(docsDir, '')

const config = `import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE === undefined ? '/SchILD-NRW-3/' : env.BASE,
    title: 'SchILD-NRW 3',
    description: 'Erklärungen und Funktionsweisen zu Schulungen für SchILD3',
    lastUpdated: true,

    themeConfig: {
      outline: {
        label: 'Auf dieser Seite',
      },

      docFooter: {
        next: 'Nächste Seite',
        prev: 'Vorherige Seite',
      },

      lastUpdated: {
        text: 'Diese Seite wurde zuletzt bearbeitet am',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium',
        },
      },

      search: {
        provider: 'local',
      },

      nav: [
        {
          text: 'Docker-Server',
          link: 'https://192.168.101.120/',
        },
        {
          text: 'Portainer',
          link: 'https://192.168.101.120:9443/',
        },
      ],

      sidebar: ${JSON.stringify(sidebar, null, 2)}
    }
  }
})
`

fs.writeFileSync(
  path.join(docsDir, '.vitepress', 'config.mjs'),
  config,
  'utf8'
)

console.log('config.mjs mit vollständiger Sidebar erzeugt.')
