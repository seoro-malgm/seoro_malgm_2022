<template>
  <div id="app">
    <header>
      <global-nav />
    </header>
    <div id="wrapper">
      <b-container fluid tag="main" id="main">
        <nuxt-child />
      </b-container>
    </div>
    <!-- <global-footer /> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main {
  padding: 96px 2rem 0;
  @media all and (max-width: 768px) {
    padding: 96px 2vw 0;
  }
}
</style>
