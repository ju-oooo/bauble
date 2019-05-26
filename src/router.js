import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ManageIndex from './views/ManageIndex'
import OrdinaryControl from './views/user/ordinary/OrdinaryControl'
import UserInfo from './components/user/UserInfo'
import AdminControl from './views/user/admin/AdminControl'
import OrdinaryList from './views/user/admin/OrdinaryList'
import BookIndex from './views/book/BookIndex'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', name: 'Home', component: Home
        },
        {
            path: '/m', component: ManageIndex, children: [
                // user 普通用户
                {
                    path: '/', name: 'ordinaryControl', component: OrdinaryControl,
                },
                //admin 管理员用户
                {
                    path: '/m/admin', name: 'adminControl', component: AdminControl
                },
                //用户信息
                {
                    path: '/m/info', name: 'userInfo', component: UserInfo
                },
                // admin/list
                {
                    path: '/m/admin/list', name: 'ordinaryList', component: OrdinaryList
                },
                //book
                {
                    path: '/m/book', name: ' bookIndex', component: BookIndex
                }
            ]
        },
    ]
});
