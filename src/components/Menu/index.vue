<template>
  <div>
    <a-menu
      id="dddddd"
      mode="inline"
      @click="clickMenu"
      v-model:selectedKeys="selectedKeys"
    >
      <div v-for="item in menuList" :key="item.id">
        <a-sub-menu
          :key="item.id"
          v-if="item.children"
          :title="item.name"
          class="menu_item"
        >
          <MenuItem :id="item.id" :name="item.name" />
        </a-sub-menu>
        <a-menu-item :key="item.id" v-else>
          <!-- <a-icon type="search" /> -->
          <template #icon> </template>
          <router-link :to="{ name: item.path }">
            <!-- <a-icon :type="item.icon" theme="filled" /> -->
            {{ item.name }}</router-link
          >
        </a-menu-item>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef, toRefs } from "vue";
// import { MailOutlined } from "@ant-design/icons-vue";
import MenuItem from "../MenuItem/index.vue";
export default defineComponent({
  name: "Menu",
  components: {
    MenuItem,
    // MailOutlined,
  },
  setup() {
    const state = reactive({
      menuList: [
        {
          id: "1",
          name: "我的收益",
          path: "Home",
          icon: `1`,
        },
        { id: "2", name: "基金查看中心", path: "Test1", icon: "bulb" },
        { id: "3", name: "用户权限控制", path: "Test2", icon: "usergroup-add" },
        { id: "4", name: "你争我吵", path: "Test3", icon: "pay-circle" },
      ],
    });
    const selectedKeys1 = reactive({
      selectedKeys: [state.menuList[0].id],
    });
    const clickMenu = (item, key, keyPath) => {
      console.log(item, key, keyPath);
    };
    return {
      // menuList,
      clickMenu,
      ...toRefs(selectedKeys1),
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>