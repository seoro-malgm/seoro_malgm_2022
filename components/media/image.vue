<template>
  <figure>
    <div class="wrapper">
      <img :src="item.src" alt="..." />
    </div>
    <figcaption>
      <h1 v-if="item.title">
        {{ item.title }}
      </h1>
      <p v-if="item.desc">
        {{ item.desc }}
      </p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {
        src: null,
        title: null,
        desc: null
      }
    }
  }
};
</script>

<style lang="scss" scoped>
figure {
  object-fit: cover;
  width: 100;
  .wrapper {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  figcaption {
    margin: 0.5rem 0.25rem;
    text-align: center;
    h1 {
      font-size: 14px;
      font-weight: 700;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 13px;
      line-height: 1.7;
    }
  }
  &:hover,
  &:focus {
    .wrapper {
      img {
        transform: scale(1.05);
        transition: all 0.5s $ease-in-out;
      }
    }
  }
}
</style>
