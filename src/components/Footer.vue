<template>
  <div class="footer-wrapper">
    Copyright © 2020 LearnWeb Taiwan
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background: black;
  color: white;
  font-family: 'Noto_Sans_TC';
  padding: 0 36px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 600px) {
  .footer-wrapper {
    height: 48px;
    padding: 0 16px;
  }
}
</style>
