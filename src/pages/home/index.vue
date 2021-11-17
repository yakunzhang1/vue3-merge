<template>
  <div class="home_main">
    <Title :title="我的收益" />
  </div>
</template>

<script>
import Title from '../../components/mainTitle.vue'
export default {
  components: {
    Title
  },
  setup () {
    const test = () => {
      console.log('1')
    }
    return {
      test
    }
  },
}
</script>

<style lang="scss" scoped>
.home_main {
  position: relative;
}
</style>