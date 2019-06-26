<template>
  <div>
    <commodity-classify></commodity-classify>
    <commodity-lists :classifyList="classifyList" :commodityList="commodityList"></commodity-lists>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import CommodityClassify from "../../components/commodity/CommodityClassify";
  import CommodityLists from "../../components/commodity/CommodityLists";

  export default {
    name: "CommodityList",
    components: {CommodityLists, CommodityClassify},
    data() {
      return {}
    },
    created() {

    },
    computed: {
      ...mapGetters({
        classifyList: 'classifyListGetter',
        commodityList: 'commodityListGetter'
      })
    },
    methods: {
    }
  }
</script>


