<script setup lang="ts">
const props = defineProps<{
  mini?: boolean;
  column?: boolean;
  space?: boolean;
  center?: boolean;
  small?: boolean;
  big?: boolean;
}>();
</script>

<template>
  <div class="flex" :class="{ mini, column, space, center, small, big }">
    <slot></slot>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 20px;
}

.mini {
  gap: 10px;
}

.small {
  gap: 4px;
}

.center {
  align-items: center;
}

.column {
  flex-direction: column;
}

.big {
  gap: 40px;
}

.space {
  justify-content: space-between;
}

@media (max-width: 768px) {
  .flex {
    gap: 16px;
  }

  .big {
    gap: 40px;
  }

  .mini {
    gap: 10px;
  }

  .small {
    gap: 4px;
  }
}
</style>
