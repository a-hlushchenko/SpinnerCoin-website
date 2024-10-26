<script setup lang="ts"></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0px 20px;
}

@media (max-width: 1024px) {
  .container {
    padding: 0px 12px;
  }
}
</style>
