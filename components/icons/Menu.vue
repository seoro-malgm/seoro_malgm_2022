<template>
  <i class="icon" :class="{ hidden }">
    <span class="line"></span>
    <span class="line"></span>
  </i>
</template>

<script>
export default {
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
i.icon {
  background-color: $primary;
  border: 1px solid $secondary;
  transition: 0.3s;
  .line {
    transition: 0.3s;
    transition-delay: 0.1s;
    right: 5px;
    &:first-child {
      width: 10px;
      top: 6px;
    }
    &:last-child {
      width: 7px;
      top: 12px;
    }
  }
  &.hidden {
    background-color: transparent;
    border-color: $primary;
    .line {
      width: 18px;
      top: 50%;
      right: 50%;
      &:first-child {
        transform: translate(50%, -50%) rotate(45deg);
      }
      &:last-child {
        transform: translate(50%, -50%) rotate(-45deg);
      }
    }
  }
}
</style>
