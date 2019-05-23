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
  import Menu from "@/page/manageMenu";

  export default {
    name: "ManageIndex",
    components: {Menu}
  };
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
</style>
