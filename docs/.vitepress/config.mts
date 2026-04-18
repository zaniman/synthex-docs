import { defineConfig } from 'vitepress'

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
        max-width: 600px;
        height: auto;
      }
      .markdown-body img {
        max-width: 600px;
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
            { text: 'TerminalDashboard', link: '/synthexa/components/terminal' },
            { text: 'ROICalculator', link: '/synthexa/components/roi-calculator' },
            { text: 'NotFoundGame', link: '/synthexa/components/404-game' },
            { text: 'TerminalImage', link: '/synthexa/components/terminal-image' },
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
