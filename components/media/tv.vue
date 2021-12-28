<template>
  <div class="w-100">
    <div
      class="bg-img ratio-67"
      :style="{ backgroundImage: `url(${item.thumbnailURL})` }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped></style>
