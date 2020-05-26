<template>
  <div class="slider-wrapper">
    <div class="slider-img">
      <img
        :class="{ isActive: imageIndex === currIndex }"
        v-for="(imageSrc, imageIndex) in imageSet"
        :key="imageSrc"
        :src="imageSrc"
        :alt="imageIndex"
        :style="{ transition: slideSec + 's' }"
      />
    </div>
    <div class="slider-controller">
      <div
        class="slider-controller-circle"
        :class="{ isActive: btnIndex === currIndex }"
        v-for="(imageSrc, btnIndex) in imageSet"
        :key="btnIndex"
        @click="currIndex = btnIndex"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    imageSet: Array,
    slideSec: {
      type: Number,
      default: 1,
    },
    autoSlide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currIndex: 0,
    }
  },
  mounted() {
    if (this.autoSlide) {
      this.slideContinuous()
    }
  },
  methods: {
    slideToNext() {
      let total = this.imageSet.length - 1
      let curr = this.currIndex
      if (curr < total) {
        this.currIndex++
      } else {
        this.currIndex = 0
      }
    },
    slideContinuous() {
      let self = this
      setInterval(function () {
        self.slideToNext()
      }, 5000)
    },
  },
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 100%;
  height: 700px;
  justify-content: center;
  position: relative;
  z-index: 0;
  .slider-img {
    position: relative;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    > img {
      position: absolute;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      opacity: 0;
      &.isActive {
        opacity: 1;
      }
    }
  }
  .slider-controller {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    width: 100%;
    margin-bottom: 12px;
    .slider-controller-circle {
      opacity: 0.9;
      width: 20px;
      height: 20px;
      margin: 0 10px;
      border: 2px solid white;
      box-sizing: border-box;
      border-radius: 50%;
      transition: 0.5s;
      &.isActive {
        background: #f0822b;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .slider-wrapper {
    height: 500px;
    .slider-controller {
      .slider-controller-circle {
        width: 16px;
        height: 16px;
        margin: 0 8px;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .slider-wrapper {
    height: 250px;
    .slider-controller {
      .slider-controller-circle {
        width: 14px;
        height: 14px;
        margin: 0 7px;
      }
    }
  }
}
</style>
