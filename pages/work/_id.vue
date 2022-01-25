<template>
  <b-container fluid class="pt-4 pb-5">
    <template v-if="currentWork">
      <header class="mb-5">
        <b-btn
          variant="text mb-3 p-0 text-secondary d-flex d-md-none"
          to="/work"
        >
          <icons-arrow-back /> GO BACK
        </b-btn>
      </header>
      <b-row tag="section" class="pb-5 pb-md-0">
        <b-col cols="12" md="8" order="2" order-md="1">
          <div class="work-desc" v-html="currentWork.desc" />
        </b-col>
        <b-col cols="12" md="4" order="1" order-md="2">
          <h1 class="work-title">
            {{ currentWork.title }}
          </h1>
          <div class="work-text" v-html="currentWork.txt" />
        </b-col>
      </b-row>
      <b-btn
        variant="primary btn-go-top"
        @click="goTop"
        :style="active ? { bottom: '2rem' } : { bottom: '-5rem' }"
      >
        <icons-arrow-top /> GO TOP
      </b-btn>
    </template>
    <template v-else>
      <loading />
    </template>
  </b-container>
</template>

<script>
import { db, allWorks } from "~/plugins/firebase.js";

export default {
  layout: "Empty",
  async asyncData({ params }) {
    const works = await allWorks();

    const currentWork = works.find(r => {
      return r.no === +params.id;
    });

    return {
      id: params.id,
      works,
      currentWork
    };
  },
  head() {
    return {
      title: `${this.currentWork.title} | 서로맑음`,
      meta: [
        {
          hid: "title",
          property: "title",
          content: `${this.currentWork.title} | 서로맑음`
        },
        {
          hid: "description",
          property: "description",
          content: this.currentWork.txt
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.currentWork.thumbnailURL
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.currentWork.txt
        }
      ]
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      active: false
    };
  },

  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    handleScroll() {
      this.active = !!(window.scrollY > 180);
    }
  }
};
</script>

<style lang="scss" scoped>
.work-title {
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 900;
  @media all and (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
}

.work-desc {
  @media all and (max-width: 768px) {
    padding-top: 2rem;
    font-size: 2rem;
  }
}

.work-desc /deep/ p {
  margin: 0;
}
.work-desc /deep/ iframe {
  width: 100%;
  height: calc(62vw / 16 * 9);
}
@media all and (max-width: 768px) {
  .work-desc /deep/ iframe {
    height: 360px;
  }
}
.work-desc /deep/ img {
  width: 100%;
  margin-bottom: 24px;
}

.work-text /deep/ * {
  font-size: 15px;
  line-height: 1.8;
  color: $secondary !important;
}

.btn-go-top {
  padding: 12px 16px;
  color: $secondary;
  border-radius: 4rem;
  display: flex;
  position: fixed;
  transition: 0.3s;
  right: 2rem;
}
</style>
