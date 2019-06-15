import axios from 'axios';
import qs from 'qs';
import {Message} from 'element-ui'
//商品
//初始化数据
const state = {
  //导航链接列表
  linkList: [
    {link: 'commodityIndex', name: '首页'},
    {link: 'commodityList', name: '分类'},
  ],
  //类型列表
  classifyList: [],
  //商品列表
  commodityList: [],
  //热门商品列表
  hotCommodityList: [],
  pageNum: 1,
  count: 20,
  loadingFlag: false,
  dataEnd: false,
  commodityDetails: {},
  //购物车列表
  shoppingCardList: []
}

//getter 抛出去的数据
const getters = {
  classifyListGetter: state => state.classifyList,
  linkListGetter: state => state.linkList,
  commodityListGetter: state => state.commodityList,
  pageNumGetter: state => state.pageNum,
  countGetter: state => state.count,
  loadingFlagGetter: state => state.loadingFlag,
  dataEndGetter: state => state.dataEnd,
  commodityDetailsGetter: state => state.commodityDetails,
  hotCommodityListGetter: state => state.hotCommodityList,
  shoppingCardListGetter: state => state.shoppingCardList,
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
    axios.post('/bauble/commodity/', qs.stringify(payload))
      .then(result => {
        console.log(result['data'].result);
        context.commit('SET_COMMODITYLIST', result['data'].result)
      }).catch(err => {
      // this.state.$message("内部错误")
    })
  },
  //获取商品详情
  commodityDetailsAction: (context, payload) => {
    axios.post('/bauble/commodity/details', qs.stringify(payload)).then(result => {
      let res = result['data'].details;
      res.image = res.image.replace('n7', 'n1')
      res.details = res.details.split('#');
      context.commit('SET_COMMODITYDETAILS', res)
      context.commit('SET_HOTCOMMODITYLIST', result['data'].hotCommodityList)
      console.log(result['data'].hotCommodityList)
    }).catch(err => {
      // this.state.$message("内部错误")
    })
  },
  // 获取购物车列表
  shoppingCardListAction: (context, payload) => {
    axios.post('/bauble/commodity/shoppingCard', qs.stringify(payload))
      .then(result => {
        console.log(result['data'].result);
        context.commit('SET_SHOPPINGCARDLIST', result['data'].result)
      }).catch(err => {
      // this.state.$message("内部错误")
    })
  },
}
//mutation
const mutations = {
  //设置购物车商品列表
  SET_SHOPPINGCARDLIST: (state, param) => {
    state.shoppingCardList = '';
    state.shoppingCardList = param;
  },
  //设置热门商品列表
  SET_HOTCOMMODITYLIST: (state, param) => {
    state.hotCommodityList = '';
    state.hotCommodityList = param;
  },
  //设置商品详情
  SET_COMMODITYDETAILS: (state, param) => {
    state.commodityDetails = '';
    state.commodityDetails = param;
    console.log(state.commodityDetails);
  },
  //设置类型详情
  SET_CLASSIFYLIST: (state, param) => {
    state.classifyList = param;
  },
  //设置商品列表
  SET_COMMODITYLIST: (state, param) => {
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
  /**
   * 设置state 仅单属性
   * @param state
   * @param param
   * @constructor
   */
  SET_STATEITEM: (state, param) => {
    param.forEach((elem) => {
      console.log(elem);
      state[elem.key] = elem.value;
    })
  },

}

export default {
  state,
  mutations,
  getters,
  actions,
}
