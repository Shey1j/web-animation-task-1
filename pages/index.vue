<template>
  <div>
    <nav-header @open-menu="handleMenuDisplay" />
    <div id="menu-section" class="nav-menu__wrapper" :class="{ open: isOpen }">
      <nav-menu @close-menu="handleMenuDisplay" />
    </div>
    <div class="home-content__wrapper" data-scroll-section-id="page0" data-scroll-section-inview>
      <page-top-section />
    </div>
  </div>
</template>

<script>
import NavHeader from '~/components/NavHeader.vue'
import NavMenu from '~/components/NavMenu.vue'
import PageTopSection from '~/components/PageTopSection.vue'
export default {
  name: 'IndexPage',
  components: { NavHeader, PageTopSection, NavMenu },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleMenuDisplay () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
