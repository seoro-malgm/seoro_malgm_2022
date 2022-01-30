export const GlobalFooter = () => import('../../components/GlobalFooter.vue' /* webpackChunkName: "components/global-footer" */).then(c => wrapFunctional(c.default || c))
export const GlobalNav = () => import('../../components/GlobalNav.vue' /* webpackChunkName: "components/global-nav" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../../components/loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../../components/Logo/Index.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LogoIndex = () => import('../../components/Logo/Index_.vue' /* webpackChunkName: "components/logo-index" */).then(c => wrapFunctional(c.default || c))
export const LogoLetter = () => import('../../components/Logo/letter.vue' /* webpackChunkName: "components/logo-letter" */).then(c => wrapFunctional(c.default || c))
export const HeadingSection = () => import('../../components/heading/section.vue' /* webpackChunkName: "components/heading-section" */).then(c => wrapFunctional(c.default || c))
export const MediaImage = () => import('../../components/media/image.vue' /* webpackChunkName: "components/media-image" */).then(c => wrapFunctional(c.default || c))
export const MediaLarge = () => import('../../components/media/large.vue' /* webpackChunkName: "components/media-large" */).then(c => wrapFunctional(c.default || c))
export const IconsArrowBack = () => import('../../components/icons/ArrowBack.vue' /* webpackChunkName: "components/icons-arrow-back" */).then(c => wrapFunctional(c.default || c))
export const IconsArrowBottom = () => import('../../components/icons/ArrowBottom.vue' /* webpackChunkName: "components/icons-arrow-bottom" */).then(c => wrapFunctional(c.default || c))
export const IconsArrowNext = () => import('../../components/icons/ArrowNext.vue' /* webpackChunkName: "components/icons-arrow-next" */).then(c => wrapFunctional(c.default || c))
export const IconsArrowTop = () => import('../../components/icons/ArrowTop.vue' /* webpackChunkName: "components/icons-arrow-top" */).then(c => wrapFunctional(c.default || c))
export const IconsMenu = () => import('../../components/icons/Menu.vue' /* webpackChunkName: "components/icons-menu" */).then(c => wrapFunctional(c.default || c))
export const IconsTimes = () => import('../../components/icons/Times.vue' /* webpackChunkName: "components/icons-times" */).then(c => wrapFunctional(c.default || c))
export const MockupBrowser = () => import('../../components/mockup/browser.vue' /* webpackChunkName: "components/mockup-browser" */).then(c => wrapFunctional(c.default || c))
export const MockupPaper = () => import('../../components/mockup/paper.vue' /* webpackChunkName: "components/mockup-paper" */).then(c => wrapFunctional(c.default || c))
export const SectionMarquee = () => import('../../components/section/marquee.vue' /* webpackChunkName: "components/section-marquee" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
