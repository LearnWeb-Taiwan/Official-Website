<template>
  <div id="app">
    <div class="app-navbar-wrapper">
      <learnweb-navbar />
    </div>
    <main class="app-main-wrapper">
      <router-view />
    </main>
    <div class="app-footer-wrapper">
      <learnweb-footer />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import learnwebNavbar from './components/Navbar'
import learnwebFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    learnwebNavbar,
    learnwebFooter,
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

@media screen and (max-width: 600px) {
  .app-main-wrapper {
    padding-top: 48px;
  }
}
</style>
