<template>
  <b-navbar class="navbar" :class="{ active: active }">
    <b-navbar-brand
      href="/"
      class="mx-auto ml-md-0"
      title="서로맑음"
      role="link"
    >
      <Logo />
    </b-navbar-brand>
  </b-navbar>
</template>

<script>
export default {
  name: "global-nav",
  data() {
    return {
      links: {
        contact: "cantact"
      },
      scrollY: 0,
      active: false
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (scrollY > 10) {
        this.active = true;
      } else {
        this.active = false;
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 2000;
}
</style>
