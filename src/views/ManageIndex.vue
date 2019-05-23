<template>
  <el-container>
    <Menu></Menu>
    <el-main>
      <Header></Header>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>

<script>
  import ManageMenu from "./ManageMenu";
  export default {
    name: "ManageIndex",
    components: {ManageMenu}
  };
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
</style>
