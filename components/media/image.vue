<template>
  <figure>
    <div class="wrapper">
      <img :src="item.src || item.thumbnailURL" :alt="item.title" />
    </div>
    <figcaption v-if="!hideCaption">
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
    },
    hideCaption: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
figure {
  object-fit: contain;
  width: 100;
  .wrapper {
    width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  figcaption {
    margin: 0.5rem 0.25rem;
    text-align: center;
    color: $secondary;
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
        transform: translate(-50%, -50%) scale(1.1);
        transition: all 0.5s $ease-in-out;
      }
    }
  }
}
</style>
