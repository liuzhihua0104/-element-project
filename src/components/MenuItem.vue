<template>
  <div>
    <template v-for="menu in menuList">
      <el-submenu
        v-if="menu.children && menu.children.length > 0"
        :index="menu.path"
        :key="menu.path"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          <span style="font-size:15px;font-weight:600;" slot="title">{{ menu.label }}</span>
        </template>

        <menu-item :menuList="menu.children"></menu-item>
 
      </el-submenu>
      <el-menu-item v-else :index="menu.path" :key="menu.path">
        <i :class="menu.icon"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import MenuItem from "./MenuItem";
export default {
  name: "MenuItem",
  data() {
    return {};
  },
  props: ["menuList"],
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss" scoped>
</style>