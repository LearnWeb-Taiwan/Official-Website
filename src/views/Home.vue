<template>
  <div class="home-wrapper">
    <!-- banner wrapper start-->
    <section class="banner-wrapper">
      <div class="banner-slogan container">
        <p class="banner-title">It's time to learn!</p>
        <p class="banner-subtitle">學習使人永不匱乏，熱情使人永不空虛。</p>
        <p class="banner-content">
          對於網頁開發充滿熱情？<br />
          喜歡參與社群勝於獨自開發？<br />
          想要找到一群能夠一起討論網頁技術的開發者？
        </p>
        <br />
        <div class="banner-btn">
          加入我們
          <i class="icon fas fa-door-open"></i>
          <i class="icon fas fa-door-closed"></i>
        </div>
        <br />
      </div>
      <pic-slider :imageSet="sliderImage" :slideSec="2" :needAutoSlide="true" />
    </section>
    <!-- banner wrapper end-->
    <!-- about wrapper start-->
    <section class="about-wrapper container">
      <h2 class="about-title">LearnWeb 在做什麼？</h2>
      <br />
      <p class="about-content">
        「我們是一群熱於分享的網頁開發者們。」<br /><br />
        我們不定時舉辦各種
        <span class="highlight">講座</span>、
        <span class="highlight">工作坊</span> 與
        <span class="highlight">讀書會</span>
        ，激發彼此對於網頁開發技術的無限想法。<br /><br />
        我們期望能建立給予
        <span class="highlight">正在自學</span>
        與
        <span class="highlight">剛入職</span>
        的開發者們，一個能輕鬆發言的舞台。<br />
        <br />
      </p>
      <div class="about-card-wrapper">
        <!-- card -->
        <div class="card-wrapper">
          <div class="card-header">
            <div class="card-icon">
              <i class="icon fas fa-poll-h"></i>
            </div>
            <div class="card-title">技術講座</div>
          </div>
          <div class="card-body">
            <div class="card-content">
              由講者準備精彩的議題，從心法到工具，再從應用到架構，各式各樣經驗，直接吸取精華。
            </div>
          </div>
        </div>
        <!-- card -->
        <div class="card-wrapper">
          <div class="card-header">
            <div class="card-icon">
              <i class="icon fas fa-tools"></i>
            </div>
            <div class="card-title">工作坊</div>
          </div>
          <div class="card-body">
            <div class="card-content">
              由主持人帶著大家手把手寫出屬於自己的網頁應用程式，透過實作來精進技術，並且學習新的
            </div>
          </div>
        </div>
        <!-- card -->
        <div class="card-wrapper">
          <div class="card-header">
            <div class="card-icon">
              <i class="icon fas fa-book"></i>
            </div>
            <div class="card-title">讀書會</div>
          </div>
          <div class="card-body">
            <div class="card-content">
              精選網頁開發經典書目閱讀，以讀書小組的形式深入討論，藉由成員的重新詮釋，得到從未想過的弦外之音！
            </div>
          </div>
        </div>
        <!-- card -->
      </div>
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
      font-weight: normal;
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
      font-size: 20px;
      padding: 8px;
      margin-top: 40px;
      position: relative;
      top: 0;
      left: 0;
      z-index: 2;
      transition: 0.3s;
      background: #000000;
      .icon {
        margin-left: 8px;
        color: white;
        transition: 0.5s;
      }
      .fa-door-open {
        display: none;
      }
      .fa-door-closed {
        display: inline-block;
      }
      &:hover {
        left: 16px;
        .fa-door-open {
          display: inline-block;
        }
        .fa-door-closed {
          display: none;
        }
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
          top: 8px;
          left: 0;
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
      }
    }
  }
}

.about-wrapper {
  margin: 0 auto;
  text-align: center;
  .about-title {
    display: inline-block;
    margin-top: 8px;
    padding-bottom: 4px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 4px solid #f0822b;
  }
  .about-content {
    display: inline-block;
    text-align: center;
    margin: 0 auto;
    line-height: 24px;
    margin-top: 24px;
    font-size: 20px;
    font-weight: normal;
    .highlight {
      color: #f0822b;
    }
  }
  .about-card-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .card-wrapper {
      margin: 8px;
      padding: 12px;
      background: white;
      box-shadow: 0 2px 2px 0 #0008;
      transition: 0.2s;
      flex-basis: 300px;
      flex-grow: 1;
      &:hover {
        box-shadow: 0 6px 4px 0 #0008;
      }
      .card-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .card-icon {
          width: 50px;
          height: 50px;
          font-size: 24px;
          line-height: 50px;
          margin-right: 8px;
          border: 4px solid #4f74af;
          border-radius: 50%;
          > i.icon {
            color: #f0822b;
          }
        }
        .card-title {
          color: black;
          font-size: 24px;
          font-weight: bold;
        }
      }
      .card-body {
        text-align: left;
        margin-top: 8px;
        .card-content {
          font-size: 18px;
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .about-wrapper {
    .about-card-wrapper {
      .card-wrapper {
        margin: 8px 0;
      }
    }
  }
}
</style>
