<template>
  <i class="icon icon-times">
    <span class="line"></span>
    <span class="line"></span>
  </i>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-times {
  .line {
    width: 100%;
    top: 50%;
    left: 50%;
    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>
