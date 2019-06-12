<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="commodity-breadcrumb">
      <el-breadcrumb-item
        v-for="(item,index) of linkList"
        :key="index"
        v-if="index < linkList.length-1"
        :to="{name: `${item.link}`}">{{item.name}}
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-else
        @click.native="refresh">{{item.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "CommoditySmallNav",
    computed: {
      ...mapGetters({linkList: 'linkListGetter'})
    },
    methods: {
      refresh() {
        this.$router.go(0)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/commodity-color-theme';
  /*修改第二导航样式*/
  .el-breadcrumb {
    padding: 1rem 0.5rem;
    margin: 1rem;
    background-color: $light-gray;
  }
</style>
