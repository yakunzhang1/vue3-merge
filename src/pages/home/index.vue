<template>
  <div>
    <a-button @click="test" v-permission="0">admin</a-button>
    <a-button @click="test" v-permission="1">tom1</a-button>
    <a-button @click="test" v-permission="2">jerry1</a-button>
    <a-button @click="test" v-permission="0">admin2</a-button>
    <a-button @click="test" v-permission="1">tom2</a-button>
    <a-button @click="test" v-permission="2">jerry2</a-button>
  </div>
</template>

<script>
export default {
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

<style>
</style>