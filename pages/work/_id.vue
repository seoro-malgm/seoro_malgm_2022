<template>
  <b-container fluid class="pb-5">
    <template v-if="currentWork">
      <header class="mb-3">
        <h1>
          {{ currentWork.title }}
        </h1>
      </header>
      <b-row tag="section">
        <b-col cols="12" md="8" order="2" order-md="1">
          <div class="work-desc" v-html="currentWork.desc" />
        </b-col>
        <b-col cols="12" md="4" order="1" order-md="2">
          <div class="work-text" v-html="currentWork.txt" />
        </b-col>
      </b-row>
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
  }
};
</script>

<style lang="scss" scoped>
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
  font-size: 18px;
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
}
</style>
