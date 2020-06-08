import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

const wrapper = mount(Navbar, {
  stubs: {
    RouterLink: RouterLinkStub,
  },
})

const currShowinglinks = ['Home', 'Activities', 'GitHub', 'Facebook']

describe('Navbar', () => {
  it('navbar-list links should same as links', () => {
    for (let i = 0; i < currShowinglinks.length; i++) {
      expect(wrapper.findAll('.navbar-list>a').at(i).text()).toBe(
        `${currShowinglinks[i]}`
      )
    }
  })

  it('navbar-menu links should same as links', () => {
    for (let i = 0; i < currShowinglinks.length; i++) {
      expect(wrapper.findAll('.navbar-menu>a').at(i).text()).toBe(
        `${currShowinglinks[i]}`
      )
    }
  })
})
