<template>
  <DefaultLayout>
    <template #layout-top>
      <div class="wip-banner">
        📝 Documentation in Progress — This documentation may contain inaccuracies.
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
const DefaultLayout = DefaultTheme.Layout
</script>

<style>
.wip-banner {
  background-color: #fef9c3;
  border-bottom: 1px solid #fde047;
  color: #854d0e;
  text-align: center;
  padding: 8px 16px;
  font-size: 13px;
  width: 100%;
}

.dark .wip-banner {
  background-color: #2d2600;
  border-bottom-color: #713f12;
  color: #fde68a;
}
</style>
