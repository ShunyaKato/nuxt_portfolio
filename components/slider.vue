<template>
  <div class="coverflow">
    <swiper
      class="coverflow__swiper"
      :options="swiperOption"
      v-if="pickSongs && pickSongs.length > 0"
    >
      <swiper-slide
        class="coverflow__swiper__content"
        v-for="(pickSong, index) in pickSongs"
        :key="index"
      >
        <a class="coverflow__swiper__content__link">
          <img
            class="coverflow__swiper__content__link__image"
            :src="pickSong.image"
            alt="coverImage"
          />
        </a>
        <p class="coverflow__swiper__content__title">{{pickSong.title}}</p>
        <button class="coverflow__swiper__content__button" type="button"></button>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class Index extends Vue {
  swiperOption = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  get pickSongs() {
    return this.$store.state.pickSongs
  }
}
</script>

<style lang='scss'>
.coverflow {
  width: 100%;
  height: 100%;
  &__swiper {
    height: 100%;
    width: 100%;
    padding: 50px 0 120px;
    &__content {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 480px;
      height: 480px;
      font-weight: bold;
      &__link {
        width: 100%;
        &__image {
          width: 100%;
        }
      }
    }
  }
}
</style>