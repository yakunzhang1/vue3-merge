<template>
  <div class="title">{{ title }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  props: {
    title: {
      type: String
    }
  },
  setup (props) {
    console.log(props)
    const state = reactive({
      title: props.title
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: bold;
  color: #303133;
  margin-bottom: 40px;
  text-align: left;
}
</style>