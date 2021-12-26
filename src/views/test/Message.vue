<template>
  <div>
    <el-button type="primary" size="default" @click="message"
      >信息提示</el-button
    >
    <el-button type="primary" size="default" @click="confirmBtn"
      >删除</el-button
    >
    <el-button type="primary" size="default" @click="messageUtil"
      >messageUtil</el-button
    >
    <el-button type="primary" size="default" @click="messageBoxUtil"
      >messageBoxUtil</el-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    messageUtil() {
      this.$message.error("删除失败");
    },
    async messageBoxUtil() {
      let res = await this.$message.confirm("您确定删除该用户吗？");
      if (res) {
        this.$message.success("删除成功");
      }
    },
    message() {
      this.$message({
        message: "提示信息",
        type: "error",
      });
    },
    confirmBtn() {
      this.$confirm("您确定删除吗?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>