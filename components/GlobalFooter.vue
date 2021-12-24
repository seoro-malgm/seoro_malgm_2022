<template>
  <footer id="footer" :class="{ active: active }">
    <div class="footer-wrapper">
      <h1 class="text-18 text-md-22 mb-4 mb-md-3">CONTACT</h1>
      <p class="mb-3">
        프로젝트 문의와 채용, 기타 문의 등 모두 메일로 받고 있습니다. <br />
        아래 연락처들을 통해 언제든 연락 가능합니다.
      </p>
      <ul>
        <li class="mb-2 ">
          <b-btn
            variant="link text-secondary p-0 text-16 text-md-18"
            href="mailto:contact@seoro-malgm.me"
            >Email: contact@seoro-malgm.me</b-btn
          >
        </li>
        <li class="mb-2 ">
          <span class="text-16 text-md-18"
            >Address: 대한민국 서울시 마포구 성산로 4길 54-11, 203호
          </span>
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link text-secondary p-0 text-16 text-md-18"
            href="https://www.instagram.com/seoro_malgm/"
            >Instagram</b-btn
          >
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link text-secondary p-0 text-16 text-md-18"
            href="https://brunch.co.kr/@seoro-malgm"
            >Brunch</b-btn
          >
        </li>
      </ul>
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
  transition: all 0.4s $ease-in-out;
  color: $secondary;
  .footer-wrapper {
    transition: all 0.4s $ease-in-out;
    width: 100%;
    margin-top: 0.875rem;
    padding: 2.5rem;
    border-radius: 0;
    background-color: $primary;
  }
  &.active {
    .footer-wrapper {
      border-radius: 2rem 2rem 0 0;
    }
  }
}
</style>
