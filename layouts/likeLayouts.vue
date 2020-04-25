<template>
  <div>
    <LikeHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  components: {
    LikeHeader: () => import('~/components/LikeHeader.vue')
  }
})
export default class LikeLayouts extends Vue {}
</script>