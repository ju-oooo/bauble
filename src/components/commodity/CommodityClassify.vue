<template>
  <div>

    <!--  详细分类列表  -->
    <div v-if="selectTypeList.flag">
      <el-breadcrumb class="commodity-breadcrumb">
        <el-breadcrumb-item
          class="classify-item"
          @click.native="addSearchList(index)">
          {{selectTypeList.catalogue.name}}
        </el-breadcrumb-item>
        <el-breadcrumb-item
          class="classify-item"
          @click.native="goTypeAll()">
          返回
        </el-breadcrumb-item>

      </el-breadcrumb>
      <!--  选中分类列表  -->
      <div class="tag">
        <el-tag v-for="(type,index) of searchList"
                :key="index"
                color="#fff"
                closable
                :disable-transitions="false"
                @close="removeSearchList(index)">
          {{type.name}}
        </el-tag>
      </div>
      <el-breadcrumb class="commodity-breadcrumb">
        <el-breadcrumb-item
          class="classify-item"
          v-for="(type,index) of selectTypeList.typeList"
          :key="index"
          @click.native="addSearchList(index)">
          {{type.name}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  总分类列表  -->
    <el-breadcrumb v-else class="commodity-breadcrumb" separator="|">
      <el-breadcrumb-item
        @click.native="getTypeList(catalogue.id)"
        class="classify-item"
        v-for="(catalogue,index) of classifyList.catalogue"
        :key="index">{{catalogue.name}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <div v-if="loadingFlag">加载中</div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "CommodityClassify",
    data() {
      return {
        searchList: [],
        selectTypeList: [],
      };
    },
    created() {
      this.init();
    },
    computed: {
      ...mapGetters({
        classifyList: 'classifyListGetter',
        pageNum: 'pageNumGetter',
        count: 'countGetter',
        loadingFlag: 'loadingFlagGetter',
        dataEnd: 'dataEndGetter',
        linkList: 'linkListGetter',
      })
    },
    methods: {
      /**
       * 初始化当前数据列表
       */
      init() {
        let commit = [{key: 'loadingFlag', value: true},{key: 'commodityList', value: []}, {key: 'pageNum', value: 1}];
        this.$store.commit('SET_STATEITEM', commit);
        this.getCommodityAllList();
      },
      /**
       * 根据分类获取详细分类
       */
      getTypeList(catalogueId) {
        let selectTypeList = {}, typeList = [], catalogue;
        this.classifyList.type.forEach((elem) => {
          if (parseInt(elem.catalogueId) === parseInt(catalogueId)) {
            typeList.push(elem);
          }
        });
        this.classifyList.catalogue.forEach((elem) => {
          if (parseInt(elem.id) === parseInt(catalogueId)) {
            catalogue = elem;
          }
        });
        selectTypeList.flag = true;
        selectTypeList.catalogue = catalogue;
        selectTypeList.typeList = typeList;
        this.selectTypeList = selectTypeList;
        //设置小导航
        // this.linkList.push({link:'',name:catalogue.name});
        // let commit = [{key: 'linkList', value: this.linkList}];
        // this.$store.commit('SET_STATEITEM', commit);
        // this.$parent.$parent.$parent.$parent.$data.linkList.push({link: catalogue.id, name: catalogue.name});
      },
      goTypeAll() {
        this.searchList = [];
        this.selectTypeList = [];
        this.init();
      },
      /**
       * 添加标签 并刷新数据
       */
      addSearchList(index) {
        let flag = false;
        if (this.searchList.length > 0) {
          for (let temp in this.searchList) {
            if (this.searchList[temp].id === this.selectTypeList.typeList[index].id) {
              this.$message.warning("此数据已添加");
              flag = true;
              break;
            }
          }
        }
        if (!flag) {
          this.searchList.push(this.selectTypeList.typeList[index]);
          //调用数据接口
          let commit = [{key: 'commodityList', value: []}, {key: 'pageNum', value: 1}];
          this.$store.commit('SET_STATEITEM', commit)
          this.getCommodityList();
        }
      },
      /**
       * 删除指定搜索标签 并刷新数据
       */
      removeSearchList(index) {
        this.searchList.splice(index, 1);
        //调用数据接口
        let commit = [{key: 'commodityList', value: []}, {key: 'pageNum', value: 1}];
        this.$store.commit('SET_STATEITEM', commit);
        this.getCommodityList();
      },
      /**
       * 获取数据列表
       */
      getCommodityList(url) {
        let idList = [];
        this.searchList.forEach((elem) => {
          idList.push(elem.id)
        });
        let payload = {
          url: url,
          count: this.count,
          pageNum: this.pageNum,
          typeId: idList.join(',')
        };
        this.$store.dispatch('commodityListAction', payload)
      },
      getCommodityAllList() {
        let idList = [];
        this.searchList.forEach((elem) => {
          idList.push(elem.id)
        });
        let payload = {
          url: '/bauble/commodity/',
          count: this.count,
          pageNum: this.pageNum,
          typeId: idList.join(',')
        };
        this.$store.dispatch('commodityListAction', payload)
      },

    },
    mounted() {
      /**
       * 添加滚动监听
       */
      window.addEventListener('scroll', () => {
        /**
         * 距离下方200px请求数据
         */
        if (!this.loadingFlag && document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight <= 200) {
          if (!this.dataEnd) {
            let commit = [{key: 'loadingFlag', value: true}];
            this.$store.commit('SET_STATEITEM', commit);
            if (this.selectTypeList.length >= 1) {
              this.getCommodityList();
            } else {
              this.getCommodityAllList();
            }
          }
        }
      })


    }
  }
</script>
<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .tag {
    margin: 1rem;
    text-align: left;

    .el-tag {
      color: $red;
      margin: 0 0.5rem 0.5rem 0;
      border: 1px solid rgba(231, 77, 77, .2);
    }
  }

  .commodity-breadcrumb {
    margin: 1rem;

    .el-breadcrumb {
      padding: 0 1rem;
    }

    .classify-item {
      margin: 0.5rem 0;
    }


  }
</style>
<style lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .tag .el-icon-close:before {
    color: $red;
  }

  .tag .el-icon-close:hover:before {
    color: $white !important;
  }

  .tag .el-tag .el-icon-close:hover {

    background-color: $red !important;
  }

  .commodity-breadcrumb .el-breadcrumb__inner {
    font-weight: 700 !important;
    color: $black !important;
  }

  .commodity-breadcrumb .el-breadcrumb__inner:hover, .el-breadcrumb__inner.is-link:hover {
    color: $red !important;
    cursor: pointer !important;
  }
</style>



