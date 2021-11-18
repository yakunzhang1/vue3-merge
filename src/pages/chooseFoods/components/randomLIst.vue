<template>
  <div>
    <div class="flex">
      <div
        class="flexitem"
        v-for="item in list"
        :key="item.id"
        :class="{ active: item.id === chooseIndex }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'RandomList',
  props: {
    list: {
      tyle: Array
    },
    chooseIndex: {
      type: Number
    }
  },
  setup (props) {
    const state = reactive({
      list: props.list,
      chooseIndex: props.chooseIndex
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  &::after {
    content: "";
    flex: auto;
  }
  .flexitem {
    width: -webkit-calc((100% - 30px * 6)/ 6);
    width: calc((100% - 30px * 6) / 6);
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px 10px;
    color: #303302;
    margin: 0 30px 15px 0;
    text-align: center;
    &.active {
      background-color: #f56c6c;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>