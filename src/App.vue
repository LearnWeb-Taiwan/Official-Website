<template>
  <div id="app">
    <div class="app-navbar-wrapper">
      <Navbar />
    </div>
    <main class="app-main-wrapper">
      <router-view />
    </main>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
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
