<template>
  <GeneralSection id="about" class="about-wrapper">
    <GeneralFlex column center>
      <GeneralContainer class="about-top">
        <GeneralFlex column>
          <GeneralTitle center>
            No teachers to take it away – spin, level up, and unlock an NFT at
            level 12!
          </GeneralTitle>
          <GeneralText center>
            Spin more to unlock new challenges and upgrade your spinner.
            Progress through the game to level up and convert your spinner into
            an NFT at level 12. Participate in events and competitions to earn
            rewards and enjoy the full experience of the SpinnerCoin App
          </GeneralText>
        </GeneralFlex>
      </GeneralContainer>
      <img class="about-img" src="/img/home/about-img.svg" alt="Spinners"" />
      <img
        class="about-img mob"
        src="/img/home/about-img-mob.svg"
        alt="Spinners"
      />
    </GeneralFlex>
  </GeneralSection>
</template>

<style scoped>
.about-wrapper {
  overflow: hidden;
}
.about-top {
  max-width: 820px;
}

.about-img {
  object-position: center;
  object-fit: cover;

  &.mob {
    display: none;
  }
}

@media (max-width: 768px) {
  .about-img {
    display: none;

    &.mob {
      display: block;
    }
  }
}
</style>
