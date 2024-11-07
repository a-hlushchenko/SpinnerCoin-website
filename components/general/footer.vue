<template>
  <GeneralContainer>
    <GeneralFlex space center class="footer">
      <NuxtLink to="/">
        <IconsTitle />
      </NuxtLink>
      <GeneralFlex mini class="buttons">
        <NuxtLink
          to="https://t.me/spinnercoin_bot/app?startapp=utm_webfooter"
          class="button"
          target="_blank"
        >
          <GeneralFlex mini center>
            <IconsTg width="24" height="24" />
            <span>Play</span>
          </GeneralFlex>
        </NuxtLink>
        <NuxtLink
          to="https://getgems.io/spinners"
          class="button"
          target="_blank"
        >
          <GeneralFlex mini center>
            <IconsSpn width="24" />
            <span>Buy NFT Spinners</span>
          </GeneralFlex>
        </NuxtLink>
      </GeneralFlex>
    </GeneralFlex>
  </GeneralContainer>
</template>

<style scoped>
.footer {
  padding: 20px 0px;
  border-top: 1px solid var(--gray);
}

.button {
  border-radius: 50px;
  border: 1px solid var(--gray);
  padding: 12px 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: border-color 0.3s, transform 0.3s;

  &:hover {
    border-color: var(--green);
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
  }

  .button {
    padding: 12px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .buttons {
    width: 100%;
    flex-direction: column;
  }
}
</style>
