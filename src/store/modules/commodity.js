import axios from 'axios';
import qs from 'qs';
//商品
//初始化数据
const state = {
  //类型集合
  classifyList: [],
  //商品集合
  commodityList:[]
}

//getter 抛出去的数据
const getters = {
  classifyListGetter: state => state.classifyList,
  commodityListGetter: state => state.commodityList
}

//action 异步的操作
const actions = {
  //获取商品类型以及分类
  classifyListAction: (context) => {
    axios.post("/bauble/commodity/type")
      .then(result => {
        console.log(result['data'].result);
        context.commit('SET_CLASSIFYLIST', result['data'].result)
      }).catch(err => {
      this.$message("内部错误")
    })
  },
  //获取商品列表
  commodityListAction: (context,payload) => {
    axios.post("/bauble/commodity/list",qs.stringify(payload))
      .then(result => {
        console.log(result['data'].result);
        context.commit('SET_COMMODITYLIST', result['data'].result)
      }).catch(err => {
      this.$message("内部错误")
    })
  },


}
//mutation
const mutations = {
  SET_CLASSIFYLIST: (state, param) => {
    state.classifyList = param
  },  SET_COMMODITYLIST: (state, param) => {
    state.commodityList = param
  },
}

export default {
  state,
  mutations,
  getters,
  actions,
}
