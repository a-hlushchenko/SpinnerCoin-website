<script setup lang="ts">
const links = [
  { name: "Metrics", link: "/#metrics" },
  { name: "About", link: "/#about" },
  { name: "Token", link: "/#token" },
  { name: "How to play", link: "/#howtoplay" },
  { name: "Spinners WEB3", link: "/#spinners" },
  { name: "Roadmap", link: "/#roadmap" },
];

const menuOpened = ref(false);

const header = ref<HTMLElement | null>(null);

function toogleMenu() {
  menuOpened.value = !menuOpened.value;
}

function menuHandleClick(event: MouseEvent) {
  if (header.value && !header.value.contains(event.target as Node)) {
    toogleMenu();
  } else {
    setTimeout(() => {
      toogleMenu();
    });
  }
}

watch(menuOpened, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";

    if (window.innerWidth > 1024) {
      document.body.style.paddingRight = "6px";
    }

    setTimeout(() => {
      document.addEventListener("click", menuHandleClick);
    });
  } else {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";

    document.removeEventListener("click", menuHandleClick);
  }
});
</script>

<template>
  <div class="header-wrapper" ref="header">
    <GeneralContainer>
      <GeneralFlex space center>
        <NuxtLink to="/" class="title-icon"><IconsTitle /></NuxtLink>

        <GeneralFlex
          center
          class="links-list"
          :class="{ 'mobile-opened': menuOpened }"
        >
          <NuxtLink v-for="link in links" :to="link.link">
            <GeneralText class="link">{{ link.name }}</GeneralText>
          </NuxtLink>

          <GeneralFlex mini center class="buttons-mobile">
            <NuxtLink
              class="button-game"
              to="https://t.me/spinnercoin_bot/app?startapp=utm_website"
              target="_blank"
            >
              Play
            </NuxtLink>
            <NuxtLink
              class="button-spinners"
              to="https://getgems.io/spinners"
              target="_blank"
            >
              <GeneralFlex mini>
                <IconsSpn width="20" />
                Buy NFT Spinners
              </GeneralFlex>
            </NuxtLink>
          </GeneralFlex>
        </GeneralFlex>

        <GeneralFlex mini center class="buttons">
          <NuxtLink
            class="button-game"
            to="https://t.me/spinnercoin_bot/app?startapp=utm_website"
            target="_blank"
          >
            Play
          </NuxtLink>
          <NuxtLink
            class="button-spinners"
            to="https://getgems.io/spinners"
            target="_blank"
          >
            <GeneralFlex mini>
              <IconsSpn width="20" />
              Buy NFT Spinners
            </GeneralFlex>
          </NuxtLink>
        </GeneralFlex>

        <div class="burger" @click="toogleMenu" :class="{ active: menuOpened }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </GeneralFlex>
    </GeneralContainer>
  </div>
</template>

<style scoped>
.header-wrapper {
  z-index: 10;
  padding: 16px;
  background-color: #28282880;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  position: sticky;
  top: 0px;
}

.link {
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: var(--green);
    transform: scale(1.05);
  }
}

.button-game {
  border-radius: 10px;
  background-color: #fff;
  padding: 12px 40px;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: color 0.3s, background-color 0.3s, transform 0.3s,
    border-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: transparent;
    color: #fff;
    border-color: #fff;
  }
}

.button-spinners {
  border-radius: 10px;
  background-color: var(--dark-green);
  padding: 12px 16px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: color 0.3s, background-color 0.3s, transform 0.3s,
    border-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: transparent;
    border-color: var(--green);
  }
}

.buttons-mobile {
  display: none;
}

.burger {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  display: none;
  z-index: 2;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s;

  span {
    height: 2px;
    width: 16px;
    border-radius: 20px;
    background-color: var(--green);
    transition: opacity 0.3s, rotate 0.3s, transform 0.3s;
  }

  &.active {
    border-color: var(--green);

    span:nth-child(1) {
      rotate: 45deg;
      transform: translate(4px, 4px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      rotate: -45deg;
      transform: translate(5px, -4px);
    }
  }
}

@media (max-width: 1170px) {
  .header-wrapper {
    padding: 12px 0;
  }

  .links-list {
    position: absolute;
    transform: translate(0%, -100%);
    left: 0px;
    top: 0%;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    background-color: var(--gray);
    padding: 12px;
    opacity: 0;
    transition: transform 0.5s, top 0.5s, opacity 0.3s;

    &.mobile-opened {
      top: 100%;
      opacity: 1;
      transform: translate(0%, 0%);
    }
  }

  .link {
    font-size: 20px;
    font-weight: 700;
  }

  .buttons-mobile {
    display: flex;
  }

  .buttons {
    display: none;
  }

  .burger {
    display: flex;
  }

  .button-spinners,
  .button-game {
    width: 100%;
    font-size: 16px;
    display: flex;
    text-align: center;
    justify-content: center;
  }

  .buttons-mobile {
    flex-direction: column;
    width: 100%;
  }
}
</style>
