<template>
  <a-menu
    id="dddddd"
    style="width: 278px"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
  >
    <div v-for="item in menuList" :key="item.id">
      <a-sub-menu
        key="sub1"
        @titleClick="titleClick"
        v-if="item.children"
        :title="item.name"
      >
        <MenuItem :id="item.id" :name="item.name" />
      </a-sub-menu>
      <a-menu-item key="9" v-else>{{ item.name }}</a-menu-item>
    </div>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import MenuItem from "../MenuItem/index.vue";
interface menuItem {
  id: string;
  name: string;
  children?: any;
}
export default defineComponent({
  name: "Menu",
  components: {
    MenuItem,
  },
  setup() {
    const menuList = ref<menuItem[]>([
      { id: "1", name: "测试菜单1" },
      {
        id: "2",
        name: "测试菜单2",
        children: [{ id: "11", name: "测试子菜单" }],
      },
      { id: "3", name: "测试菜单3" },
      { id: "4", name: "测试菜单4" },
    ]);
    const selectedKeys = ref<string[]>(["1"]);
    const openKeys = ref<string[]>(["sub1"]);
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      menuList,
      titleClick,
    };
  },
});
</script>

<style>
</style>