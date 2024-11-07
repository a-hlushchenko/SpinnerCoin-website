<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const token = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);

const tokenVisible = ref(false);

onMounted(async () => {
  if (!token.value) return;

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tokenVisible.value = true;
        } else {
          tokenVisible.value = false;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.value.observe(token.value);
});

onUnmounted(() => {
  if (token.value && observer.value) {
    observer.value.unobserve(token.value);
    observer.value.disconnect();
  }
});
</script>

<template>
  <GeneralSection id="token">
    <GeneralContainer class="token-wrapper">
      <GeneralFlex column center big>
        <div class="token" ref="token">
          <Transition name="token">
            <IconsSpn
              class="icon"
              width="150"
              height="150"
              v-if="tokenVisible"
            />
          </Transition>
          <Transition name="token-bg">
            <IconsHomeSpnbg class="token-bg" v-if="tokenVisible" />
          </Transition>
        </div>

        <GeneralFlex column center>
          <GeneralTitle>SPN</GeneralTitle>
          <GeneralText center>
            SPN is a Token used for operating in the SpinnerCoin NFT game.<br />SPN
            is short for SpinnerCoin and can be either bought on a
            cryptocurrency exchange or earned by using SpinnerCoin.
          </GeneralText>
        </GeneralFlex>

        <GeneralFlex>
          <GeneralButton tg />
          <GeneralButton gg />
        </GeneralFlex>
      </GeneralFlex>
    </GeneralContainer>
  </GeneralSection>
</template>

<style scoped>
.token-wrapper {
  max-width: 700px;
}

.token {
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.token-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 330px;
  transition: opacity 1s;
}

.token-enter-from,
.token-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.token-bg-enter-from,
.token-bg-leave-to {
  opacity: 0;
}
</style>
