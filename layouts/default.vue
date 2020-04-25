<template>
  <div>
    <HomeHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { fetchApi } from '@/utils/index'

@Component({
  components: {
    HomeHeader: () => import('~/components/HomeHeader.vue')
  }
})
export default class Layouts extends Vue {
  async beforeCreate() {
    await this.$store.dispatch('createSongDataArray', 488)
  }

  mounted() {
    window.onscroll = () => {
      const y = pageYOffset
      if (y >= 73) {
        this.$store.commit('switchIsFixed', true)
      } else {
        this.$store.commit('switchIsFixed', false)
      }
    }
  }
}
</script>

<style lang="scss">
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #202020;
  color: #ffffff;
  font-family: Yu Gothic;
}
</style>


