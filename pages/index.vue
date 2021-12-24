<template>
  <section id="index">
    <article class="min-vh-100">
      About
    </article>
    <article>
      <section-marquee :items="categories" />
      <section-marquee :items="categories" :reverse="true" />
    </article>
    <article class="min-vh-100">
      Works
    </article>
    <article>
      <header>
        <h1>SHOP</h1>
      </header>
    </article>
  </section>
</template>

<script>
export default {
  layout: "Default",
  mounted() {},
  methods: {},
  data() {
    return {
      categories: [
        "Design",
        "Poster",
        "Branding",
        "Interactions",
        "Branding",
        "Website",
        "Develop",
        "Calligraphy",
        "Design",
        "Poster",
        "Branding",
        "Interactions",
        "Branding",
        "Website",
        "Develop",
        "Calligraphy"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
article {
  margin: 24px 0;
  padding: 24px 0;
}
</style>
