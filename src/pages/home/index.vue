<template>
  <div class="home_main">
    <Title title="我的收益" />
    <div>
      <a-row type="flex" justify="space-around" align="midden">
        <a-col :span="6" v-for="item in list" :key="item.id">
          <a-card>
            <a-statistic
              :title="item.name"
              :value="item.value"
              style="text-align: center"
            />
          </a-card>
        </a-col>
      </a-row>
      <div>
        <Echarts :echartsData="option" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../../components/mainTitle.vue'
import Echarts from './components/echarts.vue'
import echartsData from '../../utils/echarts'
import { reactive, toRefs } from 'vue'
export default {
  components: {
    Title,
    Echarts
  },
  setup () {
    const test = () => {
      console.log('1')
    }
    const state = reactive({
      list: [
        { id: 1, name: '本周收益', value: 123 },
        { id: 2, name: '昨日收益', value: 222 },
        { id: 3, name: '今日收益', value: 123333 },
      ],
      option: echartsData.echartsOption
    })
    return {
      test,
      ...toRefs(state)
    }
  },
}
</script>

<style lang="scss" scoped>
.home_main {
  position: relative;
  // padding: 20px;
}
</style>