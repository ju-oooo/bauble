<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    router
    :background-color="backgroundColor"
    :text-color="color"
    active-text-color="#E24F3A">
<!--    <el-menu-item index="/">首页</el-menu-item>-->
    <el-menu-item index="/commodity">首页</el-menu-item>
    <el-menu-item index="/commodity/o/list">商品列表</el-menu-item>
    <el-menu-item index="/commodity/shoppingCart">购物车</el-menu-item>
    <el-submenu index="3">
      <template slot="title">用户列表</template>
      <el-menu-item index="2-1">我的</el-menu-item>
      <el-menu-item index="2-2">注销</el-menu-item>
    </el-submenu>
    <el-menu-item index="/register" style="float: right;">注册</el-menu-item>
    <el-menu-item index="/login" style="float: right;">登录</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Header",
    props: ['activeIndex', 'backgroundColor', 'color'],
    data() {
      return {};
    },
    methods: {}
  }


</script>

<style scoped>
  .el-header {
    padding: 0;
  }
</style>
