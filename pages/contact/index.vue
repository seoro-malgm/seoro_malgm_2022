<template>
  <section>
    <header class="pt-3">
      <h1 class="fw-700 mb-2 mb-md-4 text-20 text-md-40">
        CONTACT
      </h1>
      <p class="mb-3 text-14 text-md-18">
        프로젝트 문의와 채용, 기타 문의 등 모두 메일로 받고 있습니다. <br />
        아래 연락처들을 통해 언제든 연락 가능합니다.
      </p>
    </header>
    <section class="pt-4">
      <ul>
        <li class="mb-2 ">
          <span class="text-14 text-md-16"
            >Email:
            <!-- <a
              role="button"
              @click="copyText('contact@seoro-malgm.me', '이메일 주소')"
              >contact@seoro-malgm.me
            </a> -->
            <a
              role="button"
              @click="copyText('seoromalgm@kakao.com', '이메일 주소')"
              >seoromalgm@kakao.com
            </a>
          </span>
        </li>
        <li class="mb-2 ">
          <span class="text-14 text-md-16"
            >Address:
            <a
              role="button"
              @click="
                copyText(
                  '대한민국 서울시 마포구 성산로 4길 54-11, 203호',
                  '주소'
                )
              "
              >서울시 마포구 성산로 4길 54-11, 203호
            </a>
          </span>
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link  p-0 text-14 text-md-16"
            href="https://www.instagram.com/seoro_malgm/"
            target="_blank"
            >Instagram</b-btn
          >
        </li>
        <li class="mb-2 ">
          <b-btn
            variant="link  p-0 text-14 text-md-16"
            href="https://brunch.co.kr/@seoro-malgm"
            target="_blank"
            >Brunch</b-btn
          >
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  layout: "Empty",
  head() {
    return {
      title: `CONTACT | 서로맑음`
    };
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

<style lang="scss" scoped></style>
