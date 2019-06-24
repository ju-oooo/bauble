import axios from 'axios';
import qs from 'qs';
import {getPassword, getType, putLocalStorage} from '../../api/apiUser'

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
  registerAction: (context, param) => {
    let temp = '{"type": \"' + getType(param[0]) + '\", "parameter": \"' + param[0] + '\", "password": \"' + getPassword(param[1]) + '\"}';
    let data = qs.stringify({'user': temp})
    axios.post("/bauble/user/register", data)
      .then(result => {
        if (result.data['message'] === 'success') {
          context.commit('SET_MESSAGE', ['success', '执行成功'])
          context.commit('SET_USERNAME', {'username': result.data['username']})
        } else {
          context.commit('SET_MESSAGE', ['error', result.data['message']])
        }
      })
  },
  //登录
  loginAction: (context, param) => {
    let data = qs.stringify({
      'type': getType(param[0]),
      'username': param[0],
      'password': getPassword(param[1]),
      'token': null,
    })
    axios.post("/bauble/user/login", data).then(result => {

      if (result.data['message'] === 'success') {
        context.commit('SET_MESSAGE', ['success', '执行成功']);
        context.commit('SET_USERINFO', [result.data['user'], result.data['token']]);
        context.commit('SET_ISLOGIN', true);
        return true
      } else {
        context.commit('SET_MESSAGE', ['error', result.data['message']]);
      }

    })
  }
}
//mutation
const mutations = {
  //设置用户信息
  SET_USERINFO: (state, param) => {
    let user = param[0]
    for (let temp in user) {
      if (user[temp] != null && user[temp] != undefined) {
        state.userInfo[temp] = user[temp]
      }
    }
    putLocalStorage(['userToken', param[1]]);
  },
  //设置账号
  SET_USERNAME: (state, param) => {
    state.userInfo = {}
    if (param['username'] != undefined) {
      state.userInfo['username'] = param['username']
    }
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
