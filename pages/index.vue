<template>
  <div class="home" :class="{addMarginTop: isFixed}">
    <slider />
    <artist />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import slider from '@/components/slider.vue'

@Component({
  components: {
    slider,
    artist: () => import('~/components/artist.vue')
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
  margin-top: 140px;
}
</style>
