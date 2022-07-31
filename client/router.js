import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c2fbb704 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _1a556aee = () => interopDefault(import('../pages/work/index.vue' /* webpackChunkName: "pages/work/index" */))
const _2f165b31 = () => interopDefault(import('../pages/work/_id.vue' /* webpackChunkName: "pages/work/_id" */))
const _5660d6ad = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _c2fbb704,
    name: "contact"
  }, {
    path: "/work",
    component: _1a556aee,
    name: "work"
  }, {
    path: "/work/:id",
    component: _2f165b31,
    name: "work-id"
  }, {
    path: "/",
    component: _5660d6ad,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
