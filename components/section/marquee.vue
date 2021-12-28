<template>
  <section class="marquee mx-n5 py-1">
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
          transform: `translateX(${(scrollY + 1) * 0.03 * reversed}%)`
        }
      ]"
    >
      <li v-for="(item, i) in items" :key="`a-` + i">
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
    },
    scrollY: {
      type: Number
    }
  },
  computed: {
    reversed() {
      return this.reverse ? 0.3 : -0.3;
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
      // font-family: "Vollkorn", serif;
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
        background-color: $secondary;
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
