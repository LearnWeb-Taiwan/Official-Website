<template>
  <div id="app">
    <nav class="navbar-wrapper">
      <router-link to="/" class="navbar-logo"><img class="logo-img" src="./assets/images/logo-rectangle-v1.0.png" alt="learnweb-logo" srcset=""></router-link>
      <ul class="navbar-list">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </ul>
      <div class="navbar-menu-btn" @click="isMenuOpen = !isMenuOpen">Menu</div>
      <div class="navbar-menu" :class="{'is-acitve':isMenuOpen}">
        <router-link to="/" class="navbar-item" @click.native="isMenuOpen = !isMenuOpen">Home</router-link>
        <router-link to="/about" class="navbar-item" @click.native="isMenuOpen = !isMenuOpen">About</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'App',
  data () {
    return {
      isMenuOpen: false
    }
  }
}
</script>
<style lang="scss">
body {
  min-width: 320px;
  font-family: 'Noto_Sans_TC';
  background: rgb(248, 248, 248);
}

.navbar-wrapper {
  position: fixed;
  width:100%;
  display:flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding:0 16px;
  box-shadow: 0 0 4px 0px black;
  background: white;
  font-weight: bold;
  .navbar-logo {
    display: inline-block;
    height: 64px;
    .logo-img {
      height:100%;
      object-fit: contain;
    }
  }
  .navbar-list{
    margin-right:16px;
    color: #4A4747;
    .navbar-item {
      display:inline-block;
      width: 96px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      box-sizing: border-box;
      transition: 0.3s;
      &:hover {
        background: rgb(240, 239, 239)
      }
      &.router-link-exact-active {
        border-bottom: 4px solid #F0822B;
      }
    }
  }
  .navbar-menu-btn {
    display: none;
    cursor: pointer;
  }
  .navbar-menu {
    position: absolute;
    top:64px;
    left:0;
    height:0;
    width:100%;
    background: white;
    transition:0.4s ease;
    overflow: hidden;
    box-shadow: 0 6px 2px -4px gray;
    &.is-acitve {
      height: 96px;
    }
    .navbar-item {
      display:inline-block;
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      box-sizing: border-box;
      transition: 0.3s;
      background:rgb(250, 250, 250);
      &:hover {
        background: rgb(236, 236, 236)
      }
      // &.router-link-exact-active {
      //   border-bottom: 4px solid #F0822B;
      // }
    }
  }
}
@media screen and (max-width: 600px) {
  .navbar-wrapper{
    padding: 0 12px 0 0;
    .navbar-logo {
      display: inline-block;
      height: 48px;
      .logo-img {
        height:100%;
        object-fit: contain;
      }
    }
    .navbar-list {
      display: none;
      margin-right: 16px;
      color: #4A4747;
    }
    .navbar-menu {
      top:48px;
    }
    .navbar-menu-btn {
      display: inline-block;
    }
  }
}
</style>
