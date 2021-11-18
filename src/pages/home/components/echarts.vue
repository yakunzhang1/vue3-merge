<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
import { reactive, toRefs, ref, onMounted, defineComponent } from 'vue'
export default defineComponent({
  name: 'Echarts',
  props: {
    echartsData: {
      type: Object
    }
  },
  setup (props, content) {
    onMounted(async () => {
      const myEchart = echarts.init(document.querySelector('#main'))
      myEchart.setOption(props.echartsData)
    })
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
#main {
  // position: absolute;
  margin: 0 auto;
  margin-top: 100px;
  width: 1000px;
  height: 500px;
  padding: 20px 0;
}
</style>>
