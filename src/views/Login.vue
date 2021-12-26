<template>
  <div class="logincontainer">
    <el-form
      :inline="false"
      class="loginForm"
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
    >
      <el-form-item>
        <div class="loginTitle">系统登陆</div>
      </el-form-item>
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" :show-message="false">
        <el-input
          placeholder="请输入密码"
          v-model="loginForm.password"
        ></el-input>
      </el-form-item>

      <el-form-item prop="code">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
          </el-col>
          <el-col :span="8">
            <el-input
              v-model="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <!-- <img :src="imgSrc" alt="" @click="getImage" class="images"/> -->
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-button type="primary" @click="commitBtn" class="btn">登陆</el-button>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="resetBtn" class="btn">退出</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from "../api/login";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
      },
      imgSrc: "",
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    //  获取验证码
    getImage() {},

    commitBtn() {
      this.$refs["loginForm"].validate(async (valid) => {
          console.log(valid)
        if (valid) {
          // alert("submit!");
          let res=await login(this.loginForm)
          console.log(res);

          if(res.data.code==200){
            let datas=res.data.data;
            console.log(datas)
            Cookies.set("token",datas.token)
          }
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetBtn(){
        this.$refs["loginForm"].resetFields("code")
    }
  },
};
</script>

<style lang="scss" scoped>
.logincontainer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 300px;
    height: 350px;
    padding: 20px;
    box-shadow: 0 0 25px #cac6c6;
    .loginTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 24px;
    }

    .images {
      height: 36px;
      width: 100px;
    }

    .btn {
      width: 100%;
    }
  }
}
</style>