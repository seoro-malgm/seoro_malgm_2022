<template>
  <div class="">
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
      </b-navbar>
    </b-container>

    <!-- menu toggler -->
    <div class="menu-toggler d-block d-md-none">
      <b-btn
        variant="text p-0 text-secondary"
        @click="menuToggle = !menuToggle"
      >
        <div class="d-flex">
          <icons-menu :hidden="menuToggle" />
        </div>
      </b-btn>
    </div>

    <!-- side menu -->
    <div class="menu-dim" :class="{ active: menuToggle }" />
    <div id="side-menu" :class="{ active: menuToggle }">
      <section class="d-flex flex-column w-100 h-100 pb-3">
        <ul class="list-unstyled d-inline-flex flex-column mt-4 flex-gorw-1">
          <li>
            <nuxt-link class="nuxt-link" to="/" role="link">
              <span>HOME</span>
            </nuxt-link>
          </li>
          <li v-for="(item, i) in links" :key="i">
            <template v-if="item.type === 'anchor'">
              <a class="link nuxt-link" :href="item.url" target="_blank">
                <span>{{ item.name }}</span>
              </a>
            </template>
            <template v-else>
              <nuxt-link class="nuxt-link" :to="item.url" role="link">
                <span>{{ item.name }}</span>
              </nuxt-link>
            </template>
          </li>
        </ul>
        <div class="mt-auto mb-5">
          <ul class="footer-links">
            <li class="mb-2 ">
              <span class="text-14 text-md-16"
                >Email: <br />
                <!-- <a
              role="button"
              class=""
              @click="copyText('contact@seoro-malgm.me', '이메일 주소')"
              >contact@seoro-malgm.me
            </a> -->
                <a
                  role="button"
                  class="text-underline"
                  @click="copyText('seoromalgm@kakao.com', '이메일 주소')"
                  >seoromalgm@kakao.com
                </a>
              </span>
            </li>
            <li class="mb-2 ">
              <span class="text-14 text-md-16"
                >Address: <br />
                <a
                  role="button"
                  class="text-underline"
                  @click="
                    copyText(
                      '대한민국 서울시 마포구 성산로 4길 54-11, 203호',
                      '주소'
                    )
                  "
                  >서울시 마포구 성산로 4길 54-11, 203호
                </a>
              </span>
            </li>
            <li class="mb-2 ">
              <b-btn
                variant="link p-0 text-14 text-md-16 text-underline"
                href="https://www.instagram.com/seoro_malgm/"
                target="_blank"
                >Instagram</b-btn
              >
            </li>
            <li class="mb-2 ">
              <b-btn
                variant="link p-0 text-14 text-md-16 text-underline"
                href="https://brunch.co.kr/@seoro-malgm"
                target="_blank"
                >Brunch</b-btn
              >
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
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
      links: [
        {
          name: "work",
          url: "/work"
        },
        {
          name: "product",
          url: "https://marpple.shop/kr/seoro_malgm",
          type: "anchor"
        },
        {
          name: "conact",
          url: "/contact"
        }
      ],
      menuToggle: false
    };
  },
  watch: {
    $route(n) {
      this.menuToggle = false;
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

// 사이드메뉴
.menu-toggler {
  position: fixed;
  top: 2rem;
  right: 1rem;
  z-index: 3010;
}
.menu-dim {
  @media all and (min-width: 768px) {
    display: none;
  }
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.4);
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.4s;
  pointer-events: none;
  opacity: 0;
  z-index: 2999;
  &.active {
    @media all and (min-width: 768px) {
      display: none;
    }
    opacity: 1;
  }
}
#side-menu {
  @media all and (min-width: 768px) {
    display: none;
  }
  position: fixed;
  height: 100%;
  width: 90%;
  min-width: 90vw;
  top: 0;
  transition: 0.4s;
  right: -100vw;
  background-color: $primary;
  padding: 4rem 1rem 1rem;
  z-index: 3000;
  box-shadow: -4px 0 30px rgba($color: #000000, $alpha: 0.1);
  &.active {
    right: 0;
    @media all and (min-width: 768px) {
      display: none;
    }
  }
  .menu-header {
    display: flex;
    justify-content: flex-end;
  }

  .nuxt-link {
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    background-color: $primary;
    border-color: $primary;
    border-radius: 0;
    padding: 18px 6px 14px;
    border: 0;
    opacity: 0.7;
    margin-bottom: 1rem;
    height: inherit;
    line-height: 0;
    span {
      font-size: 24px;
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
    &.nuxt-link-exact-active {
      background-color: $secondary;
      border-color: $secondary;
      color: $primary !important;
      opacity: 1;
    }
  }

  ul.footer-links {
    li,
    span,
    a,
    button {
      color: $secondary;
    }
  }
}
</style>
