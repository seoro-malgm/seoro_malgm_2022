<template>
  <header>
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
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  margin-bottom: 24px;
  h1 {
    text-align: center;
    font-size: 36px;
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
