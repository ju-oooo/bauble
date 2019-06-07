import Vue from 'vue'
import axios from 'axios'
import router from '@/router/router'
import store from '@/store/store'
import App from './App'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
//配置axios
// axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$fullHeight = document.documentElement.clientHeight;
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  data: {
    height: document.documentElement.clientHeight
  },
  watch: {
    height() {
      this.$fullHeight = this.height
    }
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.height = document.documentElement.clientHeight
      })()
    }
  }
})

