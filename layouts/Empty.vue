<template>
  <div id="app">
    <header>
      <global-nav />
    </header>
    <div id="wrapper">
      <b-container fluid tag="main" id="main">
        <nuxt-child />
        <div class="p-5 text-center">
          현재 사이트 준비중입니다...
        </div>
      </b-container>
    </div>
    <!-- <global-footer /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: 82px;
}
</style>
