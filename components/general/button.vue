<script setup lang="ts">
const props = defineProps<{ tg?: boolean; gg?: boolean }>();
</script>

<template>
  <NuxtLink
    class="button"
    v-if="tg"
    to="https://t.me/spinnercoin_bot/app?startapp=utm_webhero"
  >
    <GeneralFlex mini center>
      <IconsTg />
      <GeneralFlex small column>
        <span class="subtext">Play in</span>
        <span class="title">Telegram</span>
      </GeneralFlex>
    </GeneralFlex>
  </NuxtLink>
  <NuxtLink class="button" v-else-if="gg" to="https://getgems.io/spinners">
    <GeneralFlex mini center>
      <IconsGg />
      <GeneralFlex small column>
        <span class="subtext">Buy NFTs on</span>
        <span class="title">Getgems</span>
      </GeneralFlex>
    </GeneralFlex>
  </NuxtLink>
</template>

<style scoped>
.button {
  background-color: #fff;
  border-radius: 12px;
  padding: 12px 20px;
  border: 1px solid transparent;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: transparent;
    border-color: #fff;

    transform: scale(1.05);
    .title,
    .subtext {
      color: #fff;
    }
  }
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  transition: color 0.3s;
}

.subtext {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  transition: color 0.3s;
}

@media (max-width: 768px) {
  .button {
    padding: 8px 12px;
  }
  .title {
    font-size: 16px;
  }

  .subtext {
    font-size: 14px;
  }
}
</style>
