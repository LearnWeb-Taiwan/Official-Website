<template>
  <div id="app">
    <Navbar />
    <router-view />
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
</style>
