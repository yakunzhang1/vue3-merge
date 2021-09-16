<template>
  <a-layout>
    <a-layout-header class="bgr_fff box_shadow">Header</a-layout-header>
    <a-layout>
      <a-layout-sider class="bgr_fff">
        <Menu />
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Menu from '../../components/Menu'
export default {
  name: 'Layout',
  components: {
    Menu
  }
}
</script>

<style>
.bgr_fff {
  background-color: #fff;
}
.box_shadow {
  border-bottom: 1px solid #ccc;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 1);
}
</style>