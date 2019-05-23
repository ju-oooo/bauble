<template>
  <el-aside :style="{width:asideWidth}">
    <!--  菜单控制  -->
    <el-menu background-color="#545C64"
             text-color="#fff"
             active-text-color="#fff"
             show-timeout
             hide-timeout
             :collapse="isCollapse">
      <el-menu-item v-if="isCollapse" @click="changeCollapse" title="展开"><i class="el-icon-d-arrow-right"></i>
      </el-menu-item>
      <el-menu-item v-else @click="changeCollapse" title="收起"><i class="el-icon-d-arrow-left"></i></el-menu-item>
    </el-menu>
    <!--  菜单  -->
    <el-menu
      :style="{height:fullHeight}"
      default-active="1"
      background-color="#545C64"
      text-color="#fff"
      show-timeout
      hide-timeout
      active-text-color="#E24F3A"
      :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-setting"></i>
        <span slot="title">我的</span>
      </el-menu-item>

      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航四</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    name: "user-menu",
    data() {
      return {
        //屏幕高度
        fullHeight: document.documentElement.clientHeight + 'px',
        asideWidth: '200px',
        isCollapse: false
      }
    },
    methods: {
      changeCollapse() {
        this.isCollapse = !this.isCollapse,
          this.asideWidth = this.isCollapse === true ? 'auto' : '200px'
      }
    },
    watch: {
      fullHeight() {
        this.fullHeight = document.documentElement.clientHeight + 'px';
      }
    },
    mounted() {
      window.onresize = () => {
        return (() => {
          this.fullHeight = document.documentElement.clientHeight + 'px';
        })()
      }
    }

  }
</script>

<style scoped>
  .el-submenu .el-menu-item {
    min-width: auto;
    padding: 30px;
  }
</style>
