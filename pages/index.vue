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
      <faq-section />
      <footer-section />
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
        this.addFaqTextAnimation()
        this.addFaqScrollTextAnimation()
        this.addFooterTextAnimation()
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
      const element = document.getElementById('door-section').getElementsByClassName('stats-flex__section')[0]
      const elemRect = element.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        this.$store.commit('handleValueUpdate', true)
      }
    },
    addHeroTextAnimation () {
      const element = document.getElementById('hero-section').getElementsByClassName('splitting')
      const buttonElement = document.getElementById('hero-section').getElementsByClassName('hero-cta')[0]
      const allElements = [...element]
      allElements.forEach((el) => {
        const elemRect = el.getBoundingClientRect()
        const height = window.innerHeight - elemRect.top
        if (height > 0) {
          el.classList.add('is-inview')
        }
      })
      buttonElement.classList.add('fade-in')
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
      const buttonElement = mainElement.getElementsByClassName('process-btn')[0]
      const lineElements = mainElement.getElementsByClassName('process-line')
      const markerElements = mainElement.getElementsByClassName('marker')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        const allLineElements = [...lineElements]
        const allMarkerElements = [...markerElements]
        allElements[0].classList.add('is-inview')
        buttonElement.classList.add('fade-in')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
        allLineElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.style.width = '100%'
          }
        })
        allMarkerElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('active')
          }
        })
      }
    },
    addOurWorksTextAnimation () {
      const mainElement = document.getElementById('our-works-section')
      const element = document.getElementById('our-works-section').getElementsByClassName('splitting')
      const imageElement = mainElement.getElementsByClassName('work-image__large')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        const allImageElements = [...imageElement]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
        allImageElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.getElementsByTagName('img')[0].classList.add('zoom-in')
          }
        })
      }
    },
    addBlogTextAnimation () {
      const mainElement = document.getElementById('blog-section')
      const element = document.getElementById('blog-section').getElementsByClassName('splitting')
      const buttonElement = document.getElementById('blog-section').getElementsByClassName('more-blog__btn')[0]
      const elemRect = mainElement.getBoundingClientRect()
      const buttonElemRect = buttonElement.getBoundingClientRect()
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
        if (buttonElemRect.top > 1 && (window.innerHeight - buttonElemRect.top > 0)) {
          buttonElement.classList.add('fade-in')
        }
      }
    },
    addFaqTextAnimation () {
      const mainElement = document.getElementById('faq-section')
      const element = document.getElementById('faq-section').getElementsByClassName('splitting')
      const lineElements = document.getElementById('faq-section').getElementsByClassName('faq-line')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        const allLineElements = [...lineElements]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
        allLineElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.style.width = '100%'
          }
        })
      }
    },
    addFaqScrollTextAnimation () {
      const mainElement = document.getElementById('faq-section')
      const element = mainElement.getElementsByTagName('textPath')[0]
      const elemRect = mainElement.getBoundingClientRect()
      element.setAttribute('startOffset', elemRect.top)
    },
    addFooterTextAnimation () {
      const mainElement = document.getElementsByClassName('footer-container')[0]
      const element = mainElement.getElementsByClassName('splitting')
      const buttonElement = mainElement.getElementsByClassName('footer-btn')
      const elemRect = mainElement.getBoundingClientRect()
      const height = window.innerHeight - elemRect.top
      if (height > 0) {
        const allElements = [...element]
        const allButtonElements = [...buttonElement]
        allElements[0].classList.add('is-inview')
        allElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('is-inview')
          }
        })
        allButtonElements.forEach((el) => {
          const currentElement = el.getBoundingClientRect()
          if (currentElement.top > 1 && (window.innerHeight - currentElement.top > 0)) {
            el.classList.add('fade-in')
          }
        })
      }
    }
  }
}
</script>
