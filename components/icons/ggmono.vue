<script setup lang="ts">
const props = defineProps<{ green?: boolean }>();
</script>

<template>
  <svg
    :class="{ green }"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.0001 0C24.0001 13.2548 13.2548 24.0001 0 24.0001C0 10.7452 10.7452 0 24.0001 0ZM24.0001 48C10.7452 48 0 37.2548 0 24.0001C13.2548 24.0001 24.0001 34.7452 24.0001 48ZM48 24.0001C48 37.2548 37.2548 48 24.0001 48C24.0001 34.7452 34.7452 24.0001 48 24.0001ZM45.9999 2.00004C45.9999 13.0457 37.0456 22 26 22C26 10.9543 34.9543 2.00004 45.9999 2.00004Z"
      fill="white"
    />
  </svg>
</template>

<style scoped>
.green path {
  fill: var(--green);
}
</style>
