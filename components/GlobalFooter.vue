<template>
  <footer id="footer" :class="{ active: active }">
    <div class="footer-wrapper">
      <header class="footer-header">
        <div class="dot dot-red" />
        <div class="dot dot-yellow" />
        <div class="dot dot-green" />
      </header>
      <h1 class="text-18 text-md-28 mt-3 mb-4 mb-md-3">CONTACT</h1>
      <p class="mb-3">
        프로젝트 문의와 채용, 기타 문의 등 모두 메일로 받고 있습니다. <br />
        아래 연락처들을 통해 언제든 연락 가능합니다.
      </p>
      <ul>
        <li class="mb-2 ">
          <span class="text-16 text-md-18"
            >Email:
            <!-- <a
              role="button"
              class="text-primary"
              @click="copyText('contact@seoro-malgm.me', '이메일 주소')"
              >contact@seoro-malgm.me
            </a> -->
            <a
              role="button"
              class="text-primary"
              @click="copyText('seoromalgm@kakao.com', '이메일 주소')"
              >seoromalgm@kakao.com
            </a>
          </span>
        </li>
        <li class="mb-2 ">
          <span class="text-16 text-md-18"
            >Address:
            <a
              role="button"
              class="text-primary"
              @click="
                copyText(
                  '대한민국 서울시 마포구 성산로 4길 54-11, 203호',
                  '주소'
                )
              "
              >대한민국 서울시 마포구 성산로 4길 54-11, 203호
            </a>
          </span>
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link text-primary p-0 text-16 text-md-18"
            href="https://www.instagram.com/seoro_malgm/"
            target="_blank"
            >Instagram</b-btn
          >
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link text-primary p-0 text-16 text-md-18"
            href="https://brunch.co.kr/@seoro-malgm"
            target="_blank"
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
  },
  methods: {
    copyText(text, obj) {
      const board = navigator.clipboard;
      board
        .writeText(text)
        .then(() => {
          this.$bvToast.toast(`${obj}가 클립보드에 복사되었습니다.`, {
            toaster: "b-toaster-bottom-center"
          });
        })
        .catch(error => {
          this.$bvToast.toast(`복사에 실패했습니다`);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  z-index: 1000;
  transition: all 0.4s $ease-in-out;
  color: $primary;
  margin-left: 10rem;
  margin-right: 10rem;
  @media all and (max-width: 768px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
  .footer-wrapper {
    overflow: hidden;
    position: relative;
    .footer-header {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.75rem 2.5rem;
      background-color: $darkest;
      width: 100%;
      .dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        margin-right: 0.5rem;
        &.dot-red {
          background-color: #ed6a5e;
        }
        &.dot-yellow {
          background-color: #f5bd50;
        }
        &.dot-green {
          background-color: #62c454;
        }
      }
    }
    transition: all 0.4s $ease-in-out;
    width: 100%;
    margin-top: 0.875rem;
    padding: 2.5rem;
    border-radius: 0;
    background-color: $secondary;
    * {
      opacity: 0;
      transition: all 0.4s $ease-in-out;
    }
  }
  &.active {
    margin-left: 0;
    margin-right: 0;
    .footer-wrapper {
      opacity: 1;
      border-radius: 2rem 2rem 0 0;
      * {
        opacity: 1;
      }
    }
  }
}
</style>
