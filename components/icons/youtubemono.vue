<script setup lang="ts">
const props = defineProps<{ green?: boolean }>();
</script>

<template>
  <svg
    :class="{ green }"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1699_1201)">
      <path
        d="M31.7 9.9C31.3 8.5 30.3 7.5 28.9 7.1C26.5 6.5 16.3 6.5 16.3 6.5C16.3 6.5 6.3 6.5 3.70002 7.1C2.30002 7.5 1.3 8.5 0.9 9.9C0.5 12.5 0.5 17.7 0.5 17.7C0.5 17.7 0.5 22.9 1.1 25.5C1.5 26.9 2.5 27.9 3.9 28.3C6.3 28.9 16.5 28.9 16.5 28.9C16.5 28.9 26.5 28.9 29.1 28.3C30.5 27.9 31.5 26.9 31.9 25.5C32.5 22.9 32.5 17.7 32.5 17.7C32.5 17.7 32.5 12.5 31.7 9.9ZM13.3 22.5V12.9L21.7 17.7L13.3 22.5Z"
        fill="#BABABA"
      />
    </g>
    <defs>
      <clipPath id="clip0_1699_1201">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.953125)"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<style scoped>
svg {
  transition: transform 0.3s;

  path {
    transition: fill 0.3s;
  }
}

svg:hover {
  transform: scale(1.1);

  path {
    fill: var(--green);
  }
}

.green path {
  fill: var(--green);
}
</style>
