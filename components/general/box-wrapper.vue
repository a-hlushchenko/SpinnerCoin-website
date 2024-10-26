<template>
  <div class="box-wrapper"><slot></slot></div>
</template>

<style scoped>
.box-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: stretch;
  width: 100%;
}

@media (max-width: 1000px) {
  .box-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .box-wrapper {
    gap: 8px;
  }
}
</style>
