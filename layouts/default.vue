<template>
  <div class="layout__container">
    <Nuxt v-if="imagesLoaded" />
    <transition :css="false" @leave="leave">
      <pre-loader v-if="!imagesLoaded" />
    </transition>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { mapState } from 'vuex'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState(['imagesLoaded'])
  },
  methods: {
    getSplitting () {
      Splitting()
    },
    leave (el, done) {
      const timeline = gsap.timeline({
        onComplete: done
      })
      timeline.to(el, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      })
      this.getSplitting()
    }
  }
}
</script>

<style>

</style>
