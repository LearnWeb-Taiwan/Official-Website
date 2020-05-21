<template>
  <div id="app">
    <nav class="navbar-wrapper">
      <router-link to="/" class="navbar-logo"><img class="logo-img" src="./assets/images/logo-rectangle-v1.0.png" alt="learnweb-logo" srcset=""></router-link>
      <ul class="navbar-list">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
      </ul>
      <div class="navbar-menu">Menu</div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Noto_Sans_TC';
  background: rgb(248, 248, 248);
}

.navbar-wrapper {
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 16px;
  box-shadow: 0 0 8px 0px black;
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
  }
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
  .navbar-menu {
    display: none;
    cursor: pointer;
  }
}
@media screen and (max-width: 600px) {
  .navbar-wrapper{
    .navbar-list {
      display: none;
      margin-right: 16px;
      color: #4A4747;
    }
    .navbar-menu {
      display: inline-block;
    }
  }
}
</style>
