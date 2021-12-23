<template>
  <el-container class="home">
    <el-header class="header">
      <div class="left">Vue、Element、Spring Boot权限管理系统开发实战</div>
      <div class="right">右侧</div>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-container class="content">
        <el-main class="main">Main</el-main>
        <el-footer class="footer"
          >Copyright © 2020 - 2021 . 秘咖学堂.All Rights Reserved</el-footer
        >
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: yellow;
  display: flex;
  flex-direction: column;
  .header {
    height: 50px;
    background: blue;
    display: flex;
    justify-content: space-between;
    .left {
    }
    .right {
    }
  }

  .container {
    flex: 1;

    .alide {
      width: 200px;
      height: 100%;
      background: red;
    }
    .content {
      flex: 1;
      background: purple;
      display: flex;
      .main {
        flex: 1;
      }
      .footer {
        height: 50px;
        background: yellowgreen;
      }
    }
  }
}
</style>
