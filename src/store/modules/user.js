import axios from 'axios';
import qs from 'qs';

//初始化数据
const state = {
  user: null,
}

//getter 抛出去的数据
const getters = {
  userGetter: (state) => state.user,
}

//action 异步的操作
const actions = {  //列表
  registerAction: (context, param) => {
    // let temp = '{"type": \"' + getType(param[0]) + '\", "parameter": \"' + param[0] + '\", "password": \"' + getPassword(param[1]) + '\"}';
    let temp = `{"type": "${getType(param[0])}", "parameter": "${param[0]}", "password": "${getPassword(param[1])}"}`;
    let data = qs.stringify({'user': temp})
    console.log(data)
    axios.post("/pro/user/register", data)
      .then(result => {
        console.log(result['data']);
        context.commit('SET_USER', result['data'])
      })
  }
}
//mutation
const mutations = {
  SET_USER: (state, param) => {
    console.log(typeof eval(param))
    eval(param).forEach((key, value) => {
      console.log(key, value)
    })

    state.message = param[0]
  }

}

export default {
  state,
  mutations,
  actions,
  getters,
};
