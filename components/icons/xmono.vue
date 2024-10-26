<script setup lang="ts">
const props = defineProps<{ green?: boolean; white?: boolean }>();
</script>

<template>
  <svg
    :class="{ green, white }"
    width="32"
    height="29"
    viewBox="0 0 32 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25.1065 0H30.0115L19.2417 12.2626L31.8242 28.897H21.9502L14.2194 18.7884L5.36904 28.897H0.464005L11.8735 15.7814L-0.175781 0H9.94351L16.9279 9.23426L25.1065 0ZM23.3897 26.018H26.1088L8.51466 2.77241H5.59296L23.3897 26.018Z"
      fill="#BABABA"
    />
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

.white path {
  fill: #fff;
}
</style>
