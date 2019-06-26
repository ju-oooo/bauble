<template>

  <commodity-lists :classifyList="classifyList" :commodityList="favoriteList"></commodity-lists>

</template>

<script>
  import {mapGetters} from 'vuex'
  import CommodityLists from "../../components/commodity/CommodityLists";

  export default {
    name: "CommodityFavorite",
    components: {CommodityLists},
    computed:{
      ...mapGetters({
        classifyList: 'classifyListGetter',
        favoriteList: 'favoriteListGetter'
      })
    },
    created(){
      this.$store.commit('favoriteListAction', payload)
    },
    methods: {}
  }
</script>

<style scoped>

</style>
