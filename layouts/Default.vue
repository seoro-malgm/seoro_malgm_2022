<template>
  <div id="app">
    <header>
      <global-nav v-if="$route.name !== 'index'" />
    </header>
    <div id="wrapper" :class="{ 'footer-shown': footerShown }">
      <div class="dim" />
      <b-container fluid tag="main" id="main">
        <Nuxt />
      </b-container>
    </div>
    <global-footer ref="footer" :active="footerShown" />
  </div>
</template>

<script>
export default {
  asyncData(app) {
    return app;
  },
  data() {
    return {
      footerShown: false
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
      const gap = scrollHeight - window.scrollY;
      const footerHeight = this.$refs.footer.$el.offsetHeight;
      this.footerShown = gap <= window.innerHeight + footerHeight / 2;
    }
  }
};
</script>

<style lang="scss" scoped>
#main {
  min-height: 100vh;
  overflow-x: hidden;
}
#app {
  background-color: $secondary;
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
    background-color: rgba($color: #000000, $alpha: 0.4);
    transition: all 0.4s $ease-in-out;
    z-index: 1990;
    pointer-events: none;
    user-select: none;
  }
  &.footer-shown {
    margin-left: 2rem;
    margin-right: 2rem;
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
