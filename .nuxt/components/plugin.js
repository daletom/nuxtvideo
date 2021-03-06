import Vue from 'vue'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Video1: () => import('../../components/video1.vue' /* webpackChunkName: "components/video-1" */).then(c => c.default || c),
  Video2: () => import('../../components/video2.vue' /* webpackChunkName: "components/video-2" */).then(c => c.default || c),
  Video3: () => import('../../components/video3.vue' /* webpackChunkName: "components/video-3" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
