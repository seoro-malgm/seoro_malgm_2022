<template>
  <div class="logo-letter">
    <figure v-show="value === 'image'">
      <img :src="item.image" :alt="item.meanKo" class="w-50" />
    </figure>
    <div class="letter" v-show="value !== 'image'">
      <h1 v-show="value === 'ko'" class="text-56 text-md-150">
        {{ item.ko }}
      </h1>
      <h1 v-show="value === 'en'" class="">
        {{ item.en }}
      </h1>
      <h1 v-show="value === 'meanKo'">
        {{ item.meanKo }}
      </h1>
      <h1 v-show="value === 'meanEn'" class="">
        {{ item.meanEn }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {
        ko: "서",
        en: "SEO",
        meanKo: "교차",
        meanEn: "Cross",
        image: require("@/assets/images/logo/seo.png")
      }
    },
    value: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-letter {
  position: relative;
  padding-bottom: 100%;
  figure,
  .letter {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .letter h1 {
    font-size: 80px;
    @media all and (max-width: 768px) {
      font-size: 36px;
    }
  }
}
</style>
