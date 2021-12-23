<template>
  <footer id="footer" :class="{ active: active }">
    <div class="footer-wrapper">
      <h1 class="text-18 text-md-22 mb-4 mb-md-3">CONTACT</h1>
      <p class="mb-3">
        프로젝트 문의와 채용, 기타 문의는 모두 메일로 받고 있습니다.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
};
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  z-index: 1000;
  transition: 0.6s;
  color: var(--secondary);
  .footer-wrapper {
    transition: 0.6s;
    width: 100%;
    margin-top: 0.875rem;
    padding: 2.5rem;
    border-radius: 0;
    background-color: var(--primary);
  }
  &.active {
    .footer-wrapper {
      border-radius: 2rem 2rem 0 0;
    }
  }
}
</style>
