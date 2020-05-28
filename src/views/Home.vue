<template>
  <div class="home-wrapper">
    <section class="banner-wrapper">
      <div class="banner-slogan container">
        <p class="banner-title">LearnWeb</p>
        <p class="banner-subtitle">學習使你永不匱乏，熱情使你永不空虛。</p>
        <p class="banner-content">
          這是一個使<span class="highlight">入門</span>
          網頁開發者能輕鬆分享與互動的開源社群。<br />
          不定時舉辦
          <span class="highlight">講座</span>、
          <span class="highlight">工作坊</span>與
          <span class="highlight">讀書會</span>，<br />
          激發你對於網頁開發中的無限創意。<br /><br />
          準備好認識更多新朋友，一起享受美好的討論時光了嗎？
        </p>
        <br />
        <div class="banner-btn">立即參與</div>
        <br />
      </div>
      <pic-slider
        :imageSet="sliderImage"
        :slideSec="2.5"
        :isAutoSlide="false"
      />
    </section>
  </div>
</template>

<script>
import picSlider from '@/components/PicSlider'

export default {
  name: 'Home',
  components: {
    picSlider,
  },
  data() {
    return {
      sliderImage: [
        '/images/cover.jpg',
        '/images/20191114.jpg',
        '/images/20191117.jpg',
        '/images/20200523.jpg',
      ],
    }
  },
}
</script>

<style lang="scss">
.home-wrapper {
  font-family: 'Noto_Sans_TC';
}
.banner-wrapper {
  position: relative;
  z-index: 0;
  .banner-slogan {
    position: absolute;
    z-index: 1;
    left: 5%;
    top: 10%;
    color: white;
    font-weight: bold;
    .banner-title {
      display: inline-block;
      padding: 14px;
      padding-bottom: 0;
      font-size: 40px;
      background: #00000090;
    }
    .banner-subtitle {
      padding: 14px;
      font-size: 32px;
      background: #00000090;
    }
    .banner-content {
      line-height: 24px;
      margin-top: 40px;
      display: inline-block;
      padding: 12px;
      font-size: 20px;
      background: #00000090;
      .highlight {
        color: #f0822b;
      }
    }
    .banner-btn {
      display: inline-block;
      font-size: 24px;
      padding: 8px 16px;
      background: #f0822b;
      margin-top: 40px;
      position: relative;
      z-index: 2;
      color: transparent;
      &::before {
        content: '立即參與';
        padding: 8px 16px;
        position: absolute;
        top: -12px;
        left: 24px;
        background: #4f74af;
        color: transparent;
        z-index: 1;
        white-space: nowrap;
      }
      &::after {
        cursor: pointer;
        content: '立即參與';
        padding: 8px 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        background: #00000090;
        color: white;
        z-index: 2;
        white-space: nowrap;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
}

@media screen and (max-width: 600px) {
}
</style>
