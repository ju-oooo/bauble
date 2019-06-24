import axios from "axios";
import {Message, Loading} from "element-ui";
import router from "../router/router";

let loading; //定义loading变量

function startLoading() {
  //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: "拼命加载中...",
    background: "rgba(0, 0, 0, 0.7)"
  });
}

function endLoading() {
  //使用Element loading-close 方法
  loading.close();
}

export function statusErrorMessage(status) {
  let err;
  if (status) {
    switch (status) {
      case 400:
        err = '错误请求'
        break;
      case 401:
        err = '未授权，请重新登录'
        break;
      case 403:
        err = '拒绝访问'
        break;
      case 404:
        err = '请求错误,未找到该资源'
        break;
      case 405:
        err = '请求方法未允许'
        break;
      case 408:
        err = '请求超时'
        break;
      case 500:
        err = '服务器端出错'
        break;
      case 501:
        err = '网络未实现'
        break;
      case 502:
        err = '网络错误'
        break;
      case 503:
        err = '服务不可用'
        break;
      case 504:
        err = '网络超时'
        break;
      case 505:
        err = 'http版本不支持该请求'
        break;
      default:
        err = `连接错误${err.response.status}`
    }
  } else {
    err = "连接到服务器失败"
  }
  return err
}

// 请求拦截  设置统一header
axios.interceptors.request.use(
  config => {
    // 加载
    startLoading();
    if (localStorage.eleToken)
      config.headers.Authorization = localStorage.eleToken;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截  401 token过期处理
axios.interceptors.response.use(
  response => {
    endLoading();
    return response;
  },
  error => {
    // 错误提醒
    endLoading();
    const {status} = error.response;
    // console.log(error.response)
    let err = statusErrorMessage(status)
    router.push({name: "NotFound"});
    // console.log("api")
    Message.error(err);
    // this.$state.comment('SET_MESSAGE', ['error', err])
    //   if (status == 401) {
    //     Message.error("token值无效，请重新登录");
    //     // 清除token
    //     localStorage.removeItem("eleToken");
    //
    //     // 页面跳转
    //     router.push("/login");
    //   }
    //   return Promise.reject(error);
  }
);

export default axios;
