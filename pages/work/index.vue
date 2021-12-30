<template>
  <div class="pb-5">
    <b-row>
      <b-col cols="12" md="2" tag="header">
        <form class="category-wrapper" @change="getWork(categorySelected)">
          <label
            class="category"
            :class="{ active: categorySelected === null }"
          >
            <input
              type="radio"
              name="workExp"
              v-model="categorySelected"
              :value="null"
            />
            <span class="category-text"
              >All
              <span class="category-dot">
                {{ items.length }}
              </span>
            </span>
          </label>
          <label
            class="category"
            v-for="item in categories"
            :key="item"
            :class="{ active: categorySelected === item }"
          >
            <input
              type="radio"
              name="workExp"
              v-model="categorySelected"
              :value="item"
            />
            <span class="category-text"
              >{{ item }}

              <span class="category-dot">
                {{ getWorkLength(item) }}
              </span>
            </span>
          </label>
        </form>
      </b-col>
      <b-col cols="12" md="10" tag="section">
        <b-row class="mx-n1">
          <b-col
            cols="6"
            md="4"
            class="mb-5 px-1"
            v-for="(item, i) in works"
            :key="i"
            tag="article"
          >
            <b-btn
              variant="link reset w-100 p-0 border-0"
              role="link"
              @click="$router.push(`/work/${item.no}`)"
            >
              <media-image :item="item" :hideCaption="true" />
            </b-btn>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { db, allWorks } from "~/plugins/firebase.js";

export default {
  layout: "Empty",
  async asyncData() {
    const items = await allWorks();
    const categories = [...new Set(items.map(r => r.exp))];
    return {
      items,
      categories
    };
  },
  data() {
    return {
      categorySelected: null,
      works: null
    };
  },
  async mounted() {
    await this.getWork();
  },
  methods: {
    async getWork(category) {
      if (category) {
        this.works = this.items.filter(r => r.exp === category);
      } else {
        this.works = this.items;
      }
    },
    getWorkLength(category) {
      return this.items.filter(r => r.exp === category).length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
