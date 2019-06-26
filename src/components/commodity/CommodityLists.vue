<template>
  <el-row class="p-list" justify="start">
    <router-link :to="{name:'commodityDetails',params:{commodityId:commodity.id}}"
                 v-for="(commodity,index) of commodityList" :key="index" target="_blank">
      <el-col :xs="12" :sm="8" :md="6" :xl="4" class="item">
        <div>
          <img v-lazy="getImgUrl(commodity.image)" alt=""/>
        </div>
        <p class="title" :title="commodity.title">{{commodity.title}}</p>
        <p class="price">￥{{commodity.price}}</p>
        <span class="elect">查看详情</span>
      </el-col>
    </router-link>
  </el-row>
</template>

<script>
  export default {
    name: "CommodityLists",
    props: ['classifyList','commodityList'],
    methods: {
      //图片Url解析
      getImgUrl(temp) {
        let urls = temp.split('#');
        return urls[0] ? 'https:' + urls[0] : '/bauble/original/error/error-404.gif'
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/commodity-color-theme';
  /*商品*/
  .p-list {
    padding: 1rem;
    text-align: center;

    .item {
      box-sizing: border-box;
      padding: 1rem;
      overflow: hidden;
      color: $gray;

      &:hover {
        box-shadow: 0 0 40px $light-c-gray;
        color: $red;
        cursor: pointer;
      }

      div {
        font-size: 0;
        overflow: hidden;

        img {
          height: 220px;
          width: 100%;
          transition: all 0.4s;

          &:hover {
            transform: scale(1.2);
          }
        }
      }

      .title {
        display: block;
        padding: 0.75rem 0 0.25rem 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .price {
        color: $red;
        display: block;
        font-size: 1.2rem;
        padding: 0.25rem 0;
      }

      .elect {
        color: $red;
        display: block;
        margin: 0.25rem auto;
        width: 5rem;
        border: 0.05rem solid $gray;
        padding: 0 1rem;
        font-weight: bolder;
        font-size: 0.8rem;
        position: relative;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        border-radius: 0.25rem;
        background-color: transparent;
        z-index: 1;
        transition: all 0.3s;

        &::after {
          top: 0;
          left: 0;
          position: absolute;
          content: "";
          width: 0;
          height: 100%;
          z-index: -1;
          display: block;
          background-color: $dark-red;
          transition: all 0.3s;
        }

        &:hover {
          color: $white;
        }

        &:hover::after {
          width: 100%;
        }

      }

    }
  }
</style>
