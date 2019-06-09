import axios from 'axios';
import qs from 'qs';
import {Message} from 'element-ui'
//商品
//初始化数据
const state = {
  //类型集合
  classifyList: [],
  //商品集合
  commodityList: [],
  pageNum: 1,
  count: 20,
  loadingFlag: false,
  dataEnd: false
}

//getter 抛出去的数据
const getters = {
  classifyListGetter: state => state.classifyList,
  commodityListGetter: state => state.commodityList,
  pageNumGetter: state => state.pageNum,
  countGetter: state => state.count,
  loadingFlagGetter: state => state.loadingFlag,
  dataEndGetter: state => state.dataEnd,
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
  commodityListAction: (context, payload) => {
    axios.post("/bauble/commodity/list", qs.stringify(payload))
      .then(result => {
        console.log(result['data'].result);
        context.commit('SET_COMMODITYLIST', result['data'].result)
      }).catch(err => {
      // this.state.$message("内部错误")
    })
  },


}
//mutation
const mutations = {
  SET_CLASSIFYLIST: (state, param) => {
    state.classifyList = param
  },
  SET_COMMODITYLIST: (state, param) => {
    console.log(param)
    state.pageNum++;
    state.loadingFlag = false;
    if (param.length < state.count) {
      //最后一页
      Message('没有更多数据了');
      state.dataEnd = true;
    } else {
      state.dataEnd = false;
    }
    state.commodityList = state.commodityList.concat(param);
  },
  SET_STATEITEM: (state, param) => {
    param.forEach((elem) => {
      console.log(elem)
      state[elem.key] = elem.value;
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
}
