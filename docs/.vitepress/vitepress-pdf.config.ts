import { defineUserConfig } from 'vitepress-export-pdf'

const routeOrder = [
  '/synthexa/index.html',

  // Getting Started
  '/synthexa/guide/what-you-get.html',
  '/synthexa/guide/duplicate.html',
  '/synthexa/guide/framer-basics.html',

  // Pages
  '/synthexa/guide/pages-overview.html',
  '/synthexa/guide/editing-content.html',

  // CMS
  '/synthexa/guide/cms-overview.html',
  '/synthexa/guide/cms-edit.html',
  '/synthexa/guide/cms-blog.html',
  '/synthexa/guide/cms-cases.html',
  '/synthexa/guide/cms-career.html',
  '/synthexa/guide/cms-legal.html',
  '/synthexa/guide/cms-pricing.html',

  // Design System
  '/synthexa/design/colors.html',
  '/synthexa/design/typography.html',

  // Components — Cards
  '/synthexa/components/card-pattern.html',
  '/synthexa/components/card-services.html',
  '/synthexa/components/card-tool.html',
  '/synthexa/components/card-testimonial.html',
  '/synthexa/components/card-pricing.html',
  '/synthexa/components/card-faq.html',
  '/synthexa/components/card-team.html',

  // Components — Code
  '/synthexa/components/roi-calculator.html',
  '/synthexa/components/404-game.html',

  // Components — Terminal
  '/synthexa/components/terminal.html',
  '/synthexa/components/terminal-image.html',
  '/synthexa/components/terminal-cases.html',

  // Components — Utility
  '/synthexa/components/comparison-table.html',
  '/synthexa/components/user-pic.html',
  '/synthexa/components/company-metric.html',
  '/synthexa/components/badge-announce.html',
  '/synthexa/components/section-prefix.html',
  '/synthexa/components/grid-base.html',
  '/synthexa/components/contact-form.html',
  '/synthexa/components/terminal-effects.html',

  // Publishing
  '/synthexa/guide/publish.html',
  '/synthexa/guide/support.html',
]

export default defineUserConfig({
  outFile: 'synthexa-docs.pdf',
  outDir: './',
  routePatterns: ['/synthexa/**'],
  pdfOutlines: true,
  sorter: (a, b) => {
    const aIndex = routeOrder.indexOf(a.path)
    const bIndex = routeOrder.indexOf(b.path)
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1
    return aIndex - bIndex
  },
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: {
      top: '60px',
      bottom: '60px',
      left: '60px',
      right: '60px',
    },
    displayHeaderFooter: false,
  },
})
