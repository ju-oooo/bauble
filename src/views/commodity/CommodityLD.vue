<template>
  <el-row>
    <el-col :md="2">&nbsp;</el-col>
    <el-col :md="20">
      <router-view/>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "CommodityLD",
    data() {
      return {

      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
