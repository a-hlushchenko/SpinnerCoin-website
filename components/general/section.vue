<script setup lang="ts">
const props = defineProps();
</script>

<template>
  <div class="section"><slot></slot></div>
</template>

<style scoped>
.section {
  padding: 80px 0;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;
  }
}
</style>
