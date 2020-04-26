<template>
  <div class="home" :class="{addMarginTop: isFixed}">
    <Loading />
    <Slider />
    <Artist />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
// import Slider from '@/components/Slider.vue'

@Component({
  components: {
    Slider: () => import('~/components/Slider.vue'),
    Artist: () => import('~/components/Artist.vue'),
    Loading: () => import('~/components/Loading.vue')
  }
})
export default class Index extends Vue {
  get isFixed() {
    return this.$store.state.isFixed
  }
}
</script>

<style lang='scss'>
.addMarginTop {
  margin-top: 120px;
}
</style>
