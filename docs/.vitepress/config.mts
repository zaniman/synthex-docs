import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getImageWidth(src: string): number | null {
  try {
    const filePath = path.join(process.cwd(), 'docs/public', src)
    const altPath = path.join(process.cwd(), 'docs', src)
    const imgPath = fs.existsSync(filePath) ? filePath : fs.existsSync(altPath) ? altPath : null
    if (!imgPath) return null

    const buffer = fs.readFileSync(imgPath)
    // PNG: width is at bytes 16-19
    if (buffer[0] === 0x89 && buffer[1] === 0x50) {
      return buffer.readUInt32BE(16)
    }
    return null
  } catch {
    return null
  }
}

export default defineConfig({
  title: "Pixometra Documentation",
  description: "Complete documentation for Pixometra Framer templates",
  lang: 'en-US',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#40ff43' }],
    ['style', {}, `
      .VPNav {
        border-bottom: none !important;
      }
      .VPHome {
        padding-top: 0 !important;
      }
      .VPDoc {
        padding-top: 48px !important;
      }
      img {
        max-width: 100%;
        height: auto;
        display: inline-block;
      }
      .vp-doc img {
        max-width: 100%;
        height: auto;
      }
      /* 2x images handled via srcset in markdown plugin */
    `]
  ],

  markdown: {
    config: (md) => {
      const defaultRender = md.renderer.rules.image || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }
      md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const src = token.attrGet('src')
        if (src && src.includes('@2x')) {
          token.attrSet('srcset', `${src} 2x`)
          const fileWidth = getImageWidth(src)
          if (fileWidth) {
            token.attrSet('width', String(Math.round(fileWidth / 2)))
          }
        }
        return defaultRender(tokens, idx, options, env, self)
      }
    }
  },

  themeConfig: {
    siteTitle: 'Pixometra Docs',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Synthexa', link: '/synthexa/', activeMatch: '/synthexa/' },
    ],

    sidebar: {
      '/synthexa/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Welcome', link: '/synthexa/' },
            { text: 'What You Get', link: '/synthexa/guide/what-you-get' },
          ]
        },
        {
          text: 'Getting Started',
          items: [
            { text: 'Duplicate the Template', link: '/synthexa/guide/duplicate' },
            { text: 'Framer Basics', link: '/synthexa/guide/framer-basics' },
          ]
        },
        {
          text: 'Pages',
          items: [
            { text: 'Pages Overview', link: '/synthexa/guide/pages-overview' },
            { text: 'Editing Content', link: '/synthexa/guide/editing-content' },
          ]
        },
        {
          text: 'CMS Collections',
          items: [
            { text: 'Overview', link: '/synthexa/guide/cms-overview' },
            { text: 'How to Edit', link: '/synthexa/guide/cms-edit' },
            { text: 'Blog', link: '/synthexa/guide/cms-blog' },
            { text: 'Cases', link: '/synthexa/guide/cms-cases' },
            { text: 'Career', link: '/synthexa/guide/cms-career' },
            { text: 'Legal', link: '/synthexa/guide/cms-legal' },
            { text: 'Pricing', link: '/synthexa/guide/cms-pricing' },
          ]
        },
        {
          text: 'Design System',
          items: [
            { text: 'Colors', link: '/synthexa/design/colors' },
            { text: 'Typography', link: '/synthexa/design/typography' },
          ]
        },
        {
          text: 'Components',
          items: [
            {
              text: 'Cards',
              items: [
                { text: 'CardPattern', link: '/synthexa/components/card-pattern' },
                { text: 'CardServices', link: '/synthexa/components/card-services' },
                { text: 'CardTool', link: '/synthexa/components/card-tool' },
                { text: 'CardTestimonial', link: '/synthexa/components/card-testimonial' },
                { text: 'CardPricing', link: '/synthexa/components/card-pricing' },
                { text: 'CardFAQ', link: '/synthexa/components/card-faq' },
                { text: 'CardTeam', link: '/synthexa/components/card-team' },
              ]
            },
            {
              text: 'Code Components',
              items: [
                { text: 'ROICalculator', link: '/synthexa/components/roi-calculator' },
                { text: 'NotFoundGame', link: '/synthexa/components/404-game' },
              ]
            },
            {
              text: 'Terminal Components',
              items: [
                { text: 'TerminalDashboard', link: '/synthexa/components/terminal' },
                { text: 'TerminalImage', link: '/synthexa/components/terminal-image' },
                { text: 'TerminalCases', link: '/synthexa/components/terminal-cases' },
              ]
            },
            {
              text: 'Utility Components',
              items: [
                { text: 'ComparisonTable', link: '/synthexa/components/comparison-table' },
                { text: 'UserPic', link: '/synthexa/components/user-pic' },
                { text: 'CompanyMetric', link: '/synthexa/components/company-metric' },
                { text: 'BadgeAnnounce', link: '/synthexa/components/badge-announce' },
                { text: 'SectionPrefix', link: '/synthexa/components/section-prefix' },
                { text: 'TerminalEffects', link: '/synthexa/components/terminal-effects' },
              ]
            },
            { text: 'Other Components', link: '/synthexa/components/other' },
          ]
        },
        {
          text: 'Publishing',
          items: [
            { text: 'Publish Your Site', link: '/synthexa/guide/publish' },
            { text: 'Connect Domain', link: '/synthexa/guide/domain' },
            { text: 'SEO Settings', link: '/synthexa/guide/seo' },
          ]
        },
      ]
    },

    footer: {
      message: 'Made by Pixometra',
      copyright: 'Copyright © 2026 Pixometra'
    },

    search: {
      provider: 'local'
    }
  }
})
