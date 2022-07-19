<template>
  <div class="page-top__section">
    <hero-section />
    <hero-door-section />
  </div>
</template>

<script>
import HeroDoorSection from './HeroDoorSection.vue'
import HeroSection from './HeroSection.vue'
export default {
  components: { HeroSection, HeroDoorSection }

}
</script>

<style scoped>
.page-top__section {
    background-color: #000;
}
</style>
