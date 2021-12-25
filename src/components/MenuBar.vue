<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :unique-opened="true"
  >
    <menu-item :menuList="menuList"></menu-item>
  </el-menu>
</template>

<script>
import MenuItem from "./MenuItem.vue";

import { mapState } from "vuex";

export default {
  data() {
    return {
      name: "MenuBar",
    
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.MenuStore.isCollapse,
      menuList:state=>state.MenuStore.menuList
    }),
  },
  components: { MenuItem },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>