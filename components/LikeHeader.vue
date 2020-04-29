<template>
  <header>
    <div class="container">
      <router-link to="/" class="container__title">Music Liblary</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LikeHeader extends Vue {}
</script>

<style lang="scss" scoped>
header {
  background-color: #333333;
  position: fixed;
  width: 100%;
  .container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
    &__title {
      color: #ffffff;
      font-weight: bold;
      height: 50px;
      font-size: 50px;
      text-decoration: none;
    }
  }
}

@media (max-width: 680px) {
  header {
    height: 60px;
    display: flex;
    align-items: center;
    .container {
      padding: 0 10px;
      margin: 0;
      &__title {
        font-size: 30px;
      }
    }
  }
}
</style>