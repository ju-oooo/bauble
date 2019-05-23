<template>
  <el-container>
    <ManageMenu></ManageMenu>
    <el-main>
      <Header></Header>
      <router-view ></router-view>
    </el-main>
  </el-container>

</template>

<script>
  import ManageMenu from "@/views/ManageMenu"
  import Header from "@/components/include/Header"
  export default {
    name: "ManageIndex",
    components: {ManageMenu, Header}
  };
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
</style>
