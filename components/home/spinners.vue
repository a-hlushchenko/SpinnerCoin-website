<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const slides = ref([
  "/img/home/spinners1.png",
  "/img/home/spinners2.png",
  "/img/home/spinners3.png",
  "/img/home/spinners4.png",
  "/img/home/spinners5.png",
]);
</script>

<template>
  <GeneralSection id="spinners" class="spinners">
    <GeneralContainer class="spinners-text">
      <GeneralFlex column center>
        <GeneralTitle>Spinners WEB3</GeneralTitle>
        <GeneralText center>
          Buy some really cool NFT items to boost your CATthlete. Or sell
          something you don’t need anymore (CATthletes or items).
        </GeneralText>
      </GeneralFlex>
    </GeneralContainer>

    <div class="slider">
      <swiper
        :modules="[Autoplay]"
        class="swiper-wrapper"
        :slides-per-view="'auto'"
        :space-between="20"
        :autoplay="{ delay: 2000 }"
        :speed="500"
        centered-slides
        :loop="true"
      >
        <swiper-slide class="slide" v-for="slide in slides">
          <img class="slide" :src="slide" v-if="true" />
        </swiper-slide>
        <swiper-slide class="slide" v-for="slide in slides">
          <img :src="slide" v-if="true" />
        </swiper-slide>
      </swiper>

      <img src="/img/home/phone.png" class="phone" />
      <img src="/img/home/phone-bg.png" class="phone-bg" />
    </div>
  </GeneralSection>
</template>

<style scoped>
.spinners {
  overflow: hidden;
  padding-bottom: 180px;
}
.slider {
  position: relative;
  /* padding-top: 300px; */
}

.spinners-text {
  max-width: 800px;
  padding-bottom: 240px;
}

.swiper-wrapper {
  z-index: 2;
}

.slide {
  width: 313px;

  img {
    width: 313px;
    border-radius: 16px;
    border: 2px solid transparent;
    transition: border-color 0.5s;
  }
}

.phone {
  position: absolute;
  width: 380px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}

.phone-bg {
  position: absolute;
  width: 360px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.swiper-slide-active img {
  border-color: #edab00;
}

@media (max-width: 768px) {
  .slide {
    width: 223px;

    img {
      width: 223px;
      border-radius: 16px;
      border: 2px solid transparent;
      transition: border-color 0.5s;
    }
  }

  .phone {
    position: absolute;
    width: 270px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .phone-bg {
    position: absolute;
    width: 257px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .spinners-text {
    padding-bottom: 200px;
  }
}
</style>
