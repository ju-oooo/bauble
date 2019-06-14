<template>
  <el-container>
    <ManageMenu></ManageMenu>
    <el-main>
      <Header :activeIndex="'/'" :backgroundColor="'#545C64'" :color="'#fff'"></Header>
      <router-view ></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import ManageMenu from "@/views/ManageMenu"
  import Header from "@/components/include/Header"

  export default {
    name: "ManageIndex",
    components: {ManageMenu, Header},
    data() {
      return {}
    },

  };
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
  /*.box-full {*/
  /*  border: 0;*/
  /*  position: fixed;*/
  /*  right: 0;*/
  /*  bottom: 0;*/
  /*  min-width: 100%;*/
  /*  min-height: 100%;*/
  /*}*/
</style>
