<template>
  <el-container class="home">
    <el-header class="header">
      <div class="left">Vue、Element、Spring Boot权限管理系统开发实战</div>
      <div class="right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <img :src="require('../assets/images/avatar.jpg')" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="userInfo">
          <div class="name">欢迎：张悦</div>

          <div class="date">{{ date }}</div>
        </div>
      </div>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
           <menu-bar></menu-bar>
      </el-aside>
      <el-container class="content">
        <el-main class="main">
          <i  class="arrow-icon" 
          @click="iconClick"          
          :class="[isCollapse ? 'el-icon-s-fold':'el-icon-s-unfold']"
          ></i>
        </el-main>
        <el-footer class="footer" 
          >
          {{isCollapse}}
          Copyright © 2020 - 2021 . 秘咖学堂.All Rights Reserved</el-footer
        >
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

import MenuBar from "../components/MenuBar.vue";
import {mapState} from "vuex"

export default {
  data() {
    return {
      date: new Date(),
    };
  },
  computed:{
    ...mapState({
      isCollapse:(state)=>state.MenuStore.isCollapse
    })
  },
  components: {
    MenuBar,
  },
  methods:{
    // 切换折叠
    iconClick(){
      this.$store.commit("setOpenOrClose")
    }
  }
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
      display: flex;
      justify-content: flex-end;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .userInfo {
        .name {
        }
        .date {
        }
      }
    }
  }

  .container {
    flex: 1;

    .alide {
      width: auto;
      height: 100%;
      background: red;
    }
    .content {
      flex: 1;
      background: purple;
      display: flex;
      .main {
        flex: 1;
        padding:0;
        margin:0;
      }
      .footer {
        height: 50px;
        background: yellowgreen;
      }
    }
  }
}

.arrow-icon {
  float: left;
  background: #eaedf1;
  border: 1px solid transparent;
  font-size: 23px;
  height: 39px;
  line-height: 39px !important;
  width: 40px;
  text-align: center;
}
</style>
