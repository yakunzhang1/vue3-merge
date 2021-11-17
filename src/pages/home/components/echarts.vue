<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
import { reactive, toRefs, ref, onMounted, defineComponent } from 'vue'
export default defineComponent({
  name: 'Echarts',
  setup () {
    // let indexEcharts = ref(null)
    onMounted(async () => {

      const myEchart = echarts.init(document.querySelector('#main'))
      const state = reactive({
        option: {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      })
      myEchart.setOption(state.option)
    })
    return {
      // ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
</style>>
