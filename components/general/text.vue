<script setup lang="ts">
const props = defineProps<{ big?: boolean; center?: boolean }>();
</script>

<template>
  <p class="text" :class="{ big, center }"><slot></slot></p>
</template>

<style scoped>
.text {
  font-size: 16px;
  color: var(--text);
  line-height: 150%;
}

.big {
  font-size: 20px;
}

.center {
  text-align: center;
}

@media (max-width: 1170px) {
  .text {
    font-size: 16px;
  }
}
</style>
