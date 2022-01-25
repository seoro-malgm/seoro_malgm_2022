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
      <div class="ml-auto d-none d-md-block">
        <ul class="d-flex align-items-center">
          <li v-for="(item, i) in links" :key="i">
            <template v-if="item.type === 'anchor'">
              <b-btn class="link nuxt-link" :href="item.url" target="_blank">
                <span>{{ item.name }}</span>
              </b-btn>
            </template>
            <template v-else>
              <nuxt-link class="nuxt-link" :to="item.url" role="link">
                <span>{{ item.name }}</span>
              </nuxt-link>
            </template>
          </li>
        </ul>
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
    },
    links: {
      type: Array,
      default: []
    }
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
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    background-color: $primary;
    border-color: $primary;
    border-radius: 0;
    padding: 12px 6px;
    border: 0;
    opacity: 0.7;
    margin-left: 1rem;
    height: inherit;
    line-height: 0;
    span {
      font-size: 16px;
      line-height: 0;
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
