<template>
  <div class="like-page">
    <h1 class="like-page__title">Like Songs</h1>
    <div class="like-page__wrap" v-if="likeSongs && likeSongs.length > 0">
      <div class="like-page__wrap__content" v-for="(likeSong, index) in likeSongs" :key="index">
        <a class="like-page__wrap__content__link" :href="likeSong.link">
          <img class="like-page__wrap__content__link__image" :src="likeSong.image" alt="coverImage" />
        </a>
        <p class="like-page__wrap__content__title">{{likeSong.title}}</p>
        <button class="like-page__wrap__content__button" @click="removeLiked(likeSong.id)">削除</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class LIke extends Vue {
  get likeSongs() {
    return this.$store.state.likeSongs
  }

  removeLiked(songId: number) {
    this.$store.commit('removeLikeSongs', songId)
  }
}
</script>

<style lang="scss" scoped>
.like-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1000px;
  &__title {
    margin: 50px 0 20px;
  }
  &__wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 1080px;
    margin: 50px auto;
    &__content {
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &__link {
        display: block;
        &__image {
          width: 200px;
        }
      }
      &__title {
        font-size: 18px;
        max-width: 180px;
        margin: 10px 0;
        text-align: center;
      }
      &__button {
        border-radius: 5px;
      }
    }
  }
}
</style>