import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

function resize2xImages() {
  document.querySelectorAll('img[src*="@2x"]').forEach(img => {
    const apply = (el) => {
      const w = Math.min(el.naturalWidth / 2, 600)
      el.style.width = w + 'px'
      el.style.height = 'auto'
      el.style.maxWidth = '100%'
    }
    if (img.complete && img.naturalWidth > 0) {
      apply(img)
    } else {
      img.addEventListener('load', () => apply(img))
    }
  })
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(resize2xImages, 50)
      }
    }
  }
}
