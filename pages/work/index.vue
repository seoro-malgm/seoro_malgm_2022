<template>
  <div>work {{ id }}</div>
</template>

<script>
export default {
  layout: "Empty",
  props: {
    id: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
