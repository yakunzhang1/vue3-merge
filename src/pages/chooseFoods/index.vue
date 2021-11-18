<template>
  <div>
    <Title title="随机选菜" />
    <div>
      <a-button
        class="clickBtn"
        size="large"
        @click="chooseState"
        style="margin-right: 40px"
        >开始选菜</a-button
      >
      <a-button class="clickBtn" size="large" @click="closeChooseState"
        >停止选菜</a-button
      >
    </div>
    <RandomList :list="list" :chooseIndex="chooseIndex" />
  </div>
</template>

<script>
import Title from '../../components/mainTitle.vue'
import RandomList from './components/randomLIst.vue'
import chooseFoodsList from '../../utils/chooseFoods'
import { reactive, toRefs } from 'vue'
export default {
  name: 'chooseFoods',
  components: {
    Title,
    RandomList
  },
  setup () {
    const state = reactive({
      list: chooseFoodsList.list,
      chooseIndex: 1,
      timer: null,
      stateTimer: null,
      time: 500,
    })
    // 开始
    const chooseState = () => {
      let { stateTimer } = state
      if (stateTimer) return
      let index = 1
      speedUp()
      state.stateTimer = setInterval(() => {
        if (index === 8) {
          clearTimer()
        } else if (index === 5) {
          state.time = 30
          speedUp()
        } else if (index === 3) {
          state.time = 70
          speedUp()
        }
        index++
      }, 1000);
    }
    const clearTimer = () => {
      clearInterval(state.timer)
      clearInterval(state.stateTimer)
      state.timer = null
      state.stateTimer = null
      state.time = 100
    }
    const speedUp = () => {
      const length = state.list.length
      clearInterval(state.timer)
      state.timer = null
      state.timer = setInterval(() => {
        state.chooseIndex = Math.floor((Math.random() * length) + 1)
      }, state.time);
    }
    // 结束
    const closeChooseState = () => {
      clearTimer()
    }
    return {
      ...toRefs(state),
      chooseState,
      closeChooseState,
      speedUp,
      clearTimer
      // computedTime
    }
  }
}
</script>

<style lang="scss" scoped>
.clickBtn {
  margin-bottom: 40px;
}
</style>
