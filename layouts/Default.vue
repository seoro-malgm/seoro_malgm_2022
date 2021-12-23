<template>
  <div id="app">
    <header>
      <global-nav />
    </header>
    <div id="wrapper" :class="{ 'footer-shown': footerShown }">
      <div class="dim" />
      <b-container fluid tag="main" id="main">
        <Nuxt />
        <div class="min-vh-100"></div>
        <div class="min-vh-100"></div>
        <div class="min-vh-100"></div>
        <h1 class="">내용</h1>
      </b-container>
    </div>

    <global-footer ref="footer" :active="footerShown" />
  </div>
</template>

<script>
export default {
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
  background-color: var(--secondary);
}
#main {
  padding: 60px 2rem 0;
}

#wrapper {
  padding-bottom: 2rem;
  transition: 0.6s;
  position: relative;
  overflow: hidden;
  .dim {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.4);
    transition: 0.6s;
    z-index: 1990;
    pointer-events: none;
    user-select: none;
  }
  &.footer-shown {
    .dim {
      opacity: 1;
    }
    border-radius: 0 0 2rem 2rem;
  }
}
</style>
