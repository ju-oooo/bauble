<template>
  <el-row>
    <el-col :span="24" class="commodity-guess">
      <p>您可能还喜欢</p>
      <el-row class="guess-list">
        <router-link :to="{name:'commodityDetails',params:{commodityId:hotCommodity.id}}"
                     v-for="(hotCommodity,index) in hotCommodityList" :key="index" target="_blank">
          <el-col :xs="12" :sm="12" :md="6" :xl="6" class="guess-item">
            <div class="guess-item-img">
              <img :src="getImgUrl(hotCommodity.image)" :title="hotCommodity.title">
            </div>
            <p class="title">{{hotCommodity.title}}</p>
          </el-col>
        </router-link>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "CommodityRelated",
    created() {

    },
    computed: {
      ...mapGetters({
        'hotCommodityList': 'hotCommodityListGetter'
      }),
    },
    methods: {
      //图片Url解析
      getImgUrl(temp) {
        let urls = temp.split('#');
        return urls[0] ? 'https:' + urls[0] : '/bauble/original/error/error-404.gif'
      },
    }
  }

</script>

<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";
  //猜你喜欢 start
  .commodity-guess {
    padding: 4rem 0;
    border-bottom: 0.1rem solid $gray;
    border-top: 0.1rem solid $gray;
    text-align: center;

    & > p {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
    }

    .guess-list {
      .guess-item {
        padding: 2rem;
        box-sizing: border-box;

        .guess-item-img {
          height: 15rem;
          object-fit: fill;
        }
        img {
          height: 220px;
        }
      }

      .title {
        padding: 1rem 0;
        font-size: 1rem;
        font-weight: bolder;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
          color: $red;
        }
      }
    }
  }

  //猜你喜欢 end
</style>
