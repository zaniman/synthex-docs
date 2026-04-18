<template>
  <DefaultLayout>
    <template #nav-bar-content-after>
      <div class="navbar-banner">
        <div class="banner-text">📝 Documentation in Progress — This documentation may contain inaccuracies.</div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'

const DefaultLayout = DefaultTheme.Layout
</script>

<style scoped>
.navbar-banner {
  background: linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%);
  border-bottom: 1px solid #ffd700;
  padding: 6px 20px;
  text-align: center;
  font-size: 12px;
  color: #8b6914;
  width: 100%;
  box-sizing: border-box;
}

.banner-text {
  margin: 0;
  max-width: 1280px;
  margin: 0 auto;
}

@media (prefers-color-scheme: dark) {
  .navbar-banner {
    background: linear-gradient(135deg, #3d3400 0%, #4a3d00 100%);
    border-bottom-color: #8b7500;
    color: #e8d084;
  }
}
</style>
