#!/bin/bash

# Automatische VitePress-Vorbereitung + Build + Deployment
# für SchILD30-Wiki

PROJECT_DIR="$HOME/SchILD30-Wiki"
SOURCE_DIR="$PROJECT_DIR"
DOCS_DIR="$PROJECT_DIR/docs"
WEB_DIR="/var/www/html/SchILD30-Wiki"

set -e


echo "=== Starte automatische VitePress-Vorbereitung ==="

# Projekt prüfen
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Fehler: Projektordner nicht gefunden: $PROJECT_DIR"
  exit 1
fi

cd "$PROJECT_DIR"

# package.json
if [ ! -f package.json ]; then
  echo "Erzeuge package.json..."
  npm init -y
fi

# VitePress installieren
if ! npm list vitepress >/dev/null 2>&1; then
  echo "Installiere VitePress..."
  npm install vitepress --save-dev
fi

mkdir -p "$DOCS_DIR/.vitepress"

############################################
# ROOT index.md automatisch erzeugen
############################################

# README.md als Startseite verwenden, falls vorhanden
if [ -f "$PROJECT_DIR/README.md" ]; then
  cp "$PROJECT_DIR/README.md" "$DOCS_DIR/index.md"
else
  echo "# SchILD30-Wiki" > "$DOCS_DIR/index.md"
  echo "" >> "$DOCS_DIR/index.md"
fi

echo "" >> "$DOCS_DIR/index.md"


############################################
# Unterordner erkennen + index.md erzeugen
############################################

# Markdown-Unterordner aus dem gesamten Projekt übernehmen
# (außer docs selbst)
for src in "$SOURCE_DIR"/*/; do
  [ -d "$src" ] || continue

  folder=$(basename "$src")

  if [ "$folder" = "docs" ] || [ "$folder" = "node_modules" ]; then
    continue
  fi

  mkdir -p "$DOCS_DIR/$folder/"

  # Ganze Ordnerstruktur inkl. Bilder/PNG/JPG/GIF/SVG rekursiv kopieren
  rsync -a \
    --include='*/' \
    --include='*.md' \
    --include='*.png' \
    --include='*.jpg' \
    --include='*.jpeg' \
    --include='*.gif' \
    --include='*.svg' \
    --exclude='*' \
    "${src}/" "$DOCS_DIR/$folder/" >/dev/null 2>&1 || true

    # Spezialfall: graphics komplett vollständig übernehmen
  if [ "$folder" = "graphics" ]; then
    mkdir -p "$DOCS_DIR/graphics"
    cp -r "${src}/"* "$DOCS_DIR/graphics/" 2>/dev/null || true
  fi

  # Danach Markdown-Dateien zusätzlich sauber nachziehen

    # Alle Markdown-Dateien inkl. Unterordner rekursiv kopieren
  find "$src" -type f -name "*.md" | while read file; do
    rel_path="${file#$src}"
    target_dir="$DOCS_DIR/$folder/$(dirname "$rel_path")"

    mkdir -p "$target_dir"
    cp -f "$file" "$target_dir/"
  done

done

# Danach docs-Unterordner verarbeiten
for dir in "$DOCS_DIR"/*/; do
  [ -d "$dir" ] || continue

  folder=$(basename "$dir")
  index_file="$dir/index.md"

  echo "Bearbeite Ordner: $folder"

  # Kein automatischer Bereich-Block in README/index

  # Unterordner index.md erzeugen
  echo "# $folder" > "$index_file"
  echo "" >> "$index_file"
  echo "## Inhalte" >> "$index_file"
  echo "" >> "$index_file"

  for file in "$dir"*.md; do
    [ -f "$file" ] || continue

    filename=$(basename "$file")

    if [ "$filename" != "index.md" ]; then
      name="${filename%.md}"
      echo "- [$name](./$filename)" >> "$index_file"
    fi
  done

done

############################################
# config.mjs erzeugen
############################################

cat > "$DOCS_DIR/.vitepress/config.mjs" << 'EOF'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.BASE === undefined ? '/SchILD30-Wiki/' : env.BASE,
    title: 'SchILD-NRW 3',
    description: 'Erklärungen und Funktionsweisen zu Schulungen für SchILD3',
    lastUpdated: true,

    themeConfig: {
      outline: {
        label: 'Auf dieser Seite',
        level: [2, 3],
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

      

      sidebar: [
        {
          text: 'Dokumentation',
          items: [
            { text: 'Start', link: '/' }
          ]
        }
      ]
    }
  }
})
EOF

############################################
############################################
# generate-sidebar.js erzeugen
############################################

cat > "$PROJECT_DIR/generate-sidebar.js" << 'EOF'
const fs = require('fs')
const path = require('path')

const docsDir = path.join(__dirname, 'docs')

function cleanName(name) {
  return name
    .replace(/\.md$/, '')
    .replace(/_/g, ' ')
    .replace(/-/g, ' ')
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
    base: env.BASE === undefined ? '/SchILD30-Wiki/' : env.BASE,
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

      nav: [],

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
EOF

node "$PROJECT_DIR/generate-sidebar.js"

############################################
# Build
############################################

echo "=== Starte VitePress Build ==="
npx vitepress build docs

############################################
# Deployment
############################################

sudo mkdir -p "$WEB_DIR"
sudo rm -rf "$WEB_DIR"/*
sudo cp -r "$DOCS_DIR/.vitepress/dist"/* "$WEB_DIR"/

sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"

echo "=== Deployment abgeschlossen ==="
echo "Webverzeichnis: $WEB_DIR"
