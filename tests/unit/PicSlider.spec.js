import { mount } from '@vue/test-utils'
import PicSlider from '@/components/PicSlider.vue'

describe('PicSlider', () => {
  it('prop imgSet prepare', () => {
    const imageSet = ['/mock1.png', '/mock2.png', '/mock3.png']
    const slideSec = 1
    const needAutoSlide = false
    const wrapper = mount(PicSlider, {
      propsData: {
        imageSet,
        slideSec,
        needAutoSlide,
      },
    })

    expect(wrapper.findAll('.slider-img>img').at(0).html()).toBe(
      `<img src="${imageSet[0]}" alt="slide-img" class="isActive" style="transition: ${slideSec}s;">`
    )

    expect(wrapper.findAll('.slider-img>img').at(1).html()).toBe(
      `<img src="${imageSet[1]}" alt="slide-img" class="" style="transition: ${slideSec}s;">`
    )

    expect(wrapper.findAll('.slider-img>img').at(2).html()).toBe(
      `<img src="${imageSet[2]}" alt="slide-img" class="" style="transition: ${slideSec}s;">`
    )
  })
})
