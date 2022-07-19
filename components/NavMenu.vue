<template>
  <div class="nav-menu">
    <div class="nav-menu__top">
      <div class="app-logo">
        <div class="app-icon__container" />
        <div class="logo-text">
          Pineapple
        </div>
      </div>
      <button class="menu-close_btn" @click="closeMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="32.219" height="32.219">
          <g>
            <path d="M20.665 11.553a.805.805 0 0 1 0 1.139l-7.973 7.974a.806.806 0 0 1-1.139-1.139l7.974-7.974a.806.806 0 0 1 1.139 0Z" fill="#fff" fill-rule="evenodd" class="cross" />
          </g>
          <g>
            <path d="M11.552 11.552a.806.806 0 0 1 1.139 0l7.974 7.974a.806.806 0 0 1-1.139 1.139l-7.974-7.974a.806.806 0 0 1 0-1.139Z" fill="#fff" fill-rule="evenodd" class="cross" />
          </g>
          <g>
            <path d="M16.11 30.608a14.5 14.5 0 1 0-14.5-14.5 14.5 14.5 0 0 0 14.5 14.5Zm0 1.611A16.11 16.11 0 1 0 0 16.11a16.11 16.11 0 0 0 16.11 16.109Z" fill="#000000" fill-rule="evenodd" class="circle" />
          </g>
        </svg>
      </button>
    </div>
    <div class="nav-menu__bottom"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu () {
      this.$emit('close-menu')
    }
  }
}
</script>

<style scoped>
.nav-menu {
    height: 100vh;
    padding: 2.5rem 3rem 3rem 4rem;
    position: relative;
}

.nav-menu__top {
    display: flex;
    justify-content: space-between;
}

.nav-menu__top .app-logo {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.nav-menu__top .app-logo .logo-text {
    color: #fff;
    line-height: 1;
    margin-top: 2px;
    font-size: 1.4rem;
}

.nav-menu__top .app-logo .app-icon__container {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: contain;
    background-image: url('~assets/icons/logo-yellow.svg');
}

.menu-close_btn {
    margin-top: 1px;
    margin-right: 7px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    transition: all .2s ease-in-out;
}

.menu-close_btn:hover {
    border: 2px solid #fff;
    border-radius: 50%;
}
</style>
