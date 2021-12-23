<template>
  <div>id: {{ id }}</div>
</template>

<script>
export default {
  layout: "Default",
  asyncData({ params }) {
    return {
      id: params.id
    };
  }
};
</script>

<style lang="scss" scoped></style>
