<template>
  <GeneralSection id="metrics">
    <GeneralContainer>
      <GeneralBoxWrapper>
        <NuxtLink
          to="https://t.me/spinnercoin_bot/app?startapp=utm_webmetrics"
          target="_blank"
        >
          <GeneralBox center>
            <IconsGame />
            <span class="number">8,000,000</span>
            <span class="text">Registered users</span>
          </GeneralBox>
        </NuxtLink>
        <NuxtLink to="https://t.me/spinnercoin" target="_blank">
          <GeneralBox center>
            <IconsTgmono white />
            <span class="number">3,000,000</span>
            <span class="text">Subscribers on the telegram channel</span>
          </GeneralBox>
        </NuxtLink>
        <NuxtLink to="https://x.com/spinnercoin" target="_blank">
          <GeneralBox center>
            <IconsXmono white />
            <span class="number">500,000</span>
            <span class="text">Followers on X</span>
          </GeneralBox>
        </NuxtLink>
        <GeneralBox center>
          <IconsWallet />
          <span class="number">1,300,000</span>
          <span class="text">Connected wallets</span>
        </GeneralBox>
        <NuxtLink to="https://getgems.io/spinners" target="_blank">
          <GeneralBox center>
            <IconsGgmono />
            <span class="number">78,000</span>
            <span class="text">Minted NFTs</span>
          </GeneralBox>
        </NuxtLink>
        <GeneralBox center>
          <IconsCountries />
          <span class="number">126</span>
          <span class="text">Active users from 126 countries</span>
        </GeneralBox>
      </GeneralBoxWrapper>
    </GeneralContainer>
  </GeneralSection>
</template>

<style scoped>
.number {
  color: var(--green);
  font-size: 32px;
  font-weight: 700;
}

.text {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}

@media (max-width: 1000px) {
  .text {
    font-size: 16px;
  }

  .number {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .text {
    font-size: 14px;
  }

  .number {
    font-size: 20px;
  }
}
</style>
