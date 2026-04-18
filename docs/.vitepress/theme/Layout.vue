<template>
  <DefaultLayout>
    <template #aside-top>
      <div class="wip-banner-aside">
        <div class="banner-label">📝 WIP</div>
        <div class="banner-text">Documentation in Progress</div>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const DefaultLayout = DefaultTheme.Layout
</script>

<style>
.wip-banner-aside {
  background-color: #fef9c3;
  border: 1px solid #fde047;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 20px;
  text-align: center;
}

.banner-label {
  font-size: 14px;
  font-weight: 600;
  color: #854d0e;
  margin-bottom: 6px;
}

.banner-text {
  font-size: 11px;
  color: #854d0e;
  line-height: 1.4;
}

.dark .wip-banner-aside {
  background-color: #2d2600;
  border-color: #713f12;
}

.dark .banner-label,
.dark .banner-text {
  color: #fde68a;
}
</style>
