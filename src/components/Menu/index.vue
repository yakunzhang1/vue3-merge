<template>
  <a-menu id="dddddd" style="width: 259px" mode="inline">
    <div v-for="item in menuList" :key="item.id">
      <a-sub-menu key="sub1" v-if="item.children" :title="item.name">
        <MenuItem :id="item.id" :name="item.name" />
      </a-sub-menu>
      <a-menu-item :key="item.id" v-else>
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
      </a-menu-item>
    </div>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
      { id: "1", name: "Home" },
      // {
      //   id: "2",
      //   name: "测试菜单2",
      //   children: [{ id: "11", name: "测试子菜单" }],
      // },
      { id: "3", name: "Test1" },
      { id: "4", name: "Test2" },
      { id: "5", name: "Test3" },
    ]);
    return {
      menuList,
    };
  },
});
</script>

<style>
</style>