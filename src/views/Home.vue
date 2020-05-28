<template>
  <div class="home-wrapper">
    <!-- banner wrapper start-->
    <section class="banner-wrapper">
      <div class="banner-slogan container">
        <p class="banner-title">It's time to learn!</p>
        <p class="banner-subtitle">學習使人永不匱乏，熱情使人永不空虛。</p>
        <p class="banner-content">
          想要找到能夠一起
          <span class="highlight">學習</span>、
          <span class="highlight">分享</span>
          網頁技術的開發者嗎？<br />
          我們不定時舉辦
          <span class="highlight">講座</span>、
          <span class="highlight">工作坊</span> 與
          <span class="highlight">讀書會</span>，<br />
          激發你對於網頁開發中的無限創意。
        </p>
        <br />
        <div class="banner-btn">認識我們</div>
        <br />
      </div>
      <pic-slider
        :imageSet="sliderImage"
        :slideSec="2.5"
        :needAutoSlide="true"
      />
    </section>
    <!-- banner wrapper end-->
    <!-- about wrapper start-->
    <section class="about-wrapper container">
      <h2 class="about-title">LearnWeb 在做什麼？</h2>
      <br />
      <p class="about-content">
        我們相信
        <span class="highlight">討論</span>
        與
        <span class="highlight">分享</span>
        能使我們茁壯！<br />
        因此我們不定時舉辦
        <span class="highlight">講座</span>、
        <span class="highlight">工作坊</span> 與
        <span class="highlight">讀書會</span>，<br />
        激發彼此對於網頁開發中的無限創意。<br /><br />
        除此之外， 我們也試著提供初階開發者<br />
        一個能
        <span class="highlight">自由自在</span>
        發言的環境。<br />
        因此不論你是
        <span class="highlight">正在自學</span>
        或
        <span class="highlight">剛入職</span>
        的小小工程師，<br />
        都非常歡迎你們的到來。<br />
        <br />
        準備好認識更多新朋友，一起享受美好的討論時光了嗎？
      </p>
    </section>
    <!-- about wrapper end-->
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
        './images/cover.jpg',
        './images/20191114.jpg',
        './images/20191117.jpg',
        './images/20200523.jpg',
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
      cursor: pointer;
      display: inline-block;
      font-size: 24px;
      padding: 8px 16px;
      background: #4f74af;
      margin-top: 40px;
      position: relative;
      top: 0;
      left: 0;
      z-index: 2;
      transition: 0.3s;
      &:hover {
        &::after {
          top: -12px;
          left: 8px;
          background: #000000;
        }
        &::before {
          top: 8px;
          left: 16px;
        }
      }
      &::after {
        content: '認識我們';
        padding: 8px 16px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: #000000;
        transition: 0.3s;
      }
      &::before {
        content: '認識我們';
        padding: 8px 16px;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: #f0822b;
        transition: 0.3s;
        color: transparent;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .banner-wrapper {
    .banner-slogan {
      .banner-title {
        padding: 8px;
        font-size: 24px;
      }
      .banner-subtitle {
        padding: 8px;
        font-size: 28px;
        background: #00000090;
      }
      .banner-content {
        margin-top: 24px;
        padding: 8px;
        font-size: 18px;
      }
      .banner-btn {
        font-size: 18px;
        margin-top: 24px;
        &:hover {
          &::after {
            top: -8px;
            left: 4px;
          }
          &::before {
            top: 4px;
            left: 12px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .banner-wrapper {
    .banner-slogan {
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      .banner-title {
        display: none;
      }
      .banner-subtitle {
        min-width: 180px;
        max-width: 180px;
        padding: 8px;
        font-size: 20px;
        background: #00000080;
      }
      .banner-content {
        display: none;
      }
      .banner-btn {
        font-size: 20px;
        margin-top: 40px;
        &::after {
          content: '我們是誰？';
          width: 135px;
          left: -20px;
        }
        &:hover {
          &::after {
            top: 0px;
            left: -20px;
          }
          &::before {
            top: 0px;
            left: -20px;
          }
        }
      }
    }
  }
}

.about-wrapper {
  margin: 0 auto;
  text-align: center;
  .about-title {
    display: inline-block;
    padding-bottom: 4px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 4px solid #f0822b;
  }
  .about-content {
    display: inline-block;
    margin: 0 auto;
    text-align: left;
    line-height: 24px;
    margin-top: 24px;
    font-size: 20px;
    font-weight: bold;
    .highlight {
      color: #f0822b;
    }
  }
}
</style>
