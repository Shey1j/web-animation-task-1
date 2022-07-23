<template>
  <div class="layout__container">
    <Nuxt />
  </div>
</template>

<script>
// import { gsap } from 'gsap'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
export default {
  name: 'DefaultLayout',
  mounted () {
    this.getSplitting()
  },
  methods: {
    getSplitting () {
      Splitting()
    }
  }
}
</script>

<style>

</style>
