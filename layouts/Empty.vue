<template>
  <div id="app">
    <header>
      <global-nav :links="links" @menu-toggle="menuToggle = !menuToggle" />
    </header>
    <div id="wrapper">
      <b-container fluid tag="main" id="main">
        <nuxt-child />
      </b-container>
    </div>
    <div class="menu-dim" :class="{ active: menuToggle }" />
    <transition name="fade">
      <div id="side-menu" v-show="menuToggle" :class="{ active: menuToggle }">
        <header class="menu-header">
          <b-btn
            variant="primary rounded-pill d-flex p-0"
            @click="menuToggle = !menuToggle"
          >
            <icons-times />
          </b-btn>
        </header>
        <section class="d-flex flex-column w-100 h-100 pb-3">
          <ul class="list-unstyled d-inline-flex flex-column mt-4 flex-gorw-1">
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
    </transition>
    <!-- <global-footer /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuToggle: false,
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
      ]
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
#main {
  padding: 96px 2rem 0;
  @media all and (max-width: 768px) {
    padding: 96px 2vw 0;
  }
}
</style>
