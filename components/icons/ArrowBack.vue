<template>
  <i class="icon arrow-back mr-1">
    <span class="line line-top"></span>
    <span class="line line-middle"></span>
    <span class="line line-bottom"></span>
  </i>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.arrow-back {
  .line-top,
  .line-bottom {
    width: 9px;
  }
  .line-top {
    top: calc(50% - 3px);
    left: 0;
    transform: rotate(-30deg);
  }
  .line-middle {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    animation: grow 2s $ease-in-out 0.1s infinite normal forwards;
    // animation: name duration timing-function delay iteration-count direction fill-mode;
  }
  .line-bottom {
    left: 0;
    top: calc(50% + 1px);
    transform: rotate(30deg);
  }
}
@keyframes grow {
  0% {
    width: 0%;
  }
  99% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
}
</style>
