<script setup lang="ts">
import "./assets/css/index.css";
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}

::-webkit-scrollbar {
  background-color: transparent;
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--green);
  border-radius: 50px;
}

:root {
  scroll-behavior: smooth;
  background-color: var(--bg);
  --green: #00cb86;
  --dark-green: #008457;
  --bg: #191919;
  --gray: #282828;
  --text: #bababa;
}

::selection {
  background-color: var(--dark-green);
  color: #fff;
}

body {
  background-color: var(--bg);
  font-family: "ssf-pro", sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  overflow-x: hidden;
}
</style>
