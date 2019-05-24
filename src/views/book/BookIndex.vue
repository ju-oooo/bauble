<template>
  <el-container>
    <Menu></Menu>
    <el-main>
      <Header></Header>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  import ManageMenu from '@/views/ManageMenu'
  import Header from '@/components/include/Header'
  import Footer from '@/components/include/Footer'

  export default {
    name: "BookIndex",
    components: {Header, Footer, ManageMenu}
  }
</script>

<style scoped>
  .el-main {
    padding: 0;
  }
</style>
