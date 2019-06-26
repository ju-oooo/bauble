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
    <el-menu-item index="/commodity/favorite">收藏夹</el-menu-item>
    <el-submenu index="3">
      <template slot="title">用户列表</template>
      <el-menu-item index="2-1">我的</el-menu-item>
      <el-menu-item index="2-2">注销</el-menu-item>
    </el-submenu>
    <div v-if="!isLogin">
      <el-menu-item index="/register" style="float: right;">注册</el-menu-item>
      <el-menu-item index="/login" style="float: right;">登录</el-menu-item>
    </div>
    <div v-else>
      <el-menu-item index="/info" style="float: right;">{{userInfo.username}}</el-menu-item>
    </div>
  </el-menu>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "Header",
    props: ['activeIndex', 'backgroundColor', 'color'],
    data() {
      return {};
    },
    computed: {
      ...mapGetters({'isLogin': 'isLoginGetter', userInfo: 'userInfoGetter'})
    },
    methods: {}
  }


</script>

<style scoped>
  .el-header {
    padding: 0;
  }
</style>
