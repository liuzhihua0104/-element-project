<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {
    editableTabsValue: {
      // 另外一种方法获取store中的数据
      get() {
        return this.$store.state.MenuStore.editableTabsValue;
      },
      // 另外一种方法操作store中的数据
      set(val) {
        return (this.$store.state.menuStore.editableTabsValue = val);
      },
    },
    editableTabs: {
      // 另外一种方法获取store中的数据
      get() {
        return this.$store.state.MenuStore.editableTabs;
      },
      // 另外一种方法操作store中的数据
      set(val) {
        return (this.$store.state.menuStore.editableTabs = val);
      },
    },
  },
  methods: {
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>