<template>
  <b-container
    fluid
    class="navbar-wrapper"
    :class="{
      active: ($route.path === '/' && scrollY > 10) || $route.path !== '/'
    }"
  >
    <b-navbar>
      <b-navbar-brand
        href="/"
        class="ml-0 my-0 logo p-0"
        title="서로맑음"
        role="link"
      >
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
      <div class="ml-auto d-block d-md-none">
        <b-btn variant="text p-0 text-secondary" @click="$emit('menu-toggle')">
          MENU
        </b-btn>
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
  padding-right: 2rem;
  @media all and (max-width: 768px) {
    padding: 1rem 1rem 0 0;
  }
  .navbar {
    padding: 0;
  }
  .logo {
    transform: scale(1) translateX(0);
    transition: 0.3s;
  }
  &.active {
    .logo {
      transform: scale(0.7) translateX(-1rem);
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
