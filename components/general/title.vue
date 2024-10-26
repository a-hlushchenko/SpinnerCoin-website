<script setup lang="ts">
const props = defineProps<{
  big?: boolean;
  mini?: boolean;
  center?: boolean;
}>();
</script>

<template>
  <strong class="title" :class="{ big, center, mini }"><slot></slot></strong>
</template>

<style scoped>
.title {
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
}

.big {
  font-size: 56px;
}

.mini {
  font-size: 36px;
}

.center {
  text-align: center;
}

@media (max-width: 1170px) {
  .title {
    font-size: 24px;
    text-align: center;
  }

  .big {
    font-size: 24px;
  }

  .mini {
    font-size: 20px;
    text-align: left;
  }
}
</style>
