<template>
  <div class="layout__container">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      myScroll: null,
      windowTop: 0,
      lastScrollTop: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initializeScroll()
    })
  },
  methods: {
    initializeScroll () {
      this.myScroll = new this.LocomotiveScroll({
        el: document.querySelector('html'),
        direction: 'vertical',
        smooth: true,
        scrollingClass: 'has-scroll-scrolling',
        smoothClass: 'has-scroll-smooth',
        initClass: 'has-scroll-init'
      })
      this.myScroll.on('scroll', (args) => {
        this.handleNavbarUpdate(args.scroll)
        this.handleDoorDataUpdate()
      })
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
      if (elemRect.top < 1) {
        this.$store.commit('handleValueUpdate', true)
      }
    }
  }
}
</script>

<style>

</style>
