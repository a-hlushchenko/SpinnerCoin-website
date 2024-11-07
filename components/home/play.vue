<template>
  <GeneralSection id="howtoplay">
    <GeneralContainer>
      <GeneralFlex column center>
        <GeneralTitle>How to Play</GeneralTitle>
        <div class="howtoplay">
          <div class="item big">
            <img src="/img/home/play1.png" class="play-img" alt="Spinner" />
            <GeneralFlex column>
              <GeneralTitle mini>Spin & Upgrade Your Spinner!</GeneralTitle>
              <GeneralText mini>
                Earn SPN tokens by spinning – the core of the game. Use your
                tokens to boost your spinner’s speed, HP, and Turbospin to reach
                Leaderboard and Earn SPN! btw $SPN as soon will be on
                blockchain!
              </GeneralText>
            </GeneralFlex>
          </div>
          <div class="item big">
            <GeneralFlex column>
              <GeneralTitle mini>Compete Tasks & Earn SPN Tokens!</GeneralTitle>
              <GeneralText mini>
                Complete Tasks and earn more SPN by spinning. Level up your
                spinner and unlock new speed of spinner.
              </GeneralText>
            </GeneralFlex>
            <img src="/img/home/play2.png" class="play-img" alt="Spinner" />
          </div>

          <div class="item">
            <IconsBox />
            <GeneralTitle mini>Open Boxes and get boosts</GeneralTitle>
            <GeneralText>
              By opening boxes (daily) and those you see in chat/channels, you
              can get various boosts that will help you earn more SPN!
            </GeneralText>
          </div>
          <div class="item">
            <IconsCube />
            <GeneralTitle mini>Join Competitions on Telegram!</GeneralTitle>
            <GeneralText>
              Participate in exclusive contests on our official Telegram
              channel:
              <NuxtLink
                class="link"
                to="https://t.me/spinnercoin"
                target="_blank"
                aria-label="telegram"
                >t.me/SpinnerCoin.
              </NuxtLink>
              <br />Win exciting rewards like spinners, NFTs, and SPN tokens.
              Don’t miss your chance to spin, compete, and collect unique
              prizes!
            </GeneralText>
          </div>
        </div>
      </GeneralFlex>
    </GeneralContainer>
  </GeneralSection>
</template>

<style scoped>
.howtoplay {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 20px;
  justify-items: center;
}

.item {
  width: 100%;
  background-color: var(--gray);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.big {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

.play-img {
  width: 100%;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.link {
  color: #00ffa8;
  font-weight: 700;
}

@media (max-width: 1024px) {
  .item {
    padding: 20px;
  }

  .play-img {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .howtoplay {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .item {
    align-items: center;

    * {
      text-align: center;
    }
  }

  .big {
    display: flex;
    flex-direction: column;
  }

  .play-img {
    height: 200px;
    order: -1;
  }
}
</style>
