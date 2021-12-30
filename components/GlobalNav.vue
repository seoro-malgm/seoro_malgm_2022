<template>
  <b-container fluid class="navbar-wrapper" :class="{ active: scrollY > 10 }">
    <b-navbar>
      <b-navbar-brand href="/" class="ml-0 logo" title="서로맑음" role="link">
        <Logo />
      </b-navbar-brand>
      <div class="ml-auto d-none d-md-flex align-items-center">
        <nuxt-link class="nuxt-link text-reset" to="/work">
          <span>work</span>
        </nuxt-link>
        <b-btn
          class="link nuxt-link text-reset"
          href="https://marpple.shop/kr/seoro_malgm"
          target="_blank"
        >
          <span>product</span>
        </b-btn>
        <nuxt-link class="nuxt-link text-reset" to="/contact">
          <span>contact</span>
        </nuxt-link>
      </div>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "global-nav",
  props: {
    scrollY: {
      type: Number,
      default: null
    }
  },

  data() {
    return {
      links: {
        contact: "cantact"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  position: fixed;
  z-index: 2100;
  width: 100%;
  .logo {
    transform: scale(1);
    transition: 0.3s;
  }
  @media all and (max-width: 768px) {
    width: inherit;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s $ease-in-out;
    .logo {
      transform: scale(1.8);
    }
  }
  &.active {
    @media all and (max-width: 768px) {
      left: 2vw;
      top: 2vw;
      transform: translate(0, 0);
    }
    .logo {
      transform: scale(0.7) translateX(-3rem);
    }
  }

  .nuxt-link {
    text-transform: uppercase;
    text-decoration: none;
    background-color: $primary;
    border-color: $primary;
    border-radius: 0;
    padding: 0 2px;
    opacity: 0.7;
    &:not(:first-child) {
      margin-left: 1rem;
    }
    &:hover,
    &:active,
    &.active,
    &:visited {
      background-color: $primary;
      border-color: $primary;
      color: $secondary;
      opacity: 1;
    }
    color: $secondary;
    &.nuxt-link-active {
      background-color: $secondary;
      border-color: $secondary;
      color: $primary !important;
      opacity: 1;
    }
  }
}
</style>
