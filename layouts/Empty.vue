<template>
  <div id="app">
    <header>
      <global-nav />
    </header>
    <div id="wrapper">
      <b-container fluid tag="main" id="main">
        <nuxt-child :id="id" />
      </b-container>
    </div>
    <!-- <global-footer /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "fjasjdjsad"
    };
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: 82px;
}
</style>
