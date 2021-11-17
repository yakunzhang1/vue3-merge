<template>
  <div>
    <a-menu id="dddddd" mode="inline">
      <div v-for="item in menuList" :key="item.id">
        <a-sub-menu
          key="sub1"
          v-if="item.children"
          :title="item.name"
          class="menu_item"
        >
          <MenuItem :id="item.id" :name="item.name" />
        </a-sub-menu>
        <a-menu-item :key="item.id" v-else>
          <router-link :to="{ name: item.path }">{{ item.name }}</router-link>
        </a-menu-item>
      </div>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MenuItem from "../MenuItem/index.vue";
interface menuItem {
  id: string;
  name: string;
  path: string;
  children?: any;
}
export default defineComponent({
  name: "Menu",
  components: {
    MenuItem,
  },
  setup() {
    const menuList = ref<menuItem[]>([
      { id: "1", name: "我的收益", path: "Home" },
      { id: "2", name: "基金查看中心", path: "Test1" },
      { id: "3", name: "用户权限控制", path: "Test2" },
      { id: "4", name: "你争我吵", path: "Test3" },
    ]);
    return {
      menuList,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>