<template>
  <GeneralSection id="about" class="about-wrapper">
    <GeneralFlex column center>
      <GeneralContainer class="about-top">
        <GeneralFlex column>
          <GeneralTitle center>
            Our game connects real-life sports activities with
          </GeneralTitle>
          <GeneralText center>
            Walk more to enter various Battle-games with your CATthletes within
            Walken® Platform. The Platform is designed in the way that allows
            players to benefit financially by using all in-game mechanics.
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
