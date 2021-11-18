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
      time: 100,
    })
    // 开始
    const chooseState = () => {
      let { list, chooseIndex, timer, time } = state
      const length = state.list.length
      if (timer) return
      const stateSpeed = parseInt(Date.now() / 1000)
      state.timer = setInterval(() => {
        state.chooseIndex = Math.floor((Math.random() * length) + 1)
      }, time)
    }
    // const chooseState = () => {
    //   let { list, chooseIndex, timer, time } = state
    //   const length = state.list.length
    //   if (timer) return
    //   const stateSpeed = parseInt(Date.now() / 1000)
    //   state.timer = setInterval(() => {
    //     state.chooseIndex = Math.floor((Math.random() * length) + 1)
    //     const process = parseInt(Date.now() / 1000)
    //     console.log(process - stateSpeed, '过程时间')

    // if (process - stateSpeed > 8) {
    //   clearInterval(state.timer)
    //   state.timer = null
    // } else if (process - stateSpeed > 5) {
    //   state.time = 50
    // } else if (process - stateSpeed > 3) {
    //   state.time = 200
    //   console.log('jiasu')
    // }
    //   }, time);
    // }
    // const computedTime = (fn, time) => {
    //   const index = 1
    //   setInterval((fn) => {
    //     if (index > 8) {
    //       clearInterval(state.timer)
    //       state.timer = null
    //     } else if (index > 5) {
    //       clearInterval()
    //       state.timer = setinterval(fn)
    //     }
    //     fn()
    //     index++
    //   }, time)
    // }
    // 结束
    const closeChooseState = () => {
      console.log('guanbi')
      clearInterval(state.timer)
      state.timer = null
    }
    return {
      ...toRefs(state),
      chooseState,
      closeChooseState,
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
