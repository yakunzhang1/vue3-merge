<template>
  <div>
    <Title title="随机选菜" />
    <RandomList :list="list" />
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
      list: chooseFoodsList.list
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
