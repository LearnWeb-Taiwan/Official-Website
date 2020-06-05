import { mount, createLocalVue } from '@vue/test-utils'

import VueRouter from 'vue-router'
import routes from '@/router/routes.js'
import store from '@/store'

import App from '@/App.vue'
import Home from '@/views/Home.vue'
import Activities from '@/views/Activities.vue'
// import Collaboration from '@/views/Collaboration.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
  it('route path: /, component: Home', async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    })

    router.push('/')
    await wrapper.vm.$nextTick()

    expect(wrapper.find(Home).exists()).toBe(true)
  })

  it('route path: /activities, component: Activities', async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router,
      store,
    })

    router.push('/activities')
    await wrapper.vm.$nextTick()

    expect(wrapper.find(Activities).exists()).toBe(true)
  })

  // it('route path: /collaboration, component: Collaboration', async () => {
  //   const router = new VueRouter({ routes })
  //   const wrapper = mount(App, {
  //     localVue,
  //     router,
  //     store,
  //   })

  //   router.push('/collaboration')
  //   await wrapper.vm.$nextTick()

  //   expect(wrapper.find(Collaboration).exists()).toBe(true)
  // })
})
