<template>
  <GeneralSection>
    <GeneralContainer>
      <GeneralFlex column center>
        <GeneralTitle>Stay in touch with SpinnerCoin</GeneralTitle>
        <GeneralBoxWrapper>
          <NuxtLink
            to="https://t.me/spinnercoin_bot/app/?startapp=utm_webcontacts"
            target="_blank"
          >
            <GeneralBox>
              <IconsGame green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">Game</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
          <NuxtLink to="https://t.me/spinnercoin" target="_blank">
            <GeneralBox>
              <IconsTgmono green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">Telegran channel</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
          <NuxtLink to="https://t.me/spinnercoin_chat" target="_blank">
            <GeneralBox>
              <IconsTgmono green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">Telegran chat</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
          <NuxtLink to="https://x.com/spinnercoin" target="_blank">
            <GeneralBox>
              <IconsXmono green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">X</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
          <NuxtLink to="https://getgems.io/spinners" target="_blank">
            <GeneralBox>
              <IconsGgmono green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">NFT collection</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
          <NuxtLink to="https://youtube.com/@spinnercoin" target="_blank">
            <GeneralBox>
              <IconsYoutubemono green class="icon" />
              <GeneralFlex space center>
                <span class="box-title">Youtube</span>
                <IconsArrow />
              </GeneralFlex>
            </GeneralBox>
          </NuxtLink>
        </GeneralBoxWrapper>
      </GeneralFlex>
    </GeneralContainer>
  </GeneralSection>
</template>

<style scoped>
.icon {
  height: 48px;
  width: 48px;
}

.green path {
  fill: var(--green);
}

.box-title {
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  line-height: 150%;
}

@media (max-width: 768px) {
  .box-title {
    font-size: 13px;
  }
}
</style>
