<template>
  <div id="app">
    <div class="app-navbar-wrapper">
      <learnweb-navbar />
    </div>
    <main class="app-main-wrapper">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
    <div class="app-footer-wrapper">
      <learnweb-footer />
    </div>
    <div
      class="app-controller-wrapper"
      @click="goTop()"
      :class="{ active: scrollTop > 30 }"
    >
      <i class="icon fas fa-angle-up"></i>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import learnwebNavbar from './components/Navbar'
import learnwebFooter from './components/Footer'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    learnwebNavbar,
    learnwebFooter,
  },
  computed: mapState(['scrollTop']),

  mounted() {
    window.addEventListener('scroll', () => this.setScrollTop())
  },
  methods: {
    setScrollTop() {
      this.$store.dispatch('setScrollTop', window.scrollY)
    },
    goTop() {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 0) {
        window.requestAnimationFrame(this.goTop)
        window.scrollTo(0, top - top / 8)
      }
    },
  },
}
</script>
<style lang="scss">
body {
  min-width: 320px;
  font-family: 'Noto_Sans_TC';
  background: rgb(248, 248, 248);
}

.app-main-wrapper {
  padding-top: 64px;
}

@media screen and (max-width: 900px) {
  .app-main-wrapper {
    padding-top: 48px;
  }
}

.app-controller-wrapper {
  position: fixed;
  z-index: 10;
  bottom: 24px;
  right: 24px;
  transition: 1s;
  transform: translateX(200px);
  &.active {
    transform: translateX(0px);
  }
  .icon {
    text-align: center;
    width: 40px;
    height: 40px;
    font-size: 36px;
    line-height: 40px;
    color: #4f74af;
    background: white;
    border: 4px solid #4f74af;
    border-radius: 50%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
  height: auto;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-24px);
  opacity: 0;
  max-height: 0;
}
</style>
