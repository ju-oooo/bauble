<template>

  <el-row>

    <el-col :md="2">&nbsp;</el-col>
    <el-col :md="20">
      <p class="title">收藏夹</p>
      <commodity-lists v-if="classifyList.length<0" :classifyList="classifyList"
                       :commodityList="favoriteList"></commodity-lists>
      <div v-else>
        <p class="none">空空如也</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CommodityLists from "../../components/commodity/CommodityLists";

  export default {
    name: "CommodityFavorite",
    components: {CommodityLists},
    computed: {
      ...mapGetters({
        userInfo: 'userInfoGetter',
        classifyList: 'classifyListGetter',
        favoriteList: 'favoriteListGetter'
      })
    },
    created() {
      this.getFavoriteList();

    },
    methods: {
      getFavoriteList() {
        console.log(!this.userInfo.id)
        if (!this.userInfo.id) {
          return this.$message.warning('请登录')
        } else {
          let payload = {
            userId: this.userInfo.id
          };
          this.$store.dispatch('favoriteListAction', payload);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .title {
    margin: 2rem 0;
    font-size: 1.3rem;
    color: $red;
    padding-bottom: 1rem;
    border-bottom: 2px solid $red;
  }

  .none {
    text-align: center;
    font-size: 2rem;
    display: block;
    margin: 20% 0;
    font-family: 幼圆, "微软雅黑 Light";
    color: $light-o-gray;
  }
</style>
