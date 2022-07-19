<template>
  <div id="nav-header" class="nav-header__wrapper">
    <div class="nav-header__content">
      <div class="nav-text">
        UX UI Agency
      </div>
      <nuxt-link to="/" class="app-logo">
        <div class="app-icon__container" />
        <div class="logo-text">
          Pineapple
        </div>
      </nuxt-link>
      <button class="menu-icon__wrapper" @click="handleOpenMenu">
        <div class="icon top" />
        <div class="icon" />
        <div class="icon bottom" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpenMenu () {
      this.$emit('open-menu')
    }
  }
}
</script>

<style scoped>
.nav-header__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    bottom: auto;
    z-index: 4;
    padding: 2.5rem 4rem 0;
    box-shadow: none;
    background-color: #000;
    transition: box-shadow .3s ease,transform .5s ease .5s,background-color .3s ease;
}

.nav-header__wrapper.is-scrolled {
    transform: translateY(-100%);
}

.nav-header__wrapper.white {
    background-color: #fff;
    box-shadow: 0 10px 13px rgb(0 0 0 / 6%);
}

.nav-header__wrapper .nav-header__content {
    padding-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: 1px solid #dddfe2; */
    border-bottom: 1px solid hsla(0,0%,100%,.18);
    opacity: 1;
    visibility: inherit;
}

.nav-header__wrapper .nav-header__content .nav-text {
    color: hsla(0,0%,100%,.6);
    transition: color .3s ease;
}

.nav-header__wrapper.white .nav-header__content .nav-text {
    color: rgba(0,0,0,.6);
}

.nav-header__wrapper .app-logo {
    display: flex;
    align-items: center;
    margin-left: -7rem;
    cursor: pointer;
}

.nav-header__wrapper .app-logo .logo-text {
    color: #fff;
}

.nav-header__wrapper.white .app-logo .logo-text {
    color: #000;
}

.nav-header__wrapper .app-logo .app-icon__container {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    background-image: url('~assets/icons/logo-yellow.svg');
}

.nav-header__wrapper .menu-icon__wrapper {
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.nav-header__wrapper .menu-icon__wrapper .icon {
    width: 2rem;
    height: 0.2rem;
    border-radius: 2px;
    margin: 0.7rem 0;
    position: relative;
}

.nav-header__wrapper .menu-icon__wrapper .icon::before,
.nav-header__wrapper .menu-icon__wrapper .icon::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: transform .4s ease .4s,background-color .3s ease;
    transform-origin: top right;
}

.nav-header__wrapper .menu-icon__wrapper .icon::before {
    background-color: #fff;
}

.nav-header__wrapper.white .menu-icon__wrapper .icon::before {
    background-color: #000;
}

.nav-header__wrapper .menu-icon__wrapper .icon.top {
    width: 1rem;
    margin: 0 0 0 -0.3rem;
}

.nav-header__wrapper .menu-icon__wrapper .icon.bottom {
    width: 1rem;
    align-self: flex-end;
    margin: 0 -0.3rem 0 0;
}

.nav-header__wrapper .menu-icon__wrapper .icon::after {
    transform: scaleX(0);
    transition-delay: 0s;
    transform-origin: top left;
    background-color: #dc7550;
}

.nav-header__wrapper .menu-icon__wrapper:hover .icon::before {
    transform: scaleX(0);
    transition-delay: 0s;
}

.nav-header__wrapper .menu-icon__wrapper:hover .icon::after {
    transform: scaleX(1);
    transition: transform .4s ease .4s;
}

@media screen and (max-width: 768px) {
    .nav-header__wrapper {
        padding: 25px 26px 0 25px;
    }

    .nav-header__wrapper .nav-header__content {
        padding-bottom: 25px;
    }
    .nav-header__wrapper .nav-header__content .nav-text {
        display: none;
    }

    .nav-header__wrapper .app-logo {
        margin-left: 0;
    }
}
</style>
