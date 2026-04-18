<template>
  <DefaultLayout>
    <template #nav-bar-content-before>
      <div class="wip-banner">
        📝 Documentation in Progress — may contain inaccuracies.
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
  border: 1px solid #fde047;
  border-radius: 6px;
  color: #854d0e;
  padding: 6px 12px;
  font-size: 12px;
  white-space: nowrap;
  height: 32px;
  display: flex;
  align-items: center;
}

.dark .wip-banner {
  background-color: #2d2600;
  border-color: #713f12;
  color: #fde68a;
}
</style>
