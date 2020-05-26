<template>
  <nav class="navbar-wrapper">
    <router-link to="/" class="navbar-logo"
      ><img
        class="logo-img"
        src="@/assets/images/logo-rectangle-v1.0.png"
        alt="learnweb-logo"
        srcset=""
    /></router-link>
    <ul class="navbar-list">
      <router-link to="/" class="navbar-item">Home</router-link>
      <!-- <router-link to="/about" class="navbar-item">About</router-link> -->
      <a
        href="https://github.com/LearnWeb-Taiwan"
        class="navbar-item"
        target="_blank"
        ref="noopener"
        >GitHub</a
      >
    </ul>
    <div class="navbar-menu-btn" @click="isMenuOpen = !isMenuOpen">Menu</div>
    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <router-link
        to="/"
        class="navbar-item"
        @click.native="isMenuOpen = !isMenuOpen"
        >Home</router-link
      >
      <!-- <router-link
        to="/about"
        class="navbar-item"
        @click.native="isMenuOpen = !isMenuOpen"
        >About</router-link
      > -->
      <a
        href="https://github.com/LearnWeb-Taiwan"
        class="navbar-item"
        target="_blank"
        ref="noopener"
        @click="isMenuOpen = !isMenuOpen"
        >GitHub</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style lang="scss">
.navbar-wrapper {
  position: fixed;
  z-index: 9;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 0 4px 0px black;
  background: white;
  font-family: 'Noto_Sans_TC';
  font-weight: bold;
  .navbar-logo {
    display: inline-block;
    height: 64px;
    .logo-img {
      height: 100%;
      object-fit: contain;
    }
  }
  .navbar-list {
    margin-right: 16px;
    color: #4a4747;
    .navbar-item {
      display: inline-block;
      width: 96px;
      height: 64px;
      line-height: 64px;
      text-align: center;
      box-sizing: border-box;
      transition: 0.3s;
      &:hover {
        background: rgb(240, 239, 239);
      }
      &.router-link-exact-active {
        border-bottom: 4px solid #f0822b;
      }
    }
  }
  .navbar-menu-btn {
    display: none;
    cursor: pointer;
  }
  .navbar-menu {
    position: absolute;
    display: none;
    top: 64px;
    left: 0;
    height: 0;
    width: 100%;
    background: white;
    transition: 0.4s ease;
    overflow: hidden;
    box-shadow: 0 6px 2px -4px gray;
    &.is-active {
      height: 96px;
    }
    .navbar-item {
      display: inline-block;
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      box-sizing: border-box;
      transition: 0.3s;
      background: rgb(250, 250, 250);
      &:hover {
        background: rgb(236, 236, 236);
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .navbar-wrapper {
    padding: 0 12px 0 0;
    .navbar-logo {
      display: inline-block;
      height: 48px;
      .logo-img {
        height: 100%;
        object-fit: contain;
      }
    }
    .navbar-list {
      display: none;
      margin-right: 16px;
      color: #4a4747;
    }
    .navbar-menu {
      display: block;
      top: 48px;
    }
    .navbar-menu-btn {
      display: inline-block;
    }
  }
}
</style>
