<script setup lang="ts">
const props = defineProps<{ center?: boolean }>();
</script>

<template>
  <div class="box" :class="{ center }"><slot></slot></div>
</template>

<style scoped>
.box {
  background-color: var(--gray);
  border-radius: 24px;
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid transparent;
  transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: var(--green);
    background-color: transparent;
    box-shadow: 0px 4px 10px #00cb8753;
  }
}

.center {
  align-items: center;
}

@media (max-width: 1000px) {
  .box {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .box {
    padding: 12px;
    gap: 12px;
    border-radius: 16px;
  }
}
</style>
