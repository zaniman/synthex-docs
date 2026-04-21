import puppeteer from 'puppeteer'
import { PDFDocument } from 'pdf-lib'
import { createServer } from 'http'
import { readFileSync, existsSync } from 'fs'
import { extname, join, resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const DIST_DIR = resolve(__dirname, '../docs/.vitepress/dist')
const OUT_FILE = resolve(__dirname, '../synthexa-docs.pdf')
const PORT = 18765

// Pages in sidebar order
const PAGES = [
  '/synthexa/',
  '/synthexa/guide/what-you-get',
  '/synthexa/guide/duplicate',
  '/synthexa/guide/framer-basics',
  '/synthexa/guide/pages-overview',
  '/synthexa/guide/editing-content',
  '/synthexa/guide/cms-overview',
  '/synthexa/guide/cms-edit',
  '/synthexa/guide/cms-blog',
  '/synthexa/guide/cms-cases',
  '/synthexa/guide/cms-career',
  '/synthexa/guide/cms-legal',
  '/synthexa/guide/cms-pricing',
  '/synthexa/design/colors',
  '/synthexa/design/typography',
  '/synthexa/components/card-pattern',
  '/synthexa/components/card-services',
  '/synthexa/components/card-tool',
  '/synthexa/components/card-testimonial',
  '/synthexa/components/card-pricing',
  '/synthexa/components/card-faq',
  '/synthexa/components/card-team',
  '/synthexa/components/roi-calculator',
  '/synthexa/components/404-game',
  '/synthexa/components/terminal',
  '/synthexa/components/terminal-image',
  '/synthexa/components/terminal-cases',
  '/synthexa/components/comparison-table',
  '/synthexa/components/user-pic',
  '/synthexa/components/company-metric',
  '/synthexa/components/badge-announce',
  '/synthexa/components/section-prefix',
  '/synthexa/components/grid-base',
  '/synthexa/components/contact-form',
  '/synthexa/components/terminal-effects',
  '/synthexa/guide/publish',
  '/synthexa/guide/support',
]

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let urlPath = req.url.split('?')[0]

      // Try exact file, then index.html, then .html extension
      const candidates = [
        join(DIST_DIR, urlPath),
        join(DIST_DIR, urlPath, 'index.html'),
        join(DIST_DIR, urlPath + '.html'),
      ]

      let filePath = null
      for (const c of candidates) {
        if (existsSync(c) && !c.endsWith('/')) {
          filePath = c
          break
        }
      }

      if (!filePath) {
        res.writeHead(404)
        res.end('Not found: ' + urlPath)
        return
      }

      const ext = extname(filePath)
      const mime = MIME[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': mime })
      res.end(readFileSync(filePath))
    })

    server.listen(PORT, () => {
      console.log(`📡 Static server: http://localhost:${PORT}`)
      resolve(server)
    })
  })
}

async function main() {
  // Ensure dist exists
  if (!existsSync(DIST_DIR)) {
    console.error('❌ Run npm run docs:build first!')
    process.exit(1)
  }

  const server = await startServer()

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 900 })

  const pdfBuffers = []
  const total = PAGES.length

  for (let i = 0; i < PAGES.length; i++) {
    const route = PAGES[i]
    const url = `http://localhost:${PORT}${route}`
    console.log(`📄 [${i + 1}/${total}] ${route}`)

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })

    // Hide nav, sidebar, footer nav — keep only main content
    await page.addStyleTag({
      content: `
        .VPNav, .VPSidebar, .VPDocFooter, .VPLocalSearchBox,
        .edit-link, .prev-next, .VPNavBar, .curtain { display: none !important; }
        .VPDoc { padding-top: 24px !important; }
        .VPContent { padding-left: 0 !important; }
        .VPDoc .container { max-width: 860px !important; margin: 0 auto !important; }
      `
    })

    const buffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '48px', bottom: '48px', left: '48px', right: '48px' },
    })

    pdfBuffers.push(buffer)
  }

  await browser.close()
  server.close()

  // Merge all PDFs
  console.log(`\n🔗 Merging ${pdfBuffers.length} pages...`)
  const merged = await PDFDocument.create()

  for (const buf of pdfBuffers) {
    const doc = await PDFDocument.load(buf)
    const pages = await merged.copyPages(doc, doc.getPageIndices())
    pages.forEach(p => merged.addPage(p))
  }

  const bytes = await merged.save()
  const { writeFileSync } = await import('fs')
  writeFileSync(OUT_FILE, bytes)

  console.log(`\n✅ PDF saved: ${OUT_FILE}`)
  console.log(`   Pages: ${merged.getPageCount()}`)
}

main().catch(e => {
  console.error('Error:', e)
  process.exit(1)
})
