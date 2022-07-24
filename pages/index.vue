<template>
  <div>
    <nav-header @open-menu="handleMenuDisplay" />
    <div id="menu-section" class="nav-menu__wrapper" :class="{ open: isOpen }">
      <nav-menu @close-menu="handleMenuDisplay" />
    </div>
    <!-- <div class="home-content__wrapper" data-scroll-section-id="page0" data-scroll-section-inview> -->
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        offset: ['30%', 0],
        direction: 'vertical'
        // Other options
      }"
      class="home-content__wrapper"
    >
      <page-top-section />
      <process-section />
      <our-works-section />
      <blog-section />
    </LocomotiveScroll>
  </div>
</template>

<script>
import NavHeader from '~/components/NavHeader.vue'
import NavMenu from '~/components/NavMenu.vue'
import OurWorksSection from '~/components/OurWorksSection.vue'
import PageTopSection from '~/components/PageTopSection.vue'
import ProcessSection from '~/components/ProcessSection.vue'
export default {
  name: 'IndexPage',
  components: { NavHeader, PageTopSection, NavMenu, ProcessSection, OurWorksSection },
  data () {
    return {
      isOpen: false,
      windowTop: 0,
      lastScrollTop: 0
    }
  },
  mounted () {
    this.initScrolltrigger()
  },
  methods: {
    initScrolltrigger () {
      const locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', (args) => {
        this.handleNavbarUpdate(args.scroll)
        this.addHeroTextAnimation()
        this.handleDoorDataUpdate()
        this.addDoorSectionTextAnimation()
        this.addProcessSectionTextAnimation()
        this.addOurWorksTextAnimation()
        this.addBlogTextAnimation()
      })
    },
    handleMenuDisplay () {
      this.isOpen = !this.isOpen
    },
    handleNavbarUpdate (scroll) {
      const el = document.getElementById('nav-header')
      this.windowTop = scroll.y
      if (this.windowTop > this.lastScrollTop) {
        if (this.windowTop > 0 && this.windowTop < 240) {
          el.classList.add('white')
        } else if (this.windowTop > 250) {
          el.classList.add('is-scrolled')
          setTimeout(() => {
            el.classList.remove('white')
          }, 1000)
        } else {
          el.classList.remove('is-scrolled')
          el.classList.remove('white')
        }
      } else if (this.windowTop <= this.lastScrollTop) {
        if (this.windowTop > 100) {
          el.classList.remove('is-scrolled')
          el.classList.add('white')
        } else {
          el.classList.remove('is-scrolled')
          el.classList.remove('white')
        }
      }
      this.lastScrollTop = this.windowTop
    },
    handleDoorDataUpdate () {
      const element = document.getElementById('door-section')
      const elemRect = element.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        this.$store.commit('handleValueUpdate', true)
      }
    },
    addHeroTextAnimation () {
      const element = document.getElementById('hero-section').getElementsByClassName('splitting')
      const allElements = [...element]
      allElements.forEach((el) => {
        el.classList.add('is-inview')
      })
    },
    addDoorSectionTextAnimation () {
      const mainElement = document.getElementById('door-section')
      const element = mainElement.getElementsByClassName('splitting')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
      }
    },
    addProcessSectionTextAnimation () {
      const mainElement = document.getElementById('process-section')
      const element = mainElement.getElementsByClassName('splitting')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
      }
    },
    addOurWorksTextAnimation () {
      const mainElement = document.getElementById('our-works-section')
      const element = document.getElementById('our-works-section').getElementsByClassName('splitting')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
      }
    },
    addBlogTextAnimation () {
      const mainElement = document.getElementById('blog-section')
      const element = document.getElementById('blog-section').getElementsByClassName('splitting')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
      }
    }
  }
}
</script>
