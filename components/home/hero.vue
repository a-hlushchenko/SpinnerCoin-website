<script setup lang="ts"></script>

<template>
  <GeneralSection class="hero-wrapper">
    <GeneralContainer>
      <div space class="hero">
        <GeneralFlex column big class="hero-content">
          <GeneralFlex column class="hero-text">
            <GeneralTitle big>
              Spinners WEB3,<br />TON, Telegram MiniApps</GeneralTitle
            >

            <GeneralText>
              Our game combines fidget spinners (which everyone knows about),
              the fastest TON blockchain, and very cool Telegram MiniApps
            </GeneralText>
          </GeneralFlex>
          <GeneralFlex center>
            <GeneralButton tg />
            <GeneralButton gg />
          </GeneralFlex>

          <GeneralFlex center>
            <GeneralFlex column small>
              <GeneralText>Powered by</GeneralText>
              <NuxtLink to="https://ton.org" target="_blank">
                <div class="info-box">
                  <IconsTon />
                </div>
              </NuxtLink>
            </GeneralFlex>
            <IconsStick />
            <GeneralFlex column small>
              <GeneralText>Our Socials</GeneralText>
              <div class="info-box">
                <NuxtLink to="https://t.me/spinnercoin" target="_blank">
                  <IconsTgmono class="link-icon" />
                </NuxtLink>
                <NuxtLink
                  class="link-icon"
                  to="https://x.com/spinnercoin"
                  target="_blank"
                >
                  <IconsXmono />
                </NuxtLink>
                <NuxtLink
                  class="link-icon"
                  to="https://youtube.com/@spinnercoin"
                  target="_blank"
                >
                  <IconsYoutubemono />
                </NuxtLink>
              </div>
            </GeneralFlex>
          </GeneralFlex>
        </GeneralFlex>
        <ClientOnly>
          <Transition appear name="spinners">
            <div v-if="true" class="hero-spinners">
              <IconsHomeHeroSpinners width="500" class="hero-spinners" />
            </div>
          </Transition>
        </ClientOnly>
      </div>
    </GeneralContainer>
  </GeneralSection>
</template>

<style scoped>
.hero-wrapper {
  width: 100%;
  background-image: url("/img/home/hero-bg.svg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}

.hero {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

.hero-spinners {
  justify-self: end;
  height: fit-content;
  transition: transform 1s;
}

.info-box {
  background-color: var(--gray);
  border-radius: 12px;
  padding: 14px 36px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #323232;
  }
}

.spinners-enter-from,
.spinners-leave-to {
  transform: translate(200px, 200px);
}

@media (max-width: 1170px) {
  .hero {
    display: flex;
    flex-direction: column;
  }
  .hero-content {
    align-items: center;
  }

  .hero-text {
    align-items: center;
    max-width: 500px;

    * {
      text-align: center;
    }
  }
}
@media (max-width: 768px) {
  .info-box {
    padding: 8px 16px;
  }
}
</style>
