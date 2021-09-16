<template>
  <a-layout>
    <a-layout-header class="bgr_fff box_shadow line_height">
      <a-dropdown v-model:visible="visible">
        <a-avatar :size="46" class="float_right">
          <template #icon>K</template>
        </a-avatar>
        <template #overlay>
          <a-menu>
            <a-menu-item key="3">个人中心</a-menu-item>
            <a-menu-item key="2">设置</a-menu-item>
            <a-menu-item key="1" @click="logout">退出</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-layout-header>
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
import router from '../../router/index'
export default {
  name: 'Layout',
  components: {
    Menu
  },
  setup () {
    const logout = () => {
      router.push('/')
    }
    const handleMenuClick = () => {
      console.log('11')
    }
    return {
      logout,
      handleMenuClick
    }
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
.float_right {
  /* float: right; */
  position: absolute;
  right: 60px;
  top: 7px;
  cursor: pointer;
}
</style>