<template>
  <div id="app">
    <header>
      <global-nav :scrollY="scrollY" />
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
    <global-footer ref="footer" :active="footerShown" />
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
      footerHeight: null
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
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
}
#main {
  padding: 0 2rem 0;
}

#wrapper {
  padding-bottom: 2rem;
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
