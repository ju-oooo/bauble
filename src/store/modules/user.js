import axios from 'axios';
import qs from 'qs';
import {getType, putLocalStorage} from '../../api/apiUser'

//初始化数据
const state = {
  userInfo: {},
  isLogin: false
}

//getter 抛出去的数据
const getters = {
  userInfoGetter: (state) => state.userInfo,
  isLoginGetter: (state) => state.isLogin
}

//action 异步的操作
const actions = {
  //注册
  registerAction: (context, payload) => {
    axios.post("/bauble/user/register", qs.stringify(payload))
      .then(result => {
        context.commit('SET_USERINFO', {'username': payload.username})
        return true;
      })
  },
  //登录
  loginAction: (context, payload) => {
    payload.type = getType(payload.username);
    payload.token = null;
    console.log(payload);
    axios.post("/bauble/user/login", qs.stringify(payload)).then(result => {

      if (result.data.code === 200) {
        context.commit('SET_USERINFO', payload);
        context.commit('SET_ISLOGIN', true);
      }
    })
  }
}
//mutation
const mutations = {
  //设置用户信息
  SET_USERINFO: (state, param) => {
    console.log(param)
    let user = param
    for (let temp in user) {
      if (user[temp] !== null && user[temp] !== undefined) {
        state.userInfo[temp] = user[temp]
      }
    }
    putLocalStorage(['userToken', param[1]]);
  },
  //设置是否登录
  SET_ISLOGIN: (state, param) => {
    state.isLogin = param
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
