<template>
  <div id="app">
    <header>
      <global-nav
        :links="links"
        :scrollY="scrollY"
        @menu-toggle="menuToggle = !menuToggle"
      />
    </header>
    <div id="wrapper" :class="{ 'footer-shown': footerShown }">
      <div class="dim" :style="footerShown ? { pointerEvents: 'auto' } : {}" />
      <b-container fluid tag="main" id="main">
        <nuxt-child
          :scrollY="scrollY"
          :scrollGap="scrollGap"
          :scrollHeight="scrollHeight"
        />
      </b-container>
    </div>
    <div class="pt-5">
      <global-footer ref="footer" :active="footerShown" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerShown: false,
      scrollY: 0,
      scrollGap: null,
      scrollHeight: null,
      footerHeight: null,
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
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    copyText(text, obj) {
      const board = navigator.clipboard;
      board
        .writeText(text)
        .then(() => {
          this.$bvToast.toast(`${obj}가 클립보드에 복사되었습니다.`, {
            toaster: "b-toaster-bottom-center"
          });
        })
        .catch(error => {
          this.$bvToast.toast(`복사에 실패했습니다`);
        });
    },
    handleScroll() {
      let scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      this.scrollHeight = scrollHeight;
      this.scrollY = window.scrollY;
      this.scrollGap = scrollHeight - window.scrollY;
      const footerHeight = this.$refs.footer.$el.offsetHeight;
      this.footerShown =
        this.scrollGap <= window.innerHeight + footerHeight / 2;
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 2rem 0;
  @media all and (max-width: 768px) {
    padding: 0 2vw 0;
  }
}
#wrapper {
  padding-bottom: 4rem;
  transition: all 0.4s $ease-in-out;
  position: relative;
  overflow: hidden;
  .dim {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($color: $darkest, $alpha: 0.85);
    transition: all 0.4s $ease-in-out;
    z-index: 1990;
    pointer-events: none;
    user-select: none;
  }
  &.footer-shown {
    margin-left: 10rem;
    margin-right: 10rem;
    @media all and (max-width: 768px) {
      margin-left: 2vw;
      margin-right: 2vw;
    }
    border-radius: 2rem;
    .dim {
      opacity: 1;
    }
  }
}
</style>
