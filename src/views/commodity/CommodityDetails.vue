<template>
  <el-row v-if="commodity.id > 0">
    <!--        <el-col :md="2">&nbsp;</el-col>-->
    <el-col :span="24">
      <el-row class="detail" justify="center">
        <el-col :sm="24" :md="12" class="detail-left">
          <img v-lazy="commodity.image" :title="commodity.title">
        </el-col>
        <el-col :sm="24" :md="12" class="detail-right">
          <p class="title">
            {{commodity.title}}
          </p>
          <p class="price">￥ {{commodity.price}}</p>
          <p class="type">商品类型&nbsp;:&nbsp;<span>{{getType()}}</span></p>
          <p class="hint">价格仅供参考，具体价格及优惠请查看官网</p>
          <p class="btn">
            <a :href="'http:'+commodity.realLink" target="_blank" class="btn-n into">进入店铺</a>
            <a href="javascript:;" class="btn-n collection" @click="addFavorite">收藏商品+</a>
          </p>
        </el-col>
      </el-row>

    </el-col>
    <!--  猜你喜欢  -->
    <el-col>
      <commodity-related></commodity-related>
    </el-col>
    <el-col class="introduce">
      <p class="title">
        <a class="title-sty active">产品细节</a>
        <a class="title-sty">商品评价</a>
      </p>
      <div class="introduce-details" v-for="(item,index) in commodity.details" :key="index">
        <img v-lazy="item">
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import CommodityRelated from "../../components/commodity/CommodityRelated";

  export default {
    name: "CommodityDetails",
    components: {CommodityRelated},
    data() {
      return {
        type: ''
      }
    },
    created() {
      this.getCommodityDetails();
    },
    computed: {
      ...mapGetters({
        'isLogin': 'isLoginGetter',
        'classifyList': 'classifyListGetter',
        'commodity': 'commodityDetailsGetter',
        'hotCommodityList': 'hotCommodityListGetter'
      }),
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "getCommodityDetails",
    }, methods: {
      // ...mapActions({
      //   'commodityDetails': 'commodityDetailsAction'
      // }),
      //添加收藏
      addFavorite() {
        if (!this.isLogin) {
          return this.$message.warning('请登录')
        }
        let commodityId = this.$route.params.commodityId;
        let payload = {
          commodityId: commodityId
        };
        this.$store.dispatch('commodityDetailsAction', payload);
      },
      //获取商品详情
      getCommodityDetails() {
        let commodityId = this.$route.params.commodityId;
        console.log(commodityId);
        let payload = {
          commodityId: commodityId
        };
        this.$store.dispatch('commodityDetailsAction', payload);
      },
      //根据id 获取类型名称
      getType() {
        let id = this.commodity.typeId;
        let name;
        this.classifyList.type.forEach((elem) => {
          if (parseInt(elem.id) === parseInt(id)) {
            name = elem.name;
          }
        });
        return name;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";
  //产品细节 start
  .introduce {
    & > .title {
      display: flex;
      justify-content: center;

      .title-sty {
        margin: 5rem 2rem;
        display: block;
        text-align: center;
        width: 10rem;
        height: 2.5rem;
        line-height: 2.5rem;
        font-size: 1.2rem;
        color: $white;
        border-radius: 0.25rem;

        &:nth-child(1) {
          background-color: $light-o-gray;
        }

        &.active:after {
          width: 0;
          content: "";
          display: block;
          border: 0.5rem solid transparent;
          border-top-color: $light-o-gray;
          margin: auto;
        }

        &:nth-child(2) {
          background-color: black;
        }
      }
    }

    .introduce-details {
      text-align: center;

      img {
        width: 100%;
        max-width: 70rem;
        margin-bottom: 1rem;
      }
    }

  }

  //产品细节 end

  //商品详情 start
  .detail {
    box-sizing: border-box;
    padding: 0 1rem;
    text-align: left;

    .detail-left {
      padding: 1rem;
      text-align: center;

      img {
        max-width: 37rem !important;
        height: 30rem;
        width: 100%;
      }
    }

    .detail-right {
      padding: 1rem;
      font-size: 1.2rem;

      .title {
        font-weight: bolder;
        font-size: 1.8rem;
      }

      p:not(.title) {
        margin: 1.5rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .price {
        color: $red;
        font-size: 2rem;
      }

      .hint {
        /*display: block;*/
        color: $gray;
        font-size: 0.9rem;
        padding: 0.8rem;
        background-color: $light-gray;
      }

      .btn {
        margin: 4rem 0 !important;
        display: flex;
        justify-content: center;
        font-size: 1rem;

        .btn-n {
          width: 10rem;
          height: 2.7rem;
          color: $white;
          line-height: 2.7rem;
          text-align: center;

          &.into {
            background-color: $red;
            color: $white;
            margin-right: 3.5rem;

            &:hover {
              opacity: 0.9;
              cursor: pointer;
            }
          }

          &.collection {
            background-color: $light-o-gray;
            color: $white;

            &:hover {
              opacity: 0.9;
              cursor: pointer;
            }
          }

          &.cart {

            background-color: $black;
          }

          &.buy {
            background-color: $red;
          }


          &:hover {
            opacity: 0.8;
            cursor: pointer;
          }
        }
      }
    }
  }

  //商品详情 end
</style>
