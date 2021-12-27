<template>
  <header :class="`text-${align}`">
    <h1>{{ title }}</h1>
    <p v-if="desc">{{ desc }}</p>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    desc: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: "left"
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 40px;
  h1 {
    font-size: 48px;
    text-transform: uppercase;
    margin-bottom: 4px;
    @media all and (max-width: 768px) {
      font-size: 22px;
    }
  }
  p {
    font-size: 14px;
    @media all and (max-width: 768px) {
      font-size: 13px;
    }
  }
}
</style>
