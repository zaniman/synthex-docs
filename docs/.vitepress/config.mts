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
        max-width: 100% !important;
        width: auto !important;
        height: auto !important;
        display: inline-block !important;
      }
      .vp-doc img {
        max-width: 600px !important;
        width: auto !important;
        height: auto !important;
      }
      .markdown-body img {
        max-width: 600px !important;
        width: auto !important;
      }
      /* For retina 2x images - display at original logical size */
      .vp-doc p img,
      .vp-doc div img {
        max-width: 100% !important;
        height: auto !important;
      }
      /* Dark theme - bright neon green */
      :root {
        --vp-c-brand: #40ff43 !important;
        --vp-c-brand-0: #40ff43 !important;
        --vp-c-brand-1: #40ff43 !important;
        --vp-c-brand-2: #40ff43 !important;
        --vp-c-brand-3: #40ff43 !important;
        --vp-c-brand-light: #40ff43 !important;
        --vp-c-brand-lighter: #40ff43 !important;
        --vp-c-brand-dark: #33cc34 !important;
        --vp-c-brand-darker: #33cc34 !important;
      }

      /* Light theme - darker green for readability */
      @media (prefers-color-scheme: light) {
        :root {
          --vp-c-brand: #22aa00 !important;
          --vp-c-brand-0: #22aa00 !important;
          --vp-c-brand-1: #22aa00 !important;
          --vp-c-brand-2: #22aa00 !important;
          --vp-c-brand-3: #22aa00 !important;
          --vp-c-brand-light: #22aa00 !important;
          --vp-c-brand-lighter: #22aa00 !important;
          --vp-c-brand-dark: #1a8800 !important;
          --vp-c-brand-darker: #1a8800 !important;
        }

        a {
          color: #22aa00 !important;
        }
        a:hover {
          color: #1a8800 !important;
        }
        a:visited {
          color: #22aa00 !important;
        }
      }

      /* VitePress light mode class */
      html.light a,
      .light a {
        color: #22aa00 !important;
      }
      html.light a:hover,
      .light a:hover {
        color: #1a8800 !important;
      }

      /* VitePress data attribute */
      [data-theme="light"] a {
        color: #22aa00 !important;
      }
      [data-theme="light"] a:hover {
        color: #1a8800 !important;
      }

      /* Global brand color for all links - dark theme default */
      a {
        color: #40ff43 !important;
      }
      a:hover {
        color: #33cc34 !important;
      }
      a:visited {
        color: #40ff43 !important;
      }

      /* Table links */
      table a {
        color: #40ff43 !important;
      }
      table a:hover {
        color: #33cc34 !important;
      }

      /* 2x retina images - display at logical size */
      img[src*="synthexa-0"] {
        width: 300px !important;
        height: auto !important;
        max-width: 100% !important;
      }
    `]
  ],

  themeConfig: {
    siteTitle: 'Pixometra Docs',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Synthexa', link: '/synthexa/', activeMatch: '/synthexa/' },
    ],

    sidebar: {
      '/synthexa/': [
        {
          text: '📚 Introduction',
          items: [
            { text: 'Welcome', link: '/synthexa/' },
            { text: 'What You Get', link: '/synthexa/guide/what-you-get' },
          ]
        },
        {
          text: '🚀 Getting Started',
          items: [
            { text: 'Duplicate the Template', link: '/synthexa/guide/duplicate' },
            { text: 'Framer Basics', link: '/synthexa/guide/framer-basics' },
          ]
        },
        {
          text: '📄 Pages',
          items: [
            { text: 'Pages Overview', link: '/synthexa/guide/pages-overview' },
            { text: 'Editing Content', link: '/synthexa/guide/editing-content' },
          ]
        },
        {
          text: '🗂️ CMS Collections',
          items: [
            { text: 'Overview', link: '/synthexa/guide/cms-overview' },
            { text: 'Blog', link: '/synthexa/guide/cms-blog' },
            { text: 'Cases', link: '/synthexa/guide/cms-cases' },
            { text: 'Career', link: '/synthexa/guide/cms-career' },
            { text: 'Legal', link: '/synthexa/guide/cms-legal' },
            { text: 'Pricing', link: '/synthexa/guide/cms-pricing' },
            { text: 'How to Edit', link: '/synthexa/guide/cms-edit' },
          ]
        },
        {
          text: '🎨 Design System',
          items: [
            { text: 'Colors', link: '/synthexa/design/colors' },
            { text: 'Typography', link: '/synthexa/design/typography' },
          ]
        },
        {
          text: '📦 Components',
          items: [
            { text: 'Terminal Dashboard', link: '/synthexa/components/terminal' },
            { text: 'ROI Calculator', link: '/synthexa/components/roi-calculator' },
            { text: '404 Game', link: '/synthexa/components/404-game' },
            { text: 'Terminal Image', link: '/synthexa/components/terminal-image' },
            { text: 'Other Components', link: '/synthexa/components/other' },
          ]
        },
        {
          text: '📋 Publishing',
          items: [
            { text: 'Publish Your Site', link: '/synthexa/guide/publish' },
            { text: 'Connect Domain', link: '/synthexa/guide/domain' },
            { text: 'SEO Settings', link: '/synthexa/guide/seo' },
          ]
        },
      ]
    },

    footer: {
      message: 'Made with ❤️ by Pixometra',
      copyright: 'Copyright © 2026 Pixometra'
    },

    search: {
      provider: 'local'
    }
  }
})
