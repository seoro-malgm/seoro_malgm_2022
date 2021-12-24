<template>
  <section class="marquee mx-n5 py-1 py-md-3">
    <ul
      class="list"
      :style="[
        reverse
          ? {
              flexDirection: 'row-reverse',
              marginLeft: '-300%'
            }
          : {},
        {
          transform: `translateX(${scrollY * 0.05 * reversed}%)`
        }
      ]"
    >
      <li v-for="(item, i) in items" :key="i">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scrollY: 0
    };
  },
  computed: {
    reversed() {
      return this.reverse ? 0.5 : -0.5;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY + 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.marquee {
  overflow: hidden;
  .list {
    display: inline-flex;
    li {
      font-size: 96px;
      margin: 0 2rem;
      font-family: "Vollkorn", serif;
      position: relative;
      @media all and (max-width: 768px) {
        font-size: 36px;
        margin: 0 1rem;
      }
      &::before {
        display: block;
        content: "";
        width: 20px;
        height: 20px;
        background-color: $primary;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: -2.5rem;
        transform: translateY(-50%);
        @media all and (max-width: 768px) {
          width: 10px;
          height: 10px;
          left: -1.5rem;
        }
      }
    }
  }
}
</style>
