<template>
  <div class="logo-letter">
    <img
      :src="item.image"
      :alt="item.meanKo"
      :style="{
        transform: `translate(${mousePosition.x / 100 -
          50}%, ${mousePosition.y / 200 - 50}%)`,
        transition: `transform 0.3s ease-out`
      }"
    />
    <div class="letter">
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
    },
    index: {
      type: Number,
      default: 0
    },
    mousePosition: {
      type: Object,
      default: { x: 0, y: 0 }
    }
  }
};
</script>

<style lang="scss" scoped>
.logo-letter {
  position: relative;
  padding-bottom: 100%;

  img,
  .letter {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  img {
    width: 50%;
    @media all and (max-width: 768px) {
      width: 75%;
    }
    opacity: 0.75;
  }

  .letter h1 {
    font-size: 80px;
    text-shadow: 0 0 30px rgba($color: $darkest, $alpha: 0.7);
    @media all and (max-width: 768px) {
      font-size: 36px;
    }
  }
}
</style>
