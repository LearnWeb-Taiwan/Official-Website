import { mount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

const wrapper = mount(Footer)

describe('Footer', () => {
  it('copyright should display correct ', () => {
    expect(wrapper.text()).toBe(`Copyright © 2020 LearnWeb Taiwan`)
  })
})
