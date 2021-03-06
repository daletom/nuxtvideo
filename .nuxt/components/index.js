export { default as Logo } from '../../components/Logo.vue'
export { default as Video1 } from '../../components/video1.vue'
export { default as Video2 } from '../../components/video2.vue'
export { default as Video3 } from '../../components/video3.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyVideo1 = import('../../components/video1.vue' /* webpackChunkName: "components/video-1" */).then(c => c.default || c)
export const LazyVideo2 = import('../../components/video2.vue' /* webpackChunkName: "components/video-2" */).then(c => c.default || c)
export const LazyVideo3 = import('../../components/video3.vue' /* webpackChunkName: "components/video-3" */).then(c => c.default || c)
