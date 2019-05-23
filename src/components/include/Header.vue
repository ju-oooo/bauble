<template>

      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        background-color="#545C64"
        text-color="#fff"
        active-text-color="#E24F3A">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">用户列表</el-menu-item>
        <el-submenu index="3">
          <template slot="title">用户列表</template>
          <el-menu-item index="2-1">我的</el-menu-item>
          <el-menu-item index="2-2">注销</el-menu-item>
        </el-submenu>
      </el-menu>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {}
  }


</script>

<style scoped>
  .el-header {
    padding: 0;
  }
</style>
