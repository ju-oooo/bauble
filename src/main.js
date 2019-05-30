import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'
import './assets/css/base.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
//配置axios
axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$fullHeight = document.documentElement.clientHeight;
new Vue({
    router,
    store,
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
}).$mount('#app')
