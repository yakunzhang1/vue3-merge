<template>
  <!-- <div>{{ title }}</div> -->
  <div class="title">我的收益</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: absolute;
  top: 0;
}
</style>