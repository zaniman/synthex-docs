<template>
  <div>
    <div class="documentation-notice">
      <div class="notice-content">
        <strong>📝 Documentation in Progress</strong> — This documentation may contain inaccuracies.
      </div>
    </div>
    <DefaultLayout />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const DefaultLayout = DefaultTheme.Layout
</script>

<style scoped>
.documentation-notice {
  background: linear-gradient(135deg, #fff9e6 0%, #fff4cc 100%);
  border-bottom: 1px solid #ffd700;
  border-top: none;
  border-radius: 0;
  padding: 8px 0;
  text-align: center;
  font-size: 13px;
  color: #8b6914;
  position: sticky;
  top: 62px;
  z-index: 10;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  overflow: hidden;
}

.notice-content {
  display: inline-block;
}

@media (prefers-color-scheme: dark) {
  .documentation-notice {
    background: linear-gradient(135deg, #3d3400 0%, #4a3d00 100%);
    border-bottom-color: #8b7500;
    color: #e8d084;
  }
}
</style>
