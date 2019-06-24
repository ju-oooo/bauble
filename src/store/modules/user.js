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
const actions = {  //列表
  registerAction: (context, param) => {
    let temp = '{"type": \"' + getType(param[0]) + '\", "parameter": \"' + param[0] + '\", "password": \"' + getPassword(param[1]) + '\"}';
    let data = qs.stringify({'user': temp})
    axios.post("/pro/user/register", data)
      .then(result => {
        if (result.data['message'] === 'success') {
          context.commit('SET_MESSAGE', ['success', '执行成功'])
          context.commit('SET_USERNAME', {'username': result.data['username']})
        } else {
          context.commit('SET_MESSAGE', ['error', result.data['message']])
        }
      })
  },
  loginAction: (context, param) => {
    // let type = getType(param[0])
    // if (type === 'username',type === 'error') {
    //   context.commit('SET_MESSAGE', ['error', '格式错误'])
    //   return;
    // }
    let data = qs.stringify({
      'type': getType(param[0]),
      'username': param[0],
      'password': getPassword(param[1]),
      'token': null,
    })
    axios.post("/pro/user/login", data).then(result => {
      if (result.status == 200) {
        if (result.data['message'] === 'success') {
          context.commit('SET_MESSAGE', ['success', '执行成功']);
          context.commit('SET_USERINFO', [result.data['user'], result.data['token']]);
          context.commit('SET_ISLOGIN', true);
          return true
        } else {
          context.commit('SET_MESSAGE', ['error', result.data['message']]);
        }
      }
    })
  }
}
//mutation
const mutations = {
  SET_USERINFO: (state, param) => {
    let user = param[0]
    for (let temp in user) {
      if (user[temp] != null && user[temp] != undefined) {
        state.userInfo[temp] = user[temp]
      }
    }
    putLocalStorage(['userToken', param[1]]);
  },
  SET_USERNAME: (state, param) => {
    state.userInfo = {}
    if (param['username'] != undefined) {
      state.userInfo['username'] = param['username']
    }
  },
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
