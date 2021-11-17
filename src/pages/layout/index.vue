<template>
  <a-layout>
    <a-layout-header class="bgr_fff box_shadow line_height">
      <span class="user_name">{{ showInfo.name }}</span>
      <a-dropdown v-model:visible="visible">
        <a-avatar class="float_right" :src="showInfo.imgUrl" />
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
        <Menu style="min-height: 600px" />
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
import { onMounted, reactive } from 'vue'
export default {
  name: 'Layout',
  components: {
    Menu
  },
  setup () {
    // let showInfo = {}
    // onMounted(() => {
    //   const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    //   const showInfo = reactive({
    //     name: userInfo.name,
    //     img: userInfo.imgUrl
    //   })
    // })
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const showInfo = reactive(userInfo)
    const logout = () => {
      router.push('/')
      localStorage.setItem('rule', '')
    }
    const handleMenuClick = () => {
      console.log('11')
    }
    console.log(showInfo)
    return {
      logout,
      handleMenuClick,
      showInfo
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
  right: 30px;
  top: 13px;
  cursor: pointer;
}
.user_name {
  position: absolute;
  right: 80px;
  top: -3px;
}
</style>