<template>
  <a-menu-item :key="id">{{ name }}</a-menu-item>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  }
})
</script>

<style>
</style>