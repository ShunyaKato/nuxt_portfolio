<template>
  <div class="coverflow">
    <swiper class="coverflow__swiper" :options="swiperOption" v-if="pickSongs.length > 0">
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
        <button
          class="coverflow__swiper__content__button"
          type="button"
          @click="toggleLike(pickSong.image, pickSong.title, pickSong.link, pickSong.id, pickSong.isLiked)"
        >
          <font-awesome-icon
            class="coverflow__swiper__content__button__icon"
            icon="heart"
            :class="{isLikedActive: pickSong.isLiked}"
          />
          <p class="coverflow__swiper__content__button__text">{{toggleButtonText(pickSong.isLiked)}}</p>
        </button>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

@Component({
  components: {
    // Swiper,
    // SwiperSlide
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

  toggleLike(
    image: string,
    title: string,
    link: string,
    id: number,
    isLiked: boolean
  ) {
    this.$store.commit('toggleLikeSongs', {
      image: image,
      title: title,
      link: link,
      id: id,
      isLiked: isLiked
    })
  }

  toggleButtonText(isLiked: boolean) {
    return isLiked ? 'お気に入り解除' : 'お気に入り登録'
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
      font-size: 20px;
      &__link {
        width: 100%;
        &__image {
          width: 100%;
        }
      }
      &__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        margin: 10px 0;
        padding: 3px 0px;
        border-radius: 10px;
        color: #202020;
        background-color: #ffffff;
        cursor: pointer;
        font-size: 14px;
        &__icon {
          color: #202020;
          padding: 0 5px 0 0;
        }
        &__text {
          margin: 1px 0 0;
        }
      }
    }
  }
}

.isLikedActive {
  color: #e0255d;
}

@media (max-width: 680px) {
  .coverflow {
    &__swiper {
      padding: 120px 0 100px;
      &__content {
        width: 270px;
        height: 270px;
        &__button {
          width: 50%;
        }
      }
    }
  }
}

.swiper-button-prev,
.swiper-button-next {
  margin-bottom: 50px;
}
</style>